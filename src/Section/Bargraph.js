import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../Style/bargraph.css";
// Sample data
const data = [
    { name: 5, uv: 9000, pv: 3000, amt: 2400 },
    { name: 9, uv: 3000, pv: 4008, amt: 2210 },
    { name: 11, uv: 6000, pv: 6000, amt: 2290 },
    { name: 13, uv: 5880, pv: 5508, amt: 2000 },
    { name: 15, uv: 7890, pv: 1500, amt: 2181 },
    { name: 17, uv: 7390, pv: 6800, amt: 2500 },
    { name: 19, uv: 9490, pv: 5300, amt: 2100 },
    { name: 21, uv: 16000, pv: 7200, amt: 2200 },
    { name: 21, uv: 8000, pv: 9200, amt: 2200 },
    { name: 23, uv: 5800, pv: 8300, amt: 2100 },
    { name: 25, uv: 9500, pv: 4400, amt: 2400 },
    { name: 27, uv: 5200, pv: 6500, amt: 1800 },
];

export const BarGraph = () => {
    // Formatter for the Y-axis to display values in "K" format
    const yAxisFormatter = (value) => `${value / 1000}K`;

    return (
        <div style={{ position: 'relative', width: '100%', height: '350px', background: "#20202a", padding: "30px", margin: "1rem" }}>
            {/* Top-left text */}
            <div style={{ position: 'absolute', top: 20, left: 20, fontSize: '18px', fontWeight: 'bold', color: "white", }}>
                Activity
            </div>

            {/* Top-right button */}
            <div className='btnDiv'
                style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    display: "flex",
                    alignItems: "center", 
                    justifyContent: "center",
                    borderRadius: "50px",
                }}
            >
                <button
                    className='weeklyBtn'
                >
                    Weekly <ArrowDropDownIcon />
                </button>
            </div>

            {/* Bar chart */}
            <ResponsiveContainer width="100%" height="100%" marginTop="20px">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid
                        stroke="#b8b9bb"
                        strokeDasharray="0"
                        horizontal={true} // Enable horizontal lines
                        vertical={false} // Disable vertical lines
                        strokeWidth={.2}
                    />
                    <XAxis dataKey="name" ticks={[5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]}
                    />
                    <YAxis
                        tickFormatter={yAxisFormatter}
                        domain={[0, 15000]}
                        ticks={[0, 5000, 10000, 15000]}
                        axisLine={{ stroke: '#000', strokeWidth: 0 }}
                    />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#7393f6" radius={50} />
                    <Bar dataKey="uv" fill="#7393f6" radius={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarGraph;

