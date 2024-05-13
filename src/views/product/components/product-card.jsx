import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
ProductCard.propTypes = {
	picture: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
};

function ProductCard({picture, name, description}) {
	return (
		<Card sx={{width: 320}}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image={picture}
			/>
			<CardContent>

				<Typography gutterBottom variant="h4" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size={'large'}> Voir les details</Button>
			</CardActions>
		</Card>
	);
}

export default ProductCard;