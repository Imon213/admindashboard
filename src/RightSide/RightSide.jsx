import React from 'react';
import Review from '../Review/Review';
import Updates from '../Updates/Updates';
import './RightSide.css';
const RightSide = () => {
    return (
        <div className="right-side">
            <div className='r-update'>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customer Review</h3>
                <Review />
            </div>
        </div>
    );
};

export default RightSide;