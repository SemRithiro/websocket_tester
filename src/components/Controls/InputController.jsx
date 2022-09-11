import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useController } from 'react-hook-form';
import { t } from 'i18next';

export default function InputController({ name, label, placeholder, type = 'text', isDisabled = false, isRequired = false, rules }) {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    rules,
  });
  return (
    <FormControl id={name} isRequired={isRequired} mb="3">
      <FormLabel>{t(label)}</FormLabel>
      <Input
        name={name}
        value={value}
        type={type}
        size="sm"
        onBlur={onBlur}
        onChange={onChange}
        disabled={isDisabled}
        placeholder={t(placeholder)}
        cursor={isDisabled ? 'pointer !important' : 'text'}
      />
    </FormControl>
  );
}
