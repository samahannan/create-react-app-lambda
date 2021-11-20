/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CategoryCard = ({img, title}) => {
    return (
        <div className="category_card">
            <figure><img src={img} alt={title} /></figure>
            <h4>{title}</h4>
        </div>
    )
}

export default CategoryCard
