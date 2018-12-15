import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// const GET_PERSON = gql`
// 	query GET_PERSON($id: Int!){
// 		getPerson(id: $id) {
// 			name,
// 			dateofbirth
// 		}
// 	}
//`;

const Kitties = () => (
	<div>
		<h1>hi from kitties</h1>
		<img src={'https://lorempixel.com/800/600/cats/?200'} style={{
			width: '50%',
			height: '50%',
		}}/>
	</div>
);

class App extends Component {

	render() {
		return (
			<div>
				<Router>
					<div>
						<Route exact path={'/kitties'} component={Kitties}/>

						<Link to={'/kitties'}>
							Go to kitties !
						</Link>
					</div>
				</Router>
			</div>
		);
	}
}

export default App

