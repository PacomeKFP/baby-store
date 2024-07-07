

import CategoryFilters from '../components/products/categoryFilters';

/*
* La page qui affiche la liste des 
*  differntes propositions de taxi
*/

export default function ProductListPage() {
	return <main>
   
    <div className="my-4">
      <CategoryFilters title="Listes des Placements" />  
    </div>
   
  </main>
}