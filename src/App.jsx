import './App.css';
import Post from './Post';

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
      <Post />
      <Post />
      <Post />
    </body>
  );
}

export default App;
