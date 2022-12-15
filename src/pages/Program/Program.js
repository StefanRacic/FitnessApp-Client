import { Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Container, padding } from '@mui/system';
import React from 'react';

const Program = () => {
	return (
		<React.Fragment>
			<Container>
				<div
					style={{
						padding: '100px 0',
						margin: '30px 0',
						backgroundColor: 'grey',
					}}
				>
					Banner Image
				</div>
				<Typography variant='h2' padding={5}>
					Program Name
				</Typography>
				<Typography variant='body1'>
					Lorem anim reprehenderit mollit veniam laboris duis ea ut. Cillum
					velit proident id commodo elit sint officia mollit ea voluptate. Et
					est excepteur velit duis esse elit tempor labore. Nisi nulla ea sit
					Lorem elit cupidatat duis duis elit exercitation. Nisi nulla ea sit
					Lorem elit cupidatat duis duis elit exercitation. Nisi nulla ea sit
					Lorem elit cupidatat duis duis elit exercitation.
				</Typography>
				<Typography variant='h2' padding={5}>
					Workouts List
				</Typography>
				<Button style={{ backgroundColor: 'black' }}>Add Workout</Button>
			</Container>
		</React.Fragment>
	);
};

export default Program;
