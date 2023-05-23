import {
  createUser,
  retrieveTasks,
  retrieveUserName,
  updateTaskList,
} from '../api/requests/requests'
import { Task } from '../reducers/planningPoker/reducers'

function saveUserNameDataOnAPI(
  name: string,
  createUserName: (name: string) => void,
) {
  const dataResponse = createUser({ userName: name })

  dataResponse.then((res) => {
    const { userName } = res.data

    createUserName(userName)
  })
}

function getDatafromListApi(reloadAllTasks: (data: Task[]) => void) {
  const dataResponse = retrieveTasks()

  dataResponse.then((res) => {
    const result = res.data

    reloadAllTasks(result)
  })
}

function getUserNamefromListApi(createUserName: (name: string) => void) {
  const dataResponse = retrieveUserName()

  dataResponse.then((res) => {
    const { userName } = res.data

    createUserName(userName)
  })
}

function registerUpdateVoteOnApi(
  newTaskObject: Task,
  callBackContextFunction: (data: Task) => void,
) {
  const dataResponse = updateTaskList(newTaskObject).then((res) => res.data)

  dataResponse.then((data) => {
    callBackContextFunction(data)
  })
}

export {
  saveUserNameDataOnAPI,
  getDatafromListApi,
  getUserNamefromListApi,
  registerUpdateVoteOnApi,
}
