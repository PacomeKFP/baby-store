export interface CardProductProps {
  thumb_src: string;
  title: string;
  collection: string;
  classList: string;
  cta: string;
}

import { Link } from "react-router-dom";

export default function CardProduct({
  thumb_src,
  title,
  collection,
  classList,
  cta,
}: Props) {

  const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );

  return (
    <>
      
        <div className={`card card-background align-items-start mb-4 mb-lg-0 ${classList}`}>
          <div className="full-background" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}${thumb_src}`})`, backgroundSize: 'cover'}}></div>
          <div className={`card-body ${classBody}`}>
            <div className="d-block mt-10">
              <p className="text-white font-weight-bold mb-1">{collection}</p>
              <h4 className="text-white font-weight-bolder">{title}</h4>
            
              <Link to="/placements" >
                <a className="text-white text-sm font-weight-semibold mb-0">Voir plus &#62;</a>
              </Link>

            </div>
          </div>
        </div>
      
    </>
  );
}
