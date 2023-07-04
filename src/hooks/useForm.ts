import { useState } from "react";

type FormProps = {
  [key: string]: any;
};

export const useForm = (initialData: FormProps) => {
  const [form, setForm] = useState(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const nextFormState = {
      ...form,
      [e?.target?.name]: e?.target?.value,
    };
    setForm(nextFormState);
  };

  return { form, handleChange };
};
