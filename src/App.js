import {useState} from  "react";
import { v1 as generateUniqueID } from "uuid";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import BirdBoard from "./Components/BirdBoard";
import Checkout from "./Components/Checkout";
import "./App.css"

function App () {
  const [ birds, setBirds ] = useState([]);
  const [ selectOption, setSelectOption ] = useState("");
  const [ cartContent, setCartContent] = useState( [] );

  

//this function will add a bird to all the birds, which we don't need. We DO need it to add birds to the cart, so should it be there? When this function is triggered, a new constant is created (addBird). addBird is an object in which most fields are populated by information in birdData from birds.js which has been imported. But instead of adding a new bird to the list, I am creating a copy of a bird to put in the cart. Is there a way to use the spread operator instead, where addBird = ...??
  function adoptBird(){
    const addBird = {
      id: birdData.id,
      newID:  generateUniqueID(),
      name: birdData.name,
      amount: birdData.amount,
      image: birdData.img || "https://loremflickr.com/640/480/",
      };
      //console.log("addBird in function", addBird)
      handleAdoptBird(addBird);
    }
    
  //handleAdoptBird (was handleAddBird) function will detonate upon clicking of the button the bird. 
  function handleAdoptBird(e) {
    setBirds([birds, ...birds]);
    //console.log("birds", birds)
  }  

//adoptBird()

  return (
    <div>
      <header>
        <h1>Hello, world!</h1>
      </header>

      <p>Here is the cart component:  </p>
        <Cart />
      <p>Here is the BirdBoard component</p>
        <BirdBoard />
      <p> Here is the Checkout component:</p>
        <Checkout />
      <footer className="footer">after these messages, we'll be right back</footer>
    </div>
  );
};

export default App;
