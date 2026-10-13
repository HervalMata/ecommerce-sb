import {FaPhone, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <div
                style={{backgroundImage: "url('')"}}
                className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center">
                <h1 className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">Contate-nos</h1>
                <p className="text-gray-600 text-center mb-4">
                    Nós amamos ouvir você! Por favor preencha o formulário abaixo ou nos contate diretamente
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none
                                         focus:ring-2 ring-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none
                                         focus:ring-2 ring-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Mensagem
                        </label>
                        <textarea
                            rows="4"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none
                                         focus:ring-2 ring-pink-500"
                        />
                    </div>

                    <button className="w-full bg-pink-500 text-white rounded-lg py-2 hover:bg-pink-600 transition
                                       duration-300"
                    >
                        Enviar mensagem
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <h2 className="font-semibold text-lg">
                        Informações de Contato
                    </h2>
                    <div className="flex flex-col items-center space-y-2 mt-4">
                        <div className="flex items-center">
                            <FaPhone className="text-pink-500 mr-2" />
                            <span className="text-gray-600">+55 (21) 99999-9999</span>
                        </div>

                        <div className="flex items-center">
                            <FaEnvelope className="text-pink-500 mr-2" />
                            <span className="text-gray-600">crislacos@gmail.com</span>
                        </div>

                        <div className="flex items-center">
                            <FaMapMarkedAlt className="text-pink-500 mr-2" />
                            <span className="text-gray-600">Centro 200, São Paulo-SP-Brasil</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact