import React from 'react';

const FormField = (formFields, value, onChange) => {
  const { name, label, type } = formFields;
  return (
    <div key={name}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
