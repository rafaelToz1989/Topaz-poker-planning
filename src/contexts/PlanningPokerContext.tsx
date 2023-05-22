import { ReactNode, createContext, useReducer } from 'react'
import { Task, planningPokerReducer } from '../reducers/planningPoker/reducers'
import {
  addNewTaskAction,
  createUserNameAction,
  renderTasksAction,
  updateTaskAction,
} from '../reducers/planningPoker/actions'

interface PlanningPokerProviderProps {
  children: ReactNode
}

interface PlanningPokerContextType {
  userName: string
  tasks: Task[]
  createUserName: (name: string) => void
  reloadAllTasks: (data: Task[]) => void
  addNewTaskItemToState: (data: Task) => void
  updateTaskItem: (data: Task) => void
}

export const PlanningPokerContext = createContext(
  {} as PlanningPokerContextType,
)

export function PlanningPokerContextProvider({
  children,
}: PlanningPokerProviderProps) {
  const [PlanningPokerState, dispatch] = useReducer(planningPokerReducer, {
    userName: '',
    tasks: [],
  })

  const { userName, tasks } = PlanningPokerState

  function createUserName(name: string) {
    dispatch(createUserNameAction(name))
  }

  function addNewTaskItemToState(data: Task) {
    dispatch(addNewTaskAction(data))
  }

  function reloadAllTasks(data: Task[]) {
    dispatch(renderTasksAction(data))
  }

  function updateTaskItem(data: Task) {
    console.log(data)

    dispatch(updateTaskAction(data))
  }

  return (
    <PlanningPokerContext.Provider
      value={{
        userName,
        tasks,
        createUserName,
        addNewTaskItemToState,
        reloadAllTasks,
        updateTaskItem,
      }}
    >
      {children}
    </PlanningPokerContext.Provider>
  )
}
