import HttpClient from "@src/datasource/http-client.js";
import {toast} from "sonner";

export default class ProductsRepository {
	static  basePath = "/api/products";
	static getAll() {
		return HttpClient.get(ProductsRepository.basePath);
	}

	/**
	 *
	 * @Param {Product} product
	 * @param {(product: Product)=>void} callback
	 **/
	static save(product, callback) {
		const promise = HttpClient.post(ProductsRepository.basePath, product);


		toast.promise(promise, {
			loading: "Sauvegarde du produit",
			success: (response) => {
				callback(response.data)
				return `Le produit <b>${response.data.nomPro}</b> a été sauvegardé avec success`

			}
		});
	}

	static update(idCat, nomCat, callback) {
		const promise = HttpClient.patch(`${ProductsRepository.basePath}/${idCat}`, {idCat, nomCat});


		toast.promise(promise, {
			loading: "Mise à jour du produit",
			success: (response) => {
				callback()
				return `La categorie ${response.data.nomCat} a été mise à jour`

			}
		});
	}

	static delete(idCat, nomCat, callback) {
		const promise = HttpClient.delete(`${ProductsRepository.basePath}/${idCat}`);


		toast.promise(promise, {
			loading: "Suppression de la categorie",
			success: (response) => {
				callback()
				return `La categorie ${response.data.nomCat} a été supprimée`

			}
		});
	}
}
