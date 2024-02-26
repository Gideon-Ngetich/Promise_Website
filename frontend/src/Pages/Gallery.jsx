import React, { useState } from 'react';

const imageData = [
  { category: 'All Photos', src: 'https://media.gettyimages.com/id/1463518598/photo/wide-shot-overhead-view-of-friends-sharing-dinner-at-rooftop-restaurant.jpg?s=612x612&w=gi&k=20&c=LExqC0Z5vy35J9QkJPYUaf7V5lCi8Moy51xYCkJcWF8=' },
  { category: 'Food', src: 'https://www.shutterstock.com/image-photo/asian-food-background-various-ingredients-600nw-1383065213.jpg' },
  { category: 'Interior', src: 'https://miro.medium.com/v2/resize:fit:679/0*Vs3lJGYI-pk0ASYH' },
  { category: 'Events', src: 'https://www.shutterstock.com/shutterstock/photos/2259805159/display_1500/stock-photo-creative-gender-neutral-baby-shower-or-birthday-decoration-in-the-garden-bohemian-style-outdoor-2259805159.jpg'},
  { category: 'VIP Guests', src: 'https://www.shutterstock.com/image-photo/sukiyaki-premium-luxury-dinner-set-260nw-2165505467.jpg' },    
];

const GalleryBackground = () => {
  return (
    <div>
      <div className="bg-cover bg-center sm:bg-fixed h-screen flex items-center justify-center" style={{backgroundImage: `url('https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg')`}}>
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold">Gallery</h1>
        </div>
      </div>
      <Gallery />
    </div>
  );
}

const Gallery = () => {
  const [currentCategory, setCurrentCategory] = useState('All Photos');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1); 
  }
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredImages = imageData
    .filter(image => currentCategory === 'All Photos' || image.category === currentCategory)
    .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage);

  const totalImages = imageData.filter(image => currentCategory === 'All Photos' || image.category === currentCategory).length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  return (
    <div>
      <div className="footer bg-gray-900 text-white text-center items-center py-2 sm:py-4">
        <div className="flex justify-center px-4 sm:px-0">
          <div className="flex space-x-4">
            {imageData.map((item, index) => (
              <span key={index} 
              className={currentCategory === item.category ? 'text-blue-500' : 'text-white'}
              onClick={() => handleCategoryChange(item.category)}>{item.category === 'All Photos' ? 'All Photos' : item.category}</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-4 xl:gap-4 p-1 sm:p-2 md:p-4 lg:p-4 xl:p-4">
        {filteredImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.category} className="w-full h-full object-cover" />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-2 sm:mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`mx-1 sm:mx-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-gray-300 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default GalleryBackground;
