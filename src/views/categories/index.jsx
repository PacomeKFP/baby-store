import {useState} from 'react';
import {Box, Typography, Grid, TextField, IconButton, Stack} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {Outlet, useLoaderData} from "react-router-dom";
import AddFab from "@ui-component/buttons/add-fab.jsx"; // Assurez-vous que ce composant est correctement importé
import CategoryCard from "@views/categories/components/cartegory-card.jsx";

function CategoriesList() {
	const loadedCategories = useLoaderData();
	const [categories, setCategories] = useState(loadedCategories ? loadedCategories : []);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleClearSearch = () => {
		setSearchTerm('');
	};

	const filteredCategories = categories.filter(category =>
		category.nomCat.toLowerCase().includes(searchTerm.toLowerCase())
	);

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
							<CategoryCard name={item.nomCat} productsNumber={item.produits.length} id={item.idCat}/>
						</Grid>
					))
				}
			</Grid>
			<Outlet/>
			<AddFab/>
		</Box>
	);
}

export default CategoriesList;
