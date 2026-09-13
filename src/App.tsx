import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ActionList } from "./components/ActionList/ActionList";
import { ServicesGrid } from "./components/ServicesGrid/ServicesGrid";
import { BudgetModal } from "./components/BudgetModal/BudgetModal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main style={{ maxWidth: "480px", width: "100%" }}>
      <Header
        name="Lincoln Berto"
        role="Frontend Developer"
        bio="Construo interfaces modernas, rápidas e focadas em conversão. Transformando regras de negócio em código limpo."
        avatarUrl="https://github.com/eilincoln.png"
      />

      <ActionList onOpenBudgetModal={handleOpenModal} />

      <ServicesGrid />

      {/* Modal com as props declaradas separadamente */}
      <BudgetModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p style={{ marginBottom: "1rem" }}>
          Estrutura do modal validada com sucesso! No próximo bloco conectaremos
          os campos dinâmicos do formulário de briefing.
        </p>
        <button
          type="button"
          onClick={handleCloseModal}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "var(--bg-card)",
            color: "var(--text-primary)",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border-subtle)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
          }}
        >
          // Fechar prévia
        </button>
      </BudgetModal>
    </main>
  );
}

export default App;
