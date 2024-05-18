import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {useTheme} from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {Delete, EditNoteRounded} from '@mui/icons-material';
import HttpClient from '@src/datasource/http-client.js';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ProductCard({product}) {
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = product.images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	const {
		nomPro,
		description,
		images,
		prix,
		qte,
		codeArrivage,
		actif,
		dateInsertion,
		prixAchat,
		pourcentage,
		promo,
		size1,
		size2,
		typeSize,
	} = product;

	return (
		<Card sx={{width: 345}}>
			<Paper
				square
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: 50,
					pl: 2,
					bgcolor: 'background.default',
				}}
			>
				<Typography>{nomPro}</Typography>
			</Paper>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.map((image, index) => (
					<div key={image.idPhoto} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								component="img"
								sx={{
									height: 200,
									display: 'block',
									maxWidth: 345,
									overflow: 'hidden',
									width: 'auto',
								}}
								src={`${HttpClient.serverURL}/${image.lienPhoto}`}
								alt={nomPro}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
						Suiv.
						{theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
						Préc.
					</Button>
				}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary" gutterBottom>
					{isExpanded ? description : `${description.substring(0, 40)} . . . `}
				</Typography>

				{isExpanded && (
					<Box sx={{mt: 2}}>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Prix unitaire: <strong>{prix} €</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Quantité: <strong>{qte}</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Code Arrivage: <strong>{codeArrivage}</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Actif: <strong>{actif ? 'Oui' : 'Non'}</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Date d'Insertion: <strong>{new Date(dateInsertion).toLocaleDateString()}</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Prix d'Achat: <strong>{prixAchat} €</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Pourcentage: <strong>{pourcentage} %</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Promo: <strong>{promo ? 'Oui' : 'Non'}</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Taille 1: <strong>{size1}</strong>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body2" color="text.secondary">
									Taille 2: <strong>{size2}</strong>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="body2" color="text.secondary">
									Type de Taille: <strong>{typeSize}</strong>
								</Typography>
							</Grid>
						</Grid>
					</Box>
				)}
			</CardContent>
			<CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Button size="large" onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? 'Cacher ' : 'Voir '} les détails
				</Button>
				<span>
          <Button size="large" color={'secondary'}>
            <EditNoteRounded color={'secondary'}/>
          </Button>
          <Button size="large" color={'error'}>
            <Delete color={'error'}/>
          </Button>
        </span>
			</CardActions>
		</Card>
	);
}

ProductCard.propTypes = {
	product: PropTypes.shape({
		codePro: PropTypes.number.isRequired,
		nomPro: PropTypes.string.isRequired,
		prix: PropTypes.string.isRequired,
		qte: PropTypes.number.isRequired,
		description: PropTypes.string.isRequired,
		codeArrivage: PropTypes.string.isRequired,
		actif: PropTypes.number.isRequired,
		idCategorie: PropTypes.number.isRequired,
		dateInsertion: PropTypes.string.isRequired,
		prixAchat: PropTypes.string.isRequired,
		pourcentage: PropTypes.string.isRequired,
		promo: PropTypes.number.isRequired,
		size1: PropTypes.number.isRequired,
		size2: PropTypes.number.isRequired,
		typeSize: PropTypes.number.isRequired,
		images: PropTypes.arrayOf(
			PropTypes.shape({
				idPhoto: PropTypes.number.isRequired,
				lienPhoto: PropTypes.string.isRequired,
				codePro: PropTypes.number.isRequired,
			})
		).isRequired,
	}).isRequired,
};

export default ProductCard;
