import React from "react";


function ButtonCopy() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);

  return (
    <div>
        <button type='button' onClick={ButtonCopy} className="bg-gradient-theme-left border-0">Copiar</button>
    </div>
)
}
export default ButtonCopy