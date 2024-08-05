import logo from './logo.svg';
import './App.css';
import { CssBaseline } from '@mui/material';
import Navbar from './Component/Navbar';
import MenuBar from './Component/MenuBar';
import { Container } from './Component/Container';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Container />
    </div>
  );
}

export default App;
