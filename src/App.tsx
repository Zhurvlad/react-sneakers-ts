import React, {FC} from 'react';

import {useActions} from "./hooks/useActions";

import {useTypedSelector} from "./hooks/useTypedSelector";
import {Header} from "./components/Header";
import {Cart} from "./components/Cart";

import {ICart} from "./models/ICart";

import {Home} from "./pages/Home";

import {Redirect, Route, Switch} from 'react-router-dom';
import {Favorites} from "./pages/Favorites";
import {IFavorite} from "./models/IFavorite";
import {Orders} from "./pages/Orders";

const App: FC = () => {
    const {sneakers, isLoading} = useTypedSelector(state => state.sneakers)
    const {cart, totalPrice} = useTypedSelector(state => state.cart)
    const {favorite} = useTypedSelector(state => state.favorite)
    const [cartVisible, setCartVisible] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')


    const {
        fetchSneakers,
        removeSneakersFromFavorite,
        addSneakerToFavorite,
        addSneakerToCart,
        removeSneakers
    } = useActions()

    React.useEffect(() => {
        fetchSneakers()
    }, [])

    const onCartVisible = () => {
        setCartVisible(!cartVisible)
    }

    const onAddToFavorite = (sneakerObj: IFavorite) => {
        console.log(sneakerObj.id)
        if (favorite && favorite.find(item => item.id === sneakerObj.id)) {
            removeSneakersFromFavorite(sneakerObj.id)

        } else {
            addSneakerToFavorite(sneakerObj)
        }

    }

    const sneakerToCart = (sneakerObj: ICart) => {
        if (cart && cart.find(cartSneker => cartSneker.id === sneakerObj.id)) {
            removeSneakers(sneakerObj.id)
        } else {
            addSneakerToCart(sneakerObj)
        }
    }
    /*
        const getSearchInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value)
        }

        const clearInputValue = () => {
            setSearchValue('')
        }*/

    return (
        <>
            <div className={'container'}>
                 <Cart
                    totalPrice={totalPrice}
                    onCartVisible={onCartVisible}
                    cartVisible={cartVisible}

                />
                <Header
                    totalPrice={totalPrice}
                    onCartVisible={onCartVisible}
                    cart={cart}
                    favorite={favorite}
                />
                <Switch>
                    <Route path={'/'} exact>
                        <Home
                            sneakerToCart={sneakerToCart}
                            cartItem={cart}
                            sneakers={sneakers}
                            favorite={favorite}
                            onAddToFavorite={onAddToFavorite}
                        />
                    </Route>
                    <Route path={'/favorites'} exact>
                        <Favorites
                            onAddToFavorite={onAddToFavorite}
                            sneakerToCart={sneakerToCart}
                            cartItem={cart}
                        />
                    </Route>
                    <Route path={'/orders'} exact>
                        <Orders/>
                    </Route>
                    <Redirect to={'/'}/>
                </Switch>
            </div>
        </>

    );
}

export default App;
