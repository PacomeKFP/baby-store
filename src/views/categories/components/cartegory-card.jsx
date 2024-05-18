import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {HashLink as Link} from "react-router-hash-link";
import {Delete, EditNoteRounded, CancelOutlined} from "@mui/icons-material";
import {TextField} from "@mui/material";
import CategoriesRepository from "@datasource/repositories/categories-repository.js";
import {useNavigate} from "react-router-dom";

CartegoryCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	productsNumber: PropTypes.number.isRequired,
	remover: PropTypes.func.isRequired,
};

function CartegoryCard({name, productsNumber, id, remover}) {
	const [isUpdating, setIsUpdating] = useState(false)
	const [nomCat, setNomCat] = useState(name);

	return (
		<Card sx={{minWidth: 300, mb: 2, maxWidth: 360}} variant="outlined">
			<CardContent sx={{pb: 0}}>
				{
					isUpdating
						? (
							<TextField
								sx={{fontSize: "large"}} value={nomCat} onChange={(e) => setNomCat(e.target.value)}
								size={"medium"} name={"nomCat"} variant={"standard"}/>)
						: (<Typography variant="h3" component="div">
							{nomCat}
						</Typography>)
				}
				<Typography sx={{mb: 0, mt: 2}} color="text.secondary">
					{productsNumber} Produits dans la catégorie
				</Typography>

			</CardContent>

			<CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Link to={{pathname: `/products`, hash: `#cat-${id}`}}>
					<Button size="medium">Voir les produits</Button>
				</Link>
				<span>
          <Button size="large" color={'secondary'} onClick={() => setIsUpdating(!isUpdating)}>
	          {
		          isUpdating
			          ? <span
				          onClick={() => CategoriesRepository.update(id, nomCat, () => {})}>Enregistrer</span>
			          : <EditNoteRounded color={'secondary'}/>
	          }

          </Button>
          <Button size="large" color={'error'}>
	          {
		          isUpdating
			          ? <CancelOutlined onClick={() => setIsUpdating(false)}/>
			          :
			          <Delete onClick={() => CategoriesRepository.delete(id, nomCat, () => remover(id))} color={'error'}/>
	          }

          </Button>
        </span>
			</CardActions>
		</Card>
	);
}

export default CartegoryCard;