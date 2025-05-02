import React, { useState } from 'react';

const Report = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    issue: '',
    description: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = pos.coords;
          setFormData((prev) => ({
            ...prev,
            location: `Lat: ${coords.latitude}, Lng: ${coords.longitude}`,
          }));
        },
        () => alert('Unable to retrieve your location.')
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send this data to backend
    console.log(formData);
    alert('Report submitted with image and location!');
    setFormData({
      name: '',
      location: '',
      issue: '',
      description: '',
      image: null,
    });
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded shadow"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          📢 Report a Waste Issue
        </h2>

        {/* Name */}
        <label className="block mb-4">
          <span className="text-gray-700">Your Name</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded shadow-sm"
          />
        </label>

        {/* Location + Auto button */}
        <label className="block mb-4">
          <span className="text-gray-700">Location</span>
          <div className="flex gap-2">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded shadow-sm"
              placeholder="Enter manually or use button"
              required
            />
            <button
              type="button"
              onClick={getCurrentLocation}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              📍
            </button>
          </div>
        </label>

        {/* Issue Type */}
        <label className="block mb-4">
          <span className="text-gray-700">Issue Type</span>
          <select
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded shadow-sm"
          >
            <option value="">Select an issue</option>
            <option value="Overflowing Bin">Overflowing Bin</option>
            <option value="Illegal Dumping">Illegal Dumping</option>
            <option value="Uncollected Garbage">Uncollected Garbage</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {/* Description */}
        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded shadow-sm"
          ></textarea>
        </label>

        {/* Image Upload */}
        <label className="block mb-6">
          <span className="text-gray-700">Upload Image (optional)</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-48 rounded shadow border"
            />
          )}
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default Report;
