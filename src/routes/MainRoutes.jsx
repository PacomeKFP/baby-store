import {lazy} from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

const ProductList = Loadable(lazy(() => import('@views/product/')));
const ProductCreate = Loadable(lazy(() => import('@views/product/product-create.jsx')));

const CategoriesList = Loadable(lazy(() => import('@views/categories/')));
const CategoriesCreate = Loadable(lazy(() => import('@views/categories/category-create')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	element: <MainLayout/>,
	children: [
		{
			path: '',
			index: true,
			element: <DashboardDefault/>,
		},
		{
			path: '/dashboard',
			element: <DashboardDefault/>,
		},
		{
			path: 'products',
			element: <ProductList/>,
			children: [
				{
					path: 'create',
					element: <ProductCreate/>
				},
			]
		},
		{
			path: 'categories',
			element: <CategoriesList/>,
			children: [
				{
					path: 'create',
					element: <CategoriesCreate/>
				},
			]
		},


	]
};

export default MainRoutes;
