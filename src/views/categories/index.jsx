import {useState} from 'react';
import {Box, Typography, Grid, TextField, IconButton, Stack, Fab} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {Outlet, useLoaderData} from "react-router-dom";
import AddFab from "@ui-component/buttons/add-fab.jsx"; // Assurez-vous que ce composant est correctement importé
import CategoryCard from "@views/categories/components/cartegory-card.jsx";
import CategoryCreate from "./category-create.jsx";
import {IconPlus} from "@tabler/icons-react";

function CategoriesList() {
	const loadedCategories = useLoaderData();
	const [categories, setCategories] = useState(loadedCategories ? loadedCategories : []);
	const [searchTerm, setSearchTerm] = useState('');
	const [open, setOpen] = useState(false)

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleClearSearch = () => {
		setSearchTerm('');
	};

	const filteredCategories = searchTerm === "" ? categories : categories.filter(category =>
		category.nomCat.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const remover = (id) => setCategories(categories.filter(category => category.idCat !== id))


	const handleCreateCategory = (category) => {
		console.log("totoot")
		setCategories([...categories, {...category, produits: []}])
	}

	return (
		<Box sx={{flexGrow: 1}}>
			<Stack direction="row" alignItems="center" justifyContent={"space-between"} spacing={2} sx={{mb: 2}}>
				<Typography sx={{width: '40%'}} variant={'h2'}>Liste des categories</Typography>
				<Box sx={{width: '60%'}}>
					<TextField
						sx={{width: '80%'}}
						name="nomCat"
						label="Nom de la categorie"
						variant="outlined"
						value={searchTerm}
						onChange={handleSearchChange}
					/>
					{searchTerm && (
						<IconButton onClick={handleClearSearch}>
							<ClearIcon/>
						</IconButton>
					)}
				</Box>
			</Stack>
			<Grid container spacing={2}>
				{
					filteredCategories.map((item, index) => (
						<Grid key={index} item xs>
							<CategoryCard name={item.nomCat} productsNumber={item.produits.length} id={item.idCat}
							              remover={remover}/>
						</Grid>
					))
				}
			</Grid>

			<CategoryCreate handleCreateCategory={(category)=>handleCreateCategory(category)} open={open} handleClose={() => setOpen(false)}
			                categories={categories}/>
			<Outlet/>
			<AddFab handleClick={() => setOpen(true)}/>
		</Box>
	);
}

export default CategoriesList;
