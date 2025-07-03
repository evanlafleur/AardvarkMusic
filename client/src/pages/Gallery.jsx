import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5002/api/folders')
      .then(res => res.json())
      .then(data => setRepairs(data));
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Before & After Gallery</h2>
      {repairs.map((repair) => (
        <div key={repair.folder} className="mb-8">
          <h3 className="text-xl font-bold mb-2">{repair.folder}</h3>
          <div className="grid grid-cols-2 gap-4">
            {repair.images.map(img => (
              <img
                key={img.url}
                src={img.url}
                alt={img.name}
                className="w-full border rounded shadow"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
