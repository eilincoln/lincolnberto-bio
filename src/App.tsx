import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ActionList } from "./components/ActionList/ActionList";
import { ServicesGrid } from "./components/ServicesGrid/ServicesGrid";
import { BudgetModal } from "./components/BudgetModal/BudgetModal";
import {
  BudgetForm,
  type BudgetFormData,
} from "./components/BudgetForm/BudgetForm";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSuccess = (data: BudgetFormData) => {
    // Validação funcional imediata: simula a captura dos dados antes da integração externa
    console.log("Briefing capturado com sucesso:", data);
    alert(
      `Obrigado, ${data.name}! Recebemos sua solicitação para ${data.projectType}.`,
    );
    setIsModalOpen(false);
  };

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

      <BudgetModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <BudgetForm onSubmitSuccess={handleFormSuccess} />
      </BudgetModal>
    </main>
  );
}

export default App;
