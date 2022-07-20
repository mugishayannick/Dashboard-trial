import React from 'react'
import './Input.css'

function input() {
  return (
    <form className="form-input">
      <label></label>
      <input 
        type="email" 
        placeholder='Email'
        required
      />
      <label className="input-label">
      <input 
        type="text"
        placeholder='First Name'
        required
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input 
      type="text"
      placeholder="Other Name"
      required
      />
      </label>
      <label>Date of birth</label>
      <input
      type="date" id="start" name="trip-start"
      value="2022-07-22"
      />
      <label for="pet-select">Gender:</label>

        <select id="pet-select">
            <option value="">Gender</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
        </select>
      <label></label>
      <input 
      type="text"
      required
      placeholder='Create Password'
      />
      <label></label>
      <input 
      type="text"
      required
      placeholder='Confirm Password'
      />
    </form>
  )
}

export default input
