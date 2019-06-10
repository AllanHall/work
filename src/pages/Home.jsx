import { Link } from 'react-router-dom'
import Axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [employeeList, setEmployeeList] = useState([])
  useEffect(() => {
    Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Lexicon/employees'
    ).then(resp => {
      console.log({ resp })
      setEmployeeList(resp.data)
    })
  }, [])
  return (
    <>
      <header className="title">Lexicon</header>
      <ul>
        {employeeList.map(employee => {
          return (
            <Link to={`/employee/${employee.id}`}>
              <li>
                {employee.id}
                {employee.firstName}
                {employee.lastName}
                {employee.jobTitle}
                {employee.profileImage}
              </li>
            </Link>
          )
        })}
      </ul>
      <Link to="/add">
        <div>Add another employee</div>
      </Link>
    </>
  )
}
