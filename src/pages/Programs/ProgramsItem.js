import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgramImagePlaceHolder from '../../assets/images/placeholders/program-placeholder.jpg';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ItemOptions from '../../components/options/ItemOptions';
import { removeProgram } from '../../actions/programActions';
import EditProgram from '../../components/forms/edit/EditProgram';

const ProgramsItem = ({ program, setPrograms }) => {
	const [editModal, setEditModal] = useState(false);
	const { id, name, description } = program;
	return (
		<Grid>
			<Card sx={{ width: 345 }}>
				<CardMedia
					component='img'
					height='100%'
					image={ProgramImagePlaceHolder}
					alt='program'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions style={{ justifyContent: 'space-around' }}>
					<Button size='small'>Start</Button>
					<Button
						size='small'
						component={Link}
						to={{ pathname: `/program/${id}` }}
					>
						Open
					</Button>
					<ItemOptions
						item={program}
						setEditModal={setEditModal}
						removeItem={removeProgram}
						setItems={setPrograms}
					/>
				</CardActions>
			</Card>
			<EditProgram
				program={program}
				editModal={editModal}
				setEditModal={setEditModal}
				setPrograms={setPrograms}
			/>
		</Grid>
	);
};

export default ProgramsItem;
