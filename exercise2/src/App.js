
import './App.css';
import NavBar from './components/NavBar';
import SimpleCard from './components/SimpleCard';

function App() {

  const url = "https://picsum.photos/id/237/300";
  const alt = "dog";

  return (
    <>
    {/*<img src={url} alt={alt} /> */}
    <h1 style = {{
      color: "white",
    }}>Hello world</h1>
    </>
  );
}

export default App;
