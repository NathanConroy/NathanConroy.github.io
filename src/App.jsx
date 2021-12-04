import './App.css';
import Posts from './Posts';
import AboutMe from './AboutMe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const NULL_ROUTE = "/";
const ABOUT_ROUTE = "/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <header className="site_header">
      <Title />
    </header>
  );
}

function Title() {
  return (
    <h1>
      Technical Meditations
    </h1>
  );
}

function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link to={NULL_ROUTE}>Home</Link>
      </li>
      <li>
        <Link to={ABOUT_ROUTE}>About</Link>
      </li>
    </ul>
  );
}

function SiteRoutes() {
  return (
    <Routes>
      <Route path={NULL_ROUTE} element={<Posts />}/>
      <Route path={ABOUT_ROUTE} element={<AboutMe />}/>
    </Routes>
  );
}

function Body() {
  return (
    <Router>
      <Menu />
      <SiteRoutes />
    </Router>
  );
}

export default App;
