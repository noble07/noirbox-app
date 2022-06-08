import { useState } from 'react'

export const useForm = (initState) => {

  const [form, setForm] = useState(initState)

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return {
    form,
    ...form,
    handleChange
  }
}