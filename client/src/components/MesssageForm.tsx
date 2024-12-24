import { useState } from "react"
import { Button } from "react-bootstrap"


const MessageForm = ({setMessage}:{setMessage:(message:string)=>void}) => {
    const [m,setM]= useState("");
  return (
    <div className="bg-dark rounded d-flex">
        <input type="text" className="rounded-start" onChange={(e)=>setM(e.target.value)} />
            <Button variant="dark" onClick={()=>{
                setMessage(m);
                console.log(m);
            }}>Send Message</Button>
    </div>
  )
}

export default MessageForm