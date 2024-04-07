import React, { useState } from 'react'

export default function Component() {

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState()

  const [updated, setUpdated] = useState()

  // Create a function to update the state variable "text"
  const textOnChange = (event) => {
    setText(event.target.value)
  }

  // Create a function to update the state variable "updated"
  const buttonOnClick = (event) => {
    setUpdated(text)
  }

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Texto Input: {text}</p>
      <p>Texto Actualizado: {updated}</p>
    </div>
  )
}
