

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
      <h3 className="mb-0">Historique des souscrptions</h3>
      <h5 className="mb-5"> Suivez vos recentes reservations et modifications.</h5>
      {orderHistoryCards}
    </div>
    </>
    
  );
}