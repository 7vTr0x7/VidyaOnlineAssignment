import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div className="flex flex-col mb-4">
    <Label className="mb-1 font-medium">{label}</Label>
    <Select
      onValueChange={(val) => onChange({ target: { name, value: val } })}
      value={value}>
      <SelectTrigger
        className={error ? "border-red-500 focus:ring-red-500" : ""}>
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default SelectField;
