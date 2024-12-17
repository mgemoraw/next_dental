import React, { useState, useEffect } from 'react';
import {IconCancel, IconPlus, IconX} from "@tabler/icons-react";
import classes from "./Modals.module.css";


export const CreatePatientModal = () => {
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

  useEffect(() => {
    console.log("Hello patient form", isModalOpen);
  }, [isModalOpen]);

  return (
    <div>
      <button
        className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={toggleModal}
      >
        Add Patient
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg w-full h-full p-4 overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-900">Create New Patient</h3>
              <button
                className="text-gray-400 hover:bg-gray-200 rounded-lg w-8 h-8 flex justify-center items-center"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                {['First Name', 'Middle Name', 'Last Name', 'Date of Birth', 'Gender', 'Preferred Language', 'Occupation', 'Address', 'Phone Number', 'Email', 'Emergency Contact'].map((label, index) => (
                  <div className="col-span-2 sm:col-span-1" key={index}>
                    <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
                    <input
                      type={label === 'Date of Birth' ? 'date' : label === 'Email' ? 'email' : 'text'}
                      name={label.toLowerCase().replace(/\s+/g, '_')}
                      className="border text-sm rounded-lg block w-full p-2.5"
                      placeholder={`Type ${label.toLowerCase()}`}
                      required
                    />
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Previous Medical Condition</label>
                  <textarea
                    rows={4}
                    className="block w-full text-sm border rounded-lg p-2.5"
                    placeholder="Write previous medical condition"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Surgical History</label>
                  <textarea
                    rows={4}
                    className="block w-full text-sm border rounded-lg p-2.5"
                    placeholder="Write previous surgical history"
                  ></textarea>
                </div>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
                >
                  Add Patient
                </button>
                <button
                  type="button"
                  className="flex text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 m-3"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};