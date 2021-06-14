import React from 'react'
import "./Footer.css";
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import BusinessIcon from '@material-ui/icons/Business';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
const FontPage = () => {
    return (
   <section className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 			</ul>
  	 		</div>
         
  	 		<div className="footer-col">
  	 			<h4>Get help Recruiter</h4>
  	 			<ul>
  	 				<li><a href="#">How it works</a></li>
  	 				<li><a href="#">Register</a></li>
  	 				<li><a href="#">Post a Job</a></li>
  	 				<li><a href="#">Advance Skill Search</a></li>
  	 				<li><a href="#">Recruiting Service</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get help Candidate</h4>
  	 			<ul>
  	 				<li><a href="#">How it works</a></li>
  	 				<li><a href="#">Register</a></li>
  	 				<li><a href="#">Post Your Skills</a></li>
  	 				<li><a href="#">Job Search</a></li>
  	 			</ul>
  	 		</div>
         <div className="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="#"><AddIcCallIcon/>+216 71 896 745</a></li>
  	 				<li><a href="#"><AlternateEmailIcon/>societe@societe.com</a></li>
  	 				<li><a href="#"><BusinessIcon/>Tunis, Tunis </a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		
  	 	</div>
  	 </div>
  </section>
  );
}


export default FontPage
