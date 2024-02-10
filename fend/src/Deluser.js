let Deluser= (props)=>{
    return(
        <div>
            {
            props.data.map((user,ind)=>{
                return(<li>
                    {user}<button onClick={()=>props.del(ind)}>Delete</button>
                </li>)
            })
            }
        </div>
    )
}
export default Deluser