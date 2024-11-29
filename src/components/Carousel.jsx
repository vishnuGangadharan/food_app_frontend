import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Explicitly import required Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { getReview } from '../api/user';

const ReviewCarousel = () => {
  const reviews = [
    {
      image: 'https://via.placeholder.com/100',
      name: 'John Doe',
      review: 'This platform is fantastic!',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Jane Smith',
      review: 'Amazing service, highly recommend it!',
    },
    {
      image: 'https://via.placeholder.com/100',
      name: 'Emily Johnson',
      review: 'Great experience overall!',
    },
  ];
  const [fetchReview, setFetchReview] = useState([])

  const getData =async ()=>{
    try {
      const response = await getReview()
      console.log(response.data.review);
      
      setFetchReview(response.data.review)
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="max-w-3xl mx-auto p-5">
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 5000 }}
    >
      {fetchReview.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src={review.userId.profilePicture}
              alt={review.userId.userName}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold">{review.userId.userName}</h3>
            <p className="text-sm text-gray-600 mt-2 mb-5">{review.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default ReviewCarousel;
