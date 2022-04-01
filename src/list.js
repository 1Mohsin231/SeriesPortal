
const ListA = (props) => {
    let movie = props.A;
    return (
        <div className="movieDetails">
            {movie.map((data) => {
                return (
                    <div>
                        <h1>{data.Mtitle}</h1>
                        <h2>{data.actor}</h2>
                    </div>
                )
            })}
        </div>
    );
}

export default ListA;