

function Greeting() {
    //* TO DO Write this function *//
    //* so time is being updated via JavaScript from the system clock *//
    //* and timeOfDay is using the logic to say Morning, Afternoon or Evening *//
    
    var time = "0:00:00";
    let timeOfDay = "Time";

	var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

	timeOfDay = msg();
	
	
		let icon = "";
	
   
	if (Icon() === true){
		icon = React.createElement("img", {src:"image/sun.png"}, null);
	}
	else 
	{
		icon = React.createElement("img", {src:"image/moon.png"}, null);
	}
	//let icon = React.createElement("img", {src:"image/sun.png"}, null);
	
	

    return [
        React.createElement("h3", {id: "Welcome"}, " Good ", timeOfDay, "! ", React.createElement("p", {id: "WelcomeTime"}), time),
        icon];


}

//* Return the message *//
function msg(){
	var today = new Date();
	var time = today.getHours();
    //* TO DO Write this function *//
	if (time >= 0 && time < 12 ){
	return ("Morning");
	}
	else if(time > 11 && time < 17 ){
		return("Afternoon");
	}
	else
	{
		return("Evening");
	}
}

//* Return sun or moon icon *//

function Icon() {
	var time = "0:00:00";
    let timeOfDay = "Time";
	//let icon = React.createElement("img", {src:"image/sun.png"}, null);

	var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

	timeOfDay = msg();
   
	//window.alert(Icon());

	var time1 = today.getHours();
    //* TO DO Write this function *//
	if (time1 >= 6 && time1 < 18 ){
		return true;
	}else
	{
		return false;
	}
	
}
	
//* Display greeting, time, and icon. Update clock *//

function Tick() {
	//let msg = React.createElement("h3", {id: "Welcome"}, time);
    //ReactDOM.render(msg, document.getElementById("root"));
	ReactDOM.render(React.createElement("div", null, React.createElement(Greeting, null)),document.getElementById("root"));
}

//run Tick every sec
setInterval(Tick, 1000); 