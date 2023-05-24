import { useState } from "react";

interface target {
  target: {
    name: string;
    value: string;
  };
};

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: target) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    },
    // reset
    () => setValues(initialValues)
  ];
};