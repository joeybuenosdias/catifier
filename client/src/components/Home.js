import React from 'react';
import {
	Grid,
	Container,
	Segment,
	Header,
	Icon,
	Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
	<Grid centered container style={{ height: '90vh' }} verticalAlign="middle">
		<Grid.Column computer={10} largeScreen={12} tablet={14} mobile={16}>
			<Segment raised textAlign="center">
				<Header as="h1">Catifier</Header>
				<Icon name="github alternate" size="massive" color="black" />
				<Segment>
					<Button as={Link} to="/catsnkittens" basic color="black">
						START!
					</Button>
				</Segment>
			</Segment>
		</Grid.Column>
	</Grid>
);

export default Home;
