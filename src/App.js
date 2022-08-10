import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  return (
    <Routers>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Routers>
  );
}

export default App;
