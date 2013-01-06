javascript:
  var d = document;
  var text = d.selection? d.selection.createRange().txt: d.getSelection();
  var subw = window.open('http://eow.alc.co.jp/'+text+'/UTF-8/?ref=sa');
