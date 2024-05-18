import PropTypes from 'prop-types';
import {IconPlus} from "@tabler/icons-react";
import {Fab} from "@mui/material";
import {Link} from "react-router-dom"

AddFab.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

function AddFab({handleClick}) {
	return (
		<Fab onClick={() => handleClick()} sx={{position: "fixed", bottom: 20, right: 16}} color="secondary">
			<IconPlus/>
		</Fab>
	);
}

export default AddFab;