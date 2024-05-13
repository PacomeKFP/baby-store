import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
CartegoryCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	productsNumber: PropTypes.number.isRequired,
	description: PropTypes.string,
};

function CartegoryCard({name, productsNumber, id, description}) {
	return (
		<Card sx={{ minWidth: 300, mb:2, maxWidth:360}} variant="outlined">
			<CardContent sx={{ pb: 0 }}>

				<Typography variant="h3" component="div">
					{name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{productsNumber} Produits dans la catégorie
				</Typography>
				{description && (<Typography variant="body2">
					{description}
				</Typography>)}
			</CardContent>
			<CardActions sx={{pt: 0 }}>
				<Button size="medium" sx={{pl:0}}>Modifier la catégorie</Button>
				<Link to={`/products?category=${id}`}>
					<Button size="medium">Voir les produits</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

export default CartegoryCard;