interface Props {
  subtotal: number;
  textColor: string
}

export default function OrderSummary({
  subtotal,
  textColor
}: Props) {

  const tax = 7;
  const shipping = (subtotal >= 100) ?  0 : 25;
  let sum = 0;
  sum+=subtotal;

  let variant = "";

  if (textColor) {
    variant = ` text-${textColor}`;
  }
  return (
    <>
      <ul className="list-unstyled">
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Montant Total</p>
            <p className={`fw-bold opacity-8` + variant}>{sum.toLocaleString()} XAF</p>
          </div>
        </li>
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Frais supplémentaire<span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to shipping" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className={`fw-bold opacity-8` + variant}>{shipping.toLocaleString()} XAF</p>
          </div>
        </li>
        <li className="border-bottom mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>TVA<span data-bs-toggle="tooltip" data-bs-placement="top" title="This may vary depending on the country you are in" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className={`fw-bold opacity-8` + variant}>{tax.toLocaleString()} XAF</p>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5 className={variant}>TOTAL</h5>
            <h5 className={variant}>{(subtotal + shipping + tax).toLocaleString()} XAF</h5>
          </div>
        </li>
      </ul>
    </>
  );
}