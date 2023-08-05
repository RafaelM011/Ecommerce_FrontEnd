interface Props {
  className: string
  name: string
  type: string
  placeholder: string
  required: boolean
}

export const InputComponent: React.FC<Props> = ({ className, name, type, placeholder, required }): JSX.Element => {
  return (
        <input className={className} name={name} type={type} placeholder={placeholder} required={required}/>
  )
}
