import React from 'react'
import { Routes, Route } from "react-router-dom";
import MapPage from './pages/MapPage';
import NotFoundPage from './pages/NotFoundPage';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<MapPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default Router