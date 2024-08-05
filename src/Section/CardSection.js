import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "../Style/card.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Profit } from './Profit';
export const CardSection = () => {

    const cardData = [
        { "icon": <ShoppingBasketIcon />, "text": "Total Order", "range": 75, "color": "#12b789" },
        { "icon": <ShoppingBasketIcon />, "text": "Total Delivered", "range": 70, "color": "#db525b" },
        { "icon": <ShoppingBasketIcon />, "text": "Total Cancelled", "range": "05", "color": "#12b789" },
        { "icon": <ShoppingBasketIcon />, "text": "Total Revenue", "range": "$12K", "color": "#db525b" }
    ]
    return (
        <div className='cardContainer'>
            {cardData.map((e) => (
                <div className="card">
                    <p className='icon'> {e.icon}</p>
                    <h2 className="title">{e.text}</h2>
                    <div className="range">
                        <h2>{e.range}</h2>
                        <p className='range-color' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: ` ${e.color || "red"} `, }}
                        >
                            {e.color === "#12b789" ? <ArrowDropUpIcon className="arrow" style={{ fontSize: "2.6rem", marginRight: "-7px" }} /> : <ArrowDropDownIcon className="arrow" style={{ fontSize: "2.6rem", marginRight: "-7px" }} />}
                            <span>3%</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}