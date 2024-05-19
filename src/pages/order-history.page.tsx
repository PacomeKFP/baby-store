/*
* La page qui affiche l'historique des commandes
* 
* j'ai eteint la rubrique statut de la partie produit d'en bas la
* */

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


<div className="my-3">
        <OrderHistory orders = {data.orders}
         products={orderHistoryProducts} />
      </div>



	</main>
}