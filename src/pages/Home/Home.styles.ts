import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface ButtonSubmitRegisterProps {
  disabled: boolean
}

const enabledStyle = css`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const disabledStyle = css`
  cursor: not-allowed;
  opacity: 0.3;
`

const NavLinkSubmitRegister = styled(NavLink)<ButtonSubmitRegisterProps>`
  ${({ disabled }) => (disabled ? disabledStyle : enabledStyle)}

  align-items: center;
  background: ${({ theme }) => theme.blue};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  display: flex;
  font-weight: 700;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  text-decoration: none;
`

const ButtonSubmitRegister = styled.button`
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
  width: 100%;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:not(:disabled):hover {
    opacity: 0.8;
  }
`

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 0;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`

const LabelNameField = styled.h3`
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

const InputUserName = styled.input`
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
  width: 33.125rem;
`

export {
  HomeContainer,
  InputUserName,
  ButtonSubmitRegister,
  LabelNameField,
  NavLinkSubmitRegister,
}
