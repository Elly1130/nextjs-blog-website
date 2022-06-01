import ReactDOM from 'react-dom';

import styled from 'styled-components';

const StyledNotification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colorGrey100};
  background-color: ${(props) => props.theme.colorGrey800};
  padding: 0 ${(props) => props.theme.size8};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 5rem;
  bottom: 0;
  width: 100%;
  left: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;

  h2 {
    font-size: ${(props) => props.theme.size6};
    margin: 0;
  }

  p {
    margin: 0;
  }

  &.success {
    background-color: ${(props) => props.theme.colorSuccess500};
    color: ${(props) => props.theme.colorGrey800};
  }

  &.error {
    background-color: ${(props) => props.theme.colorError500};
  }

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;

function Notification(props) {
  const { title, message, status } = props;

  return ReactDOM.createPortal(
    <StyledNotification className={status}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledNotification>,
    document.getElementById('notifications')
  );
}

export default Notification;
