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
      <h1>
        Nathan Conroy's Blog
      </h1>
    </header>
  );
}

function Body() {
  return (
    <body>
      <Posts />
    </body>
  );
}

export default App;
