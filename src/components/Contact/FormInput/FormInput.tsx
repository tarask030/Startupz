import { Input } from 'components'
import { Controller } from 'react-hook-form'

interface IFormInput {
  type: 'text' | 'email'
  placeholder: string
  disabled?: boolean
  errorMessage?: string
  name: string
  fullWidth?: boolean
  control: Control
}

export const FormInput = ({
  placeholder,
  name,
  errorMessage,
  type,
  control,
  disabled,
}: IFormInput) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <Input
        value={value}
        placeholder={placeholder}
        errorMessage={errorMessage}
        type={type}
        disabled={disabled}
        onChange={onChange}
      />
    )}
  />
)
