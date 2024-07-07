import data from '../../../public/data.json';
import CardProduct from '../products/cardProduct';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


interface Props {
  title: string;
}



export default function ProductOverview({
  title,
}: Props) {

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [products, setProducts] = useState(data.products);
  
    const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
    };
  
    const sortByPrice = (order: string) => {
      const sortedProducts = [...products].sort((a, b) => {
        if (order === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setProducts(sortedProducts);
    };
  
    useEffect(() => {
      if (selectedCategory === 'Prix croissant') {
        sortByPrice('asc');
      } else if (selectedCategory === 'Prix décroissant') {
        sortByPrice('desc');
      }
    }, [selectedCategory]);

    const categories = ['Prix croissant', 'Prix décroissant'];
    
    const [checkedItems, setCheckedItems] = useState({
      tout: false,
      plage: false,
      montagne: true,
      ville: false,
      aventure: false,
      relaxation: false,
      culture: false,
    });
  
    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      if (id === 'tout') {
        setCheckedItems({
          tout: checked,
          plage: checked,
          montagne: checked,
          ville: checked,
          aventure: checked,
          relaxation: checked,
          culture: checked,
        });
      } else {
        setCheckedItems((prevState) => ({
          ...prevState,
          [id]: checked,
          tout: checked && Object.keys(prevState).every((key) => key === 'tout' || prevState[key]),
        }));
      }
    };
    

    return (

      <>
      <div className="card card-product card-plain">
          <div className="d-flex border-bottom pb-3">
              {(title.length != 0) &&   <h2 className="mb-3">{title}</h2> }
              <div className="d-flex ms-auto align-items-center">
                  <div className="dropdown">
      
                      {/* la partie qui creee le bouton de recherche la */}
      
                      <div className="input-group">
                          <span className="input-group-text">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="opacity-8">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                              </svg>
                          </span>
                          <input type="text" className="form-control max-width-200" placeholder="Rechercher" onfocus="focused(this)" onfocusout="defocused(this)" />
                      </div>
      
      
                      <button
                          className="btn btn-link text-dark mb-2 dropdown-toggle"
                          type="button"
                          id="selectedCategory"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          >
                          Trier
                      </button>
      
                      {selectedCategory && (
                      <div id="displayCategory" className="mt-2">
                          {selectedCategory}
                      </div>
                      )}
      
                      <ul className="dropdown-menu" aria-labelledby="selectedCategory">
                          {categories.map((category, index) => (
                          <li key={index}>
                              <button
                                  className="dropdown-item"
                                  onClick={
                                  () => handleCategoryClick(category)}
                                  >
                                  {category}
                              </button>
                          </li>
                          ))}
                      </ul>
                  </div>   
              </div>
          </div>

          <div className="row mt-5">
              <div className="col-12 col-md-4">
      
                  <div className="accordion" id="accordionArrivals">
                      <div className="accordion-item">
                          <div className="col-md-4 mb-3">
                              <div className="card">
                                  <div className="card-body">
                                      <div className="d-flex flex-column align-items-center text-center mt-3">
                                          <button className="btn btn-primary">Aller-retour</button>
                                          <button className="btn btn-outline-primary">Aller simple</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <h5 className="accordion-header" id="headingThree">
                              <button
                                  className="accordion-button border-bottom border-top font-weight-bold py-4"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                  >
                                  Catégories
                                  <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                                  <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                              </button>
                          </h5>
      
                          <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionArrivals"
                              >  
                              <div className="accordion-body text-sm opacity-8">
                                  <div className="form-check justify-content-start">
                                      <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          id="tout"
                                          checked={checkedItems.tout}
                                          onChange={
                                          handleCheckboxChange}
                                          />
                                      <label className="custom-control-label mb-0" htmlFor="tout">Tout</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          id="plage"
                                          checked={checkedItems.plage}
                                          onChange={
                                          handleCheckboxChange}
                                          />
                                      <label className="custom-control-label mb-0" htmlFor="plage">Plage</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          id="montagne"
                                          checked={checkedItems.montagne}
                                          onChange={
                                          handleCheckboxChange}
                                          />
                                      <label className="custom-control-label mb-0" htmlFor="montagne">Montagne</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          id="ville"
                                          checked={checkedItems.ville}
                                          onChange={
                                          handleCheckboxChange}
                                          />
                                      <label className="custom-control-label mb-0" htmlFor="ville">Ville</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          id="aventure"
                                          checked={checkedItems.aventure}
                                          onChange={
                                          handleCheckboxChange}
                                          />
                                      <label className="custom-control-label mb-0" htmlFor="aventure">Aventure</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          id="relaxation"
                                          checked={checkedItems.relaxation}
                                          onChange={
                                          handleCheckboxChange}
                                          />
                                      <label className="custom-control-label mb-0" htmlFor="relaxation">Relaxation</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input
                                          className="form-check-input me-2"
                                          type="checkbox"
                                          id="culture"
                                          checked={checkedItems.culture}
                                          onChange={
                                          handleCheckboxChange}
                                          />
                                      <label className="custom-control-label mb-0" htmlFor="culture">Culture</label>
                                  </div>
                              </div>
                          </div>
                      </div>
      
      
                      <div className="accordion-item">
                          <h5 className="accordion-header" id="headingFifth">
                              <button className="accordion-button border-bottom font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                                  Lieux de D'Arrivée
                                  <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                                  <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                              </button>
                          </h5>
                          <div id="collapseFifth" className="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionArrivals">
                              <div className="accordion-body text-sm opacity-8">
                                  <div className="form-check justify-content-start">
                                      <input className="form-check-input me-2" type="checkbox" id="douala" />
                                      <label className="custom-control-label mb-0" htmlFor="douala">Douala</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input className="form-check-input me-2" type="checkbox" id="yaounde" />
                                      <label className="custom-control-label mb-0" htmlFor="yaounde">Yaoundé</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input className="form-check-input me-2" type="checkbox" id="bamenda" />
                                      <label className="custom-control-label mb-0" htmlFor="bamenda">Bamenda</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input className="form-check-input me-2" type="checkbox" id="bafoussam" />
                                      <label className="custom-control-label mb-0" htmlFor="bafoussam">Bafoussam</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input className="form-check-input me-2" type="checkbox" id="garoua" />
                                      <label className="custom-control-label mb-0" htmlFor="garoua">Garoua</label>
                                  </div>
                                  <div className="form-check justify-content-start">
                                      <input className="form-check-input me-2" type="checkbox" id="maroua" />
                                      <label className="custom-control-label mb-0" htmlFor="maroua">Maroua</label>
                                  </div>
      
                              </div>
                          </div>
                      </div>

                      <Link to="/mode_de_paiement">
                        <button className="btn btn-outline-dark btn-lg w-100" >
                        CONFIRMER
                        </button>
                    </Link>

                  </div>
              </div>
              
              <div className="col-12 col-md-8">
                    <div className="d-flex h-100">
                        <div className="row">
                            {products.slice(3, 7).map((product) => (
                            <div className="col-md-6 col-lg-4" key={product.title}>
                                <CardProduct
                                thumb_src={product.thumb_src}
                                thumb_alt={product.thumb_alt}
                                color={product.color}
                                colors={product.colors}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                position="center" /> 
                            </div> ))}
                        </div>
                  </div>
              </div>
          </div>
      </div>
      </>
      );
      }
      