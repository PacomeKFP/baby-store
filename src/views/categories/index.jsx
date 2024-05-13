import React, {useState} from 'react';
import MainCard from "@ui-component/cards/MainCard.jsx";
import {Box, Card, CardHeader, Fab, Grid, Typography} from "@mui/material";
import CartegoryCard from "@views/categories/components/cartegory-card.jsx";
import {IconPlus} from "@tabler/icons-react";
import CategoryCreate from "@views/categories/category-create.jsx";
import {Link, Outlet} from "react-router-dom";
import AddFab from "@ui-component/buttons/add-fab.jsx";


function CategoriesList() {

	const [categories, setCategories] = useState([{name: "Vêtements", productsNumber: 12, id: "5"}])

	return (
		<Box>
			<Typography variant={'h2'}>Liste des categories</Typography>
			<Grid container spacing={2} sx={{pt: 4}}>
				{
					categories.map((item, index) => (
						<Grid key={index} item xs>
							<CartegoryCard name={item.name} productsNumber={item.productsNumber} id={item.id}/>
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