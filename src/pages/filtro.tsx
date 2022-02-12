import Screen from 'components/Screen';
import TopBar from 'components/TopBar';
import styled from 'styled-components';
import router from 'next/router';
import FilterSection from 'components/FilterSection';
import SubmitButton from 'components/SubmitButton';

const Container = styled.div`
  flex: 1;
  overflow-y: scroll;
`;
const Footer = styled.div`
  padding: 0px 24px 32px;
`;
const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
export default function Filtro() {
  const titulosOptions = ['Resgate', 'Depósito', 'Movimentação interna'];
  const statusOptions = ['created', 'processing', 'processed'];

  return (
    <Screen>
      <Body>
        <TopBar title="Filtros" />
        <Container>
          <FilterSection
            title={'Título'}
            type={'titulos'}
            options={titulosOptions}
          />
          <FilterSection
            title={'Status'}
            type={'status'}
            options={statusOptions}
          />
        </Container>
        <Footer>
          <SubmitButton onClick={() => router.push('/')}>Filtrar</SubmitButton>
        </Footer>
      </Body>
    </Screen>
  );
}
