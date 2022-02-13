import SearchBar from 'components/SearchBar';
import { Container } from './styles';
import FilterChip from 'components/FilterChip';

interface HeaderHomeProps {
  onChangeHandler: (value: string) => any;
}

function HeaderHome({ onChangeHandler }: HeaderHomeProps) {
  return (
    <Container>
      {/* <img src="/logo-home.svg" style={{ paddingBottom: '20px' }} /> */}
      <img src="/logo-warren.png" style={{ width: '160px' }} />
      <SearchBar onChange={onChangeHandler} />
      <FilterChip />
    </Container>
  );
}

export default HeaderHome;
