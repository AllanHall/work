import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function Add(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [emergencyContactPerson, setEmergencyContactPerson] = useState('')
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('')
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('')
  const [salary, setSalary] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hiredDate, setHiredDate] = useState('')

  const addEmployee = e => {
    e.preventDefault()
    Axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/Lexicon/Employees`,
      {
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
        email: email,
        gender: gender,
        emergencyContactPerson: emergencyContactPerson,
        emergencyContactPhone: emergencyContactPhone,
        emergencyContactAddress: emergencyContactAddress,
        salary: salary,
        birthday: birthday,
        hiredDate: hiredDate
      }
    ).then(resp => {
      console.log({ resp })
    })
  }
  return (
    <>
      <header className="title">Add a Lexicon Employee</header>
      <div>
        <form onSubmit={addEmployee}>
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
          <div>
            <div>Birthday</div>
            <input
              type="date"
              placeholder="birthday"
              value={birthday}
              onChange={e => {
                setBirthday(e.target.value)
              }}
            />
            <div>Date Hired</div>
            <input
              type="date"
              placeholder="date hired"
              value={hiredDate}
              onChange={e => {
                setHiredDate(e.target.value)
              }}
            />
          </div>
          <div>Full Time</div>
          {/* <input type="checkbox" />
          <input type="text" placeholder="employee picture" /> */}
          <input
            type="text"
            placeholder="job title"
            value={jobTitle}
            onChange={e => {
              setJobTitle(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="job description"
            value={jobDescription}
            onChange={e => {
              setJobDescription(e.target.value)
            }}
          />
          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={e => {
              setSalary(e.target.value)
            }}
          />
          <div>Personal Info</div>
          <input
            type="text"
            placeholder="phone number"
            value={phoneNumber}
            onChange={e => {
              setPhoneNumber(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="address"
            value={address}
            onChange={e => {
              setAddress(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="city"
            value={city}
            onChange={e => {
              setCity(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="zip code"
            value={zip}
            onChange={e => {
              setZip(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="state"
            value={state}
            onChange={e => {
              setState(e.target.value)
            }}
          />
          <br />
          <input
            type="text"
            placeholder="gender"
            value={gender}
            onChange={e => {
              setGender(e.target.value)
            }}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <div>Emergency Contact Info</div>
          <input
            type="text"
            placeholder="emergency contact"
            value={emergencyContactPerson}
            onChange={e => {
              setEmergencyContactPerson(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="contact number"
            value={emergencyContactPhone}
            onChange={e => {
              setEmergencyContactPhone(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="contact address"
            value={emergencyContactAddress}
            onChange={e => {
              setEmergencyContactAddress(e.target.value)
            }}
          />
          <br />
          <button>Add to Directory</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}
