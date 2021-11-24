import React, {FC} from 'react';

import {ISneakers} from "../models/ISneakers";
import {ICart} from "../models/ICart";
import {IFavorite} from "../models/IFavorite";

import likedSVG from "../img/liked.svg";
import buttonPlsSVG from "../img/btn-plus.svg";
import btnCheckedSVG from '../img/btn-checked.svg'
import headerSVG from '../img/unliked.svg'


interface SneakerCardProps {
    sneaker: ISneakers,
    sneakerToCart?: (sneakerObj: ICart) => void | undefined,
    onAddToFavorite?: (sneakerObj: IFavorite) => void | undefined,
    isFavorite?: boolean,
    added?: boolean,
    hidePlus?: boolean,
    hideLike?: boolean

}

export const SneakerCard: FC<SneakerCardProps> = ({sneakerToCart, sneaker, onAddToFavorite, isFavorite, added, hideLike, hidePlus}) => {


    const sneakerObj = {
        id: sneaker.id,
        name: sneaker.name,
        img: sneaker.img,
        price: sneaker.price
    }

    const AddToFavorite = () => {
        if (onAddToFavorite) {
            onAddToFavorite(sneakerObj)
        }
    }

    const onAddSneakerToCart = () => {
        if (sneakerToCart) {
            sneakerToCart(sneakerObj)
        }

    }

    return (
        <div className={'content__card'}>
            {hideLike
                ? <div className={'content__card-favorite'}>
                    <img onClick={AddToFavorite} src={isFavorite ? likedSVG : headerSVG} alt={'Like'}/>
                </div>
                : ''
            }
            <img width={133} height={112} src={sneaker.img} alt={'Sneakers'}/>
            <h5>{sneaker.name}</h5>
            <div className={'content__card-bottom'}>
                <div className={'content__card-price'}>
                    <span>Цена</span>
                    <b>{sneaker.price} руб.</b>
                </div>
                {hideLike
                    ? <div onClick={onAddSneakerToCart}>
                        <img src={added ? btnCheckedSVG : buttonPlsSVG}
                             alt={'Button-Plus'}/>
                    </div>
                    : ''
                }
            </div>
        </div>
    );
};

