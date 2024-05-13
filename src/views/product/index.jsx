import {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {Outlet} from "react-router-dom";
import AddFab from "@ui-component/buttons/add-fab.jsx";
import ProductCard from "@views/product/components/product-card.jsx";


function ProductsList() {
	const [products, setProducts] = useState([{
		image:"https://frontendshape.com/storage/canvas/images/JUKODYCIGYGlBP7ZEz92gMyiBe92nnpEpfSfuzag.png?ezimgfmt=rs%3Adevice%2Frscb2-1",
		name: "Chaussure",
		description: "Chaussure description",
	}])

	return (
		<Box>
			<Typography variant={'h2'}>Liste des produits</Typography>
			<Grid container spacing={2} sx={{pt: 4}}>
				<Grid item xs={12}>
					<Typography variant={'h4'}>
						Le widget des filtres ici; categorie, recherceh
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2} sx={{mt: 4}}>
				{
					products.map((item, index) => (
						<Grid key={index} item xs>
							<ProductCard name={item.name} picture={item.image} description={item.description} />
						</Grid>
					))
				}
			</Grid>

			<Outlet/>
			<AddFab/>
		</Box>
	);
}

export default ProductsList;