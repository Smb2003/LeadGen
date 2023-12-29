// import Logo from 'assets/favicon'
const Navbar = () => {
    return(
        <>
            <div style={{minWidth:320,minHeight: 70, display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems:'center'}}>
                <img
                src = "/src/assets/favicon.ico"
                style={{height:49}}
                />
                <button style={{minWidth:80, height:40, borderRadius:10, backgroundColor:'blue', color:'white',border: 'none'}}>Sign Up</button>
            </div>
        </>
    )

}
export default Navbar