import React from 'react';
import Cartitem from './CartItem';
import './Cart.scss';

const cartList = [
  // {
  //   id: 1,
  //   product:
  //     'https://crowcanyon.co.kr/web/product/tiny/202203/5661ad01dd57773fdb78c8bd1c3c523f.png',
  //   info: 'C03 쇼트텀블러 민트 히비스커스',
  //   price: 21000,
  //   qty: 1,
  // },
  // {
  //   id: 2,
  //   product:
  //     'https://crowcanyon.co.kr/web/product/tiny/202110/77161f15372c33c8413ab198ad0cae3d.jpg',
  //   info: 'K93 텀블러 블루스펙클',
  //   price: 21000,
  //   qty: 1,
  // },
];

const itemTotal = cartList.length;
const cartEmpty = cartList.length === 0;

const Cart = () => {
  return (
    <div className="cart">
      <h1 className="basket">장바구니</h1>
      <div className="tableWrapper">
        <p>국내배송({itemTotal})</p>
        {!cartEmpty && (
          <>
            <table>
              <thead>
                <tr>
                  <th className="checkBox">
                    <input type="checkbox" />
                  </th>
                  <th>Product</th>
                  <th>Info</th>
                  <th>Price</th>
                  <th>Qty.</th>
                  <th>Mileage</th>
                  <th>Delivery</th>
                  <th>Charge</th>
                  <th>Total</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((item, idx) => {
                  return (
                    <Cartitem
                      key={idx}
                      item={item}
                      total={itemTotal}
                      idx={idx}
                    />
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="10">
                    <div className="apple">
                      <strong>Price</strong>
                      <div className="pricebox">
                        <span>50,000원</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="10">
                    <div className="apple">
                      <strong>Shipping</strong>
                      <div className="pricebox">
                        <span>0원</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="10" className="lastTd">
                    <div className="apple">
                      <strong>Total</strong>
                      <div className="pricebox">
                        <span>50,000원</span>
                      </div>
                    </div>
                  </td>
                </tr>
                {/* <tr>
              <td colspan="10">
                <strong>Shipping</strong>
                <div className="pricebox">
                  <span>0</span>
                  <span>원</span>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="10">
                <strong>Total</strong>
                <div className="pricebox">
                  <span>50,000</span>
                  <span>원</span>
                </div>
              </td>
            </tr> */}
              </tfoot>
            </table>
            <div className="bottomBtn">
              <div className="deleteBtn">
                <button>Select Delete</button>
                <button>Delete</button>
              </div>
              <div className="orderBtn">
                <button>Select Order</button>
                <button>Order</button>
              </div>
            </div>
          </>
        )}
        {cartEmpty && (
          <>
            <table>
              <thead>
                <tr>
                  <th className="noItem">No Items</th>
                </tr>
              </thead>
            </table>
            <div className="bottomBtn">
              <div className="deleteBtn" />
              <div className="orderBtn">
                <button>Select Order</button>
                <button>Order</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
