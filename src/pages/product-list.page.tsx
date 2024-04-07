/*
* La page qui affiche la liste des produits
*  */
import data from '../../public/data.json';
import CardProduct from '../components/products/cardProduct';
import ProductOverviewGallery, { ProductOverviewGalleryProps } from '../components/products/productOverviewGallery';

export default function ProductListPage() {
	
	const productList:ProductOverviewGalleryProps = {
		"id": "01",
		"thumb_src": "/images/suit-3.jpg",
		"thumb_alt": "watch-image",
		"images": [
		  {
			//"src": "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
			"src":"https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"alt": "first_image"
			
		  },
		  {
			//"src": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
			"src":"https://images.unsplash.com/photo-1560506840-ec148e82a604?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmFieSUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
			"alt": "second_image"
		  },
		  {
			//"src": "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
			"src": "https://images.unsplash.com/photo-1542355581-caf7454785ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhYnklMjBjbG90aGVzfGVufDB8fDB8fHww",
			"alt": "third_image"
		  },
		  {
			//"src": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
			"src": "https://unsplash.com/photos/five-pairs-of-socks-pinned-on-clothesline-MDIGo4Ez-0g",
			"alt": "fourth_image"
		  }
		],
		"color": "8 colors",
		"colors": [
		  "red", 
		  "blue", 
		  "green"
		],
		"nomPro": "Robes, grenouillères et chaussons pour nourissons",
		"prix": 20,
		"description": "Soyez douillet de la tête aux pieds ! Découvrez nos adorables grenouillères et chaussons pour bébé, pour des nuits paisibles et des journées remplies de confort!",
		"full_description": "Le style commence dès le berceau ! Offrez à votre bébé le meilleur avec nos grenouillères tendance et confortables",
		"details": "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn.",
		"highlights": [
		  "Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.",
		  "Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics",
		  "Oil is a crucial source of petrochemicals, which are used in the production of plastics."
		],
		"features": [
		  "Multiple strap configuration",
		  "Water Resistant",
		  "Stainless strap loops",
		  "Ultra-soft 100% cotton"
		],
		"rating": 4,
		"reviews": 117,
		"size": "Small",
		"sizes": {
		  "XS": 3,
		  "S": 0,
		  "M": 1,
		  "L": 1213,
		  "XL": 6
		},
		"data": {
		  "Features": "Le style commence dès le berceau ! Offrez à votre bébé le meilleur avec nos grenouillères tendance et confortables.",
		  "Care": "Vous recherchez le summum du confort pour votre bébé ? Des grenouillères douces comme des câlins, est-ce ce que vous désirez ? Vous voulez que votre tout-petit soit bien habillé tout en restant à l'aise? Pourquoi ne pas offrir à votre bébé le meilleur avec nos grenouillères adorables et pratiques? Ne tardez pas et découvrez notre collection dès aujourd'hui !",
		  "Shipping": "Le style commence dès le berceau ! Offrez à votre bébé le meilleur avec nos grenouillères tendance et confortables.",
		  "Returns": "Préparez votre bébé pour l'aventure ! Nos grenouillères sont bien plus que des vêtements. Elles sont le premier pas vers un monde de découvertes et d'explorations."
		},
		"featuresDetails": {
		  "Origin": "Chaque vetement est fabriquée avec amour et savoir-faire, perpétuant des techniques artisanales transmises de génération en génération.Nous utilisons des tissus de haute qualité, souvent issus de sources durables, pour offrir à votre bébé un confort sans compromis.Nos motifs et nos couleurs sont inspirés par les cultures du monde entier, apportant une touche d'authenticité et de diversité à chaque tenue.",
		  "Material": "Nos grenouillères sont fabriquées à partir de coton biologique certifié, doux et respectueux de la peau délicate de bebe. Nous privilégions les fibres naturelles comme le bambou ou le lin, connues pour leur respirabilité et leur confort exceptionnel. Les matériaux que nous utilisons sont hypoallergéniques, idéaux pour les peaux sensibles et sujettes aux allergies.Respectueux de l'environnement : Nous nous engageons à utiliser des matériaux durables et écologiques, réduisant ainsi notre impact sur la planète pour un avenir meilleur.",
		  "Dimensions": "Taille précise : Nos grenouillères sont disponibles dans une large gamme de tailles, adaptées aux différents stades de croissance de votre bébé, de la naissance à la petite enfance. Coupe ergonomique : Chaque grenouillère est soigneusement coupée pour permettre une liberté de mouvement maximale, laissant suffisamment de place pour bouger et jouer confortablement. Fermetures pratiques : Nos vêtements sont dotés de fermetures à boutons-pression ou à glissière bien placées, facilitant l'habillage et le déshabillage rapide de votre bébé. Confort toute saison : Que ce soit pour l'hiver ou l'été,ou pour la saison seche ou la saison pluvieuse, nos vetements sont adaptées à toutes les saisons. Choisissez parmi nos différents modèles pour trouver celui qui convient le mieux à votre bébé."
		},
		"stock": true
	  }

	return <>
		<div className="container mt-5">
			<h3>Product Lists</h3>
			<p>Components and blocks for Product Lists</p>
			<div className="row mt-5">
				{data.products.map(product => 
				<div className="col-md-6 col-lg-3">
					<CardProduct 
					thumb_src = {product.thumb_src}
					thumb_alt = {product.thumb_alt}
					color = {product.color}
					colors = {product.colors}
					title = {product.title}
					description = {product.description}
					price = {product.price}
					position = "center"
					/>
				</div>
				)}
			</div>        
		</div>

	</>
	
	
}
