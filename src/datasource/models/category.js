export default class Category {
	constructor(idCat, nomCat) {
		this.idCat = idCat;
		this.nomCat = nomCat;
	}

	// Méthode pour obtenir une représentation textuelle de la catégorie
	toString() {
		return `Categorie [ID: ${this.idCategorie}, Nom: ${this.nomCategorie}]`;
	}
}

