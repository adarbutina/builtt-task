import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';
import { Link } from 'react-router-dom';

const BlockCart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity, 10) }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotalCartAmount = () => {
    return cart.reduce((total, product) => {
      return total + product.sale_price * product.quantity;
    }, 0);
  };

  const getTotalCartSavings = () => {
    return cart.reduce((total, product) => {
      return total + (product.regular_price - product.sale_price) * product.quantity;
    }, 0);
  }

  return (
    <>
      <div className="component" data-name="BlockCart">
        <div className="container">
          <h1 className="h2">Tvoja korpa</h1>
          {cart.length === 0 ? (
            <>
              <p>Nemate proizvoda u korpi</p>
              <Link to="/collection" className="button button--primary">Nazad na katalog</Link>
            </>
          ) : (
            <>
              <div className="cart">
                <div className="cart-items">
                  <ul className="list">
                    {cart.map((product, productKey) => (
                      <li className="product" key={productKey}>
                        <picture className="product__picture">
                          <img className="product__pictureImage" src={product.img} alt={product.title} />
                        </picture>
                        <div className="product__information">
                          <div className="product__details">
                            <div className="product__content">
                              <div className="product__title">{product.title}</div>
                              <div className="product__subtitle">{product.subtitle}</div>
                            </div>
                            <div className="product__controls">
                              <span className="button button--secondary button__quantity">
                                <button type="button" className="button button--tertiary" onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                                <span className="amount">{product.quantity}</span>
                                <button type="button" className="button button--tertiary" onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                              </span>
                              <button className="button__removeFromCart" onClick={() => handleRemove(product.id)}>Ukloni</button>
                            </div>
                          </div>
                          <div className="product__price">
                            { product.regular_price > product.sale_price &&
                              <span className="amount--old">{product.regular_price * product.quantity + ' ' + product.currency}</span>
                            }
                            <span className="amount">{product.sale_price * product.quantity + ' ' + product.currency}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link to="/collection" className="button button--secondary button__go-to-catalogue">Dodaj još proizvoda</Link>
                </div>
                <div className="cart__summary">
                  <h2 className="h3">Tvoja narudžbina</h2>
                  <ul className="cart__summary-list">
                    <li className="cart__summary-item">
                      <span className="cart__summary-label">Ukupno</span>
                      <span className="cart__summary-amount">
                        <span className="cart__summary-integer">{getTotalCartAmount()}</span>
                        <span className="cart__summary-currency">RSD</span>
                      </span>
                    </li>
                    <li className="cart__summary-item">
                      <span className="cart__summary-label">Ušteda</span>
                      <span className="cart__summary-amount">
                        <span className="cart__summary-integer">-{getTotalCartSavings()}</span>
                        <span className="cart__summary-currency">RSD</span>
                      </span>
                    </li>
                    <li className="cart__summary-item">
                      <span className="cart__summary-label">Isporuka Daily Express*</span>
                      <span className="cart__summary-amount">Besplatna</span>
                    </li>
                    <li className="cart__summary-item">
                      <span className="cart__summary-label cart__summary-label--emphasized">Ukupno za uplatu</span>
                      <span className="cart__summary-amount cart__summary-amount--emphasized">
                        <span className="cart__summary-integer">{getTotalCartAmount()}</span>
                        <span className="cart__summary-currency">RSD</span>
                      </span>
                    </li>
                  </ul>
                  <div className="cart__summary-disclaimer">Cena je sa uključenim PDV-om</div>
                  <button type="button" className="button button--primary button__go-to-checkout">Prijavi se za brže plaćanje</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BlockCart;
