import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../styles/Patients.css";

const Patients = () => {
    // Initial patients data
    const [patients, setPatients] = useState([
        {
            id: 1,
            name: "Yamini Gowda",
            dob: "Dec 18, 2020",
            phone: "+91 9798399999",
            email: "yamini_gowda@home.com",
            address: "Kisan Wadie Est, Nr Dahanukar Wadi Bunder Pakhadi Rd, Kandivali, Alwar",
        },
    ]);

    const navigate = useNavigate(); // Hook for navigation

    // Remove a patient
    const handleRemovePatient = (id) => {
        setPatients(patients.filter((patient) => patient.id !== id));
    };

    return (
        <div className="patients-page">
            {/* Header */}
            <header className="patients-header">
                <div className="logo">
                    <img src="/logo.png" alt="ODOS Logo" />
                </div>
                <nav>
                    <a href="#">Patients</a>
                    <a href="#">Results</a>
                    <a href="#">Current Processes</a>
                    <a href="#">Issue</a>
                </nav>
            </header>

            {/* Add Patient Button */}
            <div className="actions">
                <button onClick={() => navigate("/AddPatients")} className="add-patient-button">
                    Add Patient
                </button>
            </div>

            {/* Patients Grid */}
            <div className="patients-grid">
                {patients.map((patient) => (
                    <div key={patient.id} className="patient-card">
                        <img
                            src="https://via.placeholder.com/100"
                            alt={`${patient.name}`}
                            className="patient-image"
                        />
                        <div className="patient-info">
                            <p>
                                <strong>Name</strong>: {patient.name}
                            </p>
                            <p>
                                <strong>Date of Birth</strong>: {patient.dob}
                            </p>
                            <p>
                                <strong>Phone</strong>: {patient.phone}
                            </p>
                            <p>
                                <strong>Email</strong>: {patient.email}
                            </p>
                            <p>
                                <strong>Address</strong>: {patient.address}
                            </p>
                        </div>
                        <button
                            className="remove-button"
                            onClick={() => handleRemovePatient(patient.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Patients;
