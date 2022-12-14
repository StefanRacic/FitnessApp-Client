import './App.css';
import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Programs from './pages/Programs/Programs';
import Exercises from './pages/Exercises/Exercises';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path='/programs' element={<Programs />} />
						<Route path='/exercises' element={<Exercises />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
