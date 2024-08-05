import React, { useEffect } from "react";
import "../Style/menubar.css";
import { Logo } from "./logo";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const MenuBar = () => {
    useEffect(() => {
        const mainMenuLis = document.getElementById("mainIcon").querySelectorAll("li"); // Use querySelectorAll to select all li elements
        function actionApply(event) {
            mainMenuLis.forEach(n => n.classList.remove("active")); // Remove "active" class from all items
            event.currentTarget.classList.add('active'); // Add "active" class to the clicked item
        }
        mainMenuLis.forEach(n => n.addEventListener("click", actionApply)); // Add click event listener to each item

        return () => {
            mainMenuLis.forEach(n => n.removeEventListener("click", actionApply));
        };
    }, []);

    return (
        <menu>
            <Logo />
            <ul id="mainIcon">
                <Icon icon={<HomeIcon className="active-icon " />} />
                <Icon icon={<AssessmentOutlinedIcon />} />
                <Icon icon={<AssignmentTurnedInOutlinedIcon />} />
                <Icon icon={<AccountBalanceWalletOutlinedIcon />} />
                <Icon icon={<LocalMallOutlinedIcon />} />
            </ul>
            <ul className="logout">
                <Icon icon={<LogoutIcon />} />
            </ul>
        </menu>
    );
};


const Icon = ({ icon }) => (
    <li> <a href="#">{icon}</a></li>
)
export default MenuBar;
