import { useState } from 'react';
import { Link } from "react-router-dom";


import OrderSummary from '../../src/components/cart/orderSummary';
import CheckoutSingleItem from '../../src/components/checkout/checkoutSingleItem';

import data from '../../public/data.json';


const TelephonePaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [passengerName, setPassengerName] = useState('');


  const handlePickupChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handlePassengerNameChange = (e) => {
    setPassengerName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const slicedProducts = data.products.slice(4, 5);

  return (
    <div className="container">

      <section>
        <div className="row">
          <div className="my-4">
            <h1>Mode de Paiement</h1>
            <h3>Paiement par OM/MOMO</h3> 
		      </div>
          <div className="col-12 col-lg-6 p-3 p-md-5 bg-gray-100">

          <div className="form-group">
            <label htmlFor="pickupLocation">Lieu de prise en charge :</label>
            <input
              type="text"
              className="form-control"
              id="pickupLocation"
              value={pickupLocation}
              onChange={handlePickupChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination :</label>
            <input
              type="text"
              className="form-control"
              id="destination"
              value={destination}
              onChange={handleDestinationChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passengerName">Nom du passager :</label>
            <input
              type="text"
              className="form-control"
              id="passengerName"
              value={passengerName}
              onChange={handlePassengerNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Numéro de téléphone :</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Montant à payer (Fcfa) :</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <Link to="/confirmation">
          <button type="button" className="btn btn-primary" >
            Confirmer le paiement
          </button>
          </Link>
            
          </div>

          <div className="col-12 col-lg-6 p-3 p-md-5 bg-dark bg-gradient rounded-end">
            {slicedProducts.map((product) => 
              <CheckoutSingleItem
                key={product.id} // Ajoutez une clé unique pour chaque voyage
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                title={product.title}
                price={product.price}
              />
            )}
            <OrderSummary 
              subtotal={slicedProducts.reduce((total, product) => total + product.price, 0)} 
              textColor="white" 
            />
          </div>

        </div>
      </section>
      
    </div>
  );
}

export default TelephonePaymentForm;
