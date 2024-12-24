interface Cursor {
  color: string;
  width: number;
  y: number;
  x: number;
  user: string;
}
const OtherCursor = ({cursor}:{ cursor: Cursor }) => {
  return (
    <div style={{backgroundColor:cursor.color,position:"absolute",height:cursor.width,width:cursor.width,top:cursor.y,left:cursor.x,borderRadius:"100%",}}>
        <div style={{position:"relative",top:"10px",left:"10px"}}>
            {cursor.user}
        </div>
    </div>
  )
}

export default OtherCursor