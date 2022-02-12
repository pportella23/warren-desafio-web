import { useEffect } from 'react';
import { createContext, useState } from 'react';

interface FilterContextValues {
  selectedFilters: IFilter;
  clearFilter: () => void;
  updateCacheFilter: (
    fieldSelected: 'titulos' | 'status',
    value: string | string
  ) => void;
}

export interface IFilter {
  titulos: string[];
  status: string[];
}
export const FilterEmpty: IFilter = {
  titulos: [],
  status: [],
};
export const FilterContext = createContext({} as FilterContextValues);
export const FilterProvider: React.FC = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState(
    FilterEmpty as IFilter
  );
  const clearFilter = () => setSelectedFilters(FilterEmpty);

  const updateCacheFilter = (
    fieldSelected: 'titulos' | 'status',
    value: string | string
  ) => {
    const cache: IFilter = { ...selectedFilters };
    if (fieldSelected === 'titulos' && typeof value === 'string') {
      if (selectedFilters.titulos.includes(value)) {
        cache.titulos = selectedFilters.titulos.filter(
          (titulo) => titulo !== value
        );
      } else {
        cache.titulos.push(value);
      }
    } else if (fieldSelected === 'status' && typeof value === 'string') {
      if (selectedFilters.status.includes(value)) {
        cache.status = selectedFilters.status.filter((stat) => stat !== value);
      } else {
        cache.status.push(value);
      }
    }
    setSelectedFilters(cache);
  };
  useEffect(() => {
    console.log(
      'Equality ',
      JSON.stringify(selectedFilters) === JSON.stringify(FilterEmpty)
    );
    // console.log("Diferences ",selectedFilters.filter(FilterEmpty));
  }, [selectedFilters]);
  return (
    <FilterContext.Provider
      value={{
        selectedFilters,
        clearFilter,
        updateCacheFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
