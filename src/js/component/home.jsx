import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home (props){
	return (
		<div className="bigCounter">
			<div className= "calendar" style={{ "background-color": "#CDB4DB" }}>
			<img className= "alien" src="https://cdn-icons-png.flaticon.com/512/3306/3306594.png" alt="" />
			</div>
			<div className= "four" style={{ "background-color": "#FFC8DD" }} >{props.digitFour %10}</div>
			<div className= "three" style={{ "background-color": "#FFAFCC" }}>{props.digitThree %10}</div>
			<div className= "two" style={{ "background-color": "#BDE0FE" }}>{props.digitTwo %10}</div>
			<div className= "one" style={{ "background-color": "#A2D2FF" }}>{props.digitOne %10}</div>
		</div>
		
	);
};
Home.propTypes ={
	digitFour:PropTypes.number,
	digitThree:PropTypes.number,
	digitTwo:PropTypes.number,
	digitOne:PropTypes.number,

}


export default Home;
