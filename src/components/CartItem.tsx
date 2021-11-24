import React, {FC} from 'react';

import {ICart} from "../models/ICart";
import {useActions} from "../hooks/useActions";

import btnRemoveSVG from "../img/btn-remove.svg";

interface CartItemProps {
    item: ICart,

}

export const CartItem:FC<CartItemProps> = ({item}) => {

    const {removeSneakers} = useActions()

    const onRemoveSneaker = (id: number) => {
        removeSneakers(id)

    }


    return (
        <div className={'cart__block-items'}>
            <div className="cart__block-item">
                <img width={70} height={70} src={item.img} alt={'Sneakers'}/>
                <div className={'cart__block-item-description'}>
                    <p>{item.name}</p>
                    <b>{item.price} руб.</b>
                </div>
                <img className={'cart__block-item-remove'} onClick={() => onRemoveSneaker(item.id)} src={btnRemoveSVG} alt={'Remove'}/>
            </div>
        </div>

    );
}