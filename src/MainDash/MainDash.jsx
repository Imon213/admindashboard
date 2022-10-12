
import React from 'react';
import Cards from '../Cards/Cards';
import BasicTable from '../Table/Table';

import './MainDash.css';
const MainDash = () => {
    return (
       <div className="main-dash">
        <h3>Dashboard</h3>
       <Cards />
       <BasicTable />
       </div>
    );
};

export default MainDash;