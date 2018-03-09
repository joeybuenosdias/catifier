import React from 'react';
import {
	Grid,
	Segment,
	Form,
	TextArea,
	Button,
	Icon,
	Modal,
	Header,
	List,
	Popup
} from 'semantic-ui-react';
import CatHeader from './CatHeader';
import { catifyAlgorithim } from '../actions/cats';

class Cats extends React.Component {
	state = { phrase: '' };

	handleChange = (e) => {
		this.setState({ phrase: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let { phrase } = this.state;
		//KITTY ALGORITHIM GOES HERE, PASS THE PHRASE
		let newPhrase = catifyAlgorithim(phrase);
		console.log(newPhrase);
		this.setState({ phrase: '' });
	};

	render() {
		return (
			<Grid
				centered
				container
				style={{ height: '90vh' }}
				verticalAlign="middle"
			>
				<Grid.Column computer={10} largeScreen={12} tablet={14} mobile={16}>
					<Segment raised textAlign="center">
						<CatHeader />
						<Icon name="github alternate" size="massive" color="black" />
						<Form onSubmit={this.handleSubmit}>
							<TextArea
								rows={10}
								onChange={this.handleChange}
								value={this.state.phrase}
								placeholder="Cats Kittens KittyCats Feline Furry"
							/>
							<Button basic color="black">
								CATIFY!
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Cats;
