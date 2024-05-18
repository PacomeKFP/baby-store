import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Card, CardHeader, Grid, Modal, TextField, Typography} from "@mui/material";
import {IconProgressCheck, IconRecycle} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material/styles";

FormModal.propTypes = {
	title: PropTypes.string,
	label: PropTypes.string,
	children: PropTypes.node,
	open: PropTypes.bool,
	handleClose: PropTypes.func,
};

function FormModal({title, label, children, open, handleClose}) {
	const navigate = useNavigate();
	const theme = useTheme()
	return (
		<Modal
			open={open === undefined ? true : open}
			onClose={() => handleClose !== undefined ? handleClose() : navigate("../")}
			aria-labelledby="create-product-modal"
			aria-describedby="modal-modal-description"
			keepMounted
		>
			<Card sx={theme.custom.modalChild}>
				<CardHeader title={title} sx={{px: 0}}/>
				<Typography id="modal-modal-description" sx={{mt: 2}}>
					{label}
				</Typography>
				{children}
			</Card>
		</Modal>
	);
}

export default FormModal;