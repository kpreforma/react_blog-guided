import Home from './Home';
import Navbar from './Navbar' 

function App() {
  // const title = 'Welcome to the new blog'
  // const likes = 50
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
