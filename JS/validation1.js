function check1() 
{
if(document.getElementById("cname").value == "")
	{
		alert("Please enter company name ");
		document.getElementById("cname").focus();
		return false;
	}
	if(document.getElementById("criteria").value == "")
	{
		alert("Please enter criteria for matriculation ");
		document.getElementById("criteria").focus();
		return false;
	}
	if(document.getElementById("criteria2").value == "")
	{
		alert("Please enter criteria for HS");
		document.getElementById("criteria2").focus();
		return false;
	}
	if(document.getElementById("criteria3").value == "")
	{
		alert("Please enter criteria for Graduation ");
		document.getElementById("criteria3").focus();
		return false;
	}
	if(document.getElementById("criteria4").value == "")
	{
		alert("Please enter criteria for Post Graduation ");
		document.getElementById("criteria4").focus();
		return false;
	}
	if(document.getElementById("date_of_visit").value == "")
	{
		alert("Please enter date of visit ");
		document.getElementById("date_of_visit").focus();
		return false;
	}
	if(document.getElementById("remark").value == "")
	{
		alert("Please enter remark ");
		document.getElementById("remark").focus();
		return false;
	}

}