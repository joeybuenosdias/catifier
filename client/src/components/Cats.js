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
	state = { phrase: '', catifiedPhrase: '' };

	handleChange = (e) => {
		this.setState({ phrase: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let { phrase } = this.state;
		//KITTY ALGORITHIM GOES HERE, PASS THE PHRASE
		let newPhrase = catifyAlgorithim(phrase);
		this.setState({ phrase: '', catifiedPhrase: newPhrase });
	};

	render() {
		return (
			<Grid centered container style={{ height: '90vh' }} verticalAlign="top">
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
					{this.state.catifiedPhrase && (
						<Segment textAlign="center" vertical raised>
							<Header as="h2" color="grey">
								New Cat Phrase:
							</Header>
							<Header as="h4">{this.state.catifiedPhrase}</Header>
						</Segment>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}

export default Cats;
