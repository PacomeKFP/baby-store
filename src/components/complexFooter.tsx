
import { Link } from "react-router-dom";

export default function ComplexFooter() {
  return (
    <>
      <footer>
        <div className="row">
          <Link to="/"> 
            <div className="d-flex align-items-center col-12 col-md-4">
              <span className="text- px-2 text-lg font-weight-bold me-4" style={{ color: "red" }}>Voyage</span>
            </div>
          </Link>

          <div className="col-12 mt-5 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-body">
              Copyright ©  &nbsp;Voyage by &nbsp;
              <p className="text-dark" >Creative Tim</p>.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


