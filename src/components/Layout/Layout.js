import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main>
            {props.children}
        </main>
        <Footer text="This is Footer"/>
    </Aux>
)

export default layout;