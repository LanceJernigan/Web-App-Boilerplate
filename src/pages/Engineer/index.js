import React from 'react';

import Header from '../../components/Header';
import WhatIDo from '../../components/WhatIDo';
import Brands from '../../components/Brands';
import Footer from '../../components/Footer';

import style from './style.scss';

const Engineer = () => (
    <div
        className="engineer_wrapper page"
    >
        <Header
            showMenu={false}
            showNav={true}
            color="#3265A7"
        />
        <WhatIDo />
        <Brands />
        <Footer />
    </div>
);

export default Engineer;