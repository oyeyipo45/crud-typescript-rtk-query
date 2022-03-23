import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAddContactMutation } from '../services/contactsApi'

const initialState = {
  name: "",
  email: "",
  contact: ""
}
const AddEdit = () => {
  const navigate = useNavigate()
  const [formValue, setformValue] = useState(initialState)
  const [addContact] = useAddContactMutation()

  const { name, email, contact } = formValue

  const handleInput = (e: any) => {
    let { name, value } = e.target;
    setformValue(({ ...formValue, [name] : value}))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!name && !email && !contact) {
      toast.error("Please fill all fields")
    } else {
      let data = await addContact(formValue)
      if (data) {
        navigate('/')
        toast.success("Contact added successfully")
      }
    }
  }


  return (
    <div style={{ marginTop: "100px" }}>
      <form action=""
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name.."
          value={name}
          onChange={handleInput}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email.."
          value={email}
          onChange={handleInput}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter contact no.."
          value={contact}
          onChange={handleInput}
        />
        <input type="submit" value="Add" />
    </form>
    </div>
  )
}

export default AddEdit