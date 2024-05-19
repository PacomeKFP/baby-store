/*
* La page de profil pour l'utilisateur connecté
*  */



export default function UserProfilePage() {
	return <main>
   
   
   <div className="my-5">

  <div className="container">
    <div className="main-body">
    
      {/* /Breadcrumb */}
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}
                />
                <div className="mt-3">
                  <h4>BADA andré</h4>
                  <p className="text-secondary mb-1">Etudiant</p>
                  
                  <button className="btn btn-primary">Follow</button>
                  <button className="btn btn-outline-primary">Message</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Noms</h6>
                </div>
                <div className="col-sm-9 text-secondary">BADA andré</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">Docteur@gmail.com</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Téléphone</h6>
                </div>
                <div className="col-sm-9 text-secondary">(+237) 656912897</div>
              </div>
              <hr />
              
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Adresse </h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Melen, Yaounde, CAMEROUN
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <a
                    className="btn btn-info "
                    target="__blank"
                    href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                  >
                    Modifier
                  </a>
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
}