/* eslint-disable react-hooks/exhaustive-deps */
import {
  ChangeEvent,
  InvalidEvent,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  retrieveTasks,
  addTaskToRequestList,
} from '../../api/requests/requests'
import { PlanningPokerContext } from '../../contexts/PlanningPokerContext'
import { Task } from '../../reducers/planningPoker/reducers'
import {
  ChangeToInputTaskButton,
  CreateTaskButton,
  GreetingsText,
  TaskCard,
  TaskCardsContainer,
  TaskListContainer,
  NewTaskTitleInput,
  TitleFormContainer,
} from './TaskList.styles'
import { NavLink } from 'react-router-dom'
import { Plus } from 'phosphor-react'

export function TaskList() {
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [taskTitleField, setTaskTitleField] = useState('')

  const { reloadAllTasks, tasks, userName } = useContext(PlanningPokerContext)

  function getDatafromListApi() {
    const dataResponse = retrieveTasks()

    dataResponse.then((res) => {
      const result = res.data

      reloadAllTasks(result)
    })
  }

  useEffect(() => {
    getDatafromListApi()
  }, [])

  function addNewTask() {
    if (taskTitleField) {
      const request = {
        id: String(tasks.length + 1),
        title: taskTitleField,
        result: 'Não votada',
      }

      addTaskToRequestList(request)
    }

    setIsAddingTask((state) => !state)

    setTaskTitleField('')

    getDatafromListApi()
  }

  function handleTaskTitleField(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target

    setTaskTitleField(value)
  }

  function handleTaskTitleInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity('O campo de nome da task é obrigatório.')
  }

  return (
    <TaskListContainer>
      <GreetingsText>
        <p>
          Olá, <span>{userName}</span>.
        </p>
        <p>Adicione novas tarefas ou prossiga com a votação:</p>
      </GreetingsText>

      {isAddingTask ? (
        <TitleFormContainer>
          <NewTaskTitleInput
            type="text"
            placeholder="Digite um nome para a tarefa"
            onChange={handleTaskTitleField}
            value={taskTitleField}
            onInvalid={handleTaskTitleInvalid}
            required
          />
          <CreateTaskButton type="button" onClick={addNewTask}>
            Criar
          </CreateTaskButton>
        </TitleFormContainer>
      ) : (
        <ChangeToInputTaskButton onClick={addNewTask}>
          Adicionar tarefa <Plus size={24} />
        </ChangeToInputTaskButton>
      )}
      <TaskCardsContainer>
        {tasks.map(({ id, title, result }: Task) => (
          <TaskCard key={id}>
            <span>
              <strong>Titulo:</strong>
              {title}
            </span>
            <span>
              <strong>Nota Final:</strong>
              {result}
            </span>
            <NavLink to={`/voting/${id}`}>votar</NavLink>
          </TaskCard>
        ))}
      </TaskCardsContainer>
    </TaskListContainer>
  )
}
