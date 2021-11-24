import React from 'react';

import {useTypedSelector} from "../hooks/useTypedSelector";

import {SneakerCard} from "../components/SneakerCard";
import {CartEmpty} from "../components/CartEmpty";

export const Orders = () => {
    const {order} = useTypedSelector(state => state.order)

    const confirmOrder = order.map(cartObj => cartObj).flat()


    return (
        <main className={'content'}>
            {confirmOrder.length ? <>
                <div className={'content__header'}>
                    <h1>Мои заказы</h1>

                </div>
                <div className={'content__container'}>
                    {confirmOrder && confirmOrder.map((orderObj, index) =>
                        <SneakerCard
                            sneaker={orderObj}
                            key={index}
                            hidePlus={false}
                            hideLike={false}

                        />)}
                </div>
            </> :
                <CartEmpty
                    title={'У вас нет заказов'}
                    description={'Здесь появятся купленные товары. Начать покупки?'}
                    button={'За покупками'}
                    img={false}/>
            }
        </main>
    );
};

