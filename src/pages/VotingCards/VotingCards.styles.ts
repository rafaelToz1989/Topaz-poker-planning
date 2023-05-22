import styled, { css } from 'styled-components'

const VotingContainer = styled.section`
  align-items: center;
  display: flex;
  flex: 0;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const IntroInstructionText = styled.h3`
  color: ${({ theme }) => theme.blue};
  display: flex;
  line-height: 1.875rem;
  margin-bottom: 2rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.green};
  }
`

const CardsContainer = styled.div`
  display: flex;
  gap: 1.875rem;
  height: 8rem;
  justify-content: center;
`

interface CardProps {
  isAlreadyVoted?: boolean
}

const Card = styled.button<CardProps>`
  align-items: center;
  background: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 8px;
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  height: 8rem;
  justify-content: space-evenly;
  outline: 0;
  transition: 0.3s;
  width: 4.8rem;

  div {
    display: flex;
    flex-direction: row;
    font-size: 13px;
    gap: 0.1875rem;

    &:first-child {
      font-weight: 700;
    }
  }

  ${({ isAlreadyVoted }) =>
    !isAlreadyVoted &&
    css`
      &:hover {
        background: ${({ theme }) => theme.gray};
        margin-top: -0.25rem;
      }

      &:focus,
      &:active,
      :target {
        background: ${({ theme }) => theme.blue};
        border: 2px solid ${({ theme }) => theme.blue};
        color: ${({ theme }) => theme.white};
        margin-top: -0.25rem;
      }
    `}
`

interface ButtonProps extends CardProps {}

const ButtonRegisterVoteSelected = styled.button<ButtonProps>`
  align-items: center;
  background: ${({ theme, isAlreadyVoted }) =>
    isAlreadyVoted ? theme.green : theme.blue};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.875rem;
  padding: 1rem;
  text-decoration: none;
  width: 15.625rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:not(:disabled):hover {
    opacity: 0.8;
  }
`

export {
  VotingContainer,
  IntroInstructionText,
  CardsContainer,
  Card,
  ButtonRegisterVoteSelected,
}
