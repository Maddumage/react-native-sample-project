import { LoginPayload } from '../../slices';
import { AuthData } from './auth_data';

export type AuthContextData = {
	authData?: AuthData;
	loading: boolean;
	signIn(params: LoginPayload): Promise<void>;
	signOut(): void;
};
