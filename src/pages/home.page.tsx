/*
* La page d'acceuil de l'application web.
*  */


import data from '../../public/data.json';
import CardCategory from '../components/products/cardCategory';
import ProductFeature from '../components/products/productFeature';
import PromoSectionLarge from '../components/promo/promoSectionLarge';



export default function HomePage() {
	return <main>
   
    <PromoSectionLarge 
      title={"Collection tendance du moment"}
      full_description={data.products[0].full_description}  
      pageHeaderBgImg={"../images/bg2.jpg"}
      pageHeaderMinVh="90vh"
    />
    <div className="container my-5">
      <div className="d-block text-center mb-5">
        <h3>Nos categories</h3>
        <a className="text-dark font-weight-bold" href="#">Découvrir nos categories &#62;</a>
      </div>

        <div className="col-md-6">
          <CardCategory
            classList="h-100"
            cta=""
            thumb_src={data.categories[4].thumb_src}
            title={data.categories[4].title} collection={''}          />
        </div>
        <div className="col-md-6">
          <div className="mb-4">
            <CardCategory
              classList=""
              cta=""
              thumb_src={data.categories[5].thumb_src}
              title={data.categories[5].title} collection={''}            />
          </div>
          <div className="">
            <CardCategory
              classList=""
              cta=""
              thumb_src={data.categories[6].thumb_src}
              title={data.categories[6].title} collection={''}            />
          </div>
        </div>
      </div>

    <PromoSectionLarge 
      title="Nouvelles collections"
      full_description={data.products[0].full_description2} 
      pageHeaderBgImg={"../images/bg1.jpg"} 
      pageHeaderMinVh="50vh"
      pageHeaderRadius="1rem"
    />
    <div className="my-5">
      <ProductFeature
        title="Quelques Produits"
        images={data.products[2].images}
        full_description="La boutique vous presente ses meillleurs produits."
        featuresDetails={data.products[0].featuresDetails}
      />
    </div>
   
  </main>
}