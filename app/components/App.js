import React, { Component } from 'react';
import { SectionComponentFieldOne } from './SectionComponent1';
import { SectionComponentFieldTwo } from './SectionComponent2';
import { SectionComponentFieldThree } from './SectionComponent3';
import { SectionComponentFieldFour } from './SectionComponent4';
import { SectionComponentFieldFive } from './SectionComponent5';
import { SectionComponentFieldSix } from './SectionComponent6';
import { SectionComponentFieldSeven } from './SectionComponent7';

class App extends Component {

  render() {
    return (
      <div>
        <SectionComponentFieldOne />
        <SectionComponentFieldTwo />
        <SectionComponentFieldThree />
        <SectionComponentFieldFour />
        <SectionComponentFieldFive />
        <SectionComponentFieldSix />
        <SectionComponentFieldSeven />
      </div>
    );
  }

}

export default App;
