import CheckoutOrderSummary from '../components/checkout/checkoutOrderSummary';
import data from '../../public/data.json';

/*
* La page pour le paiement.
*  */

export default function CheckoutPage() {

let cartItems = [];
	data.shoppingCart.map(id => data.products.filter(x => x.id == id).map(x => cartItems.push(x)))
	return <>
		<div className="my-1">
			<h3>Mode de Paiement</h3>
			<p>Resumer de commande</p>
			<CheckoutOrderSummary
				products={cartItems} textColor={''}			/>
		</div>
	</>
}