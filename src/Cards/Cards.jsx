import React from 'react';
import './Card.css';
import { CardData } from '../Data/Data';
import Card from '../Card/Card';

import 'react-circular-progressbar/dist/styles.css';

const Cards = () => {
    return (
        <div className="cards">
          {
            CardData.map((card, id)=>{
                return(
                    
                    <div className="parentContainer" key={id}>
                       
                        <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series ={card.series}

                         />
                    </div>
                )
            })
          }
        </div>
    );
};

export default Cards;