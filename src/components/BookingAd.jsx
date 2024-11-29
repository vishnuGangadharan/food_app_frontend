import React from 'react';

const BookingAd = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-between lg:mx-20 mx-5">
      {/* Left Side: Text Content */}
      <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-4">
        <h3 className="text-2xl lg:text-3xl font-semibold">
          How to add online ordering to your website in just a few minutes?
        </h3>
        <p className="text-gray-600">
          With our free online food ordering system, your clients can now order food online, straight from your website.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src="/images/booking.png"
          className="w-full max-w-[600px] object-contain"
          alt="Booking Illustration"
        />
      </div>
    </div>
  );
};

export default BookingAd;
