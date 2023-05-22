import { Task } from './reducers'

export enum ActionTypes {
  CREATE_USER_NAME = 'ADD_USER_NAME',
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  RENDER_TASKS = 'RENDER_TASKS',
  UPDATE_TASK = 'UPDATE_TASK',
}

function createUserNameAction(userName: string) {
  return {
    type: ActionTypes.CREATE_USER_NAME,
    payload: {
      userName,
    },
  }
}

function addNewTaskAction(newTask: Task) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload: {
      newTask,
    },
  }
}

function renderTasksAction(taskList: Task[]) {
  return {
    type: ActionTypes.RENDER_TASKS,
    payload: {
      taskList,
    },
  }
}

function updateTaskAction(taskItem: Task) {
  return {
    type: ActionTypes.UPDATE_TASK,
    payload: {
      taskItem,
    },
  }
}

export {
  createUserNameAction,
  addNewTaskAction,
  renderTasksAction,
  updateTaskAction,
}
