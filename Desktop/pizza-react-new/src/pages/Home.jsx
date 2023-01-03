import React from 'react'

import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

const Home = () => {
    const [item, setItem] = React.useState([]);
    const [isLoading, setIsloading] = React.useState(true);
    React.useEffect(() => {
        fetch('https://63afaf17cb0f90e5147818b9.mockapi.io/pizzas')
            .then((stream) => stream.json())
            .then((arr) => {
                setItem(arr);
                setIsloading(false);
            });
    }, []);
    return (
        <>
            <div className="content__top">
                <Categories item={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : item.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </>
    )
}

export default Home