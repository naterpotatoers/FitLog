import { ChangeEvent } from "react";

export default function InputSelect({
  name,
  label,
  options,
  disabled = false,
  onChange,
}: {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="form-item">
      <h3>{label}</h3>
      <select
        id={name}
        name={name}
        onChange={onChange}
        disabled={disabled}
        className="form-input"
      >
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              className="form-input-option"
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
