import { combineReducers } from 'redux';
//import SelectionsReducer from './selections_reducer';
//import GetSkillsReducer from './skills_reducer';

// selectionItems: SelectionsReducer,
// skills: GetSkillsReducer,

import SelectionList from './selectionsListReducer';

const rootReducer = combineReducers({
    selectionList: SelectionList
});

export default rootReducer;
