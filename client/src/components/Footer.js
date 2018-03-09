import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

const Footer = () => (
	<Segment textAlign="center" color="black" inverted>
		<Header color="white" as="h3">
			<Icon name="copyright" color="white" />
			2018 - mojo web development
		</Header>
	</Segment>
);

export default Footer;
