import HttpClient from "@src/datasource/http-client.js";
import {toast} from "sonner";

export default class CategoriesRepository {
	static async getAll() {
		const a = await HttpClient.get("/api/categories");
		console.log(a)
		return a;
	}

	static save(nomCat, callback) {
		const promise = HttpClient.post("/api/categories", {idCat: 0, nomCat});


		toast.promise(promise, {
			loading: "Sauvegarde de la categorie",
			success: (response) => {
				callback()
				return `La categorie <b>${response.data.nomCat}</b> a été crée avec success`

			}
		});
	}

	static update(idCat, nomCat, callback) {
		const promise = HttpClient.patch(`/api/categories/${idCat}`, {idCat, nomCat});


		toast.promise(promise, {
			loading: "Mise à jour de la categorie",
			success: (response) => {
				callback()
				return `La categorie ${response.data.nomCat} a été mise à jour`

			}
		});
	}

	static delete(idCat, nomCat, callback) {
		const promise = HttpClient.delete(`/api/categories/${idCat}`);


		toast.promise(promise, {
			loading: "Suppression de la categorie",
			success: (response) => {
				callback()
				return `La categorie ${response.data.nomCat} a été supprimée`

			}
		});
	}
}
