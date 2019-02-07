import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <Auxillary>
        <Navigation/>
        <main>
            {props.children}
        </main>
        <Footer text="This is Footer"/>
    </Auxillary>
)

export default layout;