import styled from 'styled-components'

export const HomerContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountDownButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 1rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  transition: 0.1s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
