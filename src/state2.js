import { useState } from "react";
const Value2 = () => {
    let [value, setValue] = useState([]);
    let arr2 = [{ title: "Spiderman"},{ title: "Superman" }];
    let update = () => {
        setValue(arr2)
    }
    return (
        <div className="pageInfo">
        <h1>Favoriet Comic Charcter</h1>
{
        value.map((info) => {
            return (
                <h1>{info.title}</h1>
                )
        })
    }
    <button onClick={update}>click01</button>
    </div>
     );
}

export default Value2;