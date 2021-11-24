import React, {FC} from 'react';

import {useActions} from "../hooks/useActions";

import arrowSVG from "../img/arrow.svg";

interface InfoProps {
    onCartVisible: () => void,
    title: string,
    description: string,
    img: string
}

export const Info:FC<InfoProps> = ({onCartVisible, img, description, title}) => {

   const {clearCart} = useActions()
   
    return (
        <div className="cartEmpty">
            <img className="mb-20" width="120px"  src={img} alt="Empty"/>
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={onCartVisible} className="cart__block-button">
                <img  src={arrowSVG} alt="Arrow"/>
                Вернуться назад
            </button>
        </div>
    );
};

