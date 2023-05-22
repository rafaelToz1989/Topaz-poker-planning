import { ActionTypes } from './actions'

interface Vote {
  user: string
  vote: number
}

export interface Task {
  id: string
  title: string
  result: string
  votes?: Vote[]
}

interface PlanningPokerState {
  userName: string
  tasks: Task[]
}

export function planningPokerReducer(state: PlanningPokerState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_USER_NAME:
      return { ...state, userName: action.payload.userName }
    case ActionTypes.RENDER_TASKS:
      return { ...state, tasks: action.payload.taskList }
    case ActionTypes.ADD_NEW_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.newTask.id) {
            return {
              ...task,
              votes: [
                {
                  user: action.payload.newTask.votes[0].user,
                  vote: action.payload.newTask.votes[0].vote,
                },
              ],
            }
          } else {
            return task
          }
        }),
      }
    case ActionTypes.UPDATE_TASK:
      console.log(action.payload)

      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskItem.id) {
            return {
              ...task,
              result: action.payload.taskItem.result,
              votes: [],
            }
          } else {
            return task
          }
        }),
      }
    default:
      break
  }

  return state
}
