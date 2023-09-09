
import './App.css';
import NavBar from './components/NavBar';
import Product from './components/Product';
import SimpleCard from './components/SimpleCard';

function App() {

   return (
    <>
   
   <h1>My Products</h1>
   <Product name="Apple" price={120}/>
   <Product name="Banana" price= {345}/>
   <Product name="Mango" price= {456}/>
   <Product name="Graps" price= {676}/>
   <Product name="Avacado" price= {346}/>
           
    </>
  );
}

export default App;
