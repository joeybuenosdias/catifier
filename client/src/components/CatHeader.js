import React from 'react';
import { Segment, Popup, Button } from 'semantic-ui-react';
import InstructionsList from './InstructionsList';

const CatHeader = () => (
	<Segment>
		<Popup
			on="click"
			trigger={<Button content="INSTRUCTIONS" />}
			content={<InstructionsList />}
			position="right center"
		/>
	</Segment>
);

export default CatHeader;
