import "./App.css";
import AddPostHandler from "./Blog/AddPostHandler";
import DisplayPosts from "./Blog/DisplayPosts";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        <DisplayPosts />
        {/* <AddPostHandler /> */}
      </Container>
    </div>
  );
}

export default App;
