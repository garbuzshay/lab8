import React, { useState } from 'react';
import '../imageDisplay.css'; // Assuming you'll create this CSS file based on the styles you provided

const ImageDisplay = () => {
  const imagesPerPage = 10;

  // Initialize images array
  const images = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/id/${i + 1}/350/350`,
    thumbnailUrl: `https://picsum.photos/id/${i + 1}/80/80`,
  }));

  // State for selected image and current page
  const [selectedImage, setSelectedImage] = useState(images[0].url);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end index for images based on the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Function to change selected image
  const selectImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="image-container">
      <div className="thumbnails">
        {images.slice(startIndex, endIndex).map((image) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt="Thumbnail"
            onClick={() => selectImage(image.url)}
            className="thumbnail"
          />
        ))}
      </div>
      <div className="main-image">
        <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className="pagination">
        <span className="current-page-label">Current Page: </span>
        {Array.from({ length: Math.ceil(images.length / imagesPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            style={{
              fontSize: currentPage === i + 1 ? '1.2em' : '1em',
              fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
              margin: '0 5px', // Add space between digits
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
