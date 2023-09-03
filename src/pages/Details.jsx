import { useParams } from "react-router-dom"
import { useQuery, useQueryClient } from "react-query"
import axios from "axios"

//Query by id - Using Query keys
const Details = () => {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const { isLoading, data: response } = useQuery(
    ["details", id],
    ({ queryKey }) => {
      return axios.get(`http://localhost:4000/users/${queryKey[1]}`)
    },
    {
      //declaring an initial data to be used in the UI as the data is being fetched in the background
      initialData: () => {
        const user = queryClient
          .getQueryData("fetchItems")
          ?.data?.find((item) => item.id === parseInt(id))
        if (user) {
          return { data: user }
        } else {
          return undefined
        }
      },
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error.message)
      },
    }
  )
  return (
    <>
      {response && (
        <div>
          <div className="">{response.data.id}</div>
          <div className="">{response.data.name}</div>
          <div className="">{response.data.username}</div>
          <div className="">{response.data.email}</div>
          <div className="">{response.data.phone}</div>
          <div className="">{response.data.website}</div>
        </div>
      )}
    </>
  )
}

export default Details
