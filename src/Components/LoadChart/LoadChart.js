import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LoadChart = () => {
    const loadChartData = useLoaderData();
    const chartData = loadChartData.data;
    return (
        <div>
            <h3 className='m-5 text-danger text-decoration-underline'>Name vs Total Chart</h3>
            <div className='d-flex justify-content-center m-5'>
                <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default LoadChart;