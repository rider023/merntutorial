import LandingPage from "./components/LandingPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Discover from "./components/Discover";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path= "/" exact element = {<LandingPage/>}/>
        <Route path= "/Discover" exact element = {<Discover/>}/>
        <Route path= "/Signup" exact element = {<Signup/>}/>
        <Route path ="/SignIn" exact element = {<SignIn/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
