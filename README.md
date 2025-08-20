import React from 'react';

const ReadMe: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ color: '#FF8C00' }}>GlamCS Cosmetics Website</h1>
      <h2>Overview</h2>
      <p>
        Welcome to the GlamCS project! This is a high-end cosmetics website designed with elegance in mind.
      </p>
      <h2>Design</h2>
      <p>
        The website features a luxurious design in orange and white colors, complemented by stunning 3D effects.
      </p>
      <h2>Technologies Used</h2>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS3</li>
        <li>3D Graphics Libraries</li>
      </ul>
      <h2>Getting Started</h2>
      <p>
        To get started with the GlamCS project, clone the repository and install the dependencies:
      </p>
      <pre>
        git clone <em>repository-url</em>
        <br />
        cd glamcs
        <br />
        npm install
      </pre>
      <h2>Running the Project</h2>
      <p>
        Use the following command to start the development server:
      </p>
      <pre>
        npm start
      </pre>
      <h2>Contributing</h2>
      <p>
        We welcome contributions! Please fork the repository and submit a pull request.
      </p>
      <h2>License</h2>
      <p>
        This project is licensed under the MIT License.
      </p>
    </div>
  );
};

export default ReadMe;