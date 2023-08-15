import React, { useState } from 'react';

const ImagePlaceholder = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="image-placeholder">
      {!loaded && <div className="loading-placeholder">Loading...</div>}
      <img
        src={src}
        alt={alt}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImagePlaceholder;
