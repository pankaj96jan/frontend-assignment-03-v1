import moment from 'moment/moment';
import React, { useState } from 'react'

const Card = ({ movie, key }) => {
    const { genre, language, director, stars, title, totalVoted, releasedDate, pageViews, poster } = movie
    let [count, setCount] = useState(totalVoted);



    const incerement = () => {
        setCount(count += 1)
        alert("succesfulle upvoted")
    }
    const decrement = () => {
        setCount(count -= 1)
        alert("succesfulle downvoted")
    }



    return (
        <div key={key} className='card-container'>
            <div className='card_upper'>
                <div className="card__left">
                    <button className="vote__btn" onClick={incerement} style={{ cursor: "pointer", border: "none", background: "white" }}>
                        <img src='https://www.svgrepo.com/show/334957/up-arrow.svg' alt='upperarraow' height={30} width={30} />
                    </button>
                    <div className="vote">{count}</div>
                    <button className="vote__btn" onClick={decrement} style={{ border: "none", background: "white", cursor: "pointer" }}>
                        <img src='https://www.svgrepo.com/show/334957/up-arrow.svg' style={{ transform: "rotate(180deg)" }} alt='downarraow' height={30} width={30} />
                    </button>
                    <div>Votes</div>
                </div>
                <div className="card__image">
                    <img src={poster ? poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDSHtHmWnS_jJP4swk5yxSG833LW90DYeDgrlNEunaA&s'} alt='movie' />
                </div>
                <div className="card__right">
                    <h1>{title}</h1>
                    <p><span>Genre</span>:<span>{genre}</span></p>
                    <p><span>Director</span>:<span>{director[0]}</span></p>
                    <p><span>Starring</span>:<span>{stars[0]}</span></p>
                    <p><span>Mins</span> | <span>{language}</span> | {moment(releasedDate).format("dMMM")}</p>
                    <p style={{ color: "skyblue" }}><span>{pageViews} views</span> | <span>Voted by {totalVoted} People</span></p>
                </div>
            </div>
            <div className='card_lower'>
                <button>Watch Trailer</button>
            </div>
            <hr />
        </div>
    )
}

export default Card