import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone:"",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(`${e.target.name}:${e.target.value}`);
  };

  async handleSubmit(e) {
    const { name, email, phone, message} = this.state;
    const form = await axios.post("/api/form", {
      name,
      email,
      phone,
      message
    });
    e.preventDefault();
    // alert('Form is submitted!!')
    // console.log(form.status);
  }

  render() {
    const notify = () => toast.success('Your Form is Submitted');
    return (

      <form onSubmit={this.handleSubmit}>
        <div className="row ">
        <div className="col-md-8 col-md-7 styled-input">
          <Input type="text" name="name" placeholder="Enter your Name" required onChange={this.handleChange} />
        </div>
        <div className="col-md-8 styled-input">
          <Input type="email" name="email" placeholder="Enter your Email" required onChange={this.handleChange} />
        </div>
        <div className="col-md-8 styled-input">
          <Input type="text" name="phone" placeholder="Enter your Phone Number" required onChange={this.handleChange} />
        </div >
        <div className="col-md-12 styled-input">
          <Input type="textarea" name="message" placeholder="Message" required onChange={this.handleChange} />
        </div>
        </div>
        <div className="click mt-5" style={{alignItems:"end"}}>
          <Button type="submit" value="SEND" style={{}} onClick={notify}>Submit</Button>
          <Toaster position="top-right" reverseOrder={false}
                   toastOptions={{
                     success: {
                       duration: 500000,
                       theme: {
                         primary: 'green',
                         secondary: 'black',
                       },
                     }
                   }}
            />
        </div>
        {/*<Button className="click mt-3">Submit</Button>*/}
      </form>
    );
  }
}

export default ContactForm;
