import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';

const Footer = () => (
	<Grid>
		<Grid.Column only="computer largeScreen">
			<Segment textAlign="center" color="black" inverted>
				<Header color="white" as="h3">
					<Icon name="copyright" color="white" />
					2018 - mojo web development
				</Header>
			</Segment>
		</Grid.Column>
	</Grid>
);

export default Footer;
