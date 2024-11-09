import AuthLayout from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FormLogin"

const LoginPage = () => {
    return (
        <AuthLayout title="Masuk" type="login">
            <FormLogin/>
        </AuthLayout>
    )
}

export default LoginPage