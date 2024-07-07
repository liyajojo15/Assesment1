import { useState } from "react";

function Register(){
    let [UserName, setUserName] = useState('')
    let [email, setEmail] = useState('');
    let [password, setPassword]= useState('');
    let [repassword, setRePassword]= useState('');
    let [result,SetResult]=useState('');

    function handleRegister(){}
    return( 
            <div style={{display:'flex',justifyContent:"center",flexDirection:'column',height:'75vh',border:'3px solid black',
            backgroundColor:'#023670', alignItems:"center", paddingBottom:'100px'}}>
            <h1 style={{color:"white"}}>Registration</h1>
                <input style={{color:"black",padding:'20px',borderRadius:'5px', height:'10px',width:'450px',columnGap:'10px',margin: '0.5rem 0'}}type="text"onChange={(e) => setUserName(e.target.value)} placeholder="Enter your username"></input>
                <input style={{color:"black",padding:'20px',borderRadius:'5px', height:'10px',width:'450px',margin: '0.5rem 0'}}type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input>
                <input style={{color:"black",padding:'20px',borderRadius:'5px', height:'10px',width:'450px',margin: '0.5rem 0'}}type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"></input>
                <input style={{color:"black",padding:'20px',borderRadius:'5px', height:'10px',width:'450px',margin: '0.5rem 0'}}type="password" onChange={(e) => setRePassword(e.target.value)} placeholder="Enter your password again"></input>
                <button style={{backgroundColor:"black",fontSize:'20px',color:"black",padding:'20px',borderRadius:'6px', height:'15px',width:'550px',alignContent:"center",fontWeight:'600px',margin:'0.5rem 0',color:'white'}}>Register</button>
                <p style={{color:'white'}}>Have an account already?<a href="http://127.0.0.1:5500/login.html">login</a></p>
            </div>
    )
}
export default Register;