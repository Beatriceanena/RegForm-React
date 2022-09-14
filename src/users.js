 import React, {useEffect,useState} from "react";
// import "./user.css"
// import Navbar from"Navbar";

  const Users = ( )=> {
    const [user,setUser]=useState();
    const [loading,setLoading]=useState();

      useEffect(()=>{
        userData()
      },[])
      
      const userData =()=>{
          fetch ("https://dummyjson.com/users")
          .then (res =>res.json())
          .then (data =>{
           setLoading(true)
           setUser(data.users);
           console.log("data fetched --->",user);
  
          })
          .catch(error=>console.log(error));
    };
    if(!loading){
      return <div>loading.....</div>
    }
    return (
      <div>
      {user.map ((item) =>(
        <div>
          <img src={item.image} alt="user-image" />
          <p>{item.firstName} {item.lastName} {item.maidenName}</p>
          <h4>Details</h4>
          <p>Age:{item.age}</p>
          <p>Height:{item.height}</p>
          <p>Gender:{item.gender}</p>
          <p>Contact:{item.email}</p>

        </div>
      ))}
       </div> 
    );
};
export default Users;
 
