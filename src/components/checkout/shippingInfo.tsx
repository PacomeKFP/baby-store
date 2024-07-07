

export default function OrderSummary() {

  return (
    <>
      <div className="form-group">
        <label>Addresse</label>
        <input type="text" className="form-control" placeholder="Entrez votre addresse" />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>Ville</label>
            <input type="text" className="form-control" placeholder="Entrez votre ville" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Pays</label>
            <input type="text" className="form-control" placeholder="Entrez votre Pays" />
          </div>
        </div>
       <div className="col-4">
          <div className="form-group">
            <label>Numéro de téléphone</label>
            <input type="text" className="form-control" placeholder="Numéro de téléphone" />
          </div>
        </div> {/* */}
      </div>
    </>
  );
}