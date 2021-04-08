import React from 'react';
import { shallow, mount, render } from 'enzyme';

// import Foo from '../Foo';
import App from '../App';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';

describe('Tests in App.js', () => {

    const t = {h:0,m:0,s:0,ms:0};

    const wrapper = shallow( <App />);
    const buttons = shallow( <Buttons/> );
    const time = shallow( <Counter time={ t } /> );

    test('should Component <App/> correctly', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('should start the chronometer', () => {
       
        buttons.find('button').at(0).simulate('click');
        const counter = time.find('#time').text().trim();

        expect( counter ).toBe('00:00:00');
        
    });

});