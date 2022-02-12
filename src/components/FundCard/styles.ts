import styled, { css } from 'styled-components';

const isHiddenStyle = css`
  color: ${(props) => props.theme.colors.disabled};
  text-decoration: line-through;
`;

interface InfoProps {
  alignRight?: boolean;
}

interface FundTitleProps {
  isHidden: boolean;
  index?: number;
}

interface RowProps {
  marginBottom?: string;
}

export const Container = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 0 8px;
  :hover {
    background: rgba(224, 43, 87, 0.15);
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  border-top: 1px solid #e3e4eb;
  padding: 12px 0;
  overflow: hidden;
`;

export const Row = styled.div<RowProps>`
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  display: table;
  table-layout: fixed;
  width: 100%;
`;

export const FundTitle = styled.strong<FundTitleProps>`
  margin-right: 24px;
  font-family: Montserrat;
  font-size: 17px;
  line-height: 24px;
  color: ${({ theme, index }) =>
    typeof index !== 'undefined' ? theme.colors.text : theme.colors.text};
  ${(props) => props.isHidden && isHiddenStyle};
`;

export const Actions = styled.div`
  display: flex;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  margin-left: 12px;

  svg {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const FundFooter = styled.div`
  margin-top: 12px;
`;

export const Info = styled.div<InfoProps>`
  padding-right: ${(props) => (props.alignRight ? 'none' : '10px')};

  display: table-cell;
  overflow: hidden;
  text-align: left;

  p {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.textDescription};
  }

  span {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.text};
  }
`;
