import React, { Component } from "react";
import axios from "axios";

let emailRegex = RegExp(/[^@]+@[^.]+\..+/);

// const formValid = formErrors => {
//   let valid = true;

//   Object.values(formErrors).forEach(val => val && (valid = false));
//   return valid;
// };

class TextBoxes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",

      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        form: []
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = this.state;
    const all = {...this.state}
    console.log(all)
    
    this.state.firstName && this.state.phone
      ? axios.post("/", data).then(res => {
          this.props.history.push("/thanks");
        })
      : data.formErrors.form.push("Complete the form");

    // if (formValid(this.state.formErrors)) {
    //   let data = this.state;

    //   console.log(`
    //   FirstName: ${data.firstName}
    //   Last Name: ${data.lastName}
    //   Email: ${data.email}
    //   Phone: ${data.phone}
    //   `);
    // } else {
    //   console.error("Form Invalid - Display error message");
    // }
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target; //name in JSX, value = what's typed in
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characters required" : null;
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "minimum 2 characters required" : null;
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? null
          : "Please enter a valid email address";
        break;

      case "phone":
        formErrors.phone =
          value.length < 7 ? "minimum 7 characters required" : null;
        break;
    

      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    console.log(this.state)
    let { formErrors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s6">
              <div className="row" />
              <div className="input-field col s6" />
              <i className="material-icons prefix" />
              <input
                id="icon_prefix"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />

              {formErrors.firstName ? (
                <span>{formErrors.firstName}</span>
              ) : null}
            </div>

            <div className="row">
              <div className="col s6">
                <div className="row" />
                <div className="input-field col s6" />
                <i className="material-icons prefix" />
                <input
                  id="icon_prefix"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                {formErrors.lastName ? (
                  <span>{formErrors.lastName}</span>
                ) : null}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="row" />
              <div className="input-field col s6" />
              <i className=""> </i>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {formErrors.email ? <span>{formErrors.email}</span> : null}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row" />
              <div className="input-field col s6" />
              <i className="" />
              <input
                id="icon_telephone"
                type="tel"
                name="phone"
                placeholder="Cell Phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              {formErrors.phone ? <span>{formErrors.phone}</span> : null}
            </div>
          </div>

          <button className="form btn" type="submit">
            Submit
          </button>

        </form>
          {formErrors.form ? <span>{formErrors.form[0]}</span>:null}
      </div>
    );
  }
}

export default TextBoxes;
