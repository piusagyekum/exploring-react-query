import { useState } from "react"
import { useMutate } from "../hooks/useMutate"

const Form = () => {
   const {mutate} = useMutate()
  const [payload, setPayload] = useState({ name: null, username: null, email: null })

  const HandleSubmit = e => {
    e.preventDefault()
    mutate(payload)
  }
  return (
    <form onSubmit={HandleSubmit}>
      <div className="form-control">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={payload.name}
          onChange={(e) => {
            setPayload((prevState) => ({ ...prevState, name: e.target.value }))
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={payload.username}
          onChange={(e) => {
            setPayload((prevState) => ({ ...prevState, username: e.target.value }))
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={payload.email}
          onChange={(e) => {
            setPayload((prevState) => ({ ...prevState, email: e.target.value }))
          }}
        />
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default Form
