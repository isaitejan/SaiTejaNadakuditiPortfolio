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

  handleMail = (event)=>{
    console.log(event.target);
  }

  handleForm = (event)=>{
    console.log(event.target);
    let id = event.target.name;
    let val = event.target.value;

    this.setState({[id]:val});
  }

  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <form id="contactForm" name='contactForm' onSubmit={this.handleForm}>
                <fieldset>
                  <div>
                    <label for="contactName">Name <span className='required'>*</span></label>
                    <input type="text" size="35" id="contactName" name='contactName' value={this.state.contactName} onChange={this.handleForm}></input>
                  </div>
                  <div>
                    <label for="contactEmail">Email <span className='required'>*</span></label>
                    <input type="text" size="35" id="contactEmail" name='contactEmail' value={this.state.contactEmail} onChange={this.handleForm}></input>
                  </div>
                  <div>
                    <label for="contactSubject">Subject </label>
                    <input type="text" size="35" id="contactSubject" name='contactSubject' value={this.state.contactSubject} onChange={this.handleForm}></input>
                  </div>
                  <div>
                    <label for="contactMessage">Message <span className='required'>*</span></label>
                    <textarea type="text" cols="50" rows="15" id="contactMessage" name='contactMessage' value={this.state.contactMessage} onChange={this.handleForm}></textarea>
                  </div>
                  <div>
                    <button type='submit' className='submit'>Submit</button>
                    <span id='image-loader'>
                      <img alt="" src="images/loader.gif"></img>
                    </span>
                  </div>
                </fieldset>
              </form>
              <div id='message-warning'>Error boy</div>
              <div id='message-success'>
                <i className='fa fa-check'></i>
                "Your message was sent, Thank you!"
                <br></br>
              </div>
            </aside>
            <aside className="four columns footer-widgets">
              <div className='widget widget_contact'>
                <h4>Address &amp; Phone:</h4>
                <p className='address'>
                  Sai Teja N<br></br>
                  6655 W141st St, Apt#3402<br></br>
                  Overland Park, Kansas - 66223<br></br>
                  +1 9133265307
                </p>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}