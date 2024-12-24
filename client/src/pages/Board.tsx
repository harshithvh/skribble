import { Navigate, useParams } from 'react-router-dom'
import Menu from '../components/Menu';
import Canvas from '../components/Canvas';
import { useAuth0 } from '@auth0/auth0-react';
const Board = () => {
  const {isAuthenticated}=useAuth0();
  const id = useParams().id
  return isAuthenticated?(
    <div className='position-fixed h-100 w-100 d-flex flex-column bg-black align-items-center justify-content-center'>
      <Menu id={id}/>
      <Canvas id={id} />
    </div>
  ):<Navigate to={"/"}/>
}

export default Board