
import { useState } from "react";
import ListA from "./list";

const Marvel = () => {
    let [movie, setMovie] = useState([
        { Mtitle: "IronMan", actor: "RDJ" },
        { Mtitle: "CaptainAmerica", actor: "ChrisEvans" },
        { Mtitle: "Thor", actor: "ChrisHomesworth" },
        { Mtitle: "spiderMan", actor: "Zandya" },
    ]
    )
    return (
        <ListA A={movie.filter((data) => {
            return (data.actor)
        })} />

    );
}

export default Marvel;  