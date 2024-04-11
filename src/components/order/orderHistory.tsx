/* eslint-disable @typescript-eslint/no-unused-vars */


import OrderHistoryCard from './orderHistoryCard';

interface ProductsProps {
  orders: {
    orderNumber: string,
    products: 
    {
      id: string,
      status: string,
      quantity: number
    }[],
    address: string,
    email: string,
    date: string,
    payment: {
      cardNumber: string;
      expiringDate: string;
    },
    phoneNumber: string,
  }[];
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  })[];
}

export default function OrderHistory({
  orders,
  products
}: Props) {

  const orderHistoryCards = [];

  orders.forEach(order => {
    const orderProducts = [];

    order.products.forEach(productDetails => {
      products.forEach(product => {
        if (product.id == productDetails.id) {
          orderProducts.push(product);
        }
      });
    })
    orderHistoryCards.push(<OrderHistoryCard order={order} products={orderProducts} />)
  });
  return (

    <>
    <div>
      <h3 className="mb-0">Historique des ventes</h3>
      <p className="mb-5">Suivez vos recents achacts et modifications.</p>

      {orderHistoryCards}
    </div>
    </>
    
  );
};