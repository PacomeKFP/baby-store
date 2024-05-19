import React, { useState } from 'react';

const CategorySelection = () => {
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
  );
};

export default CategorySelection;
