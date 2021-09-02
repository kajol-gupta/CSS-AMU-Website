import React from 'react';
import ShowMoreText from "react-show-more-text";

function Card(props){
    return(
        <>
         <div className='cards'>
                <div className='card'>
                    <img src= {props.imgsrc} alt="mypic" className="card_img" />
                    <div className = "card_info">
                        <span className="card_category"> {props.title} </span>
                        <ShowMoreText className="button" more="more" lines={4} less="less" truncatedEndingComponent={"... "}  >
                        <span className="card_content"> {props.content} </span>
                        </ShowMoreText>
                        
                </div>
            </div>
        </div>
    </>
    )
}

export default Card;
