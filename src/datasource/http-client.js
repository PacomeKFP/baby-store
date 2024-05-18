import axios from 'axios';
import {toast} from 'sonner'

export default class HttpClient {
	static serverURL = 'http://localhost:8000';
	static headers = {};
	static bearer=""
	static csrf = ""

	static axiosInstance = axios.create({
		baseURL: this.serverURL,
		headers: {
		},
	});

	constructor() {
		HttpClient.initializeUserId();
	}

	static initializeUserId() {
		const user = localStorage.getItem('currentUser');
		if (user === null)
			return;
		this.userId = (JSON.parse(user))._id;
	}

	static async get(url) {
		if (typeof url !== 'string' && this.userId === undefined) {
			this.initializeUserId();
			return toast.error('Aucun utilisateur connecté, la requête ne peut aboutir');
		}

		const path = typeof url === 'string' ? url : url(this.userId);

		try {
			const response = await HttpClient.axiosInstance.get(this.serverURL + path);
			return Promise.resolve(response.data);
		} catch (error) {
			HttpClient.errorHandler(error, path, 'GET');
		}
	}

	static async post(url, data, config) {
		try {
			let response;
			if (config)
				response = await HttpClient.axiosInstance.post(this.serverURL + url, data, config);
			else
				response = await HttpClient.axiosInstance.post(this.serverURL + url, data);

			return Promise.resolve(response);
		} catch (error) {
			HttpClient.errorHandler(error, url, 'POST');
			toast.info(error.response.data.message)

			return Promise.reject(error);
		}
	}

	static async patch(url, data) {
		try {
			const response = await HttpClient.axiosInstance.patch(this.serverURL + url, data);
			return Promise.resolve(response);
		} catch (error) {
			HttpClient.errorHandler(error, url, 'PATCH');
		}
	}

	static async put(url, data) {
		try {
			const response = await HttpClient.axiosInstance.put(this.serverURL + url, data);
			return Promise.resolve(response);
		} catch (error) {
			HttpClient.errorHandler(error, url, 'PATCH');
		}
	}
	static async delete(url) {
		try {
			const response = await HttpClient.axiosInstance.delete(this.serverURL + url);
			return Promise.resolve(response);
		} catch (error) {
			HttpClient.errorHandler(error, url, 'DELETE');
		}
	}

	static errorHandler(error, url, method) {
		toast.error(error.message || 'Une erreur est survenue');
		console.info(`[${method} on ${url}] une erreur est survenue pendant la requête`, error);
	}
}
