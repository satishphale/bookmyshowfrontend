import logo from './logo.svg';
import './App.css';
import EventsPage from './Services/api';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <EventsPage></EventsPage>
          </p>
        </a>
      </header>
    </div>
  );
}

export default App;
