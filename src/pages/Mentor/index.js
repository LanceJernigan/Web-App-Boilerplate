import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import style from './style.scss';

const Mentor = () => (
    <div
        className="mentor_wrapper page"
    >
        <Header
            showMenu={false}
            showNav={true}
            color="#3265A7"
        />
        <Footer />
    </div>
);

export default Mentor;