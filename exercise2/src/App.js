
import './App.css';
import NavBar from './components/NavBar';
import SimpleCard from './components/SimpleCard';

function App() {

 const person = {
  name: "kamal",
  age: 23,
 }
  
  
  return (
    <>
   
    <h1 style = {{
      color: "white",
    }}>Hello  {person.name}, I am {person.age} years old.

    </h1>

       
    </>
  );
}

export default App;
