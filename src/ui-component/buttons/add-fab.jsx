import PropTypes from 'prop-types';
import {IconPlus} from "@tabler/icons-react";
import {Fab} from "@mui/material";
import {Link} from "react-router-dom"

AddFab.propTypes = {
	to: PropTypes.string,
};

function AddFab({to}) {
	return (
		<Link to={ to || "create"}>
			<Fab sx={{position: "fixed", bottom: 20, right: 16}} color="secondary">
				<IconPlus/>
			</Fab>
		</Link>
	);
}

export default AddFab;