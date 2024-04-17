import ShoppingCart from "../components/cart/shoppingCart";
import data from '../../public/data.json';

/*
* La page qui permettra de visualiser le panier de l'utilisateur.
*  */


export default function ShoppingBasket() {
	let cartItems = [];
	data.shoppingCart.map(id => data.products.filter(x => x.id == id).map(x => cartItems.push(x)))



	return <>
		<div className="my-0">
			<ShoppingCart
				products={cartItems}
			/>
		</div>

	</>
}