import { createStore, combineReducers } from 'redux';
import companyReducer from './company/companyReducer';
import employeeReducer from './employee/employeeReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  company: companyReducer,
  employee: employeeReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);