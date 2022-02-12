import { forwardRef } from 'react';
import { formatCurrency } from 'utils/stringHelper';

import { Container, Content, Info, Row, FundFooter } from './styles';

interface FundCardProps {
  fund: any;
  isComparison?: boolean;
  isSelected?: boolean;
  index?: number;
  onClickDetails?: () => void;
}

const FundCard = forwardRef<HTMLDivElement, FundCardProps>(
  ({ fund, onClickDetails }, ref) => {
    return (
      <Container ref={ref} onClick={onClickDetails}>
        <Content>
          <Row marginBottom="4px">
            <Info>
              <p>Título</p>
              <span>{fund.title}</span>
            </Info>
            <Info>
              <p>Descrição</p>
              <span>{fund.description}</span>
            </Info>
            <Info>
              <p>Status</p>
              <span>{fund?.status ? fund.status : 'Não informado'}</span>
            </Info>
            <Info alignRight>
              <p>Valor</p>
              <span>{formatCurrency(fund.amount)}</span>
            </Info>
          </Row>
          <FundFooter></FundFooter>
        </Content>
      </Container>
    );
  }
);

export default FundCard;
