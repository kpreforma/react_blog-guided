import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlog] = useState()

   useEffect(() => {
      fetch('http://localhost:8000/Dialogs')
      .then((res) => {return res.json()})
      .then((data) => {
         console.log(data)
         setBlog(data)
      })
   }, [])

   return (
      <div className="Home">
         {blogs && <BlogList blogs={blogs} title="All Dialogues" />}
      </div>
   );
}
   
export default Home;