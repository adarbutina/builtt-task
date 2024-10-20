import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

const GridProducts = ({products}) =>
{
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="component" data-name="GridProducts">
        <div className="container">
          <h2>Svi proizvodi ({products.length})</h2>
          <ul className="grid">
            {products.map((product) => (
              <li className="product" key={product.id}>
                <picture className="picture">
                  <img className="picture-image" src={product.img} alt={product.name} />
                  </picture>
                <div className="content">
                  <div className="title">{product.title}</div>
                  <div className="subtitle">{product.subtitle}</div>
                  <div className="price price--sale">
                    <span className="price__amount">{product.sale_price}</span>
                    <span className="price__currency">{product.currency}</span>
                  </div>
                  { product.regular_price > product.sale_price ?
                  <>
                    <div className="price price--regular">
                      Prethodna cena:
                      <span className="price__amount">{product.regular_price}</span>
                      <span className="price__currency">{product.currency}</span>
                    </div>
                  </> : null }
                </div>
                <div className="controls">
                  <button
                    type="button"
                    className="button button--primary button__add-to-cart"
                    onClick={() => handleAddToCart(product)}>
                    <span className="button__icon">
                      <svg className="svg-icon svg-icon__add-to-cart" viewBox="0 0 24 24" focusable="false" width="24" height="24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.9997 4C10.2948 4 9.019 5.122 8.5418 6.7127 8.2172 7.7946 7.97 8.9013 7.7083 10H1.5566l3.7501 10h9.6931v-2h-8.307l-2.2501-6h3.3251c.6634 2.1065 1.7665 4 4.2319 4 2.4653 0 3.5685-1.8935 4.2318-4h3.3252l-.375 1h2.136l1.125-3H16.291c-.2617-1.0987-.5089-2.2054-.8335-3.2873C14.9803 5.122 13.7045 4 11.9997 4zm2.2348 6c-.2293-.9532-.5299-2.1701-.6927-2.7127C13.3155 6.533 12.8255 6 11.9997 6s-1.3159.533-1.5422 1.2873C10.2947 7.83 9.9941 9.0468 9.7648 10h4.4697zm-4.361 2h4.2523c-.3635 1.0612-.8841 2-2.1261 2-1.2421 0-1.7627-.9388-2.1262-2z"></path>
                        <path fill="currentColor" d="M19.9998 14h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path>
                        </svg>
                      </span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default GridProducts;