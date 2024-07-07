import {lazy, Suspense} from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {Layout} from './Layout.tsx';
import {ErrorPage} from './error-page'
import {ProtectedRoute} from './ProtectedRoute.tsx';


const CheckoutPage = lazy(() => import('../pages/checkout.page'));
const HomePage = lazy(() => import('../pages/user-profile.page.tsx'));
const OrderHistoryPage = lazy(() => import('../pages/order-history.page'));
const ProductListPage = lazy(() => import('../pages/product-list.page'));
const UserProfilePage = lazy(() => import('../pages/home_page.tsx'));


const ModePage = lazy(() => import('../pages/mode_paiement.tsx'));
const MomoPage = lazy(() => import('../pages/momo_OM_page.tsx'));
const SUCCESPage = lazy(() => import('../pages/succes_page.tsx'));


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
					path: 'home',
					element: <UserProfilePage/>,
				},

				{
					path: 'placements',
					element: <ProductListPage/>,
				},

				{
					path: 'mode_de_paiement',
					element: <ModePage/>,
				},

				{
					path: 'mode_de_paiement/carte_bancaire',
					element: <CheckoutPage/>,
				},

				{
					path: 'mode_de_paiement/_OM_ou_MOMO',
					element: <MomoPage/>,
				},
				
				{
					path: 'mode_de_paiement/Autres_types',
					element: <CheckoutPage/>,
				},

				{
					path: 'confirmation',
					element: <SUCCESPage/>,
				},

				{
					path: 'orders',
					element: <OrderHistoryPage/>,
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
						
					
						
					]
				}
			],
		},

	])
	return <Suspense>
		<RouterProvider router={router}/>
	</Suspense>
}