import { USER_GROUP_LIST} from '../components/users/users.component';
import { environment} from '../../environments/environment';

export var injectables: Array< any> = [
  {provide: USER_GROUP_LIST, useValue: USER_GROUP_LIST},
  {provide: environment.API_URL, useValue: environment.API_URL},
];
