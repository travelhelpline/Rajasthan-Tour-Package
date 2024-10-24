"use client";
import { FaGripfire } from 'react-icons/fa';
import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import SlickSlider from './SlickSlider';
import { reviewers } from '@/data/data';
import Link from 'next/link';
const tripAdvisorLogo = '/Images/Logos/tripadvisor-logo.webp';
const googleStars = '/Images/Logos/google-logo.webp';

const Reviews = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container reviews px-0 py-4">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <h2 className="w-auto text-capitalize home-head">
              <span className="fw-normal">customer </span>happiness
              <FaGripfire className="icon" />
            </h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            <SlickSlider settings={{ slidesToShow: 2 }}>
              {reviewers.map((reviewer, index) => {
                return <ReviewCard key={index} reviewer={reviewer} />;
              })}
            </SlickSlider>
          </div>
        </div>
      </div>
    </>
  );
};

// Individual review card with its own "Read More" state
const ReviewCard = ({ reviewer }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 px-2 d-flex review-card">
      <div className="review-card-insider">
        <div className="d-flex">
          {reviewer.Images.map((imgSrc, imgIndex) => (
            <div className="image-container px-1" key={imgIndex}>
              <img
                src={imgSrc}
                alt="Customer Review"
                className="review-image"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="w-100 review-logo-container mx-2 d-flex justify-content-center align-items-center mb-2">
            <a
              href="https://www.tripadvisor.in/Attraction_Review-g304555-d24123312-Reviews-Rajasthan_Travel_Helpline-Jaipur_Jaipur_District_Rajasthan.html"
              className="image-link"
              target="_blank"
            >
              <img src={tripAdvisorLogo} alt="Trip Advisor Logo" />
            </a>
            <a href="" className="image-link" target="_blank">
              <img src={googleStars} alt="Google Review Image" />
            </a>
          </div>
          <h3 className="text-capitalize review-title mx-2 text-center">
            {reviewer.title}
          </h3>
          <p
            style={{ textAlign: 'justify' }}
            className="review-description mx-2"
          >
            {isReadMore
              ? reviewer.review
              : `${reviewer.review.substring(0, 100)}...`}
            <button className="read-more-btn" onClick={toggleReadMore}>
              {isReadMore ? '-Less' : 'More'}
            </button>
          </p>
          <p className="text-uppercase fw-bold reviewer px-2 mx-2 text-center">
            {reviewer.name}
          </p>
          <Link
            href="/"
            className="explore-btn w-auto d-flex justify-content-center align-items-center gap-2"
          >
            view on <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
