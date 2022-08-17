import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { Routes } from './navigators';
import { AuthProvider } from './contexts';
import { store } from './store';
import { GlobalAlert } from './components';

const App = () => {
	return (
		<Provider store={store}>
			<AuthProvider>
				<SafeAreaProvider>
					<Routes />
					<GlobalAlert />
				</SafeAreaProvider>
			</AuthProvider>
		</Provider>
	);
};

export default App;
