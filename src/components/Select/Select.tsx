import type { ReactNode } from "react";
import type { Control, FieldValues, Path, } from "react-hook-form";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  children: ReactNode
}

export const Select = <T extends FieldValues>({ name, control, children }: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <select
          {...field}
          className="p-4 border outline-none rounded-lg border-gray-300"
        >
          {children}
        </select>
      )}
    />
  );
};