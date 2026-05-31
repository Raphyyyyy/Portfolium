// src/components/SkillTabsDB.tsx

import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";

/* ÍCONES - CÓDIGO */
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaWordpress,
  FaAws,
  FaStore,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiAxios,
  SiVercel,
  SiFigma,
  SiAdobephotoshop,
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,
} from "react-icons/si";

import {
  TbApi,
  TbCode,
  TbComponents,
  TbSeo,
  TbTargetArrow,
  TbChartBar,
  TbBrandGoogle,
} from "react-icons/tb";

import {
  MdDesignServices,
  MdOutlineDevices,
  MdOutlineSpeed,
  MdOutlineMail,
} from "react-icons/md";

import { IoColorPaletteOutline } from "react-icons/io5";

/**
 * CONFIGURAÇÃO DO COSMIC
 *
 * Aqui fica a lógica inteira dentro do componente.
 *
 * Importante:
 * - O "type" precisa bater exatamente com o slug do Object Type no Cosmic.
 * - Os slugs são:
 *   codigos
 *   designs
 *   estrategias
 */

const BUCKET_SLUG = "portfolium-clean-version-production";
const READ_KEY = "6z1OfS3LervJJiuGb5O4sALllzF3gtHsrPS8lP8NH0nw3b7KIC";

const BASE_URL = `https://api.cosmicjs.com/v3/buckets/${BUCKET_SLUG}/objects`;

/**
 * Mapa de ícones.
 *
 * No Cosmic, no campo "icone", você escreve só o nome em texto:
 *
 * FaReact
 * SiTypescript
 * TbSeo
 *
 * Aqui o React transforma esse texto no componente real do ícone.
 */
const mapaDeIcones: Record<string, IconType> = {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaWordpress,
  FaAws,
  FaStore,
  FaCss3Alt,

  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiAxios,
  SiVercel,
  SiFigma,
  SiAdobephotoshop,
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,

  // React Icons não tem SiNuvemshop.
  // Se no Cosmic estiver escrito "SiNuvemshop", ele usa FaStore.
  SiNuvemshop: FaStore,

  TbApi,
  TbCode,
  TbComponents,
  TbSeo,
  TbTargetArrow,
  TbChartBar,
  TbBrandGoogle,

  MdDesignServices,
  MdOutlineDevices,
  MdOutlineSpeed,
  MdOutlineMail,

  IoColorPaletteOutline,
};

/**
 * Categoria recebida do SkillTabs.tsx.
 *
 * Exemplo:
 * <SkillTabsDB tipo="codigo" />
 * <SkillTabsDB tipo="design" />
 * <SkillTabsDB tipo="estrategia" />
 */
type TipoSkill = "codigo" | "design" | "estrategia";

type SkillTabsDBProps = {
  tipo: TipoSkill;
};

/**
 * Tipagem de cada skill cadastrada dentro do Repeater no Cosmic.
 *
 * No momento só vamos exibir:
 * - nomeSkill
 * - icone
 *
 * nomeSkill_Eng fica salvo para uso futuro, mas NÃO aparece agora.
 */
type SkillDB = {
  nomeSkill?: string;
  nomeSkill_Eng?: string;
  nomeskill?: string;
  nomeskill_eng?: string;
  icone?: string;
};

/**
 * Tipagem do metadata de cada objeto.
 */
type MetadataHabilidade = {
  titulo?: string;
  titulo_en?: string;
  imagem?: string;
  imagemMobile?: string;
  skills?: SkillDB[];
};

/**
 * Tipagem do objeto bruto vindo do Cosmic.
 */
type ObjetoCosmic = {
  slug: string;
  title: string;
  type: string;
  metadata: MetadataHabilidade;
};

/**
 * Liga a categoria visual ao Object Type do Cosmic.
 */
const mapaTipoCosmic: Record<TipoSkill, "codigos" | "designs" | "estrategias"> =
  {
    codigo: "codigos",
    design: "designs",
    estrategia: "estrategias",
  };

/**
 * Monta a URL de busca para cada Object Type.
 */
function criarUrlCosmic(type: string) {
  const query = encodeURIComponent(JSON.stringify({ type }));

  return `${BASE_URL}?pretty=true&query=${query}&limit=100&skip=0&read_key=${READ_KEY}&depth=1&props=slug,title,metadata,type`;
}

/**
 * Busca objetos de um Object Type específico.
 */
async function buscarObjetosPorTipo(type: string): Promise<ObjetoCosmic[]> {
  const response = await fetch(criarUrlCosmic(type));

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${type} no Cosmic`);
  }

  const data = await response.json();
  return data.objects || [];
}

/**
 * Pega SOMENTE o nome principal da skill.
 *
 * nomeSkill_Eng existe no Cosmic, mas não é exibido agora.
 */
function pegarNomeSkill(skill: SkillDB) {
  return skill.nomeSkill || skill.nomeskill || "";
}

export default function SkillTabsDB({ tipo }: SkillTabsDBProps) {
  const [skills, setSkills] = useState<SkillDB[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  /**
   * Busca apenas a categoria ativa.
   *
   * Exemplo:
   * tipo="codigo" -> busca Object Type "codigos"
   * tipo="design" -> busca Object Type "designs"
   * tipo="estrategia" -> busca Object Type "estrategias"
   */
  useEffect(() => {
    async function carregarSkills() {
      try {
        setCarregando(true);
        setErro("");

        const typeCosmic = mapaTipoCosmic[tipo];
        const objetos = await buscarObjetosPorTipo(typeCosmic);

        const primeiroObjeto = objetos[0];
        const skillsDoObjeto = primeiroObjeto?.metadata?.skills;

        setSkills(Array.isArray(skillsDoObjeto) ? skillsDoObjeto : []);
      } catch (error) {
        console.error(error);
        setErro("Erro ao carregar skills.");
      } finally {
        setCarregando(false);
      }
    }

    carregarSkills();
  }, [tipo]);

  /**
   * Remove skills vazias.
   */
  const skillsValidas = useMemo(() => {
    return skills.filter((skill) => pegarNomeSkill(skill));
  }, [skills]);

  if (carregando) {
    return <p className="skillDBMensagem">Carregando...</p>;
  }

  if (erro) {
    return <p className="skillDBMensagem">{erro}</p>;
  }

  if (skillsValidas.length === 0) {
    return <p className="skillDBMensagem">Nenhuma skill encontrada.</p>;
  }

  return (
    <div className="skillDBGrid">
      {skillsValidas.map((skill, index) => {
        const nome = pegarNomeSkill(skill);
        const nomeIcone = skill.icone || "";
        const Icone = mapaDeIcones[nomeIcone] || TbCode;

        return (
          <div className="skillDBItem" key={`${nome}-${index}`}>
            <Icone className="skillDBIcone" />
            <span className="skillDBNome">{nome}</span>
          </div>
        );
      })}
    </div>
  );
}