function Login(){
    return(
        <div style={{display:'flex',justifyContent:"center",flexDirection:'column',height:'75vh',border:'3px solid black',
            backgroundColor:'#023670', alignItems:"center",paddingBottom:'100px'}}>
            <h1 style={{color:"white"}}>Login</h1>
                <input style={{color:"black",padding:'20px',borderRadius:'5px', height:'10px',width:'450px',columnGap:'10px',margin: '0.5rem 0'}}type="text" placeholder="Enter your username"></input>
                <input style={{color:"black",padding:'20px',borderRadius:'5px', height:'10px',width:'450px',margin: '0.5rem 0'}}type="password" placeholder="Enter your password"></input>
                <button style={{backgroundColor:"black",fontSize:'20px',color:"black",padding:'20px',borderRadius:'6px', height:'15px',width:'550px',color:'white'
                    ,alignContent:"center",fontWeight:'700px',margin:'0.5rem 0',alignItems:'center'}}>Login</button>
                <p style={{color:'white'}}>Not Registered yet?<a href="http://127.0.0.1:5500/signup.html">login</a></p>
            </div>
    )
}
export default Login;