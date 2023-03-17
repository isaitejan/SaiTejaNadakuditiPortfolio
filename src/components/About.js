import React, { Component } from 'react';

export default class About extends Component {

   render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images\profilepic.jfif" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">
                  <div >
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='fa fa-download'><a href='SaiTejaNadakuditiResume.pdf' style={{fontFamily:'opensans-bold, sans-serif', color:'white'}} download>Download Resume</a></button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}