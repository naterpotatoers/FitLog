import { ChangeEvent } from "react";

export default function InputSlider({
  min,
  max,
  name,
  value,
  label,
  disabled = false,
  onChange,
}: {
  min: number;
  max: number;
  name: string;
  value: number;
  label: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="form-item">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        type="number"
        aria-label={name}
        className="form-input"
        disabled={disabled}
        onChange={onChange}
      />
      <input
        id={name}
        name={name}
        value={value}
        type="range"
        aria-label={name}
        tabIndex={-1}
        min={min}
        max={max}
        className="form-input"
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}
