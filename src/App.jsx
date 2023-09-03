import axios from "axios"
import { useQuery } from "react-query"

function App() {
  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery("fetchItems", () => {
    return axios.get("http://localhost:4000/users")
  },)

  return (
    <>
      <h1>USERS</h1>
      {isLoading && <div>Loading.....</div>}
      {isError && <div>{error.message}</div>}

      {response?.data.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </>
  )
}

export default App
