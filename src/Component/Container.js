import Navbar from "./Navbar"
import "../Style/container.css";
import TableComponent from "./Table";
import { CardSection } from "../Section/CardSection";
import { Profit } from "../Section/Profit";
import { Feedback } from "../Section/Feedback";
import { GoalSection } from "../Section/GoalSection";
import { BarGraph } from "../Section/Bargraph";
export const Container = () => {
    return (
        <div className="container">
            <Navbar />
            <h1 className="text">Dashboard</h1>
            <div className="flex-property">
                <CardSection />
                <Profit />
            </div>
            <div className="flex-property">
                <BarGraph />
                <GoalSection />
            </div>
            <div className="flex-property">
                <TableComponent />
                <Feedback />
            </div>
        </div>
    )
}