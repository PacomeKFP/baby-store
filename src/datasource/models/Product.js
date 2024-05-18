class Product {
	constructor({
		            codePro = 0,
		            nomPro = "",
		            prix = 0,
		            qte = 0,
		            description = "",
		            codeArrivage = "",
		            actif = 0,
		            idCategorie = 0,
		            dateInsertion = "",
		            prixAchat = 0,
		            pourcentage = 0,
		            promo = 0,
		            size1 = 0,
		            size2 = 0,
		            typeSize = 0,
	            } = {}) {
		this.codePro = codePro === 0 ? Math.round(Math.random()*6060616) : codePro;
		this.nomPro = nomPro;
		this.prix = prix;
		this.qte = qte;
		this.description = description;
		this.codeArrivage = codeArrivage;
		this.actif = actif;
		this.idCategorie = idCategorie;
		this.dateInsertion = dateInsertion;
		this.prixAchat = prixAchat;
		this.pourcentage = pourcentage;
		this.promo = promo;
		this.size1 = size1;
		this.size2 = size2;
		this.typeSize = typeSize;
	}
}

export default Product;
