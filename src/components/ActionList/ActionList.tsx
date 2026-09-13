import styles from "./ActionList.module.css";

interface ActionItem {
  id: string;
  label: string;
  desc?: string;
  url: string;
  icon: string;
  isExternal?: boolean;
}

interface ActionGroup {
  id: string;
  title: string;
  items: ActionItem[];
}

interface ActionListProps {
  onOpenBudgetModal: () => void;
}

const ACTION_GROUPS: ActionGroup[] = [
  {
    id: "contact-fast",
    title: "// Contato Direto",
    items: [
      {
        id: "whatsapp",
        label: "Conversar no WhatsApp",
        desc: "Canal rápido para dúvidas e alinhamentos",
        url: "https://wa.me/5511913372806?text=Ol%C3%A1%2C%20Lincoln!%20Vim%20pelo%20seu%20link%20na%20bio.",
        icon: "💬",
        isExternal: true,
      },
      {
        id: "email",
        label: "Enviar Mensagem por E-mail",
        desc: "contato@lincolnberto.com",
        url: "mailto:contato@lincolnberto.com?subject=Contato%20via%20Hub%20Lincoln%20Berto",
        icon: "✉️",
        isExternal: false,
      },
    ],
  },
  {
    id: "ecosystem",
    title: "// Ecossistema Dev & Conteúdo",
    items: [
      {
        id: "portfolio",
        label: "Portfólio Oficial",
        desc: "Projetos completos e casos de estudo",
        url: "https://lincolnberto.com",
        icon: "🌐",
        isExternal: true,
      },
      {
        id: "youtube",
        label: "Canal no YouTube",
        desc: "Bastidores de código e engenharia",
        url: "https://youtube.com/@eilincoln",
        icon: "▶️",
        isExternal: true,
      },
      {
        id: "github",
        label: "Repositórios no GitHub",
        desc: "Código aberto e histórico de commits",
        url: "https://github.com/eilincoln",
        icon: "🐙",
        isExternal: true,
      },
      {
        id: "linkedin",
        label: "Perfil no LinkedIn",
        desc: "Carreira e conexões profissionais",
        url: "https://www.linkedin.com/in/lincoln-berto/",
        icon: "💼",
        isExternal: true,
      },
    ],
  },
  // {
  //   id: "setup",
  //   title: "// Setup & Recomendações",
  //   items: [
  //     {
  //       id: "setup-tools",
  //       label: "Meu Setup de Trabalho",
  //       desc: "Periféricos, monitor e ferramentas que utilizo",
  //       url: "#", // Aqui depois você coloca seu link de afiliado ou Notion de setup
  //       icon: "⚡",
  //       isExternal: true,
  //     },
  //   ],
  // },
];

export function ActionList({ onOpenBudgetModal }: ActionListProps) {
  return (
    <section className={styles.container} aria-label="Ações e Links">
      {/* Botão de Destaque Máximo: Orçamento sempre no topo absoluto */}
      <div className={styles.group}>
        <span className={styles.groupTitle}>// Ação Principal</span>
        <button
          type="button"
          onClick={onOpenBudgetModal}
          className={styles.primaryAction}
        >
          <span>⚡ Solicitar Orçamento de Projeto</span>
          <span className={styles.ctaBadge}>Briefing</span>
        </button>
      </div>

      {/* Renderização dinâmica dos grupos categorizados */}
      {ACTION_GROUPS.map((group) => (
        <div key={group.id} className={styles.group}>
          <span className={styles.groupTitle}>{group.title}</span>

          {group.items.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={styles.secondaryLink}
            >
              <span className={styles.linkContent}>
                <span className={styles.linkIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <span className={styles.linkSubtext}>
                  <span>{item.label}</span>
                  {item.desc && (
                    <span className={styles.linkDesc}>{item.desc}</span>
                  )}
                </span>
              </span>
              <span className={styles.arrowIndicator} aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      ))}
    </section>
  );
}
