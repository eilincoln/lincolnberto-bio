import { useEffect, useRef, type ReactNode } from "react";
import styles from "./BudgetModal.module.css";

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function BudgetModal({ isOpen, onClose, children }: BudgetModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    if (isOpen) {
      // Abre o modal de forma modal (bloqueia o fundo e ativa focus trap nativo)
      if (!dialogElement.open) {
        dialogElement.showModal();
      }
    } else {
      if (dialogElement.open) {
        dialogElement.close();
      }
    }
  }, [isOpen]);

  // Fecha ao clicar fora do conteúdo (no backdrop)
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  // Garante que ao pressionar a tecla Esc, o estado do React também seja sincronizado
  const handleCancel = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClick={handleBackdropClick}
      onCancel={handleCancel}
      aria-labelledby="budget-modal-title"
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 id="budget-modal-title" className={styles.modalTitle}>
            Solicitar Orçamento
          </h3>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar janela de orçamento"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>{children}</div>
      </div>
    </dialog>
  );
}
