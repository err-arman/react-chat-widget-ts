import React from 'react'

interface Props {
  text: string
  className?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'submit' | 'reset' | 'button'
}

export default function Button(props: Props) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: '#36CCE6',
        border: 'none',
        boxShadow: 'none',
        borderRadius: '4px',
        padding: '8px',
        fontWeight: 500,
        color: 'white',
        cursor: 'pointer',
      }}
    >
      {props.text}
    </button>
  )
}
