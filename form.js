'use strict';

const e = React.createElement;

class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
	name:'',
	email:'',
	city:'',
	activities:'',
	};
	
  }
  
   handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  
   handleCityChange = (event) => {
    this.setState({city: event.target.value});
  }

  handleActivitiesChange = (event) => {
    this.setState({activities: event.target.value});
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email,city,activities } = this.state
    alert(`Your state values: \n 
            name: ${name} \n 
            email: ${email} \n
			city: ${city} 
			`)
  }

  render() {

    return React.createElement(
	"form",
	{ onSubmit: this.handleSubmit },
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
				{ value: "new_maldives" },
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
		"button",
		{ type: "submit", className: "btn btn-success btn-block" },
		"Submit"
	)
);




  }
}

const domContainer = document.querySelector('#form');
ReactDOM.render(e(BasicForm), domContainer);

