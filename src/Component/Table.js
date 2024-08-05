import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, SvgIcon } from '@mui/material';
import "../Style/table.css";
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
function createData(img, name, orderNo, amount, status, color) {
    return { img, name, orderNo, amount, status, color };
}

const rows = [
    createData("https://hudsondermatology.com/wp-content/uploads/2024/04/Imge-Hulur.jpg", 'Wade Warn', 1547856, "$124.00", "Delivered"),
    createData("https://th.bing.com/th/id/OIP.42OFL-luC9NVWMXavAaB3wHaEK?pid=ImgDet&w=200&h=112&c=7&dpr=1.5", 'Jane Cooper', 18683975, "$365.02", "Delivered",),
    createData("", 'Guy Hawkins', 93836457, "$45.88", "Cancelled",),
    createData("https://hudsondermatology.com/wp-content/uploads/2024/04/Imge-Hulur.jpg", 'Kristin Watson', 246492740, "$65.00", "Pending",),
    createData("", 'Cody Fisher', 4667372, "$545.00", "Delivered",),
    createData("", 'Savannah Nguyen', 352474844, "$231.00", "Delivered",),
];

export default function TableComponent() {

    const ratingFunc = (rating) => {
        const stars = Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1;
            // Determine the type of star based on the rating value
            if (rating >= starValue) {
                return <SvgIcon key={index} component={Star} style={{ color: 'yellow' }} />;
            } else if (rating >= starValue - 0.5) {
                return <SvgIcon key={index} component={StarHalf} style={{ color: 'yellow' }} />;
            } else {
                return <SvgIcon key={index} component={StarBorder} style={{ color: 'gray' }} />;
            }
        });

    }

    return (
        <TableContainer component={Paper} style={{
            background: "#20202a", color: "white", padding: "20px", margin: "1rem"
        }} >
            <h4>Recent Orders</h4>
            <Table sx={{ minWidth: 650 }} aria-label="caption table" className='table'>
                {ratingFunc(2)}
                <TableHead>
                    <TableRow>
                        <TableCell style={{ color: "white" }} align="left">Customer</TableCell>
                        <TableCell align="left" style={{ color: "white" }}>Order No.</TableCell>
                        <TableCell style={{ color: "white" }} align="left">Amount</TableCell>
                        <TableCell style={{ color: "white" }} align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row) => (
                        <TableRow key={row.name} style={{ color: "white" }}>
                            <TableCell component="th" scope="row" style={{ display: "flex", color: "white" }}>
                                <Avatar alt="Cindy Baker" className="icon-button" src={row.img} /> <p style={{ padding: "10px" }}>{row.name}</p>
                            </TableCell>
                            <TableCell style={{ color: "white" }} align="left">   {row.orderNo}</TableCell>
                            <TableCell style={{ color: "white" }} align="left">{row.amount}</TableCell>
                            <TableCell style={{ color: "white" }} align="left">
                                {row.status === "Delivered" ? <button className='btn color-1 ' >{row.status}</button> : <button className='btn color-2 ' >{row.status}</button>}

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
