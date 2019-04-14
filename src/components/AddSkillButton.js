import React from 'react';

const AddSkillButton = ({onPressAdd}) => {
    return (
      <div>
        <p style={{marginTop: 10}}>Skill not listed above?</p>
        <button style={{width:100}} onClick={onPressAdd} className="btn btn-normal">Add Skill</button>
      </div>
    );
}

export default AddSkillButton;
