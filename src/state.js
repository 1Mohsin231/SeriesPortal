import { useState } from 'react';
const UseState = () => {
    let [value, setValue] = useState([]);
    let arr = [{ title: "Mohsin" }, { title: "Sangram" }]
    let Click = () => {
        setValue(arr);
    }
    return (
        <div className="Method">
            <h1>My Name is</h1>
            {value.map((data) => {
                return (
                    <h1>{data.title}</h1>

                )
            })}
            <button onClick={Click}>Click</button>

        </div>
    );
}

export default UseState;