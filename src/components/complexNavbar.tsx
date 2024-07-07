
import { Link } from "react-router-dom";

const ComplexNavbar = () => {
  return (
    <nav className="top-0 flex-wrap px-0 py-0 d-none d-lg-block navbar shadow navbar-expand-lg">
      <div className="container py-2">
        <nav aria-label="breadcrumb" >
          
        <Link to="/home">
          <div className="d-flex align-items-center">
            <span className="text- px-2 text-lg font-weight-bold me-4" style={{ color: "red" }}>Voyage</span>
          </div>
          </Link>
        </nav> 

        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <ul className="navbar-nav ms-md-auto  justify-content-end">

            <li className="px-3 nav-item d-flex align-items-center">
              <Link to="/orders" className="sidenav-toggler-inner p-0 nav-link ">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fixed-plugin-button-nav" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"></path>
                </svg>
              </Link>
            </li>
                
            
            <li className="nav-item d-flex align-items-center ps-2">
              <a href="#" className="px-0 nav-link font-weight-bold"></a>
            </li>

            <Link to="/">
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a href="#" className="px-0 nav-link font-weight-bold">
                  <div className="avatar avatar-sm position-relative">
                    <img src={`${import.meta.env.BASE_URL}public/images/bg1.jpg`} alt="profile_image" className="w-100 border-radius-md" />
                  </div>
                </a>
              </li>
            </Link>

            <Link to="/placements">
              <li className="nav-item dropdown pe-5 d-flex align-items-center">
                <a href="#" className="px-0 nav-link font-weight-bold">
                  <div className="avatar avatar-sm position-relative">
                    <img src={`${import.meta.env.BASE_URL}public/images/aide.png`} alt="profile_image" width="110px" height="20px" className="w-300 border-radius-md" />
                  </div>
                </a>
              </li>
            </Link>

          </ul>
        </div>
      </div>
  
    </nav>
  );
};

export default ComplexNavbar;
