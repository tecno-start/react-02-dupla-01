import React from "react";
import * as AiIcons from 'react-icons/ai';


function ButtonCopy({ linkSala, setLinkCopiado }) {
  function copyLink() {
    if (linkSala) {
      navigator.clipboard.writeText(linkSala);
      setLinkCopiado(true);
    }
  }

  return (
    <AiIcons.AiOutlineCopy size={45} style={{ 'color': '#fc5c7d' }} onClick={copyLink} cursor='pointer' />
  )
}
export default ButtonCopy

