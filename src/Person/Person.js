/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react'

const person = ({ name, age, children, click, changed }) => (
    <div>
      <p onClick={click}>I&apos;m { name } and I am { age } years old!</p>
      <p>{ children }</p>
      <input type="text" name="" id="" onChange={changed} value={name} />
    </div>
  )

export default person
