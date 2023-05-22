import { Task } from '../../reducers/planningPoker/reducers'
import api from '../axiosConfig'

async function retrieveTasks() {
  const response = await api.get('/tasks')
  return response
}

async function addTaskToRequestList(data: Task) {
  const response = await api.post('/tasks', data)
  return response
}

async function updateTaskList(itemList: Task) {
  const response = await api.put(`/tasks/${itemList.id}`, itemList)
  return response
}

async function deleteTask(itemList: Task) {
  await api.delete(`/tasks/${itemList.id}`)
}

export { retrieveTasks, addTaskToRequestList, updateTaskList, deleteTask }
