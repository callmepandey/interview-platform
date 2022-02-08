textarea = document.getElementById('editor');
line_numbering = document.getElementById('line_numbering_area');
function scrollToBottom() {
	var textarea = document.getElementById('line_numbering_area');
	textarea.scrollTop = textarea.scrollHeight;
}

scrollToBottom();

function addText(num) {
    document.getElementById("line_numbering_area").value += i;
}

function line_break() {
    var txtArea ;

    txtArea = document.getElementById("line_numbering_area") ;
    txtArea.value += '\r\n';
}

for (var i = 1; i <=5000; i++) {
	addText(i);
	line_break();
}

textarea.addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
})

// function getLineNumberAndColumnIndex(textarea){
//      var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
//      var currentLineNumber = textLines.length;
//      var currentColumnIndex = textLines[textLines.length-1].length;
//      return currentLineNumber;
  		
//   }


function scroll_changed(textarea)
    {
        scrollsync(textarea, line_numbering);
    }
    
function scrollsync(obj1, obj2)
    {
        // scroll text in object id1 the same as object id2
        obj2.scrollTop = obj1.scrollTop;
    }

textarea.addEventListener('input', () => {
	scroll_changed(textarea);
	
})

textarea.addEventListener('click', () => {
	scroll_changed(textarea);
})

textarea.addEventListener('scroll', () => {
	scroll_changed(textarea);
})

