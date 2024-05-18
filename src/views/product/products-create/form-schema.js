import * as Yup from 'yup'

export const ProductSchema = Yup.object().shape({
	codePro: Yup.number().required('Le code produit est obligatoire'),
	idCategorie: Yup.number().required('La catégorie est obligatoire'),
	nomPro: Yup.string().required('Le nom du produit est obligatoire'),
	prix: Yup.number().required('Le prix est obligatoire'),
	qte: Yup.number().required('La quantité est obligatoire'),
	description: Yup.string().required('La description est obligatoire'),
	codeArrivage: Yup.string().required('Le code d\'arrivage est obligatoire'),
	actif: Yup.boolean().required('Le statut actif est obligatoire'),
	dateInsertion: Yup.date().required('La date d\'insertion est obligatoire'),
	prixAchat: Yup.number().required('Le prix d\'achat est obligatoire'),
	pourcentage: Yup.number().required('Le pourcentage est obligatoire'),
	promo: Yup.boolean().required('Le statut promo est obligatoire'),
	size1: Yup.number().required('La taille 1 est obligatoire'),
	size2: Yup.number().required('La taille 2 est obligatoire'),
	typeSize: Yup.number().required('Le type de taille est obligatoire'),
});