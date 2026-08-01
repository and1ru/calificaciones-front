import type {
  Control,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues> {
  type: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  error?: FieldError;
  minimo?: string | number;
  placeholder?: string;
}

export const Input = <T extends FieldValues>({
  type,
  name,
  label,
  control,
  error,
  minimo,
  placeholder,
}: Props<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            min={minimo}
            placeholder={placeholder}
            className={`
              w-full
              rounded-lg
              border
              px-4
              py-2.5
              outline-none
              transition
              ${
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }
            `}
          />
        )}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};