export function copyToClipBoard() {
    /* Get the text field */
    //let copyText = "aaronpowers12@gmail.com";
    var copyText = document.getElementById("email");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Email Copied To Clipboard: " + copyText.value);
  }

  export function test(){
      alert("test");
  }

    