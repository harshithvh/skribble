import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SessionCard= ({func}:{func:string}) => {
  const navigate = useNavigate();
  const [ID,setID]= useState("");
  const createRandomID = ()=>{
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  const createRoom = ()=>{
      const newID = createRandomID();
      if (newID !== "") {
        navigate(`/board/${newID}`)
      }
  }
  const joinRoom = ()=>{
    if (ID !== "") {
      navigate(`/board/${ID}`)
    }
  }
  return (
    <Row className="justify-content-center align-items-center px-3 py-3">
        <Col className="bg-dark text-light p-5 rounded-4 border border-dark border-3" >
          <Form className='d-flex flex-column align-items-center'>
            <h2 className=" fw-bold mb-3">{func} Session</h2>
            <Form.Group controlId="JoinRoom" className="d-flex flex-column gap-0 m-3">
              {func=="Join"&&<Form.Control type="text" placeholder="Enter Room ID" className="border border-secondary border-3 rounded-bottom-0 rounded-top-4" onChange={(e)=>{setID(e.target.value)}}/>}
              <Button variant="secondary" className={func=='Join'?'rounded-top-0 rounded-bottom-4':'p-3 m-3'} onClick={func=="Join"?joinRoom:createRoom}>
                {func} Room
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
  )
}

export default SessionCard