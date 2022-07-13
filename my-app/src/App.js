import logo from './logo.svg';
import './App.css';
import Login from './componets/Login';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hottest song Each through 1950 to 2019
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=StB2WR4Hwdo"
        target="_blank"
        rel="noopener noreferrer"
        color="error">1st 1950s</Button>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=-eHJ12Vhpyc"
        rel="noopener noreferrer"
        color="success">2nd 1950s</Button>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=C_C9q4tuwXI"
        rel="noopener noreferrer"
        color="secondary">3rd 1950s</Button>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=Frw7U5X8dhg"
        rel="noopener noreferrer"
        color="error">1st 1960s</Button>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=B1wOK9yGUYM"
        rel="noopener noreferrer"
        
        color="success">2nd 1960s</Button>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=DGDyAb6pePo"
        rel="noopener noreferrer"
        color="secondary">3rd 1960s</Button>
        <Button variant="contained"
        href="https://www.youtube.com/watch?v=UlLX7a1QH8Y"
        rel="noopener noreferrer"
        color="secondary">1st 1970s</Button>
      </header> */}

      <Login></Login>
    </div>
  );
}

export default App;
