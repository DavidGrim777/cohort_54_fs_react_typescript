export interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  error?: string | undefined;
  disabled?: boolean;
}
