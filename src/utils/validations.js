import dayjs from 'dayjs'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const singinValidation = ({ birthday, password, password2 }) => {
  const cumple = dayjs(birthday)
  const nowDate = dayjs()
  const dateDiff = nowDate.diff(cumple, 'year')

  if (dateDiff < 18) {
    Swal.fire({
      title: 'Error!',
      text: 'Debes de ser mayor de edad.',
      icon: 'error'
    })
    return false
  }

  if (password !== password2) {
    Swal.fire({
      title: 'Error!',
      text: 'Ambas contraseñas deben ser iguales.',
      icon: 'error'
    })
    return false
  }

  return true
}