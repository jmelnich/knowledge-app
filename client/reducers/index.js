import {combineReducers} from 'redux';
import user from './user';
import flash from './flash'

export default combineReducers({
    user,
    flash
});