import {FaAddressCard} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import InputField from "../shared/InputField.jsx";
import Spinners from "../shared/Spinners.jsx";
import {addUpdateUserAddress} from "../../store/actions/index.js";
import toast from "react-hot-toast";
import {useEffect} from "react";

const AddAddressForm = ({ address, setOpenAddressModal }) => {
    const dispatch = useDispatch();
    const { btnLoader } = useSelector((state) => state.errors);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors},
    } = useForm({mode: 'onTouched'});

    const onSaveAddressHandler = async (data) => {
        dispatch(addUpdateUserAddress(
            data,
            toast,
            address?.addressId,
            setOpenAddressModal
        ))
    }

    useEffect(() => {
        if (address?.addressId) {
            setValue("buildingName", address?.buildingName)
            setValue("city", address?.city)
            setValue("street", address?.street)
            setValue("state", address?.state)
            setValue("postalCode", address?.postalCode)
            setValue("country", address?.country)
        }
    }, [address])

    return (
        <div>
            <form onSubmit={handleSubmit(onSaveAddressHandler)}>
                <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
                    <FaAddressCard className="mr-2 text-2xl" />
                    {
                        !address?.addressId ?
                        "Adicionar Endereço" : "Atualizar Endereço"
                    }
                </div>
                <div className="flex flex-col gap-4">
                    <InputField
                        label="Nome"
                        required
                        id="buildingName"
                        type="text"
                        message="O nome do endereço é requerido"
                        placeholder="Digite o nome do endereço"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Cidade"
                        required
                        id="city"
                        type="text"
                        message="O nome da cidade é requerida"
                        placeholder="Digite o nome da cidade"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Estado"
                        required
                        id="state"
                        type="text"
                        message="O nome do estado é requerido"
                        placeholder="Digite o nome do estado"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Código Postal"
                        required
                        id="zipcode"
                        type="text"
                        message="O CEP é requerido"
                        placeholder="Digite o CEP"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Rua"
                        required
                        id="street"
                        type="text"
                        message="O nome da rua é requerido"
                        placeholder="Digite o nome da rua"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="País"
                        required
                        id="country"
                        type="text"
                        message="O nome do país é requerido"
                        placeholder="Digite o nome do país"
                        value="Brasil"
                        register={register}
                        errors={errors}
                    />
                </div>

                <button
                    disabled={btnLoader}
                    type="submit"
                    className="w-full text-white bg-customPink px-4 py-2 rounded-md mt-4"
                >
                    {btnLoader ? (
                        <>
                            <Spinners /> Carregando...
                        </>
                    ) : (
                        <>Salvar</>
                    )}
                </button>
            </form>
        </div>
    )
}

export default AddAddressForm