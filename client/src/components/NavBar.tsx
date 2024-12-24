import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  const {user,logout}=useAuth0();
  console.log(user);
  
  return (
    <Navbar className="bg-dark text-light border border-bottom-4 border-black" style={{height:"10vh"}}>
      <Container>
        <Navbar.Brand href="/" className=' fw-bolder fs-2 px-3 border border-dark border-3 rounded-5 bg-white'>
        <img src='./logo.png' width={70}/> collaBOARate
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className='text-decoration-underline text-light'>{user?.name}</span>
          </Navbar.Text>
          <Button variant='dark' className='ms-3 px-3 fs-5 border border-1 border-white' onClick={()=>logout()}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;