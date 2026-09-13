import { useState, type FormEvent } from "react";
import styles from "./BudgetForm.module.css";

export interface BudgetFormData {
  name: string;
  contact: string;
  projectType: string;
  deadline: string;
  details: string;
}

interface BudgetFormProps {
  onSubmitSuccess: (data: BudgetFormData) => void;
}

const PROJECT_TYPES = [
  { id: "bio-hub", label: "Link na Bio", icon: "🔗" },
  { id: "landing-page", label: "Landing Page", icon: "⚡" },
  { id: "institucional", label: "Site Institucional", icon: "🏢" },
  { id: "manutencao", label: "Ajuste de Código", icon: "🛠️" },
];

export function BudgetForm({ onSubmitSuccess }: BudgetFormProps) {
  const [formData, setFormData] = useState<BudgetFormData>({
    name: "",
    contact: "",
    projectType: "bio-hub",
    deadline: "urgente",
    details: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim()) {
      setError("Por favor, preencha seu nome e contato para prosseguir.");
      return;
    }

    setError(null);
    onSubmitSuccess(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Nome ou Empresa */}
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>
          <span>Seu Nome ou Empresa</span>
          <span className={styles.requiredSign}>*</span>
        </label>
        <input
          id="name"
          type="text"
          className={styles.input}
          placeholder="Ex: Carlos Oliveira"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* Contato Principal */}
      <div className={styles.fieldGroup}>
        <label htmlFor="contact" className={styles.label}>
          <span>WhatsApp ou E-mail</span>
          <span className={styles.requiredSign}>*</span>
        </label>
        <input
          id="contact"
          type="text"
          className={styles.input}
          placeholder="Ex: (11) 99999-9999 ou email@exemplo.com"
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
        />
      </div>

      {/* Seleção do Tipo de Demanda */}
      <div className={styles.fieldGroup}>
        <span className={styles.label}>
          <span>Tipo de Demanda</span>
        </span>
        <div className={styles.serviceOptions}>
          {PROJECT_TYPES.map((type) => {
            const isSelected = formData.projectType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                className={`${styles.optionCard} ${isSelected ? styles.optionCardActive : ""}`}
                onClick={() =>
                  setFormData({ ...formData, projectType: type.id })
                }
              >
                <span className={styles.optionIcon} aria-hidden="true">
                  {type.icon}
                </span>
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Prazo Estimado */}
      <div className={styles.fieldGroup}>
        <label htmlFor="deadline" className={styles.label}>
          <span>Prazo Estimado</span>
        </label>
        <select
          id="deadline"
          className={styles.select}
          value={formData.deadline}
          onChange={(e) =>
            setFormData({ ...formData, deadline: e.target.value })
          }
        >
          <option value="urgente">⚡ O quanto antes (Urgente)</option>
          <option value="15-dias">📅 Em até 15 dias</option>
          <option value="30-dias">🗓️ Em até 30 dias</option>
          <option value="sem-pressa">☕ Sem prazo rígido (Planejamento)</option>
        </select>
      </div>

      {/* Detalhes Adicionais */}
      <div className={styles.fieldGroup}>
        <label htmlFor="details" className={styles.label}>
          <span>Detalhes (Opcional)</span>
        </label>
        <textarea
          id="details"
          className={styles.textarea}
          placeholder="Conte resumidamente o que você imagina ou referências..."
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
        />
      </div>

      {error && <p className={styles.errorMessage}>// Erro: {error}</p>}

      <button type="submit" className={styles.submitButton}>
        Enviar Briefing de Orçamento 🚀
      </button>
    </form>
  );
}
