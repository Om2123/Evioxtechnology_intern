import React from "react";

const About = React.memo(function ProjectCard() {
  const librariesList = [
    {
      avatar: "R",
      name: "ReactJS",
      link: "https://reactjs.org/",
    },
    {
      avatar: "C",
      name: "Create React App",
      link: "https://github.com/facebook/create-react-app",
    },
    {
      avatar: "t",
      name: "tailwindcss",
      link: "https://-ui.com/",
    },
    // Add the rest of your libraries here
  ];

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400 p-3 ">
    <div className="m-3">
      <div className="max-w-2xl text-black bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="text-2xl font-semibold">About MathUniverse</div>
          <div className="mt-4">
            <p>
              This is an E-learning Web App was bootstrapped with Create React
              App and other libraries. The UI was built based on tailwind css
              also with its associated libraries ecosystem.
            </p>
            <p className="mt-2">
              This Website is using sample data like image and description of
              courses from Udemy. It is for non-commercial learning purposes
              only.
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">
              For my particular thanks to the authors of the following
              libraries:
            </p>
            <div className="flex flex-wrap mt-2">
              {librariesList.map((library, index) => (
                <div
                  key={index}
                  className="m-1 p-2 bg-gray-200 rounded-md cursor-pointer"
                  onClick={handleClick}
                >
                  <span className="text-gray-600">{library.name}</span>
                  <span
                    className="ml-2 text-red-600 cursor-pointer"
                    onClick={handleDelete}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
});

export default About;
