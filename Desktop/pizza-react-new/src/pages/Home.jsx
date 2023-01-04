import React from 'react'

import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

const Home = () => {
    const [item, setItem] = React.useState([]);
    const [isLoading, setIsloading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    });
    console.log(sortType);
    React.useEffect(() => {
        setIsloading(true)
        fetch(`https://63afaf17cb0f90e5147818b9.mockapi.io/pizzas?${categoryId > 0 ? `category=${categoryId}` : ""}&sortBy=${sortType.sortProperty}&order=desc`)

            .then((stream) => stream.json())
            .then((arr) => {
                setItem(arr);
                setIsloading(false);
            });
        window.scrollTo(0, 0)

    }, [categoryId, sortType]);

    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={(id) => setCategoryId(id)}
                />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
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