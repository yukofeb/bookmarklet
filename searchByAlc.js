javascript:
  var d = document;
  var txt = d.selection? d.selection.createRange().txt: d.getSeletion();
  var subw = window.open('http://eow.alc.co.jp/'+txt+'/UTF-8/?ref=sa').document;
