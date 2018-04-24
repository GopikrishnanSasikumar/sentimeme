var inputField = document.getElementById("input-holder");

var imageHolder = document.getElementById("sentimeme-img-holder");
var reactionHolder = document.getElementById("reaction-holder");

function randomImg() {
 return Math.floor(Math.random()*5);
}

function sendInputText() {

	axios.get('/bulb', {
		params: {
			text: inputField.value
		}
	})
	.then(function (response) {
		var data = response.data;
		 
		if(data.status > 0) {
			
			reactionHolder.innerHTML = data.text;
		
			if(data.pos_state == 1) {
				imageHolder.src = "./images/pos/"+ randomImg() +".gif";
			}	
			else if(data.neg_state == 1){
				imageHolder.src = "./images/neg/"+ randomImg() +".gif";
			}
			else if(data.pos_state == 1 && data.neg_state == 1 || data.pos_state == 0 && data.neg_state == 0 ) {
				imageHolder.src = "./images/conf/"+ randomImg() +".gif";
			}	
		
		}
        else {
			alert("some error has occurred analyzing your input. Try again.");
		}

	})
	.catch(function (error) {
		alert("An Error Has Occured !");
	});
}
