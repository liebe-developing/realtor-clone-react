import React, { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  function onChange() {}

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex gap-6">
          <button
            className={`create_listing_button ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
          >
            Sell
          </button>

          <button
            className={`create_listing_button ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
          >
            Rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full mb-6 create_listing_input"
        />
        <div className="flex items-center space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="create_listing_input"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min={1}
              max={50}
              required
              className="create_listing_input"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex gap-6">
          <button
            className={`create_listing_button ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
          >
            Yes
          </button>

          <button
            className={`create_listing_button ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
          >
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex gap-6">
          <button
            className={`create_listing_button ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="furnished"
            value={true}
            onClick={onChange}
          >
            Yes
          </button>

          <button
            className={`create_listing_button ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
          >
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full create_listing_input"
        />

        <p className="text-lg mt-6 font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full mb-6 create_listing_input"
        />

        <p className="text-lg font-semibold">Offer</p>
        <div className="flex gap-6 mb-6">
          <button
            className={`create_listing_button ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
          >
            Yes
          </button>

          <button
            className={`create_listing_button ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
          >
            No
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div>
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min={50}
                max={400000000}
                required
                className="create_listing_input text-center"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="flex items-center mb-6">
            <div>
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min={50}
                  max={400000000}
                  required={offer}
                  className="create_listing_input text-center"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6).
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 outline-none"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-sm hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
};

export default CreateListing;
