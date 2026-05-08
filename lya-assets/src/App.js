import './App.css';
import Menu from './components/Menu/Menu';
import BackgroundStars from './components/BackgroundStars/BackgroundStars';
import "bootstrap/dist/css/bootstrap.min.css";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BackgroundStars />
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
