import React, { useEffect, useState } from 'react'
import { FormData } from '../../types'
import Input from '../Input'

interface FormProps {
  data: FormData
  onSubmit: (data: FormData) => void
}

const Form: React.FC<FormProps> = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  useEffect(() => {
    setFormData(data)
  }, [data])

  const handleChange = (name: string, e: EventTarget & HTMLInputElement) => {
    const { value } = e
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
    validateField(name as keyof FormData, value)
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
    if (!emailRegex.test(formData.email as string)) {
      newErrors.email = 'Invalid email format'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }
  const validateField = (fieldName: keyof FormData, value: string) => {
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldName} is required`
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: undefined
      }))
    }

    if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Invalid email format'
        }))
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: undefined
        }))
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} className="mt-14 mx-auto">
      <div className="mb-6 relative">
        <label htmlFor="name" className="block mb-1 font-bold">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e)}
          className={`border px-3 py-2  w-full ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm absolute">{errors.name}</p>
        )}
      </div>
      <div className="mb-6 relative">
        <label htmlFor="email" className="block mb-1 font-bold">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e)}
          className={`border px-3 py-2 w-full ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm absolute">{errors.email}</p>
        )}
      </div>
      <div className="mb-6 relative">
        <label htmlFor="phone" className="block mb-1 font-bold">
          Phone
        </label>
        <Input
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e)}
          className={`border px-3 py-2  w-full ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm absolute">{errors.phone}</p>
        )}
      </div>
      <button
        type="submit"
        className="mt-8 cursor-pointer inline-block rounded-md border border-transparent  bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
