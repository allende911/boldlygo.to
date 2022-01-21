import "./App.css";
import DisplayBlogPosts from "./Blog/DisplayBlogPosts";
import BlogEntry from "./Blog/BlogEntry";

function App() {
  return (
    <div className="App">
      <div>
        <BlogEntry />
        <DisplayBlogPosts />
      </div>
    </div>
  );
}

export default App;
