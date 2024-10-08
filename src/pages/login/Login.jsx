import UnautehnticatedLayout from '../../layouts/UnautehnticatedLayout';
import { Button } from 'primereact/button';

function buttonAction() {
    console.log('Button Pressed !');
}
function Login() {
    return (
        <UnautehnticatedLayout>
            <h1 className="text-white text-4xl font-bold">Login Page</h1>
            <Button
                className="bg-green-400 border-4 border-yellow-400  rounded-3xl"
                label="TEST"
                icon="pi pi-check"
                onClick={buttonAction}
            />
        </UnautehnticatedLayout>
    );
}

export default Login;
