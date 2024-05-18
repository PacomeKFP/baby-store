import React from 'react';
import {Box, Button, TextField, Grid} from "@mui/material";
import {useLoaderData, useNavigate} from "react-router-dom";
import {IconProgressCheck, IconRecycle} from "@tabler/icons-react";
import FormModal from "@ui-component/modals/form-modal.jsx";
import CategoriesRepository from "@src/datasource/repositories/categories-repository.js";

CategoryCreate.propTypes = {};


function CategoryCreate() {

	const navigate = useNavigate();

	/**
	 * Method used to submit the form
	 * @param {React.SyntheticEvent<FormDataEvent>} e theme customization object
	 */
	const handleSubmit = (e) => {

		e.preventDefault();
		const data = {}
		const form = new FormData(e.currentTarget);
		form.forEach((v, k) => data[k] = v);

		CategoriesRepository.save(data.nomCat, () => navigate('/categories'))
	}

	return (
		<FormModal
			title={"Créer une nouvelle Categorie"}
			label={"Entrez les informations relatives à la nouvelle categorie"}
		>
			<form onSubmit={handleSubmit}>
				<Grid sx={{mt: 2}}>
					<TextField sx={{width: '100%'}} name={"nomCat"} label="Nom de la categorie" variant="outlined"/>
				</Grid>

				<Box sx={{mt: 2, display: "flex", justifyContent: "space-between"}}>
					<Button variant="text" color="error" type={"reset"}>
						Réinitialiser &nbsp; <IconRecycle/>
					</Button>

					<Button variant="outlined" color="primary" type={"submit"}>
						Créer la categorie &nbsp; <IconProgressCheck color={"#00abfb"}/>
					</Button>
				</Box>
			</form>
		</FormModal>
	);


}

export default CategoryCreate;