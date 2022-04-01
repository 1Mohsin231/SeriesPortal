const List = (props) => {
    let drama = props.d;
    return (
        <div className="dramaDetail">
            {drama.map((data) => {
                return (


                    <div>
                        <h1>{data.name}</h1>
                        <h2>{data.actorffffffffffffffffffffffffffffffffffffffffff}</h2>
                    </div>

                )
            })}
        </div>
    );
}

export default List;