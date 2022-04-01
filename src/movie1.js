import { useState } from "react";
import List from "./list1"
const Movie = () => {
    let [drama, setDrama] = useState([
        { name: "Bismil", actor: "ImranAshraf", id: 1 },
        { name: "KhudaMohabat", actor: "ImranAbbas", id: 2 },
        { name: "Khani", actor: "Feroz", id: 3 },
        { name: "Parizaaz", actor: "Ali Akbar", id: 4 },
    ])
    return (
        <List d={drama.filter((data) => {
            return (data.name)
        })} />
    );
}

export default Movie;