
import './App.css';
import MyButton from './components/MyButton';
import NavBar from './components/NavBar';
import Product from './components/Product';
import SimpleCard from './components/SimpleCard';
import TodoList from './components/TodoList';

function App() {

  const handleClick = () => {

  }

  const handleMyButtonClick = () => {

  }

   return (
    <>
   
     <button onClick={handleClick()}>Click Me</button>
     <br/>
     <MyButton onClick={handleMyButtonClick}/>
           
    </>
  );
}

export default App;
