import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import "./App.css";

// Sample Listings Data
const listings = [
  { id: 1, title: "Cozy Apartment in NYC", price: "$120/night", image: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f" },
  { id: 2, title: "Beachfront Villa in LA", price: "$250/night", image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6" },
  { id: 3, title: "Mountain Cabin in Denver", price: "$180/night", image: "https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1" },
  { id: 4, title: "Luxury Condo in Miami", price: "$300/night", image: "https://images.unsplash.com/photo-1591825381767-c7137b8eda0f" },
  { id: 5, title: "Charming House in Austin", price: "$150/night", image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03" },
  { id: 6, title: "Cozy Loft in San Francisco", price: "$220/night", image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828" },
  { id: 7, title: "Modern Apartment in Chicago", price: "$170/night", image: "https://images.unsplash.com/photo-1559599238-308793637427" },
  { id: 8, title: "Seaside Bungalow in Hawaii", price: "$350/night", image: "https://images.unsplash.com/photo-1632152683081-28923830268d" },
  { id: 9, title: "Urban Penthouse in Tokyo", price: "$400/night", image: "https://images.unsplash.com/photo-1587500892601-9d1ebfaa05be" },
];

// HomePage Component
function HomePage() {
  const navigate = useNavigate();

  const handleBooking = (id) => {
    navigate(`/bookings/${id}`); 
  };

  return (
    <div className="container">
      <h1>Airbnb-Clone</h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <h2>{listing.title}</h2>
            <p>{listing.price}</p>
            <button className="book-button" onClick={() => handleBooking(listing.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// BookingPage Component
function BookingPage() {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === parseInt(id));

  const [selectedDate, setSelectedDate] = useState("");

  if (!listing) {
    return <h2>Listing Not Found</h2>;
  }

  const handleBooking = () => {
    alert(`Booking confirmed for ${listing.title} on ${selectedDate}`);
  };

  const handleCancel = () => {
    alert(`Booking cancelled for ${listing.title}`);
  };

  return (
    <div className="container">
      <h1>Book Your Stay</h1>
      <div className="booking-card">
        <img src={listing.image} alt={listing.title} />
        <h2>{listing.title}</h2>
        <p>{listing.price}</p>
        <label>Select Date: </label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        <br />
        <button className="book-button" onClick={handleBooking}>Book Now</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel Booking</button>
        <br />
        <Link to="/" className="back-link">Go Back</Link>
      </div>
    </div>
  );
}

// App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}
