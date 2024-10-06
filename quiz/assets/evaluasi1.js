var answers = ["B","E","D","D","D","A","C","A","E","A"]; 
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName );
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value;
}

function getScore(){
  var score = 0;
  for (var i=1; i<tot+1; i++){
    if(getCheckedValue("question"+i)===answers[i-1]){
		score += 1;
	}
   }
		nil=score/tot*100;
		nilai=nil.toFixed(2);
  		return nilai;
}

function returnScore(){
var nil=getScore();
if(nil<75){
	var desk="Belum lulus.<br/>Lakukan review pembelajaran.";
}else{
	var desk="Lulus.<br/>Selamat, nilai evaluasi sudah di atas KKM (75).";
}
  document.getElementById('nilai').innerHTML=nil;
  document.getElementById('deskripsi').innerHTML=desk;
}