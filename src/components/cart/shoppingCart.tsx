import ProductCartItem from "./productCartItem";
import OrderSummary from "./orderSummary";

interface Props {
  products: {
    thumb_src: string;
    thumb_alt: string;
    color: string;
    title: string;
    price: number;
    size: string;
    stock: boolean;
    subtotal: number;
    shipping: number;
    tax: number;
  }[];
}

export default function ShoppingCart({ products }: Props) {
  let subtotal = 0;
  products.map((product) => (subtotal += product.price));

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-3 text-center">Pannier d'achat</h2>
        <h5 className="text-center mb-5">
          Vous êtes éligible pour la livraison gratuite.
        </h5>
        <div className="row">
          <div className="col-12 col-lg-7">
            {products.map((product, i) => (
              <>
                {i != 0 && <hr className="horizontal dark my-4" />}
                <ProductCartItem
                  thumb_src={product.thumb_src}
                  thumb_alt={product.thumb_alt}
                  title={product.title}
                  color={product.color}
                  size={product.size}
                  price={product.price}
                  stock={product.stock}
                />
              </>
            ))}
          </div>
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Résumé de la commande</h5>
                <OrderSummary subtotal={subtotal} />
                <button className="btn btn-outline-dark btn-lg w-100">
                  Paiement
                </button>
                <button className="btn btn-white btn-lg w-100">
                  Continuer vos achats
                </button>
                <p className="text-center">
                  Taxes incluses. Frais de port calculés lors du paiement.
                </p>
              </div>
            </div>
            <p className="d-flex align-items-center justify-content-center text-body mt-4">
              <svg
                className="me-2"
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.21652 6.14286H7.78795V4.42857C7.78795 3.79762 7.56473 3.25893 7.1183 2.8125C6.67188 2.36607 6.13318 2.14286 5.50223 2.14286C4.87128 2.14286 4.33259 2.36607 3.88616 2.8125C3.43973 3.25893 3.21652 3.79762 3.21652 4.42857V6.14286ZM10.6451 7V12.1429C10.6451 12.381 10.5618 12.5833 10.3951 12.75C10.2284 12.9167 10.026 13 9.78795 13H1.21652C0.978423 13 0.776042 12.9167 0.609375 12.75C0.442708 12.5833 0.359375 12.381 0.359375 12.1429V7C0.359375 6.7619 0.442708 6.55952 0.609375 6.39286C0.776042 6.22619 0.978423 6.14286 1.21652 6.14286H1.50223V4.42857C1.50223 3.33333 1.89509 2.39286 2.6808 1.60714C3.46652 0.821428 4.40699 0.428571 5.50223 0.428571C6.59747 0.428571 7.53795 0.821428 8.32366 1.60714C9.10938 2.39286 9.50223 3.33333 9.50223 4.42857V6.14286H9.78795C10.026 6.14286 10.2284 6.22619 10.3951 6.39286C10.5618 6.55952 10.6451 6.7619 10.6451 7Z"
                  fill="#495057"
                />
              </svg>
              Paiement sécurisés avec:
            </p>
            <div className="d-flex justify-content-center">
              <svg
                className="me-2"
                width="31"
                height="21"
                viewBox="0 0 31 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5173 11.6875H24.6691C24.7941 11.3571 25.0887 10.558 25.553 9.29018L25.5932 9.16964C25.6289 9.08036 25.6735 8.96429 25.7271 8.82143C25.7807 8.67857 25.8209 8.5625 25.8477 8.47321L26.0084 9.20982L26.5173 11.6875ZM7.17801 10.817L6.40123 6.86607C6.30301 6.38393 5.96819 6.14286 5.39676 6.14286H1.80748L1.78069 6.31696C4.55748 7.02232 6.35659 8.52232 7.17801 10.817ZM9.57534 6.14286L7.40569 12.0089L7.17801 10.817C6.94587 10.192 6.56641 9.61607 6.03962 9.08929C5.51284 8.55357 4.92801 8.15625 4.28516 7.89732L6.09319 14.7277H8.43694L11.9325 6.14286H9.57534ZM11.4369 14.7411H13.6602L15.053 6.14286H12.8298L11.4369 14.7411ZM21.7227 6.35714C21.1066 6.11607 20.4414 5.99553 19.7271 5.99553C18.6289 5.99553 17.7316 6.25893 17.0352 6.78571C16.3387 7.3125 15.986 7.99554 15.9771 8.83482C15.9682 9.74554 16.6155 10.5223 17.9191 11.1652C18.3477 11.3705 18.6468 11.5536 18.8164 11.7143C18.9861 11.875 19.0709 12.0491 19.0709 12.2366C19.0709 12.5045 18.9369 12.7098 18.6691 12.8527C18.4012 12.9955 18.0932 13.067 17.745 13.067C16.9771 13.067 16.2807 12.9196 15.6557 12.625L15.3611 12.4777L15.053 14.4062C15.7137 14.7098 16.5396 14.8616 17.5307 14.8616C18.6914 14.8705 19.62 14.6071 20.3164 14.0714C21.0218 13.5357 21.3834 12.8214 21.4012 11.9286C21.4012 10.9821 20.7762 10.2054 19.5262 9.59821C19.0887 9.375 18.7718 9.1875 18.5753 9.03571C18.3789 8.88393 18.2807 8.71429 18.2807 8.52678C18.2807 8.33036 18.3878 8.16071 18.6021 8.01786C18.8253 7.86607 19.1423 7.79018 19.553 7.79018C20.178 7.78125 20.7316 7.88839 21.2137 8.11161L21.4146 8.21875L21.7227 6.35714ZM27.4146 6.14286H25.7003C25.12 6.14286 24.7316 6.38393 24.5352 6.86607L21.2405 14.7411H23.5709L24.0396 13.4554H26.8789C26.9235 13.6518 27.0128 14.0804 27.1468 14.7411H29.2093L27.4146 6.14286ZM30.9236 1.85714V19C30.9236 19.4643 30.7539 19.8661 30.4146 20.2054C30.0753 20.5446 29.6736 20.7143 29.2093 20.7143H1.78069C1.31641 20.7143 0.914621 20.5446 0.575335 20.2054C0.236049 19.8661 0.0664062 19.4643 0.0664062 19V1.85714C0.0664062 1.39286 0.236049 0.991071 0.575335 0.651785C0.914621 0.312499 1.31641 0.142856 1.78069 0.142856H29.2093C29.6736 0.142856 30.0753 0.312499 30.4146 0.651785C30.7539 0.991071 30.9236 1.39286 30.9236 1.85714Z"
                  fill="#495057"
                />
              </svg>

              <svg
                className="me-2"
                width="31"
                height="21"
                viewBox="0 0 31 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.053 2.99553C13.9102 2.23661 12.6557 1.85714 11.2896 1.85714C10.37 1.85714 9.48605 2.04018 8.63784 2.40625C7.79855 2.76339 7.07534 3.24553 6.46819 3.85268C5.86105 4.45982 5.37444 5.18304 5.00837 6.02232C4.65123 6.86161 4.47266 7.74107 4.47266 8.66071C4.47266 9.58929 4.65123 10.4732 5.00837 11.3125C5.37444 12.1518 5.86105 12.875 6.46819 13.4821C7.07534 14.0893 7.79855 14.5759 8.63784 14.942C9.47712 15.2991 10.361 15.4777 11.2896 15.4777C12.6557 15.4777 13.9102 15.0982 15.053 14.3393C13.8834 13.3839 13.0887 12.2009 12.6691 10.7902C12.2494 9.37054 12.2494 7.95536 12.6691 6.54464C13.0977 5.13393 13.8923 3.95089 15.053 2.99553ZM15.495 3.31696C14.37 4.20089 13.6021 5.31696 13.1914 6.66518C12.7807 8.00446 12.7762 9.34375 13.178 10.683C13.5887 12.0223 14.361 13.1339 15.495 14.0179C16.6289 13.1339 17.3968 12.0223 17.7986 10.683C18.2093 9.34375 18.2093 8.00446 17.7986 6.66518C17.3878 5.31696 16.62 4.20089 15.495 3.31696ZM15.9369 2.99553C17.0977 3.95089 17.8878 5.13839 18.3075 6.55803C18.736 7.96875 18.7405 9.38393 18.3209 10.8036C17.9012 12.2143 17.1066 13.3929 15.9369 14.3393C17.0798 15.0982 18.3343 15.4777 19.7003 15.4777C20.6289 15.4777 21.5128 15.2991 22.3521 14.942C23.1914 14.5759 23.9146 14.0893 24.5218 13.4821C25.1289 12.875 25.6111 12.1518 25.9682 11.3125C26.3343 10.4732 26.5173 9.58929 26.5173 8.66071C26.5173 7.74107 26.3343 6.86161 25.9682 6.02232C25.6111 5.18304 25.1289 4.45982 24.5218 3.85268C23.9146 3.24553 23.1869 2.76339 22.3387 2.40625C21.4994 2.04018 20.62 1.85714 19.7003 1.85714C18.3343 1.85714 17.0798 2.23661 15.9369 2.99553ZM25.8611 12.6652H25.9548V12.625H25.7271V12.6652H25.8209V12.8929H25.8611V12.6652ZM26.2494 12.8929H26.303V12.625H26.2361L26.1557 12.7991L26.0753 12.625H26.0084V12.8929H26.0486V12.692L26.1289 12.8661H26.1825L26.2494 12.692V12.8929ZM26.1423 18.7857V18.8125H26.1155H26.0753V18.7723H26.1155H26.1423V18.7857ZM26.1423 18.9062H26.1825L26.1289 18.8393C26.1378 18.8393 26.1468 18.8393 26.1557 18.8393L26.1691 18.8259C26.178 18.817 26.1825 18.8036 26.1825 18.7857C26.1825 18.7679 26.178 18.7545 26.1691 18.7455L26.1557 18.7321C26.1378 18.7321 26.1244 18.7321 26.1155 18.7321H26.0352V18.9062H26.0753V18.8393H26.0887L26.1423 18.9062ZM9.38784 18.4107C9.28962 18.3036 9.24051 18.1652 9.24051 17.9955C9.24051 17.8259 9.28962 17.6875 9.38784 17.5804C9.48605 17.4732 9.61998 17.4196 9.78962 17.4196C9.95034 17.4196 10.0798 17.4777 10.178 17.5937C10.2762 17.7009 10.3253 17.8348 10.3253 17.9955C10.3253 18.1652 10.2762 18.3036 10.178 18.4107C10.0798 18.5179 9.95034 18.5714 9.78962 18.5714C9.61998 18.5714 9.48605 18.5179 9.38784 18.4107ZM15.1066 17.8348C15.1512 17.5491 15.3075 17.4062 15.5753 17.4062C15.8432 17.4062 15.9994 17.5491 16.0441 17.8348H15.1066ZM20.4905 18.4107C20.3923 18.3036 20.3432 18.1652 20.3432 17.9955C20.3432 17.8259 20.3923 17.6875 20.4905 17.5804C20.5887 17.4732 20.7182 17.4196 20.8789 17.4196C21.0396 17.4196 21.1691 17.4777 21.2673 17.5937C21.3744 17.7009 21.428 17.8348 21.428 17.9955C21.428 18.1652 21.3789 18.3036 21.2807 18.4107C21.1825 18.5179 21.0486 18.5714 20.8789 18.5714C20.7182 18.5714 20.5887 18.5179 20.4905 18.4107ZM24.1334 18.4107C24.0352 18.2946 23.9861 18.1562 23.9861 17.9955C23.9861 17.8348 24.0352 17.7009 24.1334 17.5937C24.2405 17.4777 24.3744 17.4196 24.5352 17.4196C24.6959 17.4196 24.8253 17.4777 24.9236 17.5937C25.0307 17.7009 25.0843 17.8348 25.0843 17.9955C25.0843 18.1652 25.0307 18.3036 24.9236 18.4107C24.8253 18.5179 24.6959 18.5714 24.5352 18.5714C24.3744 18.5714 24.2405 18.5179 24.1334 18.4107ZM26.1021 18.9598C26.0843 18.9598 26.0664 18.9554 26.0486 18.9464C26.0396 18.9464 26.0262 18.9375 26.0084 18.9196C25.9905 18.9018 25.9816 18.8884 25.9816 18.8795C25.9727 18.8616 25.9682 18.8437 25.9682 18.8259C25.9682 18.7991 25.9727 18.7812 25.9816 18.7723C25.9816 18.7545 25.9905 18.7366 26.0084 18.7187C26.0173 18.7098 26.0218 18.7054 26.0218 18.7054C26.0396 18.7054 26.0486 18.7009 26.0486 18.692C26.0664 18.683 26.0843 18.6786 26.1021 18.6786C26.1289 18.6786 26.1468 18.683 26.1557 18.692C26.1914 18.7098 26.2093 18.7187 26.2093 18.7187L26.2361 18.7723V18.7857C26.245 18.8036 26.2494 18.817 26.2494 18.8259L26.2361 18.8393C26.2361 18.8571 26.2361 18.8705 26.2361 18.8795C26.2361 18.8884 26.2316 18.8929 26.2227 18.8929L26.2093 18.9196C26.1914 18.9375 26.1736 18.9464 26.1557 18.9464C26.1468 18.9554 26.1289 18.9598 26.1021 18.9598ZM8.08873 18.9062H8.49051V17.7679C8.49051 17.5536 8.42355 17.3839 8.28962 17.2589C8.16462 17.125 7.99051 17.0536 7.7673 17.0446C7.48159 17.0446 7.27176 17.1518 7.13784 17.3661C7.01284 17.1518 6.81194 17.0446 6.53516 17.0446C6.32087 17.0446 6.14676 17.1339 6.01284 17.3125V17.0982H5.61105V18.9062H6.01284V17.9018C6.01284 17.5804 6.16016 17.4196 6.4548 17.4196C6.72266 17.4196 6.85659 17.5804 6.85659 17.9018V18.9062H7.24498V17.9018C7.24498 17.5804 7.3923 17.4196 7.68694 17.4196C7.9548 17.4196 8.08873 17.5804 8.08873 17.9018V18.9062ZM10.3119 18.9062H10.7003V17.9955V17.0982H10.3119V17.3125C10.1602 17.1339 9.96819 17.0446 9.73605 17.0446C9.47712 17.0446 9.26284 17.1339 9.09319 17.3125C8.92355 17.4911 8.83873 17.7187 8.83873 17.9955C8.83873 18.2723 8.92355 18.5 9.09319 18.6786C9.26284 18.8571 9.47712 18.9464 9.73605 18.9464C9.98605 18.9464 10.178 18.8571 10.3119 18.6786V18.9062ZM12.6959 18.3571C12.6959 18.0536 12.486 17.875 12.0664 17.8214L11.8789 17.7946C11.6735 17.7589 11.5709 17.6964 11.5709 17.6071C11.5709 17.4732 11.6825 17.4062 11.9057 17.4062C12.1111 17.4062 12.303 17.4554 12.4816 17.5536L12.6423 17.2321C12.4459 17.1071 12.2003 17.0446 11.9057 17.0446C11.6735 17.0446 11.4905 17.0982 11.3566 17.2054C11.2227 17.3125 11.1557 17.4554 11.1557 17.6339C11.1557 17.9286 11.3655 18.1027 11.7852 18.1562L11.9593 18.183C12.1735 18.2187 12.2807 18.2812 12.2807 18.3705C12.2807 18.5223 12.1423 18.5982 11.8655 18.5982C11.6423 18.5982 11.4414 18.5357 11.2628 18.4107L11.0887 18.7187C11.3119 18.8705 11.5709 18.9464 11.8655 18.9464C12.1244 18.9464 12.3253 18.8929 12.4682 18.7857C12.62 18.6786 12.6959 18.5357 12.6959 18.3571ZM14.4369 18.8125L14.3298 18.4777C14.2137 18.5402 14.0977 18.5714 13.9816 18.5714C13.8119 18.5714 13.7271 18.4732 13.7271 18.2768V17.4598H14.37V17.0982H13.7271V16.5491H13.3253V17.0982H12.9503V17.4598H13.3253V18.2768C13.3253 18.7232 13.5352 18.9464 13.9548 18.9464C14.1423 18.9464 14.303 18.9018 14.4369 18.8125ZM15.5887 17.0446C15.3298 17.0446 15.1155 17.1339 14.9459 17.3125C14.7762 17.4911 14.6914 17.7187 14.6914 17.9955C14.6914 18.2812 14.7762 18.5134 14.9459 18.692C15.1244 18.8616 15.3477 18.9464 15.6155 18.9464C15.9102 18.9464 16.1557 18.8616 16.3521 18.692L16.1646 18.3973C16.0039 18.5312 15.8298 18.5982 15.6423 18.5982C15.3387 18.5982 15.1557 18.4509 15.0932 18.1562H16.4459V17.9955C16.4459 17.7098 16.3655 17.4821 16.2048 17.3125C16.0441 17.1339 15.8387 17.0446 15.5887 17.0446ZM17.7182 17.0446C17.5128 17.0446 17.3566 17.1339 17.2494 17.3125V17.0982H16.8477V18.9062H17.2494V17.8884C17.2494 17.5759 17.3789 17.4196 17.6378 17.4196C17.7271 17.4196 17.8075 17.4375 17.8789 17.4732L17.9994 17.0982C17.9191 17.0625 17.8253 17.0446 17.7182 17.0446ZM18.3744 17.3125C18.2048 17.4911 18.12 17.7187 18.12 17.9955C18.12 18.2723 18.2048 18.5 18.3744 18.6786C18.553 18.8571 18.7896 18.9464 19.0843 18.9464C19.3432 18.9464 19.5575 18.875 19.7271 18.7321L19.5396 18.4107C19.3789 18.5268 19.2227 18.5804 19.0709 18.5714C18.9102 18.5714 18.7762 18.5179 18.6691 18.4107C18.5709 18.3036 18.5218 18.1652 18.5218 17.9955C18.5218 17.8259 18.5709 17.6875 18.6691 17.5804C18.7762 17.4732 18.9102 17.4196 19.0709 17.4196C19.2405 17.4196 19.3968 17.4732 19.5396 17.5804L19.7271 17.2589C19.5485 17.1161 19.3343 17.0446 19.0843 17.0446C18.7896 17.0446 18.553 17.1339 18.3744 17.3125ZM21.4012 18.9062H21.803V17.9955V17.0982H21.4012V17.3125C21.2673 17.1339 21.0798 17.0446 20.8387 17.0446C20.5798 17.0446 20.361 17.1339 20.1825 17.3125C20.0128 17.4911 19.928 17.7187 19.928 17.9955C19.928 18.2723 20.0128 18.5 20.1825 18.6786C20.361 18.8571 20.5798 18.9464 20.8387 18.9464C21.0887 18.9464 21.2762 18.8571 21.4012 18.6786V18.9062ZM23.1825 17.0446C22.9771 17.0446 22.8209 17.1339 22.7137 17.3125V17.0982H22.3253V18.9062H22.7137V17.8884C22.7137 17.5759 22.8432 17.4196 23.1021 17.4196C23.1914 17.4196 23.2718 17.4375 23.3432 17.4732L23.4637 17.0982C23.3923 17.0625 23.2986 17.0446 23.1825 17.0446ZM25.0575 18.9062H25.4459V17.9955V16.3616H25.0575V17.3125C24.9236 17.1339 24.7316 17.0446 24.4816 17.0446C24.2316 17.0446 24.0173 17.1384 23.8387 17.3259C23.6691 17.5045 23.5843 17.7277 23.5843 17.9955C23.5843 18.2634 23.6691 18.4911 23.8387 18.6786C24.0173 18.8571 24.2316 18.9464 24.4816 18.9464C24.7405 18.9464 24.9325 18.8571 25.0575 18.6786V18.9062ZM26.1021 18.6384L26.0753 18.6518C26.0575 18.6518 26.0441 18.6518 26.0352 18.6518C26.0173 18.6607 25.9994 18.6741 25.9816 18.692C25.9548 18.7009 25.9414 18.7187 25.9414 18.7455C25.9325 18.7634 25.928 18.7902 25.928 18.8259C25.928 18.8527 25.9325 18.875 25.9414 18.8929C25.9414 18.9107 25.9548 18.9286 25.9816 18.9464C25.9994 18.9643 26.0173 18.9777 26.0352 18.9866C26.053 18.9955 26.0753 19 26.1021 19C26.1378 19 26.1646 18.9955 26.1825 18.9866C26.1825 18.9777 26.1914 18.9687 26.2093 18.9598L26.2361 18.9464C26.245 18.9375 26.2584 18.9196 26.2762 18.8929C26.2852 18.875 26.2896 18.8527 26.2896 18.8259C26.2896 18.7902 26.2852 18.7634 26.2762 18.7455C26.2673 18.7366 26.2539 18.7187 26.2361 18.692C26.2361 18.683 26.2271 18.6741 26.2093 18.6652L26.1825 18.6518C26.1736 18.6518 26.1602 18.6518 26.1423 18.6518C26.1244 18.6429 26.111 18.6384 26.1021 18.6384ZM30.9236 1.85714V19C30.9236 19.4643 30.7539 19.8661 30.4146 20.2054C30.0753 20.5446 29.6736 20.7143 29.2093 20.7143H1.78069C1.31641 20.7143 0.914621 20.5446 0.575335 20.2054C0.236049 19.8661 0.0664062 19.4643 0.0664062 19V1.85714C0.0664062 1.39286 0.236049 0.991071 0.575335 0.651785C0.914621 0.312499 1.31641 0.142856 1.78069 0.142856H29.2093C29.6736 0.142856 30.0753 0.312499 30.4146 0.651785C30.7539 0.991071 30.9236 1.39286 30.9236 1.85714Z"
                  fill="#495057"
                />
              </svg>

              <svg
                className="me-2"
                width="31"
                height="21"
                viewBox="0 0 31 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66016 7.5625H2.85212L2.24944 6.11607L1.66016 7.5625ZM9.97712 14.6071L10.9682 13.5491L10.0307 12.4911H7.84766V13.1473H9.74944V13.8839H7.84766V14.6071H9.97712ZM12.0932 13.5625L13.4191 15.0357V12.1295L12.0932 13.5625ZM15.9503 12.933C15.9503 12.6384 15.7718 12.4911 15.4146 12.4911H14.2896V13.4152H15.4012C15.7673 13.4152 15.9503 13.2545 15.9503 12.933ZM19.8209 12.8795C19.8209 12.6205 19.6334 12.4911 19.2584 12.4911H18.1602V13.308H19.245C19.6289 13.308 19.8209 13.1652 19.8209 12.8795ZM16.0977 6.63839C16.0977 6.37946 15.9102 6.25 15.5352 6.25H14.4369V7.05357H15.5218C15.9057 7.05357 16.0977 6.91518 16.0977 6.63839ZM22.245 7.5625H23.4369L22.8477 6.11607L22.245 7.5625ZM9.42801 5.48661V9.11607H8.54409V6.27678L7.28516 9.11607H6.52176L5.26284 6.27678V9.11607H3.49498L3.16016 8.3125H1.35212L1.0173 9.11607H0.0797991L1.63337 5.48661H2.91909L4.3923 8.92857V5.48661H5.81194L6.95034 7.95089L7.98159 5.48661H9.42801ZM16.8744 12.933C16.8744 13.1116 16.8477 13.2679 16.7941 13.4018C16.7494 13.5357 16.6869 13.6473 16.6066 13.7366C16.5352 13.8259 16.4369 13.9018 16.3119 13.9643C16.1869 14.0179 16.0709 14.0625 15.9637 14.0982C15.8566 14.125 15.7137 14.1429 15.5352 14.1518C15.3655 14.1607 15.2271 14.1652 15.12 14.1652C15.0128 14.1652 14.8655 14.1652 14.678 14.1652C14.4994 14.1562 14.37 14.1518 14.2896 14.1518V15.3705H12.6021L11.5307 14.1652L10.4191 15.3705H6.99051V11.7411H10.4727L11.5441 12.933L12.6423 11.7411H15.4146C16.3878 11.7411 16.8744 12.1384 16.8744 12.933ZM12.9771 8.36607V9.11607H10.0709V5.48661H12.9771V6.25H10.9414V6.90625H12.9236V7.64286H10.9414V8.36607H12.9771ZM30.9236 15.8527V18.9196C30.9236 19.4107 30.7494 19.8304 30.4012 20.1786C30.0619 20.5357 29.6468 20.7143 29.1557 20.7143H1.83426C1.34319 20.7143 0.923549 20.5357 0.575335 20.1786C0.236049 19.8304 0.0664062 19.4107 0.0664062 18.9196V9.83929H1.55301L1.88783 9.02232H2.62444L2.95926 9.83929H5.87891V9.22321L6.13337 9.83929H7.64676L7.91462 9.20982V9.83929H15.1602V8.51339L15.2941 8.5C15.3834 8.5 15.428 8.5625 15.428 8.6875V9.83929H19.1646V9.53125C19.37 9.63839 19.6155 9.71875 19.9012 9.77232C20.1869 9.82589 20.4191 9.85714 20.5977 9.86607C20.7852 9.86607 21.0664 9.86161 21.4414 9.85268C21.8253 9.84375 22.0575 9.83929 22.1378 9.83929L22.4727 9.02232H23.2227L23.5575 9.83929H26.5977V9.0625L27.053 9.83929H29.4905V4.77678H27.0798V5.36607L26.745 4.77678H24.2673V5.36607L23.9593 4.77678H20.6244C20.0084 4.77678 19.5218 4.875 19.1646 5.07143V4.77678H16.8611V5.07143C16.6468 4.875 16.3209 4.77678 15.8834 4.77678H7.47266L6.89676 6.07589L6.32087 4.77678H3.66909V5.36607L3.37444 4.77678H1.11105L0.0664062 7.17411V1.9375C0.0664062 1.44643 0.236049 1.02679 0.575335 0.678571C0.923549 0.321428 1.34319 0.142856 1.83426 0.142856H29.1557C29.6468 0.142856 30.0619 0.321428 30.4012 0.678571C30.7494 1.02679 30.9236 1.44643 30.9236 1.9375V11.0179H29.3164C28.861 11.0179 28.4994 11.1161 28.2316 11.3125V11.0179H25.8611C25.37 11.0179 25.0218 11.1161 24.8164 11.3125V11.0179H20.5843V11.3125C20.3075 11.1161 19.9191 11.0179 19.4191 11.0179H16.62V11.3125C16.4146 11.1161 16.0084 11.0179 15.4012 11.0179H12.2673L11.5441 11.7946L10.8744 11.0179H6.20034V16.0804H10.7941L11.5307 15.2902L12.2271 16.0804H15.053V14.8884H15.3343C15.861 14.8884 16.2628 14.8304 16.5396 14.7143V16.0804H18.87V14.7545H18.9771C19.0485 14.7545 19.0932 14.7634 19.1111 14.7812C19.1289 14.7991 19.1378 14.8437 19.1378 14.9152V16.0804H26.2227C26.7316 16.0804 27.1244 15.9732 27.4012 15.7589V16.0804H29.6512C30.1869 16.0804 30.6111 16.0045 30.9236 15.8527ZM20.7718 12.7188C20.7718 12.9241 20.7182 13.1161 20.6111 13.2946C20.5039 13.4732 20.3521 13.6027 20.1557 13.683C20.3789 13.7634 20.5307 13.8795 20.6111 14.0312C20.6914 14.183 20.7316 14.3884 20.7316 14.6473V15.3705H19.8611V14.7679C19.8611 14.4732 19.8075 14.2812 19.7003 14.192C19.5932 14.0937 19.3878 14.0446 19.0843 14.0446H18.1602V15.3705H17.2896V11.7411H19.3521C19.7807 11.7411 20.1244 11.808 20.3834 11.942C20.6423 12.0759 20.7718 12.3348 20.7718 12.7188ZM17.0619 6.46428C17.0619 6.67857 17.0039 6.875 16.8878 7.05357C16.7807 7.23214 16.6334 7.36161 16.4459 7.44196C16.678 7.52232 16.8298 7.63839 16.9012 7.79018C16.9816 7.93304 17.0218 8.13839 17.0218 8.40625V9.11607H16.1512C16.1512 9.03571 16.1512 8.91964 16.1512 8.76786C16.1602 8.60714 16.1602 8.49553 16.1512 8.43303C16.1512 8.36161 16.1378 8.27679 16.1111 8.17857C16.0932 8.08036 16.0575 8.00893 16.0039 7.96428C15.9503 7.91964 15.87 7.88393 15.7628 7.85714C15.6646 7.82143 15.5352 7.80357 15.3744 7.80357H14.4369V9.11607H13.5798V5.48661L15.6289 5.5C16.0664 5.5 16.4146 5.56696 16.6736 5.70089C16.9325 5.82589 17.0619 6.08036 17.0619 6.46428ZM24.1468 14.6205V15.3705H21.2539V11.7411H24.1468V12.4911H22.1244V13.1473H24.1066V13.8839H22.1244V14.6071L24.1468 14.6205ZM18.4414 5.48661V9.11607H17.5575V5.48661H18.4414ZM27.7227 14.2187C27.7227 14.9866 27.2673 15.3705 26.3566 15.3705H24.6691V14.5937H26.3566C26.6602 14.5937 26.8119 14.4821 26.8119 14.2589C26.8119 14.1161 26.7361 14.0223 26.5843 13.9777C26.4325 13.933 26.245 13.9107 26.0218 13.9107C25.8075 13.9107 25.5887 13.8973 25.3655 13.8705C25.1423 13.8348 24.9548 13.7321 24.803 13.5625C24.6512 13.3929 24.5753 13.1473 24.5753 12.8259C24.5753 12.4777 24.6914 12.2098 24.9236 12.0223C25.1557 11.8348 25.4503 11.7411 25.8075 11.7411H27.5486V12.5045H25.9548C25.6334 12.5045 25.4727 12.6161 25.4727 12.8393C25.4727 12.9821 25.5485 13.0759 25.7003 13.1205C25.861 13.1562 26.0485 13.1741 26.2628 13.1741C26.486 13.1652 26.7048 13.1741 26.9191 13.2009C27.1423 13.2277 27.3298 13.3259 27.4816 13.4955C27.6423 13.6562 27.7227 13.8973 27.7227 14.2187ZM30.9236 13.5491V14.9018C30.7093 15.2143 30.3164 15.3705 29.745 15.3705H28.0709V14.5937H29.745C30.0396 14.5937 30.1869 14.4821 30.1869 14.2589C30.1869 14.1429 30.1289 14.058 30.0128 14.0045C29.9057 13.9509 29.7673 13.9286 29.5977 13.9375C29.4369 13.9375 29.2584 13.9286 29.0619 13.9107C28.8744 13.8839 28.6959 13.8482 28.5262 13.8036C28.3655 13.75 28.2271 13.6429 28.1111 13.4821C28.0039 13.3125 27.9503 13.0937 27.9503 12.8259C27.9503 12.4777 28.0664 12.2098 28.2986 12.0223C28.5396 11.8348 28.8387 11.7411 29.1959 11.7411H30.9236V12.5045H29.3432C29.0218 12.5045 28.8611 12.6161 28.8611 12.8393C28.8611 13.0179 28.9905 13.1161 29.2494 13.1339C29.5084 13.1518 29.8119 13.1741 30.1602 13.2009C30.5173 13.2277 30.7718 13.3437 30.9236 13.5491ZM28.7137 5.5V9.11607H27.4816L25.8477 6.39732V9.11607H24.0798L23.7316 8.3125H21.9369L21.6021 9.11607H20.5977C19.4459 9.11607 18.87 8.52232 18.87 7.33482C18.87 6.10268 19.4637 5.48661 20.6512 5.48661H21.495V6.27678C21.4325 6.27678 21.3075 6.27232 21.12 6.26339C20.9325 6.25446 20.803 6.25446 20.7316 6.26339C20.6691 6.26339 20.5664 6.27232 20.4236 6.29018C20.2896 6.29911 20.1959 6.32589 20.1423 6.37053C20.0887 6.41518 20.0218 6.47768 19.9414 6.55803C19.87 6.62946 19.8209 6.73214 19.7941 6.86607C19.7673 6.99107 19.7539 7.13839 19.7539 7.30803C19.7539 7.64732 19.8119 7.90625 19.928 8.08482C20.053 8.26339 20.2762 8.35268 20.5977 8.35268H20.9861L22.2182 5.5H23.5173L24.9771 8.92857V5.5H26.303L27.8298 8.01786V5.5H28.7137Z"
                  fill="#495057"
                />
              </svg>

              <svg
                className="me-2"
                width="31"
                height="21"
                viewBox="0 0 31 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0441 10.5625C10.0441 10.8929 9.92801 11.1696 9.69587 11.3929C9.47266 11.6071 9.19587 11.7143 8.86551 11.7143C8.60659 11.7143 8.39676 11.6429 8.23605 11.5C8.08426 11.3571 8.00837 11.1607 8.00837 10.9107C8.00837 10.5804 8.11998 10.3036 8.34319 10.0804C8.56641 9.84821 8.84319 9.73214 9.17355 9.73214C9.42355 9.73214 9.62891 9.80804 9.78962 9.95982C9.95926 10.1027 10.0441 10.3036 10.0441 10.5625ZM20.5575 8.56696C20.5575 8.94196 20.4593 9.19643 20.2628 9.33036C20.0664 9.46429 19.7718 9.53125 19.3789 9.53125L18.9503 9.54464L19.178 8.11161C19.1959 8.01339 19.2539 7.96428 19.3521 7.96428H19.5932C19.7896 7.96428 19.9459 7.97321 20.0619 7.99107C20.178 8.00893 20.2896 8.06696 20.3968 8.16518C20.5039 8.25446 20.5575 8.38839 20.5575 8.56696ZM25.2584 10.5625C25.2584 10.8839 25.1423 11.1562 24.9102 11.3795C24.6869 11.6027 24.4146 11.7143 24.0932 11.7143C23.8343 11.7143 23.6244 11.6429 23.4637 11.5C23.303 11.3571 23.2227 11.1607 23.2227 10.9107C23.2227 10.5804 23.3343 10.3036 23.5575 10.0804C23.7807 9.84821 24.0575 9.73214 24.3878 9.73214C24.6378 9.73214 24.8432 9.80804 25.0039 9.95982C25.1735 10.1027 25.2584 10.3036 25.2584 10.5625ZM6.93694 8.27232C6.93694 7.74554 6.76284 7.36607 6.41462 7.13393C6.07534 6.89286 5.62891 6.77232 5.07534 6.77232H2.93248C2.76283 6.77232 2.66908 6.85714 2.65123 7.02678L1.78069 12.4911C1.77176 12.5446 1.78516 12.5937 1.82087 12.6384C1.85658 12.683 1.90123 12.7054 1.9548 12.7054H2.97266C3.15123 12.7054 3.24944 12.6205 3.2673 12.4509L3.50837 10.9777C3.5173 10.9062 3.54855 10.8482 3.60212 10.8036C3.65569 10.7589 3.72266 10.7321 3.80301 10.7232C3.88337 10.7054 3.95926 10.6964 4.03069 10.6964C4.10212 10.6964 4.18694 10.7009 4.28516 10.7098C4.38337 10.7187 4.44587 10.7232 4.47266 10.7232C5.24051 10.7232 5.84319 10.5089 6.28069 10.0804C6.71819 9.64286 6.93694 9.04018 6.93694 8.27232ZM11.0753 12.4509L11.6244 8.95536C11.6334 8.90179 11.62 8.85268 11.5843 8.80804C11.5485 8.76339 11.5039 8.74107 11.4503 8.74107H10.4325C10.3075 8.74107 10.2316 8.88839 10.2048 9.18304C9.96373 8.82589 9.53962 8.64732 8.93248 8.64732C8.28962 8.64732 7.74051 8.88839 7.28516 9.37054C6.83873 9.85268 6.61551 10.4196 6.61551 11.0714C6.61551 11.5982 6.7673 12.0179 7.07087 12.3304C7.38337 12.6429 7.79855 12.7991 8.31641 12.7991C8.56641 12.7991 8.82534 12.7455 9.09319 12.6384C9.36105 12.5312 9.57534 12.3884 9.73605 12.2098C9.70034 12.317 9.68248 12.4107 9.68248 12.4911C9.68248 12.6339 9.74051 12.7054 9.85659 12.7054H10.7807C10.9503 12.7054 11.0485 12.6205 11.0753 12.4509ZM17.0352 9.02232C17.053 9.00446 17.0619 8.97321 17.0619 8.92857C17.0619 8.88393 17.0441 8.84375 17.0084 8.80804C16.9727 8.76339 16.9325 8.74107 16.8878 8.74107H15.8566C15.7584 8.74107 15.678 8.78571 15.6155 8.875L14.1959 10.9643L13.6066 8.95536C13.5619 8.8125 13.4637 8.74107 13.3119 8.74107H12.3075C12.2628 8.74107 12.2227 8.76339 12.1869 8.80804C12.1512 8.84375 12.1334 8.88393 12.1334 8.92857C12.1334 8.94643 12.2182 9.20982 12.3878 9.71875C12.5664 10.2277 12.7539 10.7768 12.9503 11.3661C13.1557 11.9554 13.2628 12.2679 13.2718 12.3036C12.5396 13.3036 12.1736 13.8393 12.1736 13.9107C12.1736 14.0268 12.2316 14.0848 12.3477 14.0848H13.3789C13.4771 14.0848 13.5575 14.0402 13.62 13.9509L17.0352 9.02232ZM22.1512 8.27232C22.1512 7.74554 21.9771 7.36607 21.6289 7.13393C21.2896 6.89286 20.8432 6.77232 20.2896 6.77232H18.1602C17.9816 6.77232 17.8834 6.85714 17.8655 7.02678L16.995 12.4911C16.986 12.5446 16.9994 12.5937 17.0352 12.6384C17.0709 12.683 17.1155 12.7054 17.1691 12.7054H18.2673C18.3744 12.7054 18.4459 12.6473 18.4816 12.5312L18.7227 10.9777C18.7316 10.9062 18.7628 10.8482 18.8164 10.8036C18.87 10.7589 18.9369 10.7321 19.0173 10.7232C19.0977 10.7054 19.1735 10.6964 19.245 10.6964C19.3164 10.6964 19.4012 10.7009 19.4994 10.7098C19.5977 10.7187 19.6602 10.7232 19.6869 10.7232C20.4548 10.7232 21.0575 10.5089 21.495 10.0804C21.9325 9.64286 22.1512 9.04018 22.1512 8.27232ZM26.2896 12.4509L26.8387 8.95536C26.8477 8.90179 26.8343 8.85268 26.7986 8.80804C26.7628 8.76339 26.7182 8.74107 26.6646 8.74107H25.6468C25.5218 8.74107 25.4459 8.88839 25.4191 9.18304C25.1869 8.82589 24.7628 8.64732 24.1468 8.64732C23.5039 8.64732 22.9548 8.88839 22.4994 9.37054C22.053 9.85268 21.8298 10.4196 21.8298 11.0714C21.8298 11.5982 21.9816 12.0179 22.2852 12.3304C22.5977 12.6429 23.0128 12.7991 23.5307 12.7991C23.7896 12.7991 24.053 12.7455 24.3209 12.6384C24.5887 12.5312 24.7985 12.3884 24.9503 12.2098C24.9503 12.2187 24.9414 12.2589 24.9236 12.3304C24.9057 12.4018 24.8968 12.4554 24.8968 12.4911C24.8968 12.6339 24.9548 12.7054 25.0709 12.7054H25.995C26.1646 12.7054 26.2628 12.6205 26.2896 12.4509ZM29.2093 6.97321V6.95982C29.2093 6.83482 29.1512 6.77232 29.0352 6.77232H28.0441C27.9459 6.77232 27.8878 6.82143 27.87 6.91964L26.9994 12.4911L26.9861 12.5179C26.9861 12.5625 27.0039 12.6071 27.0396 12.6518C27.0753 12.6875 27.12 12.7054 27.1736 12.7054H28.0575C28.2271 12.7054 28.3209 12.6205 28.3387 12.4509L29.2093 6.97321ZM5.31641 8.76786C5.27176 9.08036 5.15569 9.28571 4.96819 9.38393C4.78069 9.48214 4.51284 9.53125 4.16462 9.53125L3.72266 9.54464L3.95034 8.11161C3.96819 8.01339 4.02623 7.96428 4.12444 7.96428H4.37891C4.73605 7.96428 4.99498 8.01786 5.15569 8.125C5.31641 8.22321 5.36998 8.4375 5.31641 8.76786ZM30.9236 1.85714V19C30.9236 19.4643 30.7539 19.8661 30.4146 20.2054C30.0753 20.5446 29.6736 20.7143 29.2093 20.7143H1.78069C1.31641 20.7143 0.914621 20.5446 0.575335 20.2054C0.236049 19.8661 0.0664062 19.4643 0.0664062 19V1.85714C0.0664062 1.39286 0.236049 0.991071 0.575335 0.651785C0.914621 0.312499 1.31641 0.142856 1.78069 0.142856H29.2093C29.6736 0.142856 30.0753 0.312499 30.4146 0.651785C30.7539 0.991071 30.9236 1.39286 30.9236 1.85714Z"
                  fill="#495057"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
