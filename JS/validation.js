// THIS FUNCTION IS USED TO CHECK VALIDATION(for std_details.php)
function check()
{
	if(document.getElementById("name").value == "")
	{
		alert("Please enter your name");
		document.getElementById("name").focus();
		return false;
	}
	
	if(document.getElementById("dob").value == "")
	{
		alert("Please enter your date of birth ");
		document.getElementById("dob").focus();
		return false;
	}
	if(document.getElementById("email").value == "")
	{
		alert("Please enter your email id");
		document.getElementById("email").focus();
		return false;
	}
	if(document.getElementById("mob").value == "")
	{
		alert("Please enter your mobile number");
		document.getElementById("mob").focus();
		return false;
	}
	if(document.getElementById("degree1").value == "")
	{
		alert("Please enter matriculation details ");
		document.getElementById("degree1").focus();
		return false;
	}
	if(document.getElementById("degree2").value == "")
	{
		alert("Please enter Higher Secondary details");
		document.getElementById("degree2").focus();
		return false;
	}
	if(document.getElementById("degree3").value == "")
	{
		alert("Please enter Graduation details");
		document.getElementById("degree3").focus();
		return false;
	}
	if(document.getElementById("degree4").value == "")
	{
		alert("Please enter Post Graduation details");
		document.getElementById("degree4").focus();
		return false;
	}
	if(document.getElementById("board1").value == "")
	{
		alert("Please enter  your board name");
		document.getElementById("board1").focus();
		return false;
	}
	if(document.getElementById("board2").value == "")
	{
		alert("Please enter HS board name ");
		document.getElementById("board2").focus();
		return false;
	}
	if(document.getElementById("board3").value == "")
	{
		alert("Please enter Graduation board name ");
		document.getElementById("board3").focus();
		return false;
	}
	if(document.getElementById("board4").value == "")
	{
		alert("Please enter your Post Graduation board name ");
		document.getElementById("board4").focus();
		return false;
	}
	if(document.getElementById("grade1").value == "")
	{
		alert("Please enter your grade ");
		document.getElementById("grade1").focus();
		return false;
	}
	if(document.getElementById("grade2").value == "")
	{
		alert("Please enter your grade ");
		document.getElementById("grade2").focus();
		return false;
	}
	if(document.getElementById("grade3").value == "")
	{
		alert("Please enter your grade ");
		document.getElementById("grade3").focus();
		return false;
	}
	if(document.getElementById("grade4").value == "")
	{
		alert("Please enter your grade ");
		document.getElementById("grade4").focus();
		return false;
	}
	if(document.getElementById("yop1").value == "")
	{
		alert("Please enter year of passing ");
		document.getElementById("yop1").focus();
		return false;
	}
	if(document.getElementById("yop2").value == "")
	{
		alert("Please enter your year of passing ");
		document.getElementById("yop2").focus();
		return false;
	}
	if(document.getElementById("yop3").value == "")
	{
		alert("Please enter your year of passing ");
		document.getElementById("yop3").focus();
		return false;
	}
	if(document.getElementById("yop4").value == "")
	{
		alert("Please enter your year of passing ");
		document.getElementById("yop4").focus();
		return false;
	}
	
}

