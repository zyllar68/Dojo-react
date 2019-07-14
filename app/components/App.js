import React, { Component } from 'react';
import { SectionComponentFieldOne } from './SectionComponent1';
import { SectionComponentFieldTwo } from './SectionComponent2';
import { SectionComponentFieldThree } from './SectionComponent3';

class App extends Component {

  render() {
    return (
      <div>
        <SectionComponentFieldOne />
        <SectionComponentFieldTwo />
        <SectionComponentFieldThree />
      </div>
    );
  }

}

export default App;
