import { MdClose } from 'react-icons/md';
import { formatCurrency } from 'utils/stringHelper';
import StepBar from 'components/StepBar';

import {
  Container,
  Header,
  Body,
  Footer,
  FundTitle,
  ModalSection,
  CharacteristicRow,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: any;
}

function Modal({ isOpen, onClose, details }: ModalProps) {
  const items = [
    {
      name: 'Created',
      active: true,
    },
    {
      name: 'Processing',
      active:
        details.status == 'processing' || details.status == 'processed'
          ? true
          : false,
    },
    {
      name: 'Processed',
      active: details.status == 'processed' ? true : false,
    },
  ];

  if (!isOpen) return null;
  return (
    <Container>
      <Header>
        <p>Detalhes do produto</p>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </Header>
      <Body>
        <FundTitle>{details.title}</FundTitle>
        <ModalSection>Status</ModalSection>
        <StepBar items={items} />

        <ModalSection>Transferindo de</ModalSection>

        <CharacteristicRow>
          <p>{details.from}</p>
          <p>{formatCurrency(details.amount)}</p>
        </CharacteristicRow>
        <ModalSection>Para</ModalSection>
        <CharacteristicRow>
          <p>{details.to}</p>
          <p>{formatCurrency(details.amount)}</p>
        </CharacteristicRow>
      </Body>
      <Footer>
        <button onClick={onClose}>Fechar</button>
      </Footer>
    </Container>
  );
}

export default Modal;
