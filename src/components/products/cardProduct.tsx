import { Link } from "react-router-dom";


export interface CardProductProps {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  color: string;
  colors: string[];
  position: string;
}

export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,

  position
}: Props) {

  const classList = "card-body " + "text-" + position;

  return (
    <>
      <div className="card card-product border mb-5 shadow-xs border-radius-lg">

        <div className="height-350 far fa-heart text-2xl">
          <img className="w-100 h-100 p-4 rounded-top" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
        </div>

        <div className={classList}>
        
          {(title) && 
            <h4 className="font-weight-bold">
              {title}
            </h4>
          }

          {(description) && 
            <p className="text-body">{description}</p>
          }
   
          {(price) && 
            <h4 className="mb-0 text-lg mt-1 mb-3">
              {price.toLocaleString()} XAF
            </h4>
          }

          <Link to="/mode_de_paiement" >
            <button className="btn btn-success" onClick={ (event) => handleSubscription(event.altKey)} >
                Valider la souscription
            </button>
          </Link>

        </div>
          
      </div>
    </>
  );
}
