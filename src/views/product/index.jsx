import {useState} from 'react';
import {Box, Fab, Grid, IconButton, Stack, TextField, Typography} from "@mui/material";
import {Outlet, useLoaderData} from "react-router-dom";
import AddFab from "@ui-component/buttons/add-fab.jsx";
import ProductCard from "@views/product/components/product-card";
import ClearIcon from "@mui/icons-material/Clear.js";
import ProductCreate from "@views/product/product-create.jsx";
import {IconPlus} from "@tabler/icons-react";
import product from "@datasource/models/Product.js";


function ProductsList() {

	const loadedCategories = useLoaderData()

	const [categories, setCategories] = useState(loadedCategories ? loadedCategories : [])
	const [searchTerm, setSearchTerm] = useState('');
	const [open, setOpen] = useState(false)
	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleClearSearch = () => {
		setSearchTerm('');
	};

	function handleCreateProduct(product) {

		console.log("updating", product)
		const updatedCategories = categories.map(category => {
			if (category.idCat === product.idCategorie) {
				const c = {...category};
				c.produits.push(product);
				return c;
			}
			return category;
		})
		setCategories(updatedCategories);
	}

	const applySearch = (products) => products.filter(product =>
		product.nomPro.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
	);
	// const filteredProducts = products.filter(product =>
	// 	product.nomPro.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
	// );

	return (
		<Box>
			<Stack direction="row" alignItems="center" justifyContent={"space-between"} spacing={2} sx={{mb: 2}}>
				<Typography sx={{width: '40%'}} variant={'h2'}>Liste des Produits</Typography>
				<Box sx={{width: '60%'}}>
					<TextField
						sx={{width: '80%'}}
						label="Rechercher un produit"
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
			{
				categories.map(category => {
						const products = applySearch(category.produits);
						return products && products.length > 0 && (
							<Grid key={category.idCat}>
								<Typography id={`cat-${category.idCat}`} sx={{width: '40%', mt: 6}}
								            variant={'h3'}>{category.nomCat}</Typography>
								<Grid display={"flex"} wrap={"wrap"} direction={"row"} justifyContent={"start"}
								      spacing={2} container sx={{mt: 1, pl: 2}}>
									{
										products.map((product, index) => (
											<Grid key={index} xs={12} sm={6} md={3} item>
												<ProductCard product={product}/>
											</Grid>
										))
									}
								</Grid>
							</Grid>

						)
					}
				)
			}


			<ProductCreate open={open} handleClose={() => setOpen(false)} handleCreateProduct={(product)=>handleCreateProduct(product)}
			               categories={categories}/>
			{/*<Outlet/>*/}
			<AddFab handleClick={() => setOpen(true)}/>
		</Box>
	);
}

export default ProductsList;