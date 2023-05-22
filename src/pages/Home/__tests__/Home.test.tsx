import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Home } from '..'
import { PlanningPokerContextProvider } from '../../../contexts/PlanningPokerContext'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

const renderPage = () => {
  return render(
    <PlanningPokerContextProvider>
      <Home />
    </PlanningPokerContextProvider>,
  )
}

describe('Home page', () => {
  it('Should render home page content', () => {
    renderPage()

    const introTitleLine1 = screen.getByText(/Seja bem vindo!/i)

    const introTitleLine2 = screen.getByText(
      /Digite seu nome para prosseguir:/i,
    )

    expect(introTitleLine1).toBeInTheDocument()
    expect(introTitleLine2).toBeInTheDocument()
  })

  it('should render name field and button', async () => {
    renderPage()

    const nameField = await screen.findByPlaceholderText(/Digite um nome/i)
    const nextButton = await screen.getByText(/Avançar/i)

    expect(nameField).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('Should go to task list component when button is clicked', async () => {
    renderPage()

    const nameField = (await screen.findByPlaceholderText(
      /Digite um nome/i,
    )) as HTMLInputElement
    const nextButton = await screen.getByRole('button')

    await fireEvent.change(nameField, { target: { value: 'João' } })
    await fireEvent.click(nextButton)

    expect(nameField).not.toBeInTheDocument()
  })
})
