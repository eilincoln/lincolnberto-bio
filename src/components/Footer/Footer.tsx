import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.builtWith}>
        // Construído com café,{" "}
        <span className={styles.techTag}>React + TypeScript</span>
      </p>
      <p className={styles.copy}>
        &copy; {currentYear} Lincoln Berto. Todos os direitos reservados.
      </p>
    </footer>
  );
}
