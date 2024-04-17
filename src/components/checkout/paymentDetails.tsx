export default function OrderSummary() {
  return (
    <>
      <div className="form-group">
        <label>Numéro de Carte</label>
        <input type="text" className="form-control" placeholder="Entrez votre Numéro" />
      </div>
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Date d'expiration  (MM/AA)</label>
            <input type="text" className="form-control" placeholder="Entrez la date" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Code de Vérification</label>
            <input type="text" className="form-control" placeholder="_   _   _   _   _   _   _   _" />
          </div>
        </div>
      </div>
    </>
  );
}