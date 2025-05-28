import React from 'react';
import type { Filter } from '../types/Todo';

interface FilterButtonsProps {
  currentFilter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, setFilter }) => {
  return (
    <div>
      <button
        disabled={currentFilter === 'all'}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        disabled={currentFilter === 'active'}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        disabled={currentFilter === 'completed'}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
