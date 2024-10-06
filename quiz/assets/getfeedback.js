function getFeedback(no_soal,opsi) {
    for(i=1;i<6;i++){
        fb="fb"+no_soal+"_"+i;
        if(fb == "fb"+no_soal+"_"+opsi){
			  tampil=document.getElementById(fb).style.display;
			  if(tampil=="block"){
	              document.getElementById(fb).style.display = "none";
			  }else{
				  document.getElementById(fb).style.display = "block";
			  }
			  document.getElementById(fb).focus();
              setTimeout('setoff(fb)', 5000);
  		}else{
  			document.getElementById(fb).style.display = "none";
  		}  
  	}
}

function getFeedback3(no_soal,opsi) {
    for(i=1;i<6;i++){
        fb="fb3_"+no_soal+"_"+i;
        if(fb == "fb3_"+no_soal+"_"+opsi){
        	  fb="fb3_"+no_soal+"_"+i;
              document.getElementById(fb).style.display = "block";
	          setTimeout('setoff(fb)', 3000);  
  		}else{
  			document.getElementById(fb).style.display = "none";
  		}
  	}
}

function getFeedbackpg(no_soal,opsi) {
    for(i=1;i<6;i++){
        fb="fbpg_"+no_soal+"_"+i;
        if(fb == "fbpg_"+no_soal+"_"+opsi){
        	  fb="fbpg_"+no_soal+"_"+i;
              document.getElementById(fb).style.display = "block";
	        document.getElementById(fb).focus();
			setTimeout('setoff(fb)', 3000);  
  		}else{
  			document.getElementById(fb).style.display = "none";
  		}
  	}
}
