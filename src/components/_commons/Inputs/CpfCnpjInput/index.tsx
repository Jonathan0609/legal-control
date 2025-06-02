'use client';

import { TextInput, TextInputProps } from '@mantine/core';
import { useState } from 'react';

function formatCpfCnpj(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (digits.length <= 11) {
    return digits
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
      .substring(0, 14);
  } else {
    return digits
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4')
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5')
      .substring(0, 18);
  }
}

export function CpfCnpjInput(props: TextInputProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCpfCnpj(e.target.value);

    setValue(formatted);
  };

  return (
    <TextInput
      {...props}
      label="CPF/CNPJ"
      placeholder="Digite o CPF ou CNPJ"
      value={value}
      onChange={handleChange}
      maxLength={18}
    />
  );
}
