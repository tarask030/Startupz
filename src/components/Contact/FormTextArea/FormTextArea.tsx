import { TextArea } from 'components'
import { Controller } from 'react-hook-form'

interface IFormInput {
  placeholder: string
  disabled?: boolean
  errorMessage?: string
  name: string
  control: Control
}

export const FormTextArea = ({
  placeholder,
  name,
  errorMessage,
  control,
  disabled,
}: IFormInput) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <TextArea
        value={value}
        placeholder={placeholder}
        errorMessage={errorMessage}
        onChange={onChange}
        disabled={disabled}
      />
    )}
  />
)
