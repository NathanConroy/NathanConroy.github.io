import './App.css';
import Posts from './Posts';

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
    <ul class="menu">
      <li>Home</li>
      <li>About Me</li>
    </ul>
  );
}

function Body() {
  return (
    <body>
      <Menu />
      <Posts />
    </body>
  );
}

export default App;
