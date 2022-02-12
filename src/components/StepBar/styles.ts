import styled from 'styled-components';

export const Timeline = styled.div`
  margin: 50px 60px;
  height: 4px;
  background-color: #ccc;
`;

export const TimelineProgress = styled.div`
  width: 0;
  height: 100%;
  background-color: #e02b57;
`;

export const TimelineItems = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -12px;
  display: flex;
  justify-content: space-between;
`;

export const TimelineItem = styled.div`
  position: relative;

  ::before {
    content: '';
    width: 20px;
    height: 20px;
    // background-color: #ccc;
    display: block;
    border-radius: 100%;
  }

  &.active {
    background-color: orange;
  }
`;

export const TimelineContent = styled.div`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ddd;
    width: 100px;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
}
`;
