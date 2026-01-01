import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
    // Dynamic import of images
    // Note: In Vite, import.meta.glob returns an object where keys are paths and values are import functions
    const event1Images = import.meta.glob('../assets/gallery/event1/*.{png,jpg,jpeg,svg,webp}', { eager: true });
    const event2Images = import.meta.glob('../assets/gallery/event2/*.{png,jpg,jpeg,svg,webp}', { eager: true });

    // Helper to convert glob result to array of URLs
    const getImages = (globResult) => {
        return Object.values(globResult).map((module) => module.default);
    };

    const galleryData = [
        {
            title: "Traditional Weddings",
            description: "Celebrating love with authentic tastes and grand setups.",
            images: getImages(event1Images)
        },
        {
            title: "Corporate & Special Events",
            description: "Professional catering for your prestigious occasions.",
            images: getImages(event2Images)
        }
    ];

    return (
        <div className="gallery-page">
            <div className="container">
                <div className="gallery-hero fade-in">
                    <h1>Our Gallery</h1>
                    <p>A glimpse into our world of culinary excellence and memorable events.</p>
                </div>

                {galleryData.map((section, index) => (
                    <div key={index} className="gallery-section fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                        <h2>{section.title}</h2>
                        <div className="gallery-grid">
                            {section.images.length > 0 ? (
                                section.images.map((imgSrc, imgIndex) => (
                                    <div key={imgIndex} className="gallery-item">
                                        <img src={imgSrc} alt={`${section.title} ${imgIndex + 1}`} loading="lazy" />
                                    </div>
                                ))
                            ) : (
                                <p className="text-center">No images found for this category.</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
