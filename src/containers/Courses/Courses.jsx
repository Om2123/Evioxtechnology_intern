import React, { useEffect, useState } from 'react'
import { createCourse, databases } from '../../appwrite/appwrite';
import CourseContainer from './CourseContainer';

export default function Courses() {
    const [courseName, setCourseName] = useState('');
    const [courseAuthor, setCourseAuthor] = useState('');
    const [listOfCourses, setListOfCourses] = useState();
    const [videoFile, setVideoFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCourseNameChange = (e) => { setCourseName(e.target.value) };
    const handleCourseAuthorChange = (e) => { setCourseAuthor(e.target.value); };
    const handleVideoFileChange = (e) => { setVideoFile(e.target.files[0]) };
    const handleUploadClick = () => {
        createCourse(courseName, courseAuthor, videoFile);
    }

    useEffect(() => {
        const promise = databases.listDocuments('651fc48acc7ea07dc181', '651fc4985545f0842e54');
        promise.then(function (response) {
            setListOfCourses(response.documents)
        })
    }, [])



    return (
        <div>
            {/* show courses */}
            <div className='p-3 border-1'>
                {
                    listOfCourses?.map((course) => {
                        return <CourseContainer courseName={course.courseName} file_id={course.$id} courseAuthor={course.courseAuthor} videoUrl={course} courseId={course.$id} />
                    })
                }
            </div>

            {/* add course */}
            <button
                className="bg-green-500 text-white text-3xl py-3 px-5 rounded-full relative mt-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={openModal}
            >
                Upload a New Course
            </button>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl text-slate-500 font-semibold mb-4">E-learning Platform</h3>
                        {/* Add your upload form here */}
                        <div className="container mx-auto  p-4">
                            <h1 className="text-2xl text-black font-semibold mb-4">Upload a New Course</h1>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Course Name"
                                    value={courseName}
                                    onChange={handleCourseNameChange}
                                    className="w-full text-black border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Course Author"
                                    value={courseAuthor}
                                    onChange={handleCourseAuthorChange}
                                    className="w-full text-black border rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="file"
                                    accept=".mp4"
                                    onChange={handleVideoFileChange}
                                    className="w-full  border rounded p-2"
                                />
                            </div>
                            <button
                                onClick={handleUploadClick}
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                Upload Course
                            </button>
                        </div>

                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded-full"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
