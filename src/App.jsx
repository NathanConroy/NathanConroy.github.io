import './App.css';

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
        <p>
            Nathan Conroy's Blog.
        </p>
      </header>
    );
}

function Body() {
  return (
    <body>
      <p>
           More content to come.
      </p>
    </body>
  );
}

export default App;
