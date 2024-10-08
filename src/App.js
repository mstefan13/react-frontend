import { routes } from './config/routes';
import { Route, Routes } from 'react-router-dom';
import { isAuthenticated } from './helpers/authentication';
import { PrimeReactProvider } from 'primereact/api';
import './css/App.css';
import Tailwind from 'primereact/passthrough/tailwind';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
    return (
        <PrimeReactProvider value={{ pt: Tailwind }}>
            <Routes>
                {routes[isAuthenticated() ? 'private' : 'public'].map(
                    (route, key) => {
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                exact
                                element={route.component}
                            />
                        );
                    }
                )}
            </Routes>
        </PrimeReactProvider>
    );
}

export default App;
