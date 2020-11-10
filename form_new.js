'use strict';

const e = React.createElement;



class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
	name:'',
	email:'',
	phone:'',
	city:'',
	activities:'',
	numofppl:'',
	date:'',
	};
	
  }
  
   handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  
  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value});
  }

  handleActivitiesChange = (event) => {
    this.setState({activities: event.target.value});
  }
  
  handleNumofpplChange = (event) => {
    this.setState({numofppl: event.target.value});
  }
  handleDateChange = (event) => {
    this.setState({date: event.target.value});
  }
    
  
  handleCityChange = (event) => {
    this.setState({city: event.target.value});
		const testing = city.value;
	if(testing == "new_zealand"){
	alert("Please select your activities");
	$( "#1" ).show();
	$( "#2" ).show();
	$( "#3" ).show();
	$( "#4" ).show();
	$( "#5" ).hide();
	$( "#6" ).hide();
	$( "#7" ).hide();
	$( "#8" ).hide();
	$( "#9" ).hide();
	$( "#10" ).hide();
	$( "#11" ).show();
	}
	else if(testing == "maldives"){
	alert("Please select your activities");
	$( "#1" ).hide();
	$( "#2" ).hide();
	$( "#3" ).show();
	$( "#4" ).show();
	$( "#5" ).show();
	$( "#6" ).show();
	$( "#7" ).show();
	$( "#8" ).hide();
	$( "#9" ).hide();
	$( "#10" ).hide();
	$( "#11" ).hide();
	}
	else if(testing == "venice"){
	alert("Please select your activities");
	$( "#1" ).show();
	$( "#2" ).hide();
	$( "#3" ).show();
	$( "#4" ).hide();
	$( "#5" ).hide();
	$( "#6" ).hide();
	$( "#7" ).hide();
	$( "#8" ).show();
	$( "#9" ).show();
	$( "#10" ).hide();
	$( "#11" ).hide();
	}
	else if(testing == "cancun"){
	alert("Please select your activities");
	$( "#1" ).hide();
	$( "#2" ).hide();
	$( "#3" ).hide();
	$( "#4" ).show();
	$( "#5" ).hide();
	$( "#6" ).show();
	$( "#7" ).hide();
	$( "#8" ).hide();
	$( "#9" ).show();
	$( "#10" ).show();
	$( "#11" ).hide();
	}
  }

  
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email,phone,city,activities,numofppl,date } = this.state
    if(`${name}` != '' &&`${email}` != '' &&`${phone}` != '' &&`${city}` != '' &&`${activities}` != '' &&`${numofppl}` != '' &&`${date}` != '' ){
	alert(
	`Your state values: \n 
            name: ${name} \n 
            email: ${email} \n
            phone: ${phone} \n
			city: ${city} \n
			activities: ${activities} \n
			numofppl: ${numofppl} \n
			date: ${date} \n`
	)}
	else{
		alert(`Please fill all the blanks!`)
	}
  }
  
  handleReset = (event) => {	  
  event.preventDefault();
    const { name, email,phone,city,activities,numofppl,date } = this.state
	this.setState({
 	name:'',
	email:'',
	phone:'',
	city:'',
	activities:'',
	numofppl:'',
	date:'',
	});
  }
  

  render() {

    return React.createElement(
    "form",
    { action: "db.php", method: "get" , onReset: this.handleReset, id:"myForm" },
    React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { htmlFor: "name" },
            "Name"
        ),
        React.createElement("input", { name: "name", className: "form-control", id: "name", placeholder: "Enter name", value: this.state.name, onChange: this.handleNameChange })
    ),
    React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { htmlFor: "email" },
            "Email"
        ),
        React.createElement("input", { name: "email", className: "form-control", id: "email", placeholder: "Enter email", value: this.state.email, onChange: this.handleEmailChange })
    ),
    React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { htmlFor: "phone" },
            "phone"
        ),
        React.createElement("input", { name: "phone", className: "form-control", id: "phone", placeholder: "XXX-XXX-XXXX", value: this.state.phone, onChange: this.handlePhoneChange })
    ),
    
	React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { htmlFor: "numofppl" },
            "How many children and adults are traveling"
        ),
        React.createElement("input", { name: "numofppl", className: "form-control", id: "numofppl", placeholder: "Enter Number of people", value: this.state.numofppl, onChange: this.handleNumofpplChange })
    ),
	React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { htmlFor: "date" },
            "The date you want to take a trip"
        ),
        React.createElement("input", {type:"text", name: "date", className: "form-control", id: "date", placeholder: "YYYY-MM-DD", value: this.state.date, onChange: this.handleDateChange })
    ),
	React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { htmlFor: "city" },
            "City"
        ),
        React.createElement(
            "select",
            { name: "cars", className: "form-control", id: "city", placeholder: "Enter city", value: this.state.city, onChange: this.handleCityChange },
            React.createElement(
                "option",
                { value: "new_zealand" },
                "New Zealand"
            ),
            React.createElement(
                "option",
                { value: "maldives" },
                "Maldives, South Asia"
            ),
            React.createElement(
                "option",
                { value: "venice" },
                "Venice, Italy"
            ),
            React.createElement(
                "option",
                { value: "cancun" },
                "Cancun"
            )
        )
    ),
    React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
            "label",
            { id: "1" },
            "City Tours",
            React.createElement("input", { name: "CityTours", type: "checkbox", checked: this.state.City_Tours, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "2" },
            "Sports",
            React.createElement("input", { name: "Sports", type: "checkbox", checked: this.state.Sports, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "3" },
            "Museums",
            React.createElement("input", { name: "Museums", type: "checkbox", checked: this.state.Museums, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "4" },
            "Boating",
            React.createElement("input", { name: "Boating", type: "checkbox", checked: this.state.Boating, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "5" },
            "Sailing",
            React.createElement("input", { name: "Sailing", type: "checkbox", checked: this.state.Sailing, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "6" },
            "Beach",
            React.createElement("input", { name: "Beach", type: "checkbox", checked: this.state.Beach, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "7" },
            "Hiking",
            React.createElement("input", { name: "Hiking", type: "checkbox", checked: this.state.Hiking, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "8" },
            "Theatre",
            React.createElement("input", { name: "Theatre", type: "checkbox", checked: this.state.Theatre, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "9" },
            "Parks and Recreation",
            React.createElement("input", { name: "ParksandRecreation", type: "checkbox", checked: this.state.Parks, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "10" },
            "Snorkeling",
            React.createElement("input", { name: "Snorkeling", type: "checkbox", checked: this.state.Snorkeling, onChange: this.handleActivitiesChange })
        ),
        React.createElement(
            "label",
            { id: "11" },
            "Cycling",
            React.createElement("input", { name: "Cycling", type: "checkbox", checked: this.state.Cycling, onChange: this.handleActivitiesChange })
        )
    ),
    React.createElement(
        "button",
        { type: "submit", className: "btn btn-success btn-block" },
        "Submit"
    ),
    React.createElement(
        "button",
        { type: "reset", className: "btn btn-success btn-block" },
        "reset"
    )
);



  }
}

const domContainer = document.querySelector('#form');
ReactDOM.render(e(BasicForm), domContainer);

