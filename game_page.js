p1Name = localStorage.getItem("player1_name"); 
p2Name = localStorage.getItem("player2_name");

p1Score = 0;
p2Score = 0; 

document.getElementById("player1_name").innerHTML = p1Name + ":";
document.getElementById("player2_name").innerHTML = p2Name + ":";

document.getElementById("player1_score").innerHTML = p1Score;
document.getElementById("player2_score").innerHTML = p2Score;

document.getElementById("player_question").innerHTML = "Question Turn -" + p1Name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + p2Name;


function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value; 
    answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

Qturn = "player1";
Aturn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == answer)	
	{
		if(Aturn == "player1")
		{
			p1Score = p1Score +1;
		    document.getElementById("player1_score").innerHTML = p1Score;
		}
		else 
		{
			p2Score = p2Score +1;
		    document.getElementById("player2_score").innerHTML = p2Score;
		}
	}
	
	if(Qturn == "player1")
	{
		Qturn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + p2Name ;
	}
	else 
	{
		Qturn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + p1Name ;
	}

	if(Aturn == "player1")
	{
		Aturn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2Name ;
	}
	else 
	{
		Aturn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1Name ;
	}
    document.getElementById("output").innerHTML = "";  
} 