
import { Input } from '@mantine/core';
import { IconManFilled, IconPlus, IconX } from '@tabler/icons-react';
import React, {useState, useEffect} from 'react';


export const ServiceForm = () => {
    function handleSubmit(){
        // 
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <div className="col-span-2">
                <label htmlFor="sname" className="block mb-2 text-sm font-medium text-gray-900">
                Service Name
                </label>
                <input
                type="text"
                name="sname"
                id="sname"
                className="border text-sm rounded-lg block w-full p-2.5"
                placeholder="Service Name"
                required
                />
                </div>

                <div className="col-span-2">
                <label htmlFor="stype" className="block mb-2 text-sm font-medium text-gray-900">
                Service Type
                </label>
                <input
                type="text"
                name="stype"
                id="stype"
                className="border text-sm rounded-lg block w-full p-2.5"
                placeholder="Service Type"
                required
                />
                </div>
                <div className="col-span-2">
                    <label htmlFor="scode" className="block mb-2 text-sm font-medium text-gray-900">
                    Service Code
                    </label>
                    <input
                    type="text"
                    name="scode"
                    id="scode"
                    className="border text-sm rounded-lg block w-full p-2.5"
                    placeholder="Service code"
                    required
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="sprice" className="block mb-2 text-sm font-medium text-gray-900">
                    Service Price
                    </label>
                    <input
                    type="number"
                    name="sprice"
                    id="sprice"
                    className="border text-sm rounded-lg block w-full p-2.5"
                    placeholder="$0.00"
                    required
                    />
                </div>

            </div>
        </form>
        <div className="flex">
            <button
                type="submit"
                className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
            >
                <IconPlus/> Save Service
            </button>
            <button
                type="submit"
                className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
            >
                <IconX/> Cancel
            </button>
        </div>
        </>
    );
}

export const ServiceTypeForm = () => {

    function handleSubmit(){
        //
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <div>
                <div className="col-span-2">
                <label htmlFor="sname" className="block mb-2 text-sm font-medium text-gray-900">
                Service Name
                </label>
                <input
                type="text"
                name="sname"
                id="sname"
                className="border text-sm rounded-lg block w-full p-2.5"
                placeholder="Service Name"
                required
                />
                </div>

               
                <div className="col-span-2">
                    <label htmlFor="scode" className="block mb-2 text-sm font-medium text-gray-900">
                    Service Code
                    </label>
                    <input
                    type="text"
                    name="scode"
                    id="scode"
                    className="border text-sm rounded-lg block w-full p-2.5"
                    placeholder="Service code"
                    required
                    />
                </div>
                

            </div>
        </form>
        <div className="flex">
            <button
                type="submit"
                className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
            >
                <IconPlus/> Save Service Type
            </button>
            <button
                type="submit"
                className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
            >
                <IconX/> Cancel
            </button>
        </div>
        </>
    );
}

export const ProductForm = () => {
    function handleSubmit(){
        //
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <div className="col-span-2">
                <label htmlFor="pname" className="block mb-2 text-sm font-medium text-gray-900">
                Product Name
                </label>
                <input
                type="text"
                name="pname"
                id="pname"
                className="border text-sm rounded-lg block w-full p-2.5"
                placeholder="Product Name"
                required
                />
                </div>

                <div className="col-span-2">
                    <label htmlFor="ptype" className="block mb-2 text-sm font-medium text-gray-900">
                    Product Type
                    </label>
                    <input
                    type="text"
                    name="ptype"
                    id="ptype"
                    className="border text-sm rounded-lg block w-full p-2.5"
                    placeholder="Product Type"
                    required
                    />
                </div>
               
                <div className="col-span-2">
                    <label htmlFor="pcode" className="block mb-2 text-sm font-medium text-gray-900">
                    Product Code
                    </label>
                    <input
                    type="text"
                    name="pcode"
                    id="pcode"
                    className="border text-sm rounded-lg block w-full p-2.5"
                    placeholder="Product code"
                    required
                    />
                </div>
                
                <div className="col-span-2">
                    <label htmlFor="pprice" className="block mb-2 text-sm font-medium text-gray-900">
                    Product Code
                    </label>
                    <input
                    type="number"
                    name="pprice"
                    id="pprice"
                    className="border text-sm rounded-lg block w-full p-2.5"
                    placeholder="$0.00"
                    required
                    />
                </div>

            </div>
        </form>
        <div className="flex">
            <button
                type="submit"
                className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
            >
                <IconPlus/> Save Product
            </button>
            <button
                type="submit"
                className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
            >
                <IconX/> Cancel
            </button>
        </div>
        </>
    );
}


const AssetsCreateModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState("");
    const [toggleState, setToggleState]  = useState(1);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    



    const toggleTab = (index) => {
        setToggleState(index);
        console.log("Hello Tabs ", index);
    }

    return (
        <div>
            <button
                className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={toggleModal}
            >
                Create Assets
            </button>
            {isModalOpen && (
                // <div className="bloc-tabs flex bg-gray-50 rounded-xl h-16 items-center">
             <div className="block-tabs fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-75">
             <div className="bg-white rounded-lg shadow-lg w-full h-full p-4 overflow-y-auto">
                 <div className="bg-white rounded-lg shadow">
                 <div className="flex items-center justify-between p-4 border-b rounded-t">
                     <h3 className="text-lg font-semibold text-gray-900">
                     Create New Asset
                     </h3>
                     <button
                     className="text-gray-400 hover:bg-gray-200 rounded-lg w-8 h-8 flex justify-center items-center"
                     onClick={toggleModal}
                     >
                     <IconX/>
                     <span className="sr-only">Close modal</span>
                     </button>

                 </div>
                 <div className="bloc-tabs flex bg-gray-50 rounded-xl h-16 items-center">

                    <div className={toggleState === 1 ? "flex text-blue-500 rounded-xl p-4 m-4 ml-0 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 text-gray-800 p-4 m-4 flex"}
                        onClick={()=> toggleTab(1)}
                    >
                        <IconManFilled className="mr-2"/>
                        Service
                    </div>

                    <div className={toggleState === 2 ? "flex text-blue-500 rounded-xl p-4 m-4 ml-0 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 text-gray-800 p-4 m-4 flex"}
                        onClick={()=> toggleTab(2)}
                    >
                        <IconManFilled className="mr-2"/>
                        Service Type
                    </div>

                    <div className={toggleState === 3 ? "flex text-blue-500 rounded-xl p-4 m-4 ml-0 font-bold active bg-gray-200 hover:text-blue-800 " : "hover:text-blue-800 text-gray-800 p-4 m-4 flex"}
                        onClick={()=> toggleTab(3)}
                    >
                        <IconManFilled className="mr-2"/>
                        Product
                    </div>

                 </div>

                    {toggleState === 1 ? <ServiceForm/> : <></>}
                    {toggleState === 2 ? <ServiceTypeForm/> : <></>}
                    {toggleState === 3 ? <ProductForm/> : <></>}
                    
                    
                </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default AssetsCreateModal

