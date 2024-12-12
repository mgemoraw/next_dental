import React, { useState, useEffect } from 'react';

export const CreatePatientModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState('');

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
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  Create New Patient
                </h3>
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
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2 ">
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
                      placeholder="Type patient name"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="border text-sm rounded-lg block w-full p-2.5"
                      placeholder="$2999"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                      Category
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border text-sm rounded-lg block w-full p-2.5"
                    >
                      <option value="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block w-full text-sm border rounded-lg p-2.5"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
                >
                  Add new Patient
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};