
import { Link } from 'react-router-dom';
import './succes_page.css'; // Importer le fichier CSS

const PaymentConfirmation = () => {
  return (
    <section className="payment-confirmation">
      <div className="container text-center">
        <div className="success-icon-container">
          <div className="success-icon">
            <div className="checkmark">
              <div className="checkmark-circle"></div>
              <div className="checkmark-stem"></div>
              <div className="checkmark-kick"></div>
            </div>
          </div>
        </div>
        <h2 className="mb-4 fade-in-text">Paiement effectué avec succès !</h2>
        <p className="mb-4 fade-in-text">Merci pour votre achat. Votre commande a été confirmée.</p>
        <Link to="/orders" className="btn btn-primary btn-animated">
          Voir mes commandes
        </Link>
      </div>
    </section>
  );
};

export default PaymentConfirmation;
