import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

export const useMutate = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (payload) => {
      return axios.post("http://localhost:4000/users", payload)
    },
    {
      onSuccess: (data) => {
        //invalidating  a query will cause react query to refetch that query making sure the server is in sync with the ui
        // queryClient.invalidateQueries("fetchItems")

        //setting the query data also immediately updates the user        
        queryClient.setQueryData("fetchItems", (oldQueryData) => {
          return { ...oldQueryData, data: [...oldQueryData.data, data.data] }
        })
      },
    }
  )
}
