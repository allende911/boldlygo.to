import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayPosts from "./Blog/DisplayPosts";

function App() {
  return (
    <div className="App">
      <Container>
        <DisplayPosts />
      </Container>
    </div>
  );
}

export default App;
