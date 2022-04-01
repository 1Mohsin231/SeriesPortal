
    const Use = (props) => {
        let value = props.appData
        let title =props.pageTitle
        let handleDelete=props.func

        return ( 
            <div className="update">
                <h1>{title}</h1>
                {value.map((data)=>{
                    return(
                      <div className="movies">
                            <h1>{data.title}</h1>
                            <button onClick={()=>{handleDelete(data.id)}}>Delete</button>
                      </div>
                       
                    )
                })}
              
            </div>

         );
    }
     
    export default Use;