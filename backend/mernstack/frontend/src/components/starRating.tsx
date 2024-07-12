interface RatingProps{
    rating: number
}

export const Rating = (props:RatingProps) => {
    return(
        <div style ={{width:props.rating*74/5,overflow:"hidden"}}>
            <div style={{width:81}}>
                {/* font awesome library is being used */}
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

            </div>
        </div>
    )
}