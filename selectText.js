javascript:
  var d = document;
  var text = d.selection? d.selection.createRange().text: d.getSelection();
  alert("selected text : " + text);
