
import '../pages/style.css'
import { Link } from "react-router-dom";


export default function HomePage() {
return <main>

    <div className="row mb-2">
        <div className="d-block text-center my-4">
            <h1>Nos services</h1>
            <h2 className="text-dark font-weight-bold"> Découvrir nos services &#62;</h2>
        </div>

        <div id="taxis" className="taxis_section layout_padding">
            <div className="container">
                <div className="taxis_section_2">

                    <div className="row">
                        <div className="col-sm-4 ">
                            <Link to="/mode_de_paiement/carte_bancaire">
                                <div className="taxi_main ">
                                    <div className="round_1">01</div>
                                    <h1 className="carol_text text-dark font-weight-bold">Paiement par carte bancaire</h1>
                                    <div className="images_2 border-radius: 10px;">
                                        <img src="public/images/product9.jpeg" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-4">
                            <Link to="/mode_de_paiement/_OM_ou_MOMO" >
                                <div className="taxi_main">
                                    <div className="round_1">02</div>
                                    <h2 className="carol_text text-dark font-weight-bold">Paiement par OM/MOMO</h2>
                                    <div className="images_2">
                                        <img src= "public/images/product9.jpeg" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-sm-4">
                            <Link to="/mode_de_paiement/Autres_types">
                                <div className="taxi_main">
                                    <div className="round_1">03</div>
                                    <h2 className="carol_text text-dark font-weight-bold">Autres types de Paiement</h2>
                                    <div className="images_2">
                                        <img src="public/images/product9.jpeg" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</main>
}