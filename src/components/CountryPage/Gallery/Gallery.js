import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = ({ countryName, lang }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?&per_page=8&query=${countryName}&orientation=landscape&lang=${lang}&client_id=pYT2N6XUykWHbbxKEa9rR2W4xuwwhmca6GhS9C7BlQA`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.results);
      });
  }, [countryName, lang]);
  return (
    <>
      {photos && (
        <SRLWrapper>
          <div className="container">
            {photos.map((photo) => (
              <div key={photo.id} className="image-card">
                <a href={photo.urls.small}>
                  <img
                    className="image"
                    src={photo.urls.small}
                    alt={photo.alt_description}
                  />
                </a>
                <p>
                  {photo.description === null
                    ? "Somewhere in the country ;)"
                    : photo.description}
                </p>
              </div>
            ))}
          </div>
        </SRLWrapper>
      )}
    </>
  );
};

export default Gallery;
