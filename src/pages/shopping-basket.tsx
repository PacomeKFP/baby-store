import ShoppingCart from "../components/cart/shoppingCart";
import data from '../../public/data.json';
import ShoppingCart2 from "../components/cart/shoppingCart2";



/*
* La page qui permettra de visualiser le panier de l'utilisateur.
*  */
export default function ShoppingBasket() {
	let cartItems = [];
	data.shoppingCart.map(id => data.products.filter(x => x.id == id).map(x => cartItems.push(x)))
	
	let cartItems2 = [];
data.shoppingCart2.map(id => 
  data.products.filter(x => x.id == id).map(x => cartItems2.push(x)))
  
	return <>
	<div className="my-0">
        <ShoppingCart
          products = {cartItems}
        />
      </div>

	  <div className="my-0">
        <ShoppingCart2
          products = {cartItems2}
        />
      </div>
	  </>
}