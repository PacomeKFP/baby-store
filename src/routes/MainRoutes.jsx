import {lazy} from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import CategoriesRepository from "@src/datasource/repositories/categories-repository.js";
import ProductsRepository from "@src/datasource/repositories/products-repository.js";
import {Outlet} from "react-router-dom";

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('@views/dashboard/Default')));
const InvoicesPage = Loadable(lazy(() => import('@src/views/orders')));
const UsersPage = Loadable(lazy(() => import('@src/views/users')));

const ProductList = Loadable(lazy(() => import('@views/product/')));
// const ProductCreate = Loadable(lazy(() => import('@views/product/product-create.jsx')));

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
			path: 'dashboard',
			element: <DashboardDefault/>,
		},
		{
			path: 'orders',
			element: <InvoicesPage/>,
		},

		{
			path: 'users',
			element: <UsersPage/>,
		},
		{
			path: 'products',
			index: true,
			loader: CategoriesRepository.getAll,
			element: <ProductList/>,

		},
		{
			path: 'categories',
			element: <CategoriesList/>,
			loader: CategoriesRepository.getAll,
			children: [
				{
					path: 'create',
					element: <CategoriesCreate/>,

				},
			]
		},


	]
};

export default MainRoutes;
