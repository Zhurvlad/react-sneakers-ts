import React, {FC} from 'react';

import {SneakerCard} from "../components/SneakerCard";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {ICart} from "../models/ICart";
import {IFavorite} from "../models/IFavorite";
import {CartEmpty} from "../components/CartEmpty";

interface FavoritesProps {
    onAddToFavorite: (favObj: IFavorite) => void,
    sneakerToCart: (sneakerObj: ICart) => void,
    cartItem: ICart[]
}

export const Favorites:FC<FavoritesProps> = ({onAddToFavorite, sneakerToCart, cartItem}) => {
    const {favorite} = useTypedSelector(state => state.favorite)


    return (
        <main className={'content'}>

            {favorite.length ? <>
                <div className={'content__header'}>
                    <h1>Мои закладки</h1>

                </div>
                <div className={'content__container'}>
                    {favorite.map((sneaker) =>
                        <SneakerCard
                            added={cartItem && cartItem.some(sneak => sneak.id === sneaker.id)}
                            sneakerToCart={sneakerToCart}
                            onAddToFavorite={onAddToFavorite}
                            sneaker={sneaker}
                            key={sneaker.id}
                            hideLike
                            hidePlus
                            isFavorite
                        />)}
                </div>
            </> : <CartEmpty
                title={'Избранные модели'}
                description={'Список избранных моделей пуст. Начни делать покупки и добавь понравившиеся модели в избранное.'}
                button={'Вернуться назад'}
                img={false}/>
            }
        </main>
    );
};

