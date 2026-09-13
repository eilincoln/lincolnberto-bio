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

// Número comercial internacional (DDI + DDD + Número)
const WHATSAPP_NUMBER = "5511913372806";

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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSuccess = (data: BudgetFormData) => {
    setIsModalOpen(false);

    const projectLabel =
      PROJECT_TYPE_LABELS[data.projectType] || data.projectType;
    const deadlineLabel = DEADLINE_LABELS[data.deadline] || data.deadline;

    // Mensagem com os emojis originais
    const messageLines = [
      `✨ *NOVO BRIEFING DE PROJETO* ✨`,
      `*Lincoln Berto - Dev Hub*`,
      ``,
      `👤 *Cliente:* ${data.name}`,
      `📱 *Contato:* ${data.contact}`,
      ``,
      `🛠️ *Escopo Solicitado:*`,
      `• ${projectLabel}`,
      ``,
      `⏳ *Prazo Desejado:*`,
      `• ${deadlineLabel}`,
    ];

    if (data.details && data.details.trim().length > 0) {
      messageLines.push(
        ``,
        `📝 *Detalhes / Observações:*`,
        `_${data.details.trim()}_`,
      );
    }

    messageLines.push(
      ``,
      `_Olá, Lincoln! Enviei minhas informações pelo seu link na bio e aguardo seu retorno para alinharmos o projeto._`,
    );

    const fullMessage = messageLines.join("\n");

    // Monta a URL completa usando api.whatsapp.com
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      fullMessage,
    )}`;

    // Cria um elemento <a> virtual para disparar a navegação sem double encoding do window.open
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
