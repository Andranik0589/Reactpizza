import React from "react";


const Categories = ({ item }) => {

    const [activeIndex, setActiveIndex] = React.useState(0)

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }


    return (
        <div className="categories">
            <ul>
                {
                    item.map((value, i) => (
                        <li key={i * 2} onClick={() => onClickCategory(i)} className={activeIndex === i ? "active" : ""}>{value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories

