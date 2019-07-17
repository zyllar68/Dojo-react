import React, { Component } from 'react';
import { SectionComponentFieldOne } from './SectionComponent1';
import { SectionComponentFieldTwo } from './SectionComponent2';
import { SectionComponentFieldThree } from './SectionComponent3';
import { SectionComponentFieldFour } from './SectionComponent4';


class App extends Component {

  render() {
    return (
      <div>
        <SectionComponentFieldOne />
        <SectionComponentFieldTwo />
        <SectionComponentFieldThree />
        <SectionComponentFieldFour />
      </div>
    );
  }

}

export default App;
