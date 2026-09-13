import styles from "./ServicesGrid.module.css";

interface ServiceItem {
  id: string;
  icon: string;
  tag: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "landing-page",
    icon: "⚡",
    tag: "Conversão",
    title: "Landing Pages",
    description:
      "Páginas rápidas focadas em vendas e alta retenção de tráfego.",
  },
  {
    id: "bio-hub",
    icon: "🔗",
    tag: "Social Media",
    title: "Link na Bio",
    description: "Hub próprio personalizado, sem taxas mensais de plataformas.",
  },
  {
    id: "institucional",
    icon: "🏢",
    tag: "Autoridade",
    title: "Sites de Negócios",
    description:
      "Presença digital profissional para empresas locais e serviços.",
  },
  {
    id: "manutencao",
    icon: "🛠️",
    tag: "Performance",
    title: "Ajustes & Código",
    description:
      "Correção de bugs, redesign de telas e otimização de velocidade.",
  },
];

export function ServicesGrid() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.sectionHeader}>
        <h2 id="services-heading" className={styles.title}>
          // Especialidades
        </h2>
        <span className={styles.badgeCount}>{SERVICES.length} FORMATOS</span>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((service) => (
          <article key={service.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.icon} aria-hidden="true">
                {service.icon}
              </span>
              <span className={styles.tag}>{service.tag}</span>
            </div>
            <div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
