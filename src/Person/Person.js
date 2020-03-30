/* eslint-disable react/prop-types */
import React from 'react'

const person = ({ name, age, children }) => (
    <div>
      <p>I&apos;m { name } and I am { age } years old!</p>
      <p>{ children }</p>
    </div>
  )

export default person
