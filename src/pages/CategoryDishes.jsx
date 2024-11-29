import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

const CategoryDishes = () => {
    const { category } = useParams();
    const [dishes, setDishes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Fetch 12 items per page

    console.log('Current Category:', category);

    const getDishesByCategory = async (page = 1) => {
        try {
            // Fetch all dishes in the category
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            );

            // Paginate results manually
            const allDishes = response.data.meals || [];
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedDishes = allDishes.slice(startIndex, endIndex);

            console.log('Paginated Dishes:', paginatedDishes);

            setDishes(paginatedDishes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getDishesByCategory(currentPage);
    }, [currentPage, category]);

    // Calculate the total number of pages
    const totalPages = Math.ceil(50 / itemsPerPage); // Assuming a maximum of 50 items for now

    return (
        <div>
            <NavBar />
            <div>
                <h2 className="text-5xl text-center mt-20 mb-10">{category} Dishes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-20">
                    {dishes.length > 0 ? (
                        dishes.map((dish, index) => (
                            <div key={index} className="border p-4 rounded shadow-md">
                                <img
                                    src={dish.strMealThumb}
                                    alt={dish.strMeal}
                                    className="w-full h-auto"
                                />
                                <p className="mt-2 text-lg text-center font-semibold">
                                    {dish.strMeal}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-lg">No dishes found</p>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <span className="px-4 py-2 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className='mt-10 flex justify-center '>
                <div>
                <img src="/images/noodiles.avif" className='w-[400px] ' alt="" />

                </div>
                <div>
                    <h1>Order your Food Now</h1>
                </div>
            </div>

            <Footer/>
        </div>


    );
};

export default CategoryDishes;
