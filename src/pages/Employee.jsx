import { Link } from 'react-router-dom'
import Axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Employee(props) {
  const [employee, setEmployee] = useState({})
  useEffect(() => {
    const employeeId = props.match.params.id
    Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/Lexicon/employees/${employeeId}`
    ).then(resp => {
      console.log({ resp })
      setEmployee({
        firstName: resp.data.firstName,
        lastName: resp.data.lastName
      })
    })
  })
  return (
    <>
      <div>
        {employee.firstName}
        {employee.lastName}
      </div>
      <Link to="/">Home</Link>
    </>
  )
}
