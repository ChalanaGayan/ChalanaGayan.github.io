import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen py-20">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
