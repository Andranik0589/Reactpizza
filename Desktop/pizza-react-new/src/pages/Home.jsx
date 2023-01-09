import React, { useRef } from 'react'
import axios from 'axios';
import QueryString from 'qs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCatedoryId, setCurrentPage, setFilters } from '../redux/Slices/filterSlice';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort, { list } from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';


const Home = () => {
    const navigate = useNavigate()
    const { categoryId, sort, currentPage } = useSelector(state => state.filter)
    const isSearch = useRef(false)
    const isMounted = React.useRef(false)
    const dispatch = useDispatch()
    const onChangeCategory = (id) => {
        dispatch(setCatedoryId(id))
    }
    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }
    const fetchPizzas = () => {
        setIsloading(true)
        const sortBy = sort.sortProperty.replace('-', '')
        const order = sort.sortProperty.includes('-') ? 'acs' : 'desc'
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ""


        axios.get(`https://63afaf17cb0f90e5147818b9.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(response => {
                setItem(response.data)
                setIsloading(false);
            })

    }

    const { searchValue } = React.useContext(SearchContext)
    const [item, setItem] = React.useState([]);
    const [isLoading, setIsloading] = React.useState(true);

    React.useEffect(() => {
        if (window.location.search) {
            const params = QueryString.parse(window.location.search.substring(1))
            const sort = list.find((obj) => obj.sortProperty === params.sortProperty)
            dispatch(
                setFilters({
                    ...params,
                    sort
                })
            );
            isSearch.current = true
        }
    }, [])
    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            fetchPizzas()
        }
        isSearch.current = false
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = QueryString.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,

            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sort.sortProperty, searchValue, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={onChangeCategory}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : item.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
    )
}

export default Home