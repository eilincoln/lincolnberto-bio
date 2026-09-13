import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export function Header({ name, role, bio, avatarUrl }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.avatarWrapper}>
        <img
          src={avatarUrl}
          alt={`Foto de perfil de ${name}`}
          className={styles.avatar}
          loading="eager"
        />
      </div>

      <div className={styles.statusBadge} role="status" aria-live="polite">
        <span className={styles.statusDotWrapper}>
          <span className={styles.statusPing} />
          <span className={styles.statusDot} />
        </span>
        <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
      </div>

      <h1 className={styles.name}>{name}</h1>
      <p className={styles.tagline}>&lt;{role} /&gt;</p>

      <p className={styles.bio}>
        <span className={styles.codeComment}>// </span>
        {bio}
      </p>
    </header>
  );
}
