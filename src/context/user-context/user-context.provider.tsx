import React, {useState} from 'react';
import {UserInterface} from '../../../core/types/user.interface';
import {UserContext} from './user-context.ts';


const CURRENT_USER_KEY: string = import.meta.env.VITE_CURRENT_USER_KEY || 'currentUser';
export function UserContextProvider({children}: { children: React.ReactNode }) {

	const localUser = localStorage.getItem(CURRENT_USER_KEY);
	let user;
	if (localUser) {
		user = JSON.parse(localUser) as UserInterface;
	}

	const [currentUser, setCurrentUser] = useState<UserInterface | undefined>(user);

	//toggle method for User
	const defineCurrentUser = (user: UserInterface) => {
		localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
		setCurrentUser(user);
	};


	return (
		<UserContext.Provider value={{currentUser, defineCurrentUser}}>
			{children}
		</UserContext.Provider>
	);
}
