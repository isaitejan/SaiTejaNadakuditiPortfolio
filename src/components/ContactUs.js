import React, { Component } from 'react';
export default class ContactUs extends Component {

  constructor(){
    super();
    this.state = {
      contactName : "",
      contactEmail : "",
      contactSubject : "",
      contactMessage : ""      
    }
  }

  handleMail = (e)=>{
    e.preventDefault();
    window.open(`mailto:${this.state.contactEmail}?subject=${this.state.contactSubject}&body=${this.state.contactName}: ${this.state.contactMessage}`);
  }

  handleForm = (event)=>{
    console.log(event.target);
    let id = event.target.name;
    let val = event.target.value;

    this.setState({[id]:val});
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                  <p className="address">
                      <span>{resumeData.name}</span>
                    <br></br>
                      <span>{resumeData.address}</span>
                    <br></br>
                      <span>{resumeData.address2}</span>
                    <br></br>
                      <span>{resumeData.contactNo}</span>
                    <br></br>
                      <span>{resumeData.mailid}</span>
                  </p>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}