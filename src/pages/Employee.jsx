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
        lastName: resp.data.lastName,
        jobTitle: resp.data.jobTitle,
        jobDescription: resp.data.jobDescription,
        phoneNumber: resp.data.phoneNumber,
        address: resp.data.address,
        city: resp.data.city,
        state: resp.data.state,
        zip: resp.data.zip,
        email: resp.data.email,
        gender: resp.data.gender,
        emergencyContactPerson: resp.data.emergencyContactPerson,
        emergencyContactPhone: resp.data.emergencyContactPhone,
        emergencyContactAddress: resp.data.emergencyContactAddress,
        salary: resp.data.salary,
        birthday: resp.data.birthday,
        hiredDate: resp.data.hiredDate
      })
    })
  }, {})
  return (
    <>
      <div className="title">
        {employee.firstName} {employee.lastName}
      </div>
      <div>{employee.jobTitle}</div>
      <div>{employee.jobDescription}</div>
      <div>{employee.address}</div>
      <div>{employee.birthday}</div>
      <div>{employee.city}</div>
      <div>{employee.email}</div>
      <div>{employee.gender}</div>
      <div>{employee.phoneNumber}</div>
      <div>{employee.state}</div>
      <div>{employee.zip}</div>
      <div>{employee.salary}</div>
      <div>{employee.hiredDate}</div>
      <Link to="/">Home</Link>
    </>
  )
}
