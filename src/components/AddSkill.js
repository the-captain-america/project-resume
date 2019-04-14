import React, { Compoennt } from 'react';
import InfoSection from './InfoSection';
import InfoSectionToggle from './InfoSectionToggle';
import SliderDrop from './SliderDrop';

class AddSkill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">

          <InfoSection
            revealContent={this.props.showContent}
            content={this.props.content}
            title={'Skills'} />
          <section>
            <InfoSectionToggle onPressInfo={this.props.onPressInfo} />
            {this.props.children}
          </section>
          <SliderDrop />
        </div>
      </div>
    );
  }
}

export default AddSkill;
