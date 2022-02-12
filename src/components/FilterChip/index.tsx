import { Container } from './styles';
import { formatFilterLabel } from 'utils/stringHelper';
import { useContext } from 'react';
import { FilterContext } from 'contexts/Filters';
import router from 'next/router';

function FilterChip() {
  const { selectedFilters } = useContext(FilterContext);
  return (
    <Container>
      {selectedFilters.titulos.map((titulo: string, index) => {
        return (
          <button key={index} onClick={() => router.push('/filtro')}>
            {formatFilterLabel(titulo, 'titulos')}
          </button>
        );
      })}
      {selectedFilters.status.map((stat: string, index) => {
        return (
          <button key={index} onClick={() => router.push('/filtro')}>
            {formatFilterLabel(stat, 'status')}
          </button>
        );
      })}
    </Container>
  );
}

export default FilterChip;
