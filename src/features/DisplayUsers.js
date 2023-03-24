import { useSelector } from "react-redux"



  const DisplayUsers = () =>{
    const data = useSelector((state) => {
     return  state.users
    })
  console.log(data, "data display")

  return(
  <>
  {
    data.map((user, id) => {
      return <li key={id}>
        {user}
      </li>
    })
  }
</>)
  }
export default DisplayUsers
