import { Header } from "./components/Header/Header";

export function App() {
  return (
    <main style={{ maxWidth: "480px", width: "100%" }}>
      <Header
        name="Lincoln Berto"
        role="Frontend Developer"
        bio="Construo interfaces modernas, rápidas e focadas em conversão. Transformando regras de negócio em código limpo."
        avatarUrl="https://github.com/eilincoln.png"
      />
    </main>
  );
}

export default App;
