import { deleteRequest } from '@services/api/requests'
import { PostDeleteFormInput } from '@services/api/types'

const deletePost = async (postId: string, body: PostDeleteFormInput) => {
  const response = await deleteRequest(`/posts/${postId}`, body)
  return response
}

export default deletePost
