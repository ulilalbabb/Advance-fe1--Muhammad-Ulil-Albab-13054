import AuthLayout from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"

const RegisterPage = () => {
    return (
        <AuthLayout title="Daftar" type="register">
            <FormRegister/>
        </AuthLayout>
    )
}

export default RegisterPage