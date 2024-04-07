
import data from '../../public/data.json';
import CardProduct from '../components/products/cardProduct';

/*
* La page qui affiche la liste des produits
*  */
export default function ProductListPage() {
	return <main>
   
   <div className="container mt-5">
      <h3>Listes des produits </h3>
      <p>Tous nos produits</p>
      <div className="row mt-5">
        {data.products.map(product =>
          <div className="col-md-6 col-lg-3">
            <CardProduct 
              thumb_src = {product.thumb_src}
              thumb_alt = {product.thumb_alt}
              color = {product.color}
              
              title = {product.title}
              description = {product.description}
              price = {product.price}
              position = "center"
            />
          </div>
        )}        
    </div>
	</div>
   
  </main>
}