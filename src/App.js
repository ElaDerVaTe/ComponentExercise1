import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([{name:'Shoes', price:300, img:''}, {name:'Pents', price:100, img:''}, {name:'Shirt', price:150, img:''}])

  return (
    <div className="App">
      {
        data.map((item) =>{
          return <Product name={item.name} price={item.price} image={item.img}/>
        })
      }

    </div>
  );
}

export default App;
