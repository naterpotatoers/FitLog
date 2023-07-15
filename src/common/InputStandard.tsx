import { ChangeEvent } from "react";

export default function InputStandard({
  name,
  value,
  label,
  datalist = [],
  disabled = false,
  placeholder,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  datalist?: any[];
  disabled?: boolean;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="form-item">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        aria-label={name}
        list={name + "-list"}
        className="form-input"
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      <datalist id={name + "-list"}>
        {datalist.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}
