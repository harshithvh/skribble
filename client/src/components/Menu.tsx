import { useState } from "react";
import { Button } from "react-bootstrap";

const Menu = ({ id }: { id: string | undefined }) => {
    const [copySuccess, setCopySuccess] = useState('');
    const copyToClipboard = async () => {
          await navigator.clipboard.writeText(id||"Copy Again!");
          setCopySuccess('success');
          setTimeout(() => {
            setCopySuccess("");
          }, 3000);
      };
    return (
        <Button variant="dark" className="position-absolute end-0 bottom-0" onClick={()=>{
            copyToClipboard();
        }}>{copySuccess!=""?"Copied ID!":"Click to copy ID "+id}</Button>
    )
};

export default Menu;
