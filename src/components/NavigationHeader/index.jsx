import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '/logo.svg';

const NavigationHeader = () => {
  const cartCount = useSelector((state) =>
    state.cart.products.reduce((count, product) => count + product.quantity, 0)
  );

  return (
    <>
      <div className="component" data-name="NavigationHeader">
        <div className="container">
          <Link to="/collection" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <Link to="/cart" className="button button--tertiary button__cart">
            <svg className="svg-icon svg-icon__cart" viewBox="0 0 24 24" focusable="false" width="24" height="24">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.9997 4c1.7048 0 2.9806 1.122 3.4578 2.7127.3246 1.0819.5718 2.1886.8335 3.2873h6.1517l-3.75 10H5.3067l-3.75-10h6.1516c.2617-1.0987.509-2.2054.8335-3.2873C9.019 5.122 10.2948 4 11.9997 4zm2.2348 6H9.7648c.2293-.9532.5299-2.1701.6927-2.7127C10.6838 6.533 11.1739 6 11.9997 6s1.3158.533 1.5421 1.2873c.1628.5426.4634 1.7595.6927 2.7127zm-9.7918 2 2.25 6h10.614l2.25-6h-3.3252c-.6633 2.1065-1.7665 4-4.2318 4-2.4654 0-3.5686-1.8935-4.2319-4h-3.325zm5.4308 0c.3635 1.0612.8841 2 2.1262 2 1.242 0 1.7626-.9388 2.1261-2H9.8735z"></path>
            </svg>
            { cartCount > 0 ? <span className="cart__count">{cartCount}</span> : null }
           </Link>
        </div>
      </div>
    </>
  );
}

export default NavigationHeader;
