import React from "react";


const Categories = ({ value, onChangeCategory }) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    /* const [activeIndex, setActiveIndex] = React.useState(0) */

    /* const onClickCategory = (index) => {
        setActiveIndex(index)
    }
 */

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName, i) => (
                        <li key={i * 2} onClick={() => onChangeCategory(i)} className={value === i ? "active" : ""}>{categoryName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories

