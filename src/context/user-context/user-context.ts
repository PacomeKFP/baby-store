
import {createContext} from 'react';
import {UserInterface} from '../../../core/types/user.interface';
import {UserContextInterface} from './user-context.interface';

export const UserContext = createContext<UserContextInterface>({
	defineCurrentUser: (user: UserInterface) => {
		return user === null;
	}
});

