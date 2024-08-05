import "../Style/goalsection.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import BreakfastDiningOutlinedIcon from '@mui/icons-material/BreakfastDiningOutlined';
export const GoalSection = () => {
    return (
        <div className="goalContainer">
            <div className="goal-flex-property">
                <p> <span className="goal"> <TrackChangesOutlinedIcon />
                </span>
                    Goal</p>
                <i><KeyboardArrowRightIcon className="arrow-stye" /></i>
            </div>
            <div className="goal-flex-property">
                <p> <span className="food"> <LunchDiningOutlinedIcon />
                </span>
                    Goal</p>
                <i><KeyboardArrowRightIcon className="arrow-stye" /></i>
            </div>
            <div className="goal-flex-property">
                <p> <span className="menus"> <BreakfastDiningOutlinedIcon />
                </span>
                    Goal</p>
                <i>  <KeyboardArrowRightIcon className="arrow-stye" /></i>

            </div>
        </div>
    )
}