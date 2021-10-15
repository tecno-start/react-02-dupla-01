import react from "react";


function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);

  return (
    <div>
        <button type='button' onClick={voltar} className="bg-gradient-theme-left border-0">Voltar</button>
    </div>
)
}
