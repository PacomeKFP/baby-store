import {lazy, Suspense} from 'react';
import {createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AltRoutes from "@routes/AltRoutes.jsx";


// project imports
import PropTypes from "prop-types";


// ==============================|| ROUTING RENDER ||============================== //

export function AppRouter({basename}) {

	const router = createBrowserRouter([MainRoutes, AuthenticationRoutes, AltRoutes], {
			basename: basename || "/"
		}
	)
	return <Suspense fallback={()=> <>Loading ...</> }>
		<RouterProvider router={router}/>
	</Suspense>
	// return routes;
}

AppRouter.propTypes = {
	basename: PropTypes.string,
}