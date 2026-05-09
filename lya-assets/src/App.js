import './App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
