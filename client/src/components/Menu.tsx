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
        <Button variant="dark" className="position-absolute end-0 bottom-0" style={{
            fontWeight: "bold",
            backgroundColor: "#343a40",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
        }} 
        onClick={()=>{
            copyToClipboard();
        }}>{copySuccess!=""?"Copied ID!":"Copy Board ID - "+id}</Button>
    )
};

export default Menu;
