import React, {useState, useEffect} from 'react';

import { IconPlus, IconX } from '@tabler/icons-react';


function PatientUpdateModal(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState("");

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
        <div>
            <button
                className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={toggleModal}
            >
                Add Patient
            </button>

            {isModalOpen && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
            // className="fixed inset-0 z-1000 flex items-center justify-center bg-gray-800 bg-opacity-75"
            // 
            >
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
                    
                    <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="p-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900">
                        First Name
                        </label>
                        <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Type patient name"
                        required
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="mname" className="block mb-2 text-sm font-medium text-gray-900">
                        Middle Name
                        </label>
                        <input
                        type="text"
                        name="mname"
                        id="mname"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Type patient middle name"
                        required
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900">
                        Last Name
                        </label>
                        <input
                        type="text"
                        name="lname"
                        id="lname"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Type patient last name"
                        required
                        />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">
                        Date of Birth
                        </label>
                        <input
                        type="date"
                        name="dob"
                        id="dob"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Date of Birth"
                        required
                        />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">
                        Gender
                        </label>
                        <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border text-sm rounded-lg block w-full p-2.5"
                        >
                        <option value="">Male</option>
                        <option value="TV">Female</option>
                        </select>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="preffered_language" className="block mb-2 text-sm font-medium text-gray-900">
                        Prefered Language
                        </label>
                        <input
                        type="text"
                        name="preffered_language"
                        id="preffered_language"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Prefferred Language"
                        required
                        />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="occupation" className="block mb-2 text-sm font-medium text-gray-900">
                        Occupation
                        </label>
                        <input
                        type="text"
                        name="occupation"
                        id="occupation"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Occupation"
                        required
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
                        Address
                        </label>
                        <input
                        type="text"
                        name="address"
                        id="address"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Address"
                        required
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="phonenumber" className="block mb-2 text-sm font-medium text-gray-900">
                        Phonenumber
                        </label>
                        <input
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Phone number"
                        required
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Email
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="patient@example.com"
                        required
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="emergency_contact" className="block mb-2 text-sm font-medium text-gray-900">
                        Emergency Contact
                        </label>
                        <input
                        type="text"
                        name="emergency_contact"
                        id="emergency_contact"
                        className="border text-sm rounded-lg block w-full p-2.5"
                        placeholder="Phone or email of emergency contact"
                        required
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="previous_medical_condition" className="block mb-2 text-sm font-medium text-gray-900">
                        Previous Medical Condition
                        </label>
                        <textarea
                        id="previous_medical_condition"
                        rows={4}
                        className="block w-full text-sm border rounded-lg p-2.5"
                        placeholder="Write previous medical condition"
                        ></textarea>
                    </div>
                    
                    <div className="col-span-2">
                        <label htmlFor="sergical_history" className="block mb-2 text-sm font-medium text-gray-900">
                        Sergical History
                        </label>
                        <textarea
                        id="sergical_history"
                        rows={4}
                        className="block w-full text-sm border rounded-lg p-2.5"
                        placeholder="Write Previous Sergical history"
                        ></textarea>
                    </div>
                    </div>
                    <div className="flex">
                    <button
                        type="submit"
                        className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
                    >
                        <IconPlus/> Add Patient
                    </button>

                    <button
                        type="cancel"
                        className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
                        onClick={toggleModal}
                        >
                        <IconX/> Cancel
                    </button>
                    </div>
                    
                </form>
                </div>
            </div>
            </div>
        )}
        </div>
        </>
    );
}