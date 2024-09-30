import './css/App.css';
import { routes } from './config/routes';
import { Route, Routes } from 'react-router-dom';
import { isAuthenticated } from './helpers/authentication';

function App() {
    return (
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
    );
}

export default App;
