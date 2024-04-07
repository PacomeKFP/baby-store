/*
* La page qui affiche l'historique des commandes
*  */

import OrderHistory from '../components/order/orderHistory';
import data from '../../public/data.json';

const orderHistoryProducts = new Set();

data.orders.forEach((order) => {
  order.products.forEach(productDetails => {
    data.products.forEach(product => {
      if (product.id == productDetails.id) {
        orderHistoryProducts.add(product);
      }
    });
  })
})


export default function OrderHistoryPage() {
	return <main>


<div className="my-10">
        <OrderHistory orders = {data.orders} products={orderHistoryProducts} />
      </div>



	</main>
}