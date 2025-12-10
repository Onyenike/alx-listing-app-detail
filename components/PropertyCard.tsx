import { PropertyProps } from '../interfaces';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-2">{property.address.city}, {property.address.country}</p>
        <p className="text-gray-600 mb-2">${property.price}/night</p>
        <p className="text-gray-600 mb-2">Rating: {property.rating}/5</p>
      </div>
    </div>
  );
};

export default PropertyCard;