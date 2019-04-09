import React from 'react';

import BMWIcon from '../../images/icons/BMW.png';
import CadillacIcon from '../../images/icons/Cadillac.png';
import JaguarIcon from '../../images/icons/Jaguar.png';
import LandRoverIcon from '../../images/icons/LandRover.png';
import NissanIcon from '../../images/icons/Nissan.png';
import HondaIcon from '../../images/icons/Honda.png';
import ATTIcon from '../../images/icons/ATT.png';
import BoostIcon from '../../images/icons/Boost.png';

import style from './style.scss';

const BrandIcon = ({ icon = false }) => icon
? (
    <div
      className="brands-icon"
    >
      <img
        src={icon}
      />
    </div>
  )
: null;

const Brands = () => (
  <section
    className="brands"
  >
    <h1>Brands I Work With</h1>
    <div
      className="brands-icons"
    >
      <BrandIcon icon={BMWIcon} />
      <BrandIcon icon={CadillacIcon} />
      <BrandIcon icon={JaguarIcon} />
      <BrandIcon icon={LandRoverIcon} />
      <BrandIcon icon={NissanIcon} />
      <BrandIcon icon={HondaIcon} />
      <BrandIcon icon={ATTIcon} />
      <BrandIcon icon={BoostIcon} />
    </div>
  </section>
);

export default Brands;