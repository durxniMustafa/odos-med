import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddPatients.css"

const AddPatient = () => {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        phone: "",
        email: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would usually send the formData to a server or add it to state
        console.log("New Patient:", formData);

        // Redirect back to the patients page
        navigate("/");
    };

    return (
        <div className="add-patient-page">
            <h1>Add a New Patient</h1>
            <form onSubmit={handleSubmit} className="add-patient-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="submit-button">
                    Add Patient
                </button>
                <button type="button" className="cancel-button" onClick={() => navigate("/")}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default AddPatient;
