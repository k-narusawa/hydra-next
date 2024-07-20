import React, { useState } from 'react';

type Props = {
  className?: string | undefined;
  placeholder?: string | undefined;
  type: string;
  name: string;
  defaultValue?: string | undefined;
  onValueChange?: (name: string, value: string) => void;
};

export const Input: React.FC<Props> = ({
  className,
  placeholder,
  type,
  name,
  onValueChange,
}) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onValueChange) {
      onValueChange(name, newValue);
    }
    // ここで入力値の検証を行い、エラーがあればsetErrorを使ってエラーメッセージを設定します。
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`
          h-12 px-4
          block w-full rounded-md
          border border-gray shadow-sm
          focus:border-primary-400 focus:ring focus:blue-light focus:ring-opacity-50
          disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray
          focus-visible: outline-none
          ${error ? 'border-red-light' : ''}
          ${className}
        `}
        value={value}
        onChange={handleChange}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};
