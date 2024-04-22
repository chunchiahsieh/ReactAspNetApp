import { ESGBackdrop, ESGButton, ESGCancelButton } from "components";
import { useTranslation } from "react-i18next";
import localeCommon from "styles/locales/common";

export interface DeleteProps {
  show: boolean;
  onClose: () => void;
  onDelete?: () => void;
}

export function Delete({ show, onClose, onDelete }: DeleteProps) {
  const [t] = useTranslation("common");
  return <ESGBackdrop show={show} onClose={onClose} 
    content={t(localeCommon.ask_delete_record)}
    actions={[
      <ESGButton key="delete" onClick={onDelete} txt={t(localeCommon.delete2)}/>,
      <ESGCancelButton key="cancel" onClick={onClose} txt={t(localeCommon.return2)}/>,
    ]}
  />;
}
