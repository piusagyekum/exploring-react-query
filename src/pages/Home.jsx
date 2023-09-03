import { useQuery } from "react-query"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
  const {
    isLoading,
    data: response,
    isError,
    error,
    //a function that allows manual fetching of data
    refetch,
  } = useQuery(
    "fetchItems",
    () => {
      return axios.get("http://localhost:4000/users")
    },
    {
      //preventing the default behavious where the data is fetched when the component mounts
      // enabled:fale,
      //Stale time prevents andy fetching of data for the indicated amount of time
      //it displays the cached data
      staleTime: 1000,

      // refetchOnMount: true
      //will refresh every 2 secs - POLLING
      // refetchInterval:2000

      //refetch even if the browser does not have focus
      // refetchIntervalInBackground:true,
      //perform a side effect when the fetch succeeds
      //the value of the onSuccess key is a function
      // onSuccess,
      //perform side effect whn fetch fails
      // onError,
      //the SELECT option is used to transform the api response into a different format
      //the below modifies the received api data to return only usernames abd not the full supposed response
      // select:(data) => {
      //   const onlyNames = data.data.map((user) => (user.name ))
      //   return onlyNames
      //  }
    }
  )
  return (
    <div>
      <h1>USERS</h1>
      {/* manually fetching of data - call the refresh function destructured from the useQuery hook */}
      <button onClick={refetch}>Fetch data</button>
      {isLoading && <div>Loading.....</div>}
      {isError && <div>{error.message}</div>}

      {response?.data.map((user) => (
        <Link to={`/${user.id}`} key={user.id} style={{display:"block"}}>
          {user.name}
        </Link>
      ))}
    </div>
  )
}

export default Home
