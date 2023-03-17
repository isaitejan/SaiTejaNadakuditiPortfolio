(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),s=t.n(c),r=(t(14),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),d=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images\\profilepic.jfif",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",null,"\xa0\xa0\xa0\xa0\xa0",l.a.createElement("button",{className:"fa fa-download"},l.a.createElement("a",{href:"SaiTejaNadakuditiResume.pdf",style:{fontFamily:"opensans-bold, sans-serif",color:"white"},download:!0},"Download Resume")))))))}}]),a}(n.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("a",{href:e.github,title:e.name},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("img",{alt:e.name,src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))})))))}}]),a}(n.Component),f=t(8),v=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).handleMail=function(a){a.preventDefault(),window.open("mailto:".concat(e.state.contactEmail,"?subject=").concat(e.state.contactSubject,"&body=").concat(e.state.contactName,": ").concat(e.state.contactMessage))},e.handleForm=function(a){console.log(a.target);var t=a.target.name,n=a.target.value;e.setState(Object(f.a)({},t,n))},e.state={contactName:"",contactEmail:"",contactSubject:"",contactMessage:""},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"})),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.address2),l.a.createElement("br",null),l.a.createElement("span",null,e.contactNo),l.a.createElement("br",null),l.a.createElement("span",null,e.mailid))))))}}]),a}(n.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("ul",null,"Modified with love by Sai Teja \u2665")),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={name:"Sai Teja N",role:"Software Engineer",linkedinId:"sai-teja-nadakuditi",skypeid:"Your skypeid",roleDescription:"I like to write code and like to learn about new technologies.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/sai-teja-nadakuditi/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/isaitejan",className:"fa fa-github"},{name:"instagram",url:"https://www.instagram.com/isaitejan/",className:"fa fa-instagram"}],aboutme:"I'm currently pursuing my Masters in Computer Science at University of Central Missouri. I have an experience of 2 years in developing Single Page Applications using MERN Stack.",address:"6655 W141st St, Apt#3402",address2:"Overland Park, Kansas - 66223",contactNo:"+1 9133265307",mailid:"saitejanadakuditi22@gmail.com",education:[{UniversityName:"University of Central Missouri",specialization:"Software Development",MonthOfPassing:"May",YearOfPassing:"2023",Achievements:"GPA: 3.66/4.0"},{UniversityName:"Jawaharlal Nehru Technological University, Kakinada",specialization:"Computer Science",MonthOfPassing:"April",YearOfPassing:"2019",Achievements:"First Class with Distinction"}],work:[{CompanyName:"Infosys Ltd",specialization:"Systems Engineer",MonthOfLeaving:"Dec",YearOfLeaving:"2021",Achievements:"Worked as a MERN stack developer with the primary responsibilities of designing UI components and managing back-end data."}],skillsDescription:"Primary Skills",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"JavaScript"},{skillname:"MongoDB"},{skillname:"Expressjs"},{skillname:"Reactjs"},{skillname:"Java"}],portfolio:[{name:"Tic-Tac-Toe",description:"TicTacToe Game Development",imgurl:"Tic-Tac-Toe.png",github:"https://isaitejan.github.io/Tic-Tac-Toe/"},{name:"Sample MFlix",description:"Application which displays the movie data as cards from the database.",imgurl:"SampleMflix.png",github:"https://github.com/isaitejan/Mflix_frontend"}]},g=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:b}),l.a.createElement(p,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(h,{resumeData:b}),l.a.createElement(v,{resumeData:b}),l.a.createElement(N,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.b66f4567.chunk.js.map