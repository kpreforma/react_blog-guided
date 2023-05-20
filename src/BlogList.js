const BlogList = (props) => {
   const blogs = props.blogs
   const title = props.title

   return ( 
      <div className="BlogList">
         <h2>{title}</h2>
         {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
               <h2>{blog.title}</h2>
               <p>Said by {blog.author}</p>
               <button onClick={() => props.handleDelete(blog.id)}>Delete Dialogue</button>
            </div>
         ))}
      </div>
   );
}
 
export default BlogList;