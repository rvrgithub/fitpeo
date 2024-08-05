import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "../Style/profit.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "react-circular-progressbar/dist/styles.css";
export const Profit = () => {
    return (
        <div className="profitContainer">
            <div className="text">
                <h5>Net Profit</h5>
                <h2>$ 6759.25</h2>
                <p style={{ display: "flex", alignItems: "center" }}
                >
                    <ArrowDropUpIcon className="arrow" style={{ fontSize: "2.6rem", marginRight: "-7px" }} />
                    <span>3%</span></p>
            </div>
            <div className="progress-chart">
                <div className="featuredChart">
                    <CircularProgressbar
                        value={75}
                        text={`75%`}
                        styles={buildStyles({
                            textSize: "20px",
                            pathColor: `#7393f6`,
                            textColor: "white",
                            trailColor: "#2b3269",

                        })}
                    />
                </div>
                <div className="progress-text"                >
                    Goal Completed
                </div>
                <p style={{ position: "absolute", bottom: 30,}}>The value here has been rounded off</p>
            </div>
        </div >
    )
}