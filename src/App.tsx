export function App() {
  return (
    <main style={{ maxWidth: "480px", width: "100%", textAlign: "center" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--accent-status)",
          fontSize: "0.875rem",
          display: "inline-block",
          marginBottom: "1rem",
        }}
      >
        🟢 DISPONÍVEL PARA PROJETOS
      </span>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
        Lincoln Berto
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
        Desenvolvedor Frontend & Criador de Soluções Web
      </p>
    </main>
  );
}

export default App;
