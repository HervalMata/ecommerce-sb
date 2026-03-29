import {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";
import ProductViewModal from "./ProductViewModal.jsx";

const ProductCard = (
    {
        productId,
        productName,
        image,
        description,
        quantity,
        price,
        discount,
        specialPrice
    }
) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const btnLoader = false;
    const isAvailable = quantity && Number(quantity) > 0;

    const handleViewProduct = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
    }

    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div
                onClick={() => {handleViewProduct({
                    id: productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice
                })}}
                className="w-full overflow-hidden aspect-[3/2]"
            >
                <img
                    src={image}
                    alt={productName}
                    className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                />
            </div>
            <div>
                <h2
                    onClick={() => {handleViewProduct({
                        id: productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice
                    })}}
                    className="text-lg font-semibold mb-2 cursor-pointer"
                >
                    {productName}
                </h2>
                <div className="min-h-20 max-h-20">
                    <p className="test-gray-600 text-sm">
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    {specialPrice ? (
                        <div className="flex flex-col">
                            <span className="text-gray-400 line-through">
                                R$ {Number(price).toLocaleString("pt-BR")}
                            </span>
                            <span className="text-xl font-bold text-slate-700">
                                R$ {Number(specialPrice).toLocaleString("pt-BR")}
                            </span>
                        </div>
                    ) : (
                        <span className="text-xl font-bold text-slate-700">
                            {" "}
                            R$ {Number(price).toLocaleString("pt-BR")}
                        </span>
                    )}

                    <button
                        disabled={isAvailable || btnLoader}
                        onClick={() => {}}
                        className={`bg-[#BE9ECC] ${isAvailable ? "opacity-100 hover:bg-pink-500" : "opacity-70"}
                            text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-60 flex justify-center
                        `}
                    >
                        <FaShoppingCart className="mr-2" />
                        {isAvailable ? "Adicionar para o carrinho" : "Fora de Estoque"}
                    </button>
                </div>
            </div>
            <ProductViewModal
                open={openProductViewModal}
                setOpen={setOpenProductViewModal}
                product={selectedViewProduct}
                isAvailable={isAvailable}
            />
        </div>
    )
}

export default ProductCard;
