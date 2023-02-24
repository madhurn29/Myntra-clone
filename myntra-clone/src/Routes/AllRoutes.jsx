
import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import MensJeans from '../Pages/MensJeans'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/mens-jeans' element={<MensJeans />} />

        </Routes>
    )
}

export default AllRoutes


