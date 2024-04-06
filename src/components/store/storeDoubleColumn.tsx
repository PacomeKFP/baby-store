export default function StoreNavigationDoubleColumn() {
  return (
    <>
    <div className="row mt-5">
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <h6 className="w-100 pb-3 border-bottom">Services</h6>
        <div className="d-flex pt-2">
          <ul className="nav flex-column ms-n3">
          
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                La livraison
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Retour ou Echange
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Ventes
              </a>
            </li>
          </ul>
          <ul className="nav flex-column ms-6 ms-md-11 ms-lg-10">
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Informations produits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Paiement
              </a>
            </li>
            
          

          </ul>
        </div>
      </div>
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <h6 className="w-100 pb-3 border-bottom">Categories</h6>
        <div className="d-flex pt-2">
          <ul className="nav flex-column ms-n3">
           {/* <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Tops
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Designers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Tops
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Collection
              </a>
  </li> */}
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Texture
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
              Vetements Enfants
              </a>
            </li>
          </ul>
          <ul className="nav flex-column ms-6 ms-md-11 ms-lg-10">
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
              chaussures
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link text-body text-sm" href="#" target="_blank">
                Vetements Adultes
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    </>
  );
};
