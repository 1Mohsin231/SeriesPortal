const State = (props) => {
  let value = props.appData;
  let title = props.pageTital;
  let handleDelete = props.func;
  
    return ( 
      <div className="page">
        <h1>{title}</h1>
        {value.map((data)=>{
          return (
            
          <div className="movies">
            
              <h1>{data.title}</h1>
              {/* <h1>{data.actor}</h1>
              <h1>{data.language}</h1> */}
              <button onClick={()=>{handleDelete (data.id)}}>Delete</button>
              {/* <button onClick={()=>{handleMovies (data.isPending)}}>Movies</button> */}
              </div>
            )
          })}
          
          </div>
     );
}
 
export default State;