import { Rating, styled } from "@mui/material";
import "../Style/feedback.css";
export const Feedback = () => {
    const data = [
        {
            "name": "Jenny Wilson", "rating": 4.3, "img": "https://th.bing.com/th/id/OIP.42OFL-luC9NVWMXavAaB3wHaEK?pid=ImgDet&w=200&h=112&c=7&dpr=1.5", "descriptions": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem consequuntur, impedit ullam provident deserunt repellendus fuga totam exercitationem minima molestias?"
        }, {
            "name": "Guy Hawkins", "rating": 3, "img": "https://hudsondermatology.com/wp-content/uploads/2024/04/Imge-Hulur.jpg", "descriptions": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem consequuntur, impedit ullam provident deserunt repellendus fuga totam exercitationem minima molestias?"
        }
        , {
            "name": "Jenny Wilson", "rating": 5, "img": "https://th.bing.com/th/id/OIP.42OFL-luC9NVWMXavAaB3wHaEK?pid=ImgDet&w=200&h=112&c=7&dpr=1.5", "descriptions": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem consequuntur, impedit ullam provident deserunt repellendus fuga totam exercitationem minima molestias?"
        }, {
            "name": "Savannah Nguyen", "rating": 4, "img": "https://hudsondermatology.com/wp-content/uploads/2024/04/Imge-Hulur.jpg", "descriptions": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem consequuntur, impedit ullam provident deserunt repellendus fuga totam exercitationem minima molestias?"
        },
        {
            "name": "Jenny Wilson", "rating": 4.5, "img": "https://th.bing.com/th/id/OIP.42OFL-luC9NVWMXavAaB3wHaEK?pid=ImgDet&w=200&h=112&c=7&dpr=1.5", "descriptions": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem consequuntur, impedit ullam provident deserunt repellendus fuga totam exercitationem minima molestias?"
        }
    ]


    const CustomRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: 'yellow',  // Color for filled stars
        },
        '& .MuiRating-iconHover': {
            color: 'yellow',  // Color for hovered stars (when interactive)
        },
        '& .MuiRating-iconEmpty': {
            color: 'white',
            // background:"white"   // Color for empty stars
        },
    });
    return (
        <>
            <div class="review-container">
                <div class="cards">
                    <h3> Customer's Feedback</h3>
                    {data?.map((e) => (
                        <div class="card">
                            <div class="card-top">
                                <div class="name">
                                    <img class="img one" src={e?.img} alt="" />
                                    <p>{e?.name}</p>
                                </div>
                            </div>
                            <CustomRating
                                name="read-only"
                                value={e.rating}
                                precision={0.5}
                                readOnly
                                size="large"
                                style={{ margin: "10px 0" }}
                            />
                            {/* <div class="rate">
                                <i class="fas fa-star">u</i>
                                <i class="fas fa-star">jj</i>
                                <i class="fas fa-star">ii</i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                            </div> */}
                            <div class="card-content">
                                <p>{e?.descriptions}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}