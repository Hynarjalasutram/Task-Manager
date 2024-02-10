import { useRef} from "react"
import { useNavigate } from "react-router-dom"

let Adduser=(props)=>{
    let trf = useRef()
    let navigate = useNavigate()
    let add=()=>{
        props.fun(trf.current.value)
        navigate("/")
    }
    return(
        <div>{
            <input/> != null &&
            <input type="text" ref={trf}/>}
            <button onClick={add}>Adduser</button>
        </div>
    )
}
export default Adduser