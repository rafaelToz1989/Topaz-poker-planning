import styled from 'styled-components'

const TaskListContainer = styled.nav`
  align-items: center;
  display: flex;
  flex: 0;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const GreetingsText = styled.h3`
  color: ${({ theme }) => theme.blue};
  display: flex;
  flex-direction: column;
  line-height: 1.875rem;
  margin-bottom: 2rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.green};
  }
`

const ChangeToInputTaskButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.blue};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
  text-decoration: none;
  margin: 0.625rem auto 3.125rem;

  &:hover {
    opacity: 0.8;
  }
`

const TaskCardsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  list-style-type: none;
  margin-bottom: 3.75rem;
`

const TaskCard = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.white};
  border: 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  height: 6.25rem;
  justify-content: space-around;
  min-width: 36.25rem;

  span {
    align-items: center;
    color: ${({ theme }) => theme.blue};
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 11.875rem;
  }

  a {
    align-items: center;
    background: ${({ theme }) => theme.green};
    border: 0;
    border-radius: 8px;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    display: flex;
    font-weight: 700;
    justify-content: center;
    padding: 1rem 2.5rem;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-left: 0.625;
    }
  }
`

const TitleFormContainer = styled.div`
  display: flex;
  gap: 1.875rem;
  justify-content: center;
  margin: 0.625rem auto 2.875rem;
`

const NewTaskTitleInput = styled.input`
  background: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.gray};
  border-radius: 9px;
  color: ${({ theme }) => theme.blue};
  font-size: 1.6rem;
  height: 3.75rem;
  outline: none;
  padding: 0 1.6rem;
  position: relative;
  transition: all 0.1s;
  width: 25rem;
`

const CreateTaskButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.blue};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  gap: 0.5rem;
  justify-content: center;
  margin: auto;
  padding: 1rem 2rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`

export {
  TaskListContainer,
  GreetingsText,
  ChangeToInputTaskButton,
  TaskCardsContainer,
  TaskCard,
  NewTaskTitleInput,
  CreateTaskButton,
  TitleFormContainer,
}
