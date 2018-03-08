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
import InstructionsList from './InstructionsList';

class Cats extends React.Component {
	state = { modalOpen: false };

	handleOpen = () => {
		this.setState({ modalOpen: true });
	};

	handleClose = () => {
		this.setState({ modalOpen: false });
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
						<Segment>
							<Popup
								trigger={<Button content="INSTRUCTIONS" />}
								content={<InstructionsList />}
							/>
						</Segment>
						<Icon name="github alternate" size="massive" color="black" />
						<Form>
							<TextArea rows={10} />
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
