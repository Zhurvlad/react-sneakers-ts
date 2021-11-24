import React, {FC} from "react";
import CartEmptySVG from '../img/empty-cart.jpg'
import {Link} from "react-router-dom";

interface CartEmptyProps {
    title: string,
    description: string,
    button: string,
    img: boolean
}

export const CartEmpty:FC<CartEmptyProps> = ({title, description, button, img}) => {
    return(
        <div className="cart--empty">
            <h2>{title} <i>😕</i></h2>
            <p>
                {description}
            </p>
            {img && <img src={CartEmptySVG} alt="Empty cart"/>}
            <Link to={'/'}>
                <button  className="cart__block-button">
                    <span>{button}</span>
                </button>
            </Link>
        </div>
)
}
