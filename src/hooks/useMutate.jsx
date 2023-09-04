import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

export const useMutate = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (payload) => {
      //invalidating  a query will cause react query to refetch that query making sure the server is in sync with the ui
      return axios.post("http://localhost:4000/users", payload)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("fetchItems")
      },
    }
  )
}
