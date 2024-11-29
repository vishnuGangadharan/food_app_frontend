import React from 'react';
import { useForm } from 'react-hook-form';
import { userReviews } from '../api/user';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Review = () => {

    const userInfo = useSelector((state) => state.authUser.userInfo)
    let userId = userInfo._id 
    const navigate = useNavigate()    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors
      } = useForm();

      
      const onSubmit = async(data) => {
        const reviewData = {
            ...data,     
            userId: userId, 
        };
        try {
            const response = await userReviews(reviewData)
            if(response.status == 200){
                toast.success(response.data.message)
                navigate('/')
            }

        } catch (error) {
            console.log(error);
            
        }
      };

      const validateWords = (value) => {
        const wordCount = value.split(/\s+/).filter(Boolean).length;
        if (wordCount > 10) {
          return "Maximum 15 words are allowed";
        }
        return true; 
      };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full p-6 bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-400">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Write a Review</h2>

        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-4">
            <label htmlFor="review" className="block text-lg font-semibold text-gray-700">Your Review</label>
            <textarea
              id="review"
              placeholder="Write your review here..."
              rows="4"
              {...register("review", {
                required: "Review is required",
                validate: validateWords
              })}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            ></textarea>
            {errors.review && (
              <p className="text-red-500 text-sm mt-1">{errors.review.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300 focus:ring-4 focus:ring-blue-200"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
