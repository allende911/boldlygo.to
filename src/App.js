import "./App.css";
import Navigation from "./UI/Navigation";
import Footer from "./UI/Footer";
import MobileNavigation from "./UI/MobileNavigation";
import { Media, MediaContextProvider } from "./Utils/MediaProvider";
import PostParse from "./Blog/PostParse";

function App() {
  return (
    <div className="App">
      <MediaContextProvider>
        <Media at="sm">
          <MobileNavigation />
        </Media>
        <Media greaterThanOrEqual="md">
          <Navigation />
        </Media>
        <PostParse />
      </MediaContextProvider>
      <Footer />
    </div>
  );
}

export default App;
