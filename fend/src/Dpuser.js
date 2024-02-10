let Dpuser=(props)=>{
    return(
        <div>
            {props.data.map((user)=>{
                return<li>{user}</li>
            })}
        </div>
    )
}
export default Dpuser