import React from 'react';
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import {toast} from "sonner";
import {Box, Button, Card, CardHeader, Grid, Modal, TextField, Typography} from "@mui/material";
import {IconProgressCheck, IconRecycle} from "@tabler/icons-react";
import FormModal from "@ui-component/modals/form-modal.jsx";


function ProductsCreate() {
	const navigate = useNavigate();
	const theme = useTheme();

	/**
	 * Method used to submit the form
	 * @param {React.SyntheticEvent<FormDataEvent>} e theme customization object
	 */
	const handleSubmit = (e) => {

		e.preventDefault();
		const data = {}
		const form = new FormData(e.currentTarget);
		form.forEach((v, k )=>data[k] = v);

		console.log(data)

		toast.success("Produit Créé !", {description: `Le produit <strong>${data.nomCat}</strong> a été crée avec success`});
		navigate("/categories");
	}

	return (
		<FormModal
			title={"Créer un produit"}
			label={"Entrez les informations relatives au produit"}
		>
			<form onSubmit={handleSubmit}>
				<Grid sx={{mt: 2}}>
					<TextField sx={{width: '100%'}} name={"nomCat"} label="Nom du produit" variant="outlined"/>
				</Grid>

				<Box sx={{mt: 2, display: "flex", justifyContent: "space-between"}}>
					<Button variant="text" color="error" type={"reset"}>
						Réinitialiser &nbsp; <IconRecycle/>
					</Button>

					<Button variant="outlined" color="primary" type={"submit"}>
						Créer le produit &nbsp; <IconProgressCheck color={"#00abfb"}/>
					</Button>
				</Box>
			</form>
		</FormModal>
	);
}

export default ProductsCreate;