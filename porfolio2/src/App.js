import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Skills from './Components/Skills';
import Technology from './Components/Technology';
import Experience from './Components/Experience';
import OthersSay from './Components/OthersSay';
import Commercial from './Components/Commercial';
import Experiments from './Components/Experiments';
import Contact from './Components/Contact';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Main></Main>
    <Skills></Skills>
    <Technology></Technology>
    <Experience></Experience>
    <OthersSay></OthersSay>
    <Commercial></Commercial>
    <Experiments></Experiments>
    <Contact></Contact>
    </>
  );
}

export default App;
