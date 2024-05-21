import React, { useState } from 'react'
import Input from '../Input'

interface FormProps {
  onSubmit: (data: FormData) => void
}

interface FormData {
  name: string
  email: string
  phone: string
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (e: EventTarget & HTMLInputElement) => {
    const { name, value } = e
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 数据校验
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const validateForm = (): boolean => {
    let valid = true
    const newErrors: Partial<FormData> = {}

    // 检查是否所有字段都填写了
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key as keyof FormData] = `${key} is required`
        valid = false
      }
    })

    // 检查电子邮件格式是否正确
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-14">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`border px-3 py-2 w-full ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`border px-3 py-2 w-full ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <Input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`border px-3 py-2 w-full ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        className="cursor-pointer inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
