const Navbar = () => {
   return (
      <nav className="navbar">
         <h1>REACT Project: Famous RDR2 Dialogues</h1>
         <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={
               {color: "white", backgroundColor: '#f1356d', borderRadius: '8px'}
            }>New Dialogue</a>
         </div>
      </nav>
   );
}

export default Navbar;