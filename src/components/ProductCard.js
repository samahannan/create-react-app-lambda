/* eslint-disable @next/next/no-img-element */
import React from 'react'

function ProductCard({img, title, price, discount, originalPrice}) {
    return (
        <div className="product_card">
            <figure>
                <img src={img} alt={title} />
                {discount && <span className="discount_badge">{discount}</span>}
                {price && <span className={`price_badge ${discount ? 'red' : ''}`}>{price}</span>}
                <a className="add_to_cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFF" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </a>
            </figure>
            <span className="original_price">{originalPrice}</span>
            <h4>{title}</h4>
        </div>
    )
}

export default ProductCard
