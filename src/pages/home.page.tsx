/*
* La page d'acceuil de l'application web.

* j'ai modifier les textes en francais et j'ai adapté le data.json
*  j'ai changé le style de la Section categories par rapport a la derniere fois
*  mais les photos de la Section categories ont un problemes
*/


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

      <div className="row mb-8">
        <div className="d-block text-center mb-5">
        <h3>Nos categories</h3>
          <a className="text-dark font-weight-bold" href="#">Découvrir nos categories &#62;</a>
        </div>
        {data.categories.slice(0, 4).map(category => 
          <div className="col-md-6 col-lg-3">
            <CardCategory
              thumb_src = {category.thumb_src}
              title = {category.title}
              collection = {category.collection}
            />
          </div>
        )}
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