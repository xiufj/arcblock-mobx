import React, { useState, ChangeEvent } from 'react'

interface InputProps {
  id?: string
  name?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: EventTarget & HTMLInputElement) => void
  className?: string
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange = () => {},
  className = ''
}) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target
    setInputValue(newValue.value)
    onChange(newValue)
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      className={`appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 ${className}`}
    />
  )
}

export default Input
