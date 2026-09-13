import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ActionList } from "./components/ActionList/ActionList";
import { ServicesGrid } from "./components/ServicesGrid/ServicesGrid";
import { BudgetModal } from "./components/BudgetModal/BudgetModal";
import {
  BudgetForm,
  type BudgetFormData,
} from "./components/BudgetForm/BudgetForm";
import { Footer } from "./components/Footer/Footer";
// Mapeamento semântico dos IDs para nomes amigáveis na mensagem
const PROJECT_TYPE_LABELS: Record<string, string> = {
  "bio-hub": "Link na Bio Personalizado",
  "landing-page": "Landing Page / Página de Vendas",
  institucional: "Site Institucional",
  manutencao: "Ajuste de Código / Manutenção",
};

const DEADLINE_LABELS: Record<string, string> = {
  urgente: "O quanto antes (Urgente)",
  "15-dias": "Em até 15 dias",
  "30-dias": "Em até 30 dias",
  "sem-pressa": "Sem pressa (Planejamento)",
};

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Seu número do WhatsApp no formato internacional: 55 + DDD + Número (apenas dígitos)
  const WHATSAPP_NUMBER = "5511999999999"; // <-- Substitua pelo seu WhatsApp real

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSuccess = (data: BudgetFormData) => {
    setIsModalOpen(false);

    const projectLabel =
      PROJECT_TYPE_LABELS[data.projectType] || data.projectType;
    const deadlineLabel = DEADLINE_LABELS[data.deadline] || data.deadline;

    // Constrói a mensagem formatada para o WhatsApp
    const message = [
      `*Novo Pedido de Orçamento via Hub* 🚀`,
      ``,
      `*Nome/Empresa:* ${data.name}`,
      `*Contato:* ${data.contact}`,
      `*Serviço:* ${projectLabel}`,
      `*Prazo desejado:* ${deadlineLabel}`,
      data.details ? `*Detalhes:* ${data.details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // Encodamento seguro para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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

      <Footer />
    </main>
  );
}

export default App;
