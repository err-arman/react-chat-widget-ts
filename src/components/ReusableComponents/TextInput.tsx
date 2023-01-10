import React from 'react'

type Props = {
  label: string
  placeholder: string
  name: string
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = ({ label, placeholder, name, required, onChange }: Props) => {
  return (
    <div>
      <label
        style={{
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        {label}
        {required && (
          <span aria-hidden="true" style={{ color: 'rgb(250, 82, 82)' }}>
            {' '}
            *
          </span>
        )}
      </label>
      <div>
        <input
          type="text"
          required={required}
          placeholder={placeholder}
          aria-invalid="false"
          name={name}
          onChange={onChange}
          style={{
            borderRadius: '4px',
            border: '1px solid rgb(206, 212, 218)',
            height: '36px',
            boxSizing: 'border-box',
            fontSize: '14px',
            width: '100%',
            paddingLeft: '12px',
            paddingRight: '12px',
          }}
        />
      </div>
    </div>
  )
}
