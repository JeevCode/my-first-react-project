import logo from './logo.svg';
import './App.css';
import FooterText from './FooterText';

function App() {
  const newTitle = 'First line of code comes here';
  const nextLine = ' Second line of TEXT comes here';
  const size = 12+(15*25);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and {newTitle} = {size}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FooterText FooterSize={size} Text={nextLine}/>
        
      </header>
    </div>
  );
}

export default App;
