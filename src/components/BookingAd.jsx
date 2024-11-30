import React from "react";
import { motion } from "framer-motion"; 

const BookingAd = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:mx-20 mx-5">
      <motion.div
        initial={{ opacity: 0, x: -200 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-4"
      >
        <h3 className="text-2xl lg:text-3xl font-semibold">
          How to add online ordering to your website in just a few minutes?
        </h3>
        <p className="text-gray-600">
          With our free online food ordering system, your clients can now order
          food online, straight from your website.
        </p>
      </motion.div>

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
