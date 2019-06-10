import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function Add(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const addEmployee = e => {
    e.preventDefault()
    Axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/Lexicon/Employees`,
      {
        firstName: firstName,
        lastName: lastName
      }
    ).then(resp => {
      console.log({ resp })
    })
  }
  return (
    <>
      <header className="title">Add a Lexicon Employee</header>
      <div>
        <form>
          <input
            type="number"
            placeholder="employee Id"
            value={props.employeeId}
          />
          <input
            type="text"
            placeholder="first name"
            value={() => setFirstName()}
          />
          <input
            type="text"
            placeholder="last name"
            value={() => setLastName()}
          />
          <div>
            <div>Birthday</div>
            <input type="date" placeholder="birthday" />
            <div>Date Hired</div>
            <input type="date" placeholder="date hired" />
          </div>
          <div>Full Time</div>
          <input type="checkbox" />
          <input type="text" placeholder="employee picture" />
          <input type="text" placeholder="job title" />
          <input type="text" placeholder="job description" />
          <input type="number" placeholder="Salary" />
          <div>Personal Info</div>
          <input type="text" placeholder="phone number" />
          <input type="text" placeholder="address" />
          <input type="text" placeholder="city" />
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="state" />
          <br />
          <input type="text" placeholder="gender" />
          <input type="text" placeholder="email" />
          <div>Emergency Contact Info</div>
          <input type="text" placeholder="emergency contact" />
          <input type="text" placeholder="contact number" />
          <input type="text" placeholder="contact address" />
          <br />
          <button onClick={e => addEmployee(e)}>Add to Directory</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}
