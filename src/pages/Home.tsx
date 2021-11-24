import React, {FC} from 'react';

import {SneakerCard} from "../components/SneakerCard";
import {LoadingBlock} from "../components/LoadingBlock";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

import {ICart} from "../models/ICart";
import {IFavorite} from "../models/IFavorite";
import {ISneakers} from "../models/ISneakers";

import btnRemoveSVG from "../img/btn-remove.svg";
import searchSVG from "../img/search.svg";

interface HomeProps {
    onAddToFavorite: (favObj: IFavorite) => void,
    cartItem: ICart[],
    sneakers: ISneakers[],
    favorite: IFavorite[],
    sneakerToCart: (sneakerObj: ICart) => void
}

export const Home:FC<HomeProps> = ({onAddToFavorite,  sneakers, cartItem, favorite, sneakerToCart}) => {

    const {isLoading} = useTypedSelector(state => state.sneakers)

    const [cartVisible, setCartVisible] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')



    const {fetchSneakers, addSneakerToCart, addSneakerToFavorite, removeSneakersFromFavorite} = useActions()

    React.useEffect(() => {
        fetchSneakers()
    }, [])

    const onCartVisible = () => {
        setCartVisible(!cartVisible)
        console.log(cartVisible)
    }


    const getSearchInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const clearInputValue = () => {
        setSearchValue('')
    }

    /*const onAddToFavorite = (sneakerObj: IFavorite) => {
        console.log(sneakerObj.id)
        if(favorite && favorite.find(item => item.id === sneakerObj.id)){
            removeSneakersFromFavorite(sneakerObj.id)

        } else {
            addSneakerToFavorite(sneakerObj)
        }

    }
*/


    return (
        <main className={'content'}>
            <div className={'content__header'}>
                <h1 onClick={onCartVisible}>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кросовки'}</h1>
                <div className={'content__header-search'}>
                    {searchValue
                    && <img
                        onClick={clearInputValue}
                        className={'cart__block-item-remove-input'}
                        src={btnRemoveSVG} alt={'Clear'}/>
                    }
                    <img src={searchSVG} alt={'Search'}/>
                    <input value={searchValue} onChange={getSearchInputValue} placeholder={'Поиск...'}/>
                </div>
            </div>
            <div className={'content__container'}>
                {isLoading
                    ? sneakers.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((sneaker) =>
                            <SneakerCard
                                isFavorite={favorite.some(favObj => favObj.id === sneaker.id)}
                                onAddToFavorite={onAddToFavorite}
                                sneakerToCart={sneakerToCart}
                                sneaker={sneaker}
                                key={sneaker.id}
                                added={cartItem && cartItem.some(sneak => sneak.id === sneaker.id)}
                                hideLike
                                hidePlus
                            />
                        ) :
                    Array(12).fill(0).map((_, id) => <LoadingBlock  key={id}/>)}
            </div>
        </main>
    );
};

