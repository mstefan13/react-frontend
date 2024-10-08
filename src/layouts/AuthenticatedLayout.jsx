import Header from '../components/partials/Header';
import Sidebar from '../components/partials/Sidebar';

function AuthenticatedLayout() {
    return (
        <div>
            <Sidebar />
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default AuthenticatedLayout;
