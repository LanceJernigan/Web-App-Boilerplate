import React from 'react';

import Header from '../../components/Header';
import Experience from '../../components/Experience';
import Social from '../../components/Social';

import style from './style.scss';
import { runInThisContext } from 'vm';

const backgroundColors = [
    '#3265A7',
    '#7F32A7',
    '#32A75E',
    '#3290A7',
];

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            interval: false,
            color: 0,
        });

        this.setBackground = this.setBackground.bind(this);
    }

    componentWillMount() {
        this.setState({
            interval: window.setInterval(
                this.setBackground,
                3000,
            )
        })
    }

    componentWillUnmount() {
        const {
            interval,
        } = this.state;

        window.clearInterval(interval);
    }

    setBackground() {
        const {
            color = 0,
        } = this.state;
        const nextColor = color + 1 < backgroundColors.length
            ?   color + 1
            :   0;

        this.setState({
            color: nextColor,
        })
    }

    render() {
        const {
            color = 0,
        } = this.state;
        const background = backgroundColors[color];

        return (
            <div
                className="home_wrapper page"
                style={{
                    background,
                }}
            >
                <Header
                    showMenu={true}
                    showNav={false}
                />
                <Social />
                <Experience />
            </div>
        );
    }
}

export default Home;