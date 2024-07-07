/*
* j'ai eteint la rubrique statut de la partie produit d'en bas la
*/

import OrderProductRow from "./orderProductRow";

interface Props {
  order: {
    orderNumber: string,
    products: 
    {
      id: string,
      status: string,
      dateModified: string;
    }[],
    address: string,
    email: string,
    date: string,
    payment: {
      cardNumber: string;
      expiringDate: string;
    },
    phoneNumber: string,
  }
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  })[];
}

export default function OrderHistoryCard({
  products,
  order
}: Props) {

  let orderHistoryCards = [];

  order.products.map(productDetails => {  
    let productStatus = "";
    let dateModified = "";

    products.map(product => {
      if (productDetails.id == product.id) {
        productStatus = productDetails.status;
        dateModified = productDetails.dateModified;
 
        orderHistoryCards.push(
          <OrderProductRow
            product={product} 
            status={productStatus}
            dateModified={dateModified}
          /> 
        )
      }
    })
  });

  return (
    <div className="card shadow-xs border p-3 p-md-4 mb-4">
      <div className="shadow-xs border rounded-3 mb-5">
        <div className="d-block d-md-flex justify-content-between align-items-center">
          <div className="d-block d-md-flex">
            <div className="d-flex d-md-block justify-content-between p-4 me-md-4">
              <p className="text-center mb-0">Numero de placement</p>
              <h3 className="text-center mb-0">{order.orderNumber}</h3>
            </div>
            <div className="d-flex d-md-block justify-content-between p-4 me-md-4">
              <p className="text-sm mb-0">Date de placement</p>
              <h5 className="text-center mb-0">{order.date}</h5>
            </div>
            <div className="d-flex d-md-block justify-content-between p-4">
              <p className="text-sm mb-0">Montant</p>
              <h4 className="text-center mb-0">2000f</h4>
            </div>
          </div>

          <button className="btn btn-dark btn-sm mb-md-0 ms-4 md-md-0 me-4" data-bs-toggle="modal" data-bs-target="#invoiceModal1">Voir la facture</button>
          <div className="modal fade" id="invoiceModal1" role="dialog" aria-labelledby="invoiceModal1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="card p-4">
                    <div className="card-header text-center">
                      <div className="row justify-content-between">
                        <div className="col-md-4 text-start">
                          <img className="mb-2 w-50 rounded-2" src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" alt="Logo" />
                          <h6>
                            Polytechnique, yaoundé, Caameroun
                          </h6>
                          <small className="d-block text-muted">tel: (+237) 699441166</small>
                        </div>
                        
                      </div>
                      
                    </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive">
                        <table className="table text-right">
                          
                        
                          <tfoot>
                            <tr>
                              <th colSpan={3} className="h4">Total</th>
                              <th className="text-end h4"> 15500.00 Fcfa</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2">Voyage</th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2">Prix</th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2"></th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2">Date</th>
              <th scope="col" className="text-secondary text-xs font-weight-bold border-light ps-2 text-end">Details</th>
            </tr>
          </thead>
          <tbody>
            {orderHistoryCards}
          </tbody>
        </table>
      </div>
    </div>
  );
}


