import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleFileUpload from "./pages/SingleFileUpload";
import MultipleFileUpload from "./pages/MultipleFileUpload";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/single" component={SingleFileUpload} />
        <Route path="/multiple" component={MultipleFileUpload} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
