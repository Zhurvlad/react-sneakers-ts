import React, {FC} from 'react';

import {Link} from "react-router-dom";

import logoSVG from "../img/logo.png";
import cartSVG from "../img/cart.svg";
import userSVG from "../img/user.svg";
import heartSVG from '../img/heart.svg'
import {ICart} from "../models/ICart";
import {IFavorite} from "../models/IFavorite";

interface HeaderProps {
    onCartVisible: () => void,
    totalPrice: number,
    cart: ICart[],
    favorite: IFavorite[]
}

export const Header:FC<HeaderProps> = ({onCartVisible, totalPrice, cart, favorite}) => {
    return (
        <header className={'header'}>
            <Link to={'/'}>
                <div className={'header__left'}>
                    <img width={40} height={40} src={logoSVG} alt={'Logo'}/>

                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>
            <div className={'header__right'}>
                <ul>
                    <li>
                        <i className={cart.length > 0 ? 'header__right count--circle' : ''}>{cart.length > 0 ? cart.length : ''}</i>

                        <img onClick={onCartVisible} src={cartSVG} alt={'Cart'}/>
                        <span>{totalPrice} руб.</span>
                        </li>
                </ul>
                <ul>
                    <li>
                        <Link to={'/favorites'}>
                            <i className={favorite.length > 0 ? 'header__right count--circle' : ''}>{favorite.length > 0 ? favorite.length : ''}</i>
                            <img src={heartSVG} alt={'Heart'}/>
                             </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={'/orders'}>
                            <img src={userSVG} alt={'User'}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

