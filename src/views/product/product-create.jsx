import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {toast} from "sonner";
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {IconProgressCheck, IconRecycle} from "@tabler/icons-react";
import FormModal from "@ui-component/modals/form-modal.jsx";
import Product from "@src/datasource/models/Product.js";
import PropTypes from 'prop-types';
import ProductsRepository from "@datasource/repositories/products-repository.js";

ProductsCreate.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
	handleCreateProduct: PropTypes.func.isRequired,
}

function ProductsCreate({open, handleClose, handleCreateProduct, categories}) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {};
		const form = new FormData(e.currentTarget);
		form.forEach((v, k) => data[k] = v);

		const product = new Product(data)
		ProductsRepository.save(product, (pro)=>handleCreateProduct(pro))

	};

	return (
		<FormModal
			open={open}
			handleClose={handleClose}
			title={"Créer un produit"}
			label={"Entrez les informations relatives au produit"}
		>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2} sx={{mt: 2}}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							name="nomPro"
							label="Nom du produit"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="prix"
							label="Prix"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="qte"
							label="Quantité"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							name="description"
							label="Description"
							variant="outlined"
							rows={3}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="codeArrivage"
							label="Code Arrivage"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Categorie"
								name={"idCategorie"}
							>
								<MenuItem disabled><em>Choisissez la catégorie du produit</em> </MenuItem>
								{
									categories && categories.length > 0 ?
										categories.map((category, index) => (
											<MenuItem key={index} value={category.idCat}> {category.nomCat} </MenuItem>
										)) : "Aucune catégorie pour le moment veuillez en creer d'abord"
								}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="dateInsertion"
							label="Date d'insertion"
							variant="outlined"
							type={"date"}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="prixAchat"
							label="Prix d'achat"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="pourcentage"
							label="Pourcentage"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="typeSize"
							label="Type de Taille"
							variant="outlined"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="size1"
							label="Taille 1"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							name="size2"
							label="Taille 2"
							variant="outlined"
						/>
					</Grid>

				</Grid>
				<Box sx={{mt: 2, display: "flex", justifyContent: "space-between"}}>
					<Button variant="text" color="error" type="reset">
						Réinitialiser &nbsp; <IconRecycle/>
					</Button>
					<Button variant="outlined" color="primary" type="submit">
						Créer le produit &nbsp; <IconProgressCheck color={"#00abfb"}/>
					</Button>
				</Box>
			</form>
		</FormModal>
	);
}

export default ProductsCreate;
