import { useForm } from 'react-hook-form'
import {
  ButtonSubmitRegister,
  HomeContainer,
  InputUserName,
  LabelNameField,
} from './Home.styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PlanningPokerContext } from '../../contexts/PlanningPokerContext'
import { useNavigate } from 'react-router-dom'

const userNameValidationSchema = zod.object({
  name: zod.string().min(3, 'Digite um nome válido'),
})

export type userNameFormData = zod.infer<typeof userNameValidationSchema>

export function Home() {
  const navigate = useNavigate()
  const userNameForm = useForm<userNameFormData>({
    resolver: zodResolver(userNameValidationSchema),
    defaultValues: {
      name: '',
    },
  })

  const { createUserName } = useContext(PlanningPokerContext)

  function handleCreateUserName(data: userNameFormData) {
    const { name } = data

    createUserName(name)
    navigate('/task')
  }

  const { handleSubmit, watch, register } = userNameForm

  const name = watch('name')
  const isNameEmptyOrInvalid = !name || name.length < 3

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateUserName)}>
        <section>
          <LabelNameField>
            <span>Seja bem vindo!</span> Digite seu nome para prosseguir:
          </LabelNameField>
          <InputUserName
            id="userName"
            type="text"
            placeholder="Digite um nome"
            {...register('name')}
          />
        </section>
        <ButtonSubmitRegister
          type="submit"
          disabled={isNameEmptyOrInvalid}
          title="Botão para começar"
        >
          Avançar
        </ButtonSubmitRegister>
      </form>
    </HomeContainer>
  )
}
