interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterPill: React.FC<FilterPillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterPill;
