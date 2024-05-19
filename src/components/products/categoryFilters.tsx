import data from '../../../public/data.json';
import CardProduct from '../products/cardProduct';
import { useState } from 'react';


interface Props {
  title: string;
}



export default function ProductOverview({
  title,
}: Props) {

 const [selectedCategory, setSelectedCategory] = useState('');
  
    const categories = [
      'Ordre alphabetique croissant',
      'Ordre alphabetique décroissant',
      'Prix croissant',
      'Prix décroissant'
    ];
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };


    const [checkedItems, setCheckedItems] = useState({
      tout: false,
      hommes: false,
      femmes: true, // Par défaut, "Femmes" est cochée
      solde: false,
      collectionPermanente: false,
      nouveaute: false,
    });
  
    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      if (id === 'tout') {
        setCheckedItems({
          tout: checked,
          hommes: checked,
          femmes: checked,
          solde: checked,
          collectionPermanente: checked,
          nouveaute: checked,
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
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
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
                      Trier  {/* &#62; */}
            </button>

                          {selectedCategory && ( <div id="displayCategory" className="mt-2"> {selectedCategory} </div> )}                        

            <ul className="dropdown-menu" aria-labelledby="selectedCategory">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleCategoryClick(category)}
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
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label mb-0" htmlFor="tout">Tout</label>
          </div>
          <div className="form-check justify-content-start">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="hommes"
              checked={checkedItems.hommes}
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label mb-0" htmlFor="hommes">Hommes</label>
          </div>
          <div className="form-check justify-content-start">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="femmes"
              checked={checkedItems.femmes}
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label mb-0" htmlFor="femmes">Femmes</label>
          </div>
          <div className="form-check justify-content-start">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="solde"
              checked={checkedItems.solde}
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label mb-0" htmlFor="solde">Solde</label>
          </div>
          <div className="form-check justify-content-start">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="collectionPermanente"
              checked={checkedItems.collectionPermanente}
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label mb-0" htmlFor="collectionPermanente">Collection Permanente</label>
          </div>
          <div className="form-check justify-content-start">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="nouveaute"
              checked={checkedItems.nouveaute}
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label mb-0" htmlFor="nouveaute">Nouveauté</label>
          </div>
        </div>
      </div>
    </div>

            {/*}  <div className="accordion-item">
                <h5 className="accordion-header" id="headingFour">
                  <button className="accordion-button border-bottom font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Matières
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionArrivals">
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck7" />
                      <label className="custom-control-label mb-0">Cotton</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck8" />
                      <label className="custom-control-label mb-0">Leather</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck9" checked />
                      <label className="custom-control-label mb-0">Chiffon</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck10" />
                      <label className="custom-control-label mb-0">Crepe</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck11" />
                      <label className="custom-control-label mb-0">Denim</label>
                    </div>
                  </div>
                </div>
              </div> */}
              
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFifth">
                  <button className="accordion-button border-bottom font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                    Tailles
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
                <div id="collapseFifth" className="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionArrivals">
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize1" />
                      <label className="custom-control-label mb-0">XXS</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize2" />
                      <label className="custom-control-label mb-0">XS</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize3" />
                      <label className="custom-control-label mb-0">S</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize4" />
                      <label className="custom-control-label mb-0">M</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize5" />
                      <label className="custom-control-label mb-0">L</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize6" />
                      <label className="custom-control-label mb-0">XL</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customSize7" />
                      <label className="custom-control-label mb-0">XXL</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex h-100">
              <div className="row">
                {data.products.slice(0, 6).map(product => 
                  <div className="col-md-6 col-lg-4">
                    <CardProduct 
                      thumb_src = {product.thumb_src}
                      thumb_alt = {product.thumb_alt}
                      color = {product.color}
                      colors = {product.colors}
                      title = {product.title}
                      description = {product.description}
                      price = {product.price}
                      position = "center"
                    />
                  </div>
                )}        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
