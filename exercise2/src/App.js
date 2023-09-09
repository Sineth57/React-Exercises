
import './App.css';
import NavBar from './components/NavBar';
import Product from './components/Product';
import SimpleCard from './components/SimpleCard';

function App() {

   return (
    <>
   
   <h1>My Products</h1>
   <Product name="Apple" price={120} description="svdhbf"/>
   <Product name="Banana" price= {345} description="svdhbf"/>
   <Product name="Mango" price= {456} description="s5656bf"/>
   <Product name="Graps" price= {676} description="svdhbf"/>
   <Product name="Avacado" price= {346} description="svdhbf"/>
           
    </>
  );
}

export default App;
