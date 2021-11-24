import React, {FC} from 'react';
import btnRemoveSVG from "../img/btn-remove.svg";
import emptyCartSVG from '../img/empty-cart.jpg'
import arrowSVG from "../img/arrow.svg";
import completeSVG from '../img/complete-order.jpg'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CartItem} from "./CartItem";
import {Info} from "./Info";
import {useActions} from "../hooks/useActions";


interface CartProps {
    onCartVisible: () => void,
    totalPrice: number,
    cartVisible: boolean
}

export const Cart: FC<CartProps> = ({onCartVisible,totalPrice, cartVisible }) => {

    const {cart} = useTypedSelector(state => state.cart)
    const {order} = useTypedSelector(state => state.order)
    const {clearCart, addSneakerToOrder} = useActions()
    const [orderComplete, setOrderComplete] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    // @ts-ignore
    const onOrdersSneaker = cart.reduce((prev, obj) => [...prev, obj], [])

    console.log(onOrdersSneaker)

    const onOrderComplete = () => {
        setIsLoading(true)
        setTimeout(async () => {
            setOrderComplete(true)
            clearCart()
            setIsLoading(false)
            addSneakerToOrder(onOrdersSneaker)
        }, 3000)

    }



   const totalTax = Math.floor(totalPrice * 0.13)


    return (
        <div className={`cart ${cartVisible ? 'cartVisible' : ''}`} onClick={onCartVisible}>
            <div className={`cart__block ${cartVisible ? 'cartVisible__block' : ''}`} onClick={(e) => e.stopPropagation()}>
                <h2>Корзина
                    <img onClick={onCartVisible} className={'cart__block-item-remove'} src={btnRemoveSVG}
                         alt={'Remove'}/>
                </h2>

                {cart.length > 0
                    ? <>
                        {cart && cart.map(item => (
                            <CartItem
                                item={item}
                                key={item.id}
                            />
                        ))}
                        <div className={'cart__block-order'}>
                            <ul className={'cart__block-total'}>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 13%:</span>
                                    <div></div>
                                    <b>{totalTax} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onOrderComplete} className={'cart__block-button'}>
                                Оформить заказ
                                <img src={arrowSVG} alt={'Arrow'}/>
                            </button>
                        </div>
                    </>
                    : <Info
                        title={orderComplete ? "Заказ оформлен" : 'Корзина пустая'}
                        description={orderComplete ? `Ваш заказ №${order.length} скоро будет передане курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                        img={orderComplete ? completeSVG : emptyCartSVG}
                        onCartVisible={onCartVisible}
                    />
                }
            </div>
        </div>
    );
};

