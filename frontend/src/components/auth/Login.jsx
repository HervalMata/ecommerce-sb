import {AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";
import {authenticateSignInUser} from "../../store/actions/index.js";
import Spinners from "../shared/Spinners.jsx";

const Login = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState()
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        mode: "onTouched",
    })

    const loginHandler = async (data) => {
        dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader))
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[450px] w-[300px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <AiOutlineLogin className="test-slate-800 text-5xl" />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Entre Aqui
                    </h1>
                </div>
                <hr className="mt-2 mb-5 text-black" />
                <div className="flex flex-col gap-5">
                    <InputField
                        label="Nome"
                        required
                        id="username"
                        type="text"
                        message="Nome é req1uerido"
                        placeholder="Digite seu Nome"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Senha"
                        required
                        id="password"
                        type="password"
                        message="Senha é req1uerido"
                        placeholder="Digite sua senha"
                        register={register}
                        errors={errors}
                    />
                </div>
                <button
                    disabled={loader}
                    type="submit"
                    className="bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white w-full
                               py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
                >
                    {loader ? (
                        <>
                            <Spinners /> Carregando....
                        </>
                    ) : (
                        <>Entrar</>
                    )}
                </button>
                <p className="text-center text-sm text-slate-700 mt-6">
                    Não tem uma conta?
                    <Link
                        className="font-semibold underline hover:text-black"
                        to="/register"
                    >
                        <span>Cadastrar-se</span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login;