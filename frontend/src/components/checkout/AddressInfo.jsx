import {FaAddressBook} from "react-icons/fa";
import Skeleton from "../shared/Skeleton.jsx";
import AddressInfoModal from "./AddressInfoModal.jsx";
import AddAddressForm from "./AddAddressForm.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AddressList from "./AddressList.jsx";
import {DeleteModal} from "./DeleteModal.jsx";
import toast from "react-hot-toast";
import {deleteUserAddress} from "../../store/actions/index.js";

const AddressInfo = ({ address }) => {
    const [openAddressModal, setOpenAddressModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [selectAddress, setSelectAddress] = useState("")
    const dispatch = useDispatch();

    const addNewAddressHandler = () => {
        setSelectAddress("")
        setOpenAddressModal(true)
    }

    const deleteAddressHandler = () => {
        dispatch(deleteUserAddress(
            toast,
            selectAddress?.addressId,
            setOpenDeleteModal
        ))
    }

    const noAddressExist = !address || address.length === 0
    const {isLoading, btnLoader} = useSelector(state => state.errors)

    return (
        <div className="pt-4">
            {noAddressExist ? (
                <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-between">
                    <FaAddressBook size={50} className="text-gray-500 mb-4" />
                    <h1 className="mb-2 text-slate-900 text-center font-semibold text-2xl">
                        Nenhum Endereço Adicionado ainda
                    </h1>
                    <p className="mb-6 text-center text-slate-800">
                        Por favor adicione seu endereço para completar sua compra
                    </p>
                    <button
                        onClick={addNewAddressHandler}
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-all"
                    >
                        Adicionar Endereço
                    </button>
                </div>
            ) : (
                <div className="relative p-6 rounded-lg max-w-md mx-auto">
                    <h1 className="text-slate-800 text-center font-bold text-2xl">
                        Selecione um endereço
                    </h1>
                    {isLoading ? (
                        <div className="py-4 px-8">
                            <Skeleton />
                        </div>
                    ) : (
                        <>
                            <div className="space-y-4 pt-6">
                                <AddressList
                                    addresses={address}
                                    setSelectedAddress={setSelectAddress}
                                    setOpenAddressModal={setOpenAddressModal}
                                    setOpenDeleteModal={setOpenDeleteModal}
                                />
                            </div>

                            {address.length > 0 && (
                                <div className="mt-4">
                                    <button
                                        className="py-2 px-4 bg-blue-600 text-white font-medium rounded
                                        hover:bg-blue-700 transition-all"
                                        onClick={addNewAddressHandler}
                                    >
                                        Adicionar mais endereços
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}

            <AddressInfoModal
                open={openAddressModal}
                setOpen={setOpenAddressModal}
            >
                <AddAddressForm
                    address={selectAddress}
                    setOpenAddressModal={setOpenAddressModal}
                />
            </AddressInfoModal>

            <DeleteModal
                open={openDeleteModal}
                loader={btnLoader}
                setOpen={setOpenDeleteModal}
                title="Remover Endereço"
                onDeleteHandler={deleteAddressHandler}
            />
        </div>
    )
}

export default AddressInfo;