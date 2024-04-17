import {lazy, Suspense} from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import {Layout} from './Layout.tsx';
import {ErrorPage} from './error-page'
import {ProtectedRoute} from './ProtectedRoute.tsx';

const AuthPage = lazy(() => import('../pages/auth.page'));
const CheckoutPage = lazy(() => import('../pages/checkout.page'));
const HomePage = lazy(() => import('../pages/home.page'));
const OrderHistoryPage = lazy(() => import('../pages/order-history.page'));
const ProductPage = lazy(() => import('../pages/product.page'));
const ProductListPage = lazy(() => import('../pages/product-list.page'));
const ShoppingBasket = lazy(() => import('../pages/shopping-basket.tsx'));
const UserProfilePage = lazy(() => import('../pages/user-profile.page'));//


export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: '/',
			errorElement: <ErrorPage/>,
			element: <Layout/>,
			children: [
				// pages non protegées
				{
					path: '',
					index: true,
					element: <HomePage/>,
				},
				{
					path: 'products',
					element: <ProductListPage/>,
				},
				{
					path: 'products/:id',
					element: <ProductPage/>,
				},

				{
					path: 'orders',
					element: <ProductPage/>,
					
				},


				// Page protégées
				{
					path: '',
					element: <ProtectedRoute/>,
					errorElement: <ErrorPage/>,
					children:[
						{
							path: 'checkout',
							element: <CheckoutPage/>,
						},
						
						{
							path: 'basket',
							element: <ShoppingBasket/>,
						},
						{
							path: 'profile',
							element: <UserProfilePage/>,
						},

					]
				}
			],
		},
		{
			path: 'auth',
			element: <AuthPage/>,
		},

	])
	return <Suspense>
		<RouterProvider router={router}/>
	</Suspense>
}


