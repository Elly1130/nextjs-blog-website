import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import Notification from '../ui/notification';

const StyledContact = styled.section`
  margin: ${(props) => props.theme.size8} auto;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colorGrey100};
  width: 90%;
  max-width: 50rem;
  padding: ${(props) => props.theme.size4};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  font-size: ${(props) => props.theme.size6};

  h1 {
    font-size: ${(props) => props.theme.size8};
    margin: ${(props) => props.theme.size4} 0;
    text-align: left;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.size16};
      text-align: center;
    }
  }
`;

const Form = styled.form`
  label {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    margin: ${(props) => props.theme.size2} 0 ${(props) => props.theme.size1} 0;
  }

  input,
  textarea {
    font: inherit;
    padding: ${(props) => props.theme.size1};
    border-radius: 4px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colorGrey400};
    background-color: ${(props) => props.theme.colorGrey50};
    resize: none;
  }

  button {
    font: inherit;
    cursor: pointer;
    background-color: ${(props) => props.theme.colorPrimary700};
    border: 1px solid ${(props) => props.theme.colorPrimary700};
    padding: ${(props) => props.theme.size2} ${(props) => props.theme.size4};
    border-radius: 4px;
    color: ${(props) => props.theme.colorPrimary50};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: ${(props) => props.theme.colorPrimary500};
      border-color: ${(props) => props.theme.colorPrimary500};
    }
  }
`;

const Controls = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
`;

const Control = styled.div`
  flex: 1;
  min-width: 10rem;
`;

const Actions = styled.div`
  margin-top: ${(props) => props.theme.size4};
  text-align: right;
`;

async function sendContactData(email, name, message) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ email: email, name: name, message: message }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
}

export default function ContactForm() {
  const inputEmail = useRef();
  const inputName = useRef();
  const inputMessage = useRef();
  const formRef = useRef();
  const [requestStatus, setRequestStatus] = useState(); // pending, success, error
  const [errorState, setErrorState] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setErrorState(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function submitFormHandler(event) {
    event.preventDefault();

    const email = inputEmail.current.value;
    const name = inputName.current.value;
    const message = inputMessage.current.value;

    setRequestStatus('pending');

    try {
      await sendContactData(email, name, message);
      setRequestStatus('success');
      formRef.current.reset();
    } catch (error) {
      setRequestStatus('error');
      setErrorState(error.message);
    }
  }

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    };
  } else if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Successfully send message.',
      message: 'Your message is sent',
    };
  } else if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error sending message.',
      message: errorState,
    };
  }

  return (
    <StyledContact>
      <h1>How can I help you?</h1>
      <Form onSubmit={submitFormHandler} ref={formRef}>
        <Controls>
          <Control>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={inputEmail} />
          </Control>
          <Control>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required ref={inputName} />
          </Control>
        </Controls>
        <Control>
          <label htmlFor='message'>Your Message</label>
          <textarea rows='5' id='message' ref={inputMessage}></textarea>
        </Control>
        <Actions>
          <button>Send Message</button>
        </Actions>
      </Form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </StyledContact>
  );
}
