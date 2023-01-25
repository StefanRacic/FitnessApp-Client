import './App.css';
import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Programs from './pages/Programs/Programs';
import Exercises from './pages/Exercises/Exercises';
import Program from './pages/Program/Program';
import Workout from './pages/Workout/Workout';
import WorkoutLogger from './pages/WorkoutLogger/WorkoutLogger';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path='/programs' element={<Programs />} />
						<Route path='/exercises' element={<Exercises />} />
						<Route path='/program/:id' element={<Program />} />
						<Route path='/workout/:id' element={<Workout />} />
						<Route path='/workoutLogger' element={<WorkoutLogger />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
