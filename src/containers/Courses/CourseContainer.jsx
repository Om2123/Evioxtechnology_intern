import React, { useEffect, useState } from 'react';
import { storage } from '../../appwrite/appwrite';

const CourseContainer = ({ courseName, courseAuthor, videoUrl, file_id }) => {
  const [file, setVideoFile] = useState("");

  useEffect(() => {
    const cmp4 = storage.getFileView('651fc5698e0af2551097', file_id);
    if (cmp4) {
      setVideoFile(cmp4)
    }

  }, [])
  return (
    <div className="bg-blue-500 p-4 m-3  rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold">{courseName}</h2>
      <p className="text-gray-600">{courseAuthor}</p>
      <video
        className="mt-4 w-fit "
        controls
      >
        
        <source src={file} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CourseContainer;
