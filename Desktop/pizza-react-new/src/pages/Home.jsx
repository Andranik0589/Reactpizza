import React from 'react'

import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';


const Home = ({ searchValue }) => {
    const [item, setItem] = React.useState([]);
    const [isLoading, setIsloading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [currentPage, setcurrentPage] = React.useState(1);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    });

    React.useEffect(() => {
        setIsloading(true)
        const sortBy = sortType.sortProperty.replace('-', '')
        const order = sortType.sortProperty.includes('-') ? 'acs' : 'desc'
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ""
        fetch(`https://63afaf17cb0f90e5147818b9.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,)

            .then((stream) => stream.json())
            .then((arr) => {
                setItem(arr);
                setIsloading(false);
            });
        window.scrollTo(0, 0)

    }, [categoryId, sortType, searchValue, currentPage]);

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
            <Pagination onChangePage={number => setcurrentPage(number)} />
        </>
    )
}

export default Home