

import data from '../../public/data.json';
import CardCategory from '../components/products/cardCategory';
import ProductFeature from '../components/products/productFeature';
import PromoSectionLarge from '../components/promo/promoSectionLarge';


import { Link } from "react-router-dom";


export default function HomePage() {
	return <main>
   
    <PromoSectionLarge 
      title={"Nous vous souhaitons deja un bon Voyage"}
      full_description={data.products[0].full_description}  
      pageHeaderBgImg={"../images/bg2.jpg"}
      pageHeaderMinVh="90vh"
    />

    <div className="row mb-8">
      <div className="d-block text-center mb-5">
        <h3>Une offre de voyage pour chacun</h3>
        <a className="text-dark font-weight-bold">Dites-nous comment vous aimerez voyager et nous trouverons la vôtre. &#62;</a>
      </div>

      {data.categories.slice(0, 4).map(category => 
        <div className="col-md-6 col-lg-3">
          <Link to="/placements">
            <CardCategory thumb_src = {category.thumb_src} title = {category.title} />
          </Link>
        </div>
      )} 

    </div>

    <div className="my-5">

    <ProductFeature
      title="Pourquoi utiliser l'appli Voyages ?"
      images={data.products[2].images}
      full_description="Nous presentons nos meillleurs services."
      featuresDetails={data.products[0].featuresDetails} />
      
    </div>
   
  </main>
}