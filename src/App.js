import "./App.css";
import AddPostHandler from "./Blog/AddPostHandler";
import DisplayPosts from "./Blog/DisplayPosts";
import { Container, Card, Icon, Image } from "semantic-ui-react";
import TopBar from "./UI/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DisplayPosts />
      {/* <AddPostHandler /> */}
    </div>
  );
}

export default App;
