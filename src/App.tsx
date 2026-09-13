import { Header } from "./components/Header/Header";
import { ActionList } from "./components/ActionList/ActionList";
import { ServicesGrid } from "./components/ServicesGrid/ServicesGrid";

export function App() {
  const handleOpenBudgetModal = () => {
    alert("Modal de Orçamento será acionado aqui!");
  };

  return (
    <main style={{ maxWidth: "480px", width: "100%" }}>
      <Header
        name="Lincoln Berto"
        role="Frontend Developer"
        bio="Construo interfaces modernas, rápidas e focadas em conversão. Transformando regras de negócio em código limpo."
        avatarUrl="https://github.com/eilincoln.png"
      />

      <ActionList onOpenBudgetModal={handleOpenBudgetModal} />

      <ServicesGrid />
    </main>
  );
}

export default App;
