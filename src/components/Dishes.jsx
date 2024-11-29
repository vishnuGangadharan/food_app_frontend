import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Dishes = () => {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const navigate = useNavigate()
    const getAllCategory = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setCategories(response.data.categories);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCategories = categories.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(categories.length / itemsPerPage);

    return (
        <div className='lg:mb-16'> 
            <div>
                <h2 className="text-5xl text-center mt-20 mb-10">categories</h2>
                <p className="text-xl text-center mt-2 mb-5 text-gray-600">Explore our delicious categories and find your next favorite dish!</p>
                </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-5 mx-20 cursor-pointer">
                {currentCategories && currentCategories.length > 0 ? (
                    currentCategories.map((item, index) => (
                        <Box
                            key={index}
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            className="shadow-md p-4 hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                            onClick={() => navigate(`/dishes/${item.strCategory}`)}
                        >
                            <img
                                src={item.strCategoryThumb}
                                alt={item.name}
                                className="w-full h-auto"
                            />
                            <p className="mt-2 text-lg text-center font-semibold">
                                {item.strCategory}
                            </p>
                        </Box>
                    ))
                ) : (
                    <p>No posts found</p>
                )}
            </div>

            <div className="flex justify-center mt-10">
                <Button
                    isDisabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="mx-2"
                >
                    Previous
                </Button>
                {[...Array(totalPages)].map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`mx-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button
                    isDisabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="mx-2"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Dishes;
