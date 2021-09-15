import React from 'react'
import './card.css'
function Card({data}) {
    return (
        <main className="produce__card">
            <header className="figure__section">
                <figure>
                    <img src={data.image} alt="productImage" />
                </figure>
            </header>

            <article className="card__info__section">
                <p className='product__cateogary'>{data.category.toUpperCase()}</p>
                <p className='product__title'>{data.title}</p>
                <p className='product__price'>${data.price}</p>
            </article>
        </main>
    )
}

export default Card
