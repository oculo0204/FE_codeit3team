import { postRequest } from '@services/api/requests'

type LikePostResponse = { message: string }

const postLikePost = async (postId: string) => {
  const response = await postRequest<LikePostResponse, undefined>(`/posts/${postId}/like`)

  return response
}

export default postLikePost
