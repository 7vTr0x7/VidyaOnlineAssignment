import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}) => (
  <div className="flex flex-col mb-4">
    <Label htmlFor={name} className="mb-1 font-medium">
      {label}
    </Label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder || label}
      className={`placeholder:text-gray-400 ${
        error ? "border-red-500 focus-visible:ring-red-500" : ""
      }`}
    />

    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default InputField;
