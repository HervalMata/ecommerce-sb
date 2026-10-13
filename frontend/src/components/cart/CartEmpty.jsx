import {MdArrowBack, MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";

const CartEmpty = () => {
    return (
        <div className="min-h-[800px] flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
                <MdShoppingCart size={80} className="mb-4 text-slate-500" />
                <div className="text-3xl font-bold text-slate-700">
                    Seu carrinho está vazio.
                </div>
                <div className="text-lg text-slate-500 mt-2">
                    Adicione alguns produtos para começar
                </div>
            </div>
            <div className="mt-6">
                <Link className="flex gap-2 items-center text-pink-500 hover:text-ponk-600 transition"
                    to="/cart">
                    <MdArrowBack />
                    <span className="font-medium">Voltar para a loja</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty;