import { getRequest } from '@services/api/requests'
import { IsPublicPost } from '@services/api/types'

const getIsPublicPost = async (postId: string) => {
  const response = await getRequest<IsPublicPost>(`/posts/${postId}/is-public`)
  return response
}

export default getIsPublicPost
