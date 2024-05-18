import HttpClient from "@src/datasource/http-client.js";
import {toast} from "sonner";

export default class AuthRepository {
	static async login(email, password, successCallback) {
		const promise = HttpClient.post("/login", {email, password})
		toast.promise(promise, {
			loading: 'Connexion en cours',
			success: (data) => {
				successCallback()
				console.log(data.data)


				/** TODO: Sauvegarder le token en storage et ajouter au HttpClient */

					// forme du resultat
				const res = {
						"user": {
							"id": 101,
							"name": "pacome",
							"email": "admin@gmail.com",
							"email_verified_at": null,
							"created_at": "2024-05-15T09:46:25.000000Z",
							"updated_at": "2024-05-15T09:46:25.000000Z"
						},
						"token": "10|LLR5b2aicUkzXbYR5N44L9tMl3QHpOFY6v7kFvs834b990b9"
					}
				return "Connexion effectuée avec succes"
			},
		})

	}
}

// login result form
/*

toast.promise(promise, {
			loading: 'Connexion en cours',
			success: (data) => {
				successCallback()
				console.log(data.data)
				return "Connexion effectuée avec succes"
			},
		})

* */