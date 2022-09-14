// import React from "react";
// import {useState,useEffect} from "react";
// import "./form.css"
// import bicycle from "./images/bicycle.jpg"




// const Form =()=> {

//   const [changeColor,setchangeColor]=useState(false)
//   const [email, setEmail]=useState("");
//   const[password, setPassword]=useState("");
//   const handlesubmit = ()=>{
//     const data ={
//       email:email,
//       password:password
//     }
//     alert(JSON.stringify(data))
//   }

//   const handleClick =(event)=>{
//     console
//   }
   


    
//   return (
//        <div className="Container">
//         <div className="heading">
//           <h3>EddieShop</h3>
//           <p>Dont have an account?<span> Signup</span></p>
//         </div>

//         <div className="section">
//         <div className="form-section">
//           <h1> Welcome Back</h1>

//           {/* form */}
//           <form onSubmit={handlesubmit}>
//             <label>Your Email</label> 
//             <br></br>
//             <input type="text"
//              placeholder="name@domain.com" id="email" value={email} 
//             onChange={(e)=>{setEmail(e.target.value)}}/>

//             <br>
//             </br>
//             <label>Password</label> <br></br>
//             <input type="password" placeholder="at least 8 characters" id="password"
//             onChange={(e)=>{setPassword(e.target.value)}}
//             /><br></br>
            
//             <label className="checkbox">
//             <p>
//             <input type="checkbox" id="check"/> <span>keep me logged in</span>
//             </p>
//             <p className="forgot">Forgot Password?</p>
//             </label>
          
//           <button 
//           onClick={handleClick}
//           className={'sumitbutton${(changeColor===true)? "green":"red"}'}
//           type= "submit">Login</button>
//           <p>_______________________or _______________________</p>
          
//           <div className="icons">
//               <div className="facebook">
//               <i class="fa-brands fa-facebook"></i>
//           </div>
//               <div className="google">
//               <i class="fa-brands fa-google"></i>
//               </div>
        
//            <div className="instagram">
//            <i class="fa-brands fa-instagram"></i>
//            </div>
//            </div>
//           </form>
//           </div>
//           <div className="image">
//             <img src={bicycle}  alt=""  height="300px" width="450px"/>
//          </div>
//         </div>  
//         </div>
        
//     )
// }
// export default Form;