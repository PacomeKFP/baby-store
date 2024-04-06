import {Outlet} from 'react-router-dom';
import swal from 'sweetalert';

export function ProtectedRoute() {
	swal('Protected', 'Cette page est une page protegée. Seul les utilisateurs connectés pourront y acceder');
	return (
		<Outlet/>
	);
}
