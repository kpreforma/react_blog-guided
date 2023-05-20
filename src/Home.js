import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlog] = useState([
      {title: 'I have a plan!', body: 'lorem ipsum...', author: 'Dutch', id: 1},
      {title: 'Dear boy', body: 'lorem ipsum...', author: 'Hosea', id: 2},
      {title: 'Boah', body: 'lorem ipsum...', author: 'Arthur', id: 3},
      {title: 'What really happened in Blackwater', body: 'lorem ipsum...', author: 'Arthur', id: 4}
   ])

   const [name, setName] = useState('Arthur')

   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlog(newBlogs)
   }

   useEffect(() => {
      console.log('Use effect ran')
   }, [name])

   return (
      <div className="Home">
         <BlogList blogs={blogs} title="All Dialogues" handleDelete={handleDelete} />
         <button onClick={() => setName('Dutch')}>Change Name</button>
         <p>{name}</p>
         {/* <BlogList blogs={blogs.filter((blog) => (blog.author === 'Arthur'))} title="Arthur's Dialogues"/> */}
      </div>
   );
}
   
export default Home;