import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"

//Query by id - Using Query keys
const Details = () => {
  const { id } = useParams()
  const { isLoading, data: response } = useQuery(
    ["details", id],
    ({ queryKey }) => {
      return axios.get(`http://localhost:4000/users/${queryKey[1]}`)
    },
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error.message)
      },
    }
  )
  return (
    <div>
      <div className="">{id}</div>
      <div className="">{response?.data?.name}</div>
    </div>
  )
}

export default Details
