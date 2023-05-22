import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '..'

it('should render Header text content', () => {
  render(<Header />)

  const HeaderText = screen.getByText('Planning Poker App by')
  const logo = screen.getByRole('img')

  expect(HeaderText).toBeInTheDocument()
  expect(logo).toHaveAttribute('alt', 'Topaz Evolution logo')
})
