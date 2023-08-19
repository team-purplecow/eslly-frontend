import { FilterSelect } from './Filter.style';

export const Filter = ({ filters }) => {
  return (
    <FilterSelect>
      {filters.map((filter) => (
        <option key={filter.value} value={filter.value}>
          {filter.name}
        </option>
      ))}
    </FilterSelect>
  );
};
