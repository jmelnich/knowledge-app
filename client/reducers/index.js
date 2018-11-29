import {combineReducers} from 'redux';
import user from './user';
import flash from './flash';
import form from './form';


export default combineReducers({
    form,
    user,
    flash
});