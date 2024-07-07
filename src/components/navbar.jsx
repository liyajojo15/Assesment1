function NavBar(){
    return(
        <div style={{display:'flex',justifyContent:'space-between',fontFamily:'lato',color:'black',backgroundColor:"plum"}}>

        
      <h1 style={{fontFamily:'Lato'}}>Shop Fusion</h1>
      <div style={{display:'flex',gap:"25px",justifyItems:"center"}}>
        <h2 >register</h2>
        <h2>about us</h2>
        <h2>contact</h2>
      </div>
    </div>
    

    )
}


export default NavBar;