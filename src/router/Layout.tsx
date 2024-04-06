import {Outlet} from 'react-router-dom';
import ComplexFooter from '../components/complexFooter.tsx';
import ComplexNavbar from '../components/complexNavbar.tsx';

export function Layout(): JSX.Element {
	return (
		<>
			<ComplexNavbar/>
			<div className="container">

				<Outlet/>
				<ComplexFooter/>
			</div>
		</>
	);
}
