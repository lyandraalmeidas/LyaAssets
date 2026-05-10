import './App.css';
import Menu from './components/Menu/Menu';
import Background from './components/BackgroundStars/BackgroundStars';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="pageWrapper">
        <Menu />
        <Background />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
