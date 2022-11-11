import { AUTH_TOKEN, USER_INFO } from '@src/models/api'

export const isLogin = () => {
  return !!localStorage.getItem(USER_INFO) && !!localStorage.getItem(AUTH_TOKEN)
}
