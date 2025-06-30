import React from 'react';

const albums = [
  { id: 1, src: '/images/img1.jpg', alt: 'Album 1' },
  { id: 2, src: '/images/img2.jpg', alt: 'Album 2' },
  { id: 3, src: '/images/img3.jpg', alt: 'Album 3' },
  { id: 4, src: '/images/img4.jpg', alt: 'Album 4' },
  { id: 5, src: '/images/img5.jpg', alt: 'Album 5' },
];

export default function Album() {
  return (
    <section className="bg-white px-6 py-12 md:py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {albums.map(({ id, src, alt }) => (
          <div
            key={id}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-48 object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
