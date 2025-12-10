import Image from "next/image";
import { HERO_BG_IMAGE } from '../constants';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import { useState } from 'react';
import FilterPill from '../components/FilterPill';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const filterLabels = ['Top Villa', 'Self Checkin', 'Luxury Villa', 'Mountain View'];
  const [activeFilter, setActiveFilter] = useState('');
  const handleFilterClick = (label: string) => {
    setActiveFilter(label);
  };

  return (
    <>
      <section className="bg-cover bg-center h-screen flex items-center justify-center md:h-4/5 sm:h-3/5" style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }} >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div className="flex flex-wrap gap-2">
            {filterLabels.map((label) => (
              <FilterPill key={label} label={label} isActive={activeFilter === label} onClick={() => handleFilterClick(label)} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROPERTYLISTINGSAMPLE.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
