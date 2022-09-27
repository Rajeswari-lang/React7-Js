import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <SignIn/>
    <SignUp/>
    </div>
  );
}

export default App;
