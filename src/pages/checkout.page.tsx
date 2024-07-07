import CheckoutOrderSummary from '../components/checkout/checkoutOrderSummary';
import data from '../../public/data.json';

/*
* La page pour le paiement.
*  */

export default function CheckoutPage() {

	let cartItems = [];
	data.shoppingCart.map(id => data.products.filter(x => x.id == id).map(x => cartItems.push(x)))
	return <>
		<div className="my-4">
			<h1>Mode de Paiement</h1>
			<h3>Resumer de reservations</h3>
			<CheckoutOrderSummary products={cartItems}/>
		</div>
	</>
}