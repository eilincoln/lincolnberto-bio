import styles from "./ActionList.module.css";

interface ActionItem {
  id: string;
  label: string;
  url: string;
  icon: string;
  isExternal?: boolean;
}

interface ActionListProps {
  onOpenBudgetModal: () => void;
}

const EXTERNAL_LINKS: ActionItem[] = [
  {
    id: "whatsapp",
    label: "Conversar via WhatsApp",
    url: "https://wa.me/5511913372806?text=Ol%C3%A1%2C%20Lincoln!%20Vim%20pelo%20seu%20link%20na%20bio.",
    icon: "💬",
    isExternal: true,
  },
  {
    id: "linkedin",
    label: "Conectar no LinkedIn",
    url: "https://www.linkedin.com/in/lincoln-berto/",
    icon: "💼",
    isExternal: true,
  },
  {
    id: "github",
    label: "Explorar Repositórios no GitHub",
    url: "https://github.com/eilincoln",
    icon: "🐙",
    isExternal: true,
  },
];

export function ActionList({ onOpenBudgetModal }: ActionListProps) {
  return (
    <section className={styles.container} aria-label="Ações e Redes">
      {/* Botão de Destaque / Conversão */}
      <button
        type="button"
        onClick={onOpenBudgetModal}
        className={styles.primaryAction}
      >
        <span>⚡ Solicitar Orçamento de Projeto</span>
        <span className={styles.ctaBadge}>Briefing</span>
      </button>

      {/* Links Complementares */}
      {EXTERNAL_LINKS.map((item) => (
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
            <span>{item.label}</span>
          </span>
          <span className={styles.arrowIndicator} aria-hidden="true">
            ↗
          </span>
        </a>
      ))}
    </section>
  );
}
