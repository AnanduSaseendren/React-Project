import React from 'react'

function Button({label}) {
  return (
    <>
    <button type="button" className='p-2 uppercase border border-1'>{label}</button>
    </>
  )
}

export default Button
