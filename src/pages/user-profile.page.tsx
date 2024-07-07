import  { useState } from 'react';
import axios from 'axios';
import { useIP } from './IPContext';
import { Link } from "react-router-dom";

function Formulaire() {
  const [nom, setnom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [password, setpassword] = useState('');


  const [isEditing, setIsEditing] = useState(true);
  const [message, setMessage] = useState('');

  const ip = useIP();

  const handleEditClick = () => {
      const userData = {
        nom,
        adresse,
        email,
        telephone,
        password };

      axios.post(`http://${ip}:8080/Client/create`, userData)
        .then(response => {
          console.log('Données envoyées avec succès:', response.data);
          setMessage('Bienvenue Nouveau Utilisateur !');

        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi des données:', error);

        });
    
    setIsEditing(!isEditing);
  };


  return (
    <main>
        <div className="my-2">
    
            <div className="container">
                <div className="main-body my-5">
                  <h2 className='text-center'>Inscrivez-vous</h2>
                  <hr></hr>
    
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                            alt="Admin"
                                            className="rounded-circle"
                                            width={150}
                                            />
    
                                        <div className="mt-3">
                                            <h4>UTILISATEUR</h4>
                                        </div>

                                        {message && (
                                            <div className="row">
                                                <div className="col-sm-12">
                                                <div className={`alert ${message === 'Connexion réussie!' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                                    {message}
                                                </div>
                                                </div>
                                            </div>
                                        )}
    
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
    
                                    <div className="row col-sm-9">
                                        <div className="form-group">
                                            <label>Noms</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Entrez votre Nom"
                                                value={nom}
                                                onChange={(e) => setnom(e.target.value)}
                            
                                                />
                                        </div>
                                    </div>
    
                                    <div className="row col-sm-9">
                                        <div className="form-group">
                                            <label>Mot de passe</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Entrez votre Mot de passe"
                                                value={password}
                                                onChange={(e) => setpassword(e.target.value)}
                                               
                                                />
                                        </div>
                                    </div>
    
                                    <div className="row col-sm-9">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Entrez votre Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            
                                                />
                                        </div>
                                    </div>
    
                                    <div className="row col-sm-9">
                                        <div className="form-group">
                                            <label>Telephone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Entrez votre numero de Télephone"
                                                value={telephone}
                                                onChange={(e) => setTelephone(e.target.value)}
                                           
                                                />
                                        </div>
                                    </div>
    
                                    <div className="row col-sm-9">
                                        <div className="form-group">
                                            <label>Adresse</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Entrez votre Adresse"
                                                value={adresse}
                                                onChange={(e) => setAdresse(e.target.value)}
                                                />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link to="/home">
                                            <button className="btn btn-info" onClick={handleEditClick}>
                                                 Enregistrer
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    
    </main>
    );
    }
    
    export default Formulaire;
