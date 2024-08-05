import "../Style/card.css"
export const Card = ({ Icon, title, range }) => {
    return (
        <div className="card">
            <Icon className="icon" />
            <h2 className="title"> {title}</h2>
            <div className="range">
                <h2>{range}</h2>
                <p>3%</p>
            </div>
        </div>
    )
}