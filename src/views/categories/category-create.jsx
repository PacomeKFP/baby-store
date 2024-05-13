import React from 'react';
import {Box, Button, Card, CardHeader, Modal, Typography, TextField, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {IconCheck, IconProgressCheck, IconRecycle} from "@tabler/icons-react";
import {toast} from "sonner";
import FormModal from "@ui-component/modals/form-modal.jsx";

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

		console.log(data)

		toast.success("Categorie Crée !", {description: `La categorie <strong>${data.nomCat}</strong> a été crée avec success`});
		navigate("/categories");
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