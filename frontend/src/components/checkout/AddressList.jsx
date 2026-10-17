import {useDispatch, useSelector} from "react-redux";
import {FaBuilding, FaCheckCircle, FaEdit, FaStreetView, FaTrash} from "react-icons/fa";
import {MdLocationCity, MdPinDrop, MdPublic} from "react-icons/md";
import {selectUserCheckoutAddress} from "../../store/actions/index.js";

const AddressList = ({ addresses, setSelectedAddress, setOpenAddressModal, setOpenDeleteModal }) => {
    const dispatch = useDispatch();
    const selectedUserCheckoutAddress = useSelector((state) => state.auth);

    const onEditButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
        setOpenAddressModal(true);
    }

    const onDeleteButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
        setOpenDeleteModal(true)
    }

    const handleAddressSelection = (addresses) => {
        dispatch(selectUserCheckoutAddress(addresses))
    }

    return (
        <div className="space-y-4">
            {addresses.map((address) => (
                <div
                    onClick={() => handleAddressSelection(address)}
                    key={address.addressId}
                    className={`p-4 border rounded-md cursor-pointer relative ${
                        selectUserCheckoutAddress?.addressId === address.addressId
                        ? "bg-green-100" : "bg-white"
                    }`}
                >
                    <div className="flex items-start">
                        <div className="space-y-1">
                            <div className="flex items-center">
                                <FaBuilding size={14} className="mr-2 text-gray-400" />
                                <p className="font-semibold">
                                    {address.buildingName}
                                </p>
                                {selectedUserCheckoutAddress?.addressId === address.addressId && (
                                    <FaCheckCircle className="ml-2 text-green-500" />
                                )}
                            </div>

                            <div className="flex items-center">
                                <FaStreetView size={17} className="mr-2 text-gray-400" />
                                <p>{address.street}</p>
                            </div>

                            <div className="flex items-center">
                                <MdLocationCity size={17} className="mr-2 text-gray-400" />
                                <p>{address.city}</p>
                            </div>

                            <div className="flex items-center">
                                <MdPinDrop size={17} className="mr-2 text-gray-400" />
                                <p>{address.postalCode}</p>
                            </div>

                            <div className="flex items-center">
                                <MdPublic size={17} className="mr-2 text-gray-400" />
                                <p>{address.country}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 absolute top-4 right-2r">
                        <button onClick={() => onEditButtonHandler(address)}>
                            <FaEdit size={25} className="text-teal-700"/>
                        </button>
                        <button onClick={() => onDeleteButtonHandler(address)}>
                            <FaTrash size={25} className="text-rose-600"/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AddressList