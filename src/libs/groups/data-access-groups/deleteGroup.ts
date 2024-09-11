import { deleteRequest } from '@services/api/requests'
import { GroupDeleteFormInput } from '@services/api/types'

const deleteGroup = async (groupId: string, body: GroupDeleteFormInput) => {
  const response = await deleteRequest(`/groups/${groupId}`, body)

  return response
}

export default deleteGroup
