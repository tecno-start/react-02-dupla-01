import React from "react";
import * as AiIcons from 'react-icons/ai';


function ButtonCopy() {
  // var copyText = document.getElementById("myInput");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  // navigator.clipboard.writeText(copyText.value);
  // alert("Copied the text: " + copyText.value);

  return (
    <AiIcons.AiOutlineCopy size={45} style={{'color': '#fc5c7d'}}/>
  )
}
export default ButtonCopy

