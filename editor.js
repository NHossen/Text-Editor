 //Font-Styles
      //bold button
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

      //text-align

     //left-align
     document.getElementById('left-align').addEventListener('click',function(){
      if(!iscliked){
        const leftTextAlign=document.getElementById('text-area');
      leftTextAlign.style.textAlign='left'
      iscliked=true;
      }else{
        const leftTextAlign=document.getElementById('text-area');
      leftTextAlign.style.textAlign=''
      iscliked=false;
      }
      
     })
     //left-center
     document.getElementById('center-align').addEventListener('click',function(){
      if(!iscliked){
         const leftTextAlign=document.getElementById('text-area');
      leftTextAlign.style.textAlign='center'
      iscliked=true;
      }else{
        const leftTextAlign=document.getElementById('text-area');
        leftTextAlign.style.textAlign=''
        iscliked=false;
      }
     
     })
     //left-right
     document.getElementById('right-align').addEventListener('click',function(){
      if(!iscliked){
        const leftTextAlign=document.getElementById('text-area');
      leftTextAlign.style.textAlign='right'
      iscliked=true;
      }else{
        const leftTextAlign=document.getElementById('text-area');
      leftTextAlign.style.textAlign=''
      iscliked=false;
      }
      
     })
     //left-justify
     document.getElementById('justify-align').addEventListener('click',function(){
      if(!iscliked){
      const leftTextAlign=document.getElementById('text-area');
      leftTextAlign.style.textAlign='justify'
      iscliked=true;
      }else{
        const leftTextAlign=document.getElementById('text-area');
        leftTextAlign.style.textAlign=''
        iscliked=false;
      }
      
     })

     //color number and text-pickers
    
     colorPicker.addEventListener("input", function() {

      const textarea = document.getElementById("text-area");
      const colorPicker = document.getElementById("colorPicker");

      const selectedColor = colorPicker.value;
      textarea.style.color = selectedColor;
     });
    