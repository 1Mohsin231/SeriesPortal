qimport {useState} from 'react'

const Component02 = () => {
    let[title,settitle]=useState("")
    let[director,setDirector]=useState("")

    let change=(e)=>{
        settitle(e.target.value)
    }
    let change1=(e)=>{
        setDirector(e.target.value)
    }
    let sub=(e)=>{
        e.preventDefault()
    

    let data={title,director}
    fetch('http://localhost:5000/value',{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(data)
    })

    history.pushState('/showmovie')
        }
            return ( 
        <div className="comp02">
        <form action="">
        <label for="name">Movie Name</label>
<input type="text" value={title} onChange={change} placeholder="Enter Your Name" id="name" required="name"/>
<br/><br/>
<label for="email">Director Name</label>
<input type="text"  value={director} onChange={change1} placeholder="Enter Your Email ID" id="email" required="email"/>
<br/><br/>
           <input type="submit" />
            </form>
            <p>{title}</p>
            <p>{director}</p>
        </div>
     );
}
 
export default Component02;