import { Link } from "react-router-dom"

const Restaurant = ({ id, name, highlight, img, time, rating }) => {
    return (
        <Link data-aos='fade-right' data-aos-delay={`${id * 100}`} to='menu/restaurants/:id' className="restaurant">
            <div className="restaurant__image">
                <img src={'/eatly/assets/restaurants/' + img + '.png'} alt={name} />
            </div>
            <div className="restaurant__info">
                <div className={highlight}>{highlight}</div>
                <div className="restaurant__desc">
                    <h5>{name}</h5>
                    <div className="restaurant__rating">
                        <p>{time}min •</p>
                        <img src="/eatly/assets/icons/star.svg" alt="" />
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http:/www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <circle cx="20.2242" cy="20.2525" r="20.0426" fill="#DBD9EE"/>
                <path d="M24.6161 10.8844C21.7146 10.3979 18.7366 10.3979 15.8351 10.8844C14.775 11.0621 13.9309 11.8759 13.7183 12.9311C12.7446 17.7651 12.6915 22.7393 13.5617 27.593L13.916 29.5691C14.0253 30.1785 14.7681 30.422 15.2169 29.9957L19.4936 25.9328C19.9038 25.5431 20.5474 25.5431 20.9577 25.9328L25.2343 29.9957C25.6831 30.422 26.426 30.1785 26.5352 29.5691L26.8895 27.593C27.7598 22.7393 27.7066 17.7651 26.7329 12.9311C26.5204 11.8759 25.6762 11.0621 24.6161 10.8844Z" fill="#6C5FBC"/>
            </svg>
        </Link>
    )
}

export default Restaurant