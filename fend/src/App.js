import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./Nav"
import Dpuser from "./Dpuser"
import Adduser from "./Adduser"
import Edituser from "./Edituser"
import Deluser from "./Deluser"
import { useState } from "react"
let App= ()=>{
    let [data,setData]= useState([])
    let addUser = (user)=>{
        setData([...data,user])
    }
    let delUser =(ind)=>{
        data.splice(ind,1)
        setData([...data])
    }
    let editUser = (user,ind)=>{
        data[ind]=user
        setData([...data])
    }
    return(
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Dpuser data={data}/>}/>
                <Route path="/add" element={<Adduser fun={addUser}/>}/>
                <Route path="/edit" element={<Edituser edit={editUser} data={data}/>}/>
                <Route path="/del" element={<Deluser data={data} del={delUser}/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App