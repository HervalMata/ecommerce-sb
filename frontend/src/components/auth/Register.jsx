import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {registerNewUser} from "../../store/actions/index.js";
import toast from "react-hot-toast";
import {AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";
import Spinners from "../shared/Spinners.jsx";

const Register = () => {
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

    const registerHandler = async (data) => {
        dispatch(registerNewUser(data, toast, reset, navigate, setLoader))
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(registerHandler)}
                className="sm:w-[450px] w-[300px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
            >
                <div className="flex flex-col items-center justify-center space-y-4">
                    <AiOutlineLogin className="test-slate-800 text-5xl" />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Cadastre-se Aqui
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
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="Email é req1uerido"
                        placeholder="Digite seu Email"
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
                        <>Cadastrar</>
                    )}
                </button>
                <p className="text-center text-sm text-slate-700 mt-6">
                    Já tem uma conta?
                    <Link
                        className="font-semibold underline hover:text-black"
                        to="/login"
                    >
                        <span>Entrar</span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register