import { useState } from "react"

let Edituser=(props)=>{
    let [user,setUser]=useState("")
    let[index,setIndex]=useState()
    let edit = (name,ind)=>{
        setUser(name)
        setIndex(ind)
    }
    let upd = ()=>{
        props.edit(user,index)
        setUser("")
    }
    let fun = (e)=>{
        setUser(e.target.value)
    }
    return(
        <div>
            <input type="text" value={user} onChange={fun}/>
            <button onClick={upd}>update</button>
            <div>
                {
                    props.data.map((user,ind)=>{
                        return(
                            <li>{user}
                            <button onClick={()=>edit(user,ind)}>edit</button>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Edituser