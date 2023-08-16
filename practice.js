document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("myTextarea");
    const boldButton = document.getElementById("bold-btn");
  
    boldButton.addEventListener("click", function() {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
  
      // Apply bold class to selected text
      const boldText = '<span class="bold-text">' + text.slice(start, end) + '</span>';
      const newText = text.slice(0, start) + boldText + text.slice(end);
      textarea.innerHTML = newText;
      
      // Restore cursor position
      textarea.selectionStart = start;
      textarea.selectionEnd = end + boldText.length;
    });
  });

  
  let iscliked=false;
  document.getElementById('bold-btn').addEventListener('click',function(){
      //console.log('I got Cliked bold')
      if(!iscliked){

        const textareaValu=document.getElementById('text-area');
        textareaValu.style.fontWeight = 'bold'
        iscliked=true;
      }else{
        const textareaValu=document.getElementById('text-area');
        textareaValu.style.fontWeight = ''
        iscliked=false;
      }
      
      
      
      //const getValueTextArea=textareaValu.value;
       //getValueTextArea.style.fontSize='32px';
  });
//italic button
document.getElementById('italic-btn').addEventListener('click',function(){
  if(!iscliked){
    const italicToTextAreValue=document.getElementById('text-area');
  italicToTextAreValue.style.fontStyle="italic";
  iscliked=true;
  }else{
    const italicToTextAreValue=document.getElementById('text-area');
  italicToTextAreValue.style.fontStyle="";
  iscliked=false;
  }
  
})
//underLine Button
document.getElementById('under-line').addEventListener('click',function(){
  if(!iscliked){
    const underlineTextareaValue=document.getElementById('text-area');
  underlineTextareaValue.style.textDecoration="underline";
  iscliked=true
  }else{
    const underlineTextareaValue=document.getElementById('text-area');
    underlineTextareaValue.style.textDecoration="";
    iscliked=false
  }
  
})
