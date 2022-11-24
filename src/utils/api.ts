import { API_DICTIONARY_URL, AUTH_TOKEN, USER_INFO } from '@src/models/api'

export const API_BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:4000'

export const isLogin = () => {
  return !!localStorage.getItem(USER_INFO) && !!localStorage.getItem(AUTH_TOKEN)
}

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    if (email === '') {
      return { success: false, data: null, message: 'Please enter your email' }
    }
    if (password === '') {
      return { success: false, data: null, message: 'Please enter your password' }
    }

    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

export const register = async ({ email, password }: { email: string; password: string }) => {
  try {
    if (email === '') {
      return { success: false, data: null, message: 'Please enter your email' }
    }
    if (password === '') {
      return { success: false, data: null, message: 'Please enter your password' }
    }

    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

export const verify = async ({ email, otpCode }: { email: string; otpCode: string }) => {
  try {
    if (otpCode === '') {
      return { success: false, data: null, message: 'Please enter your OTP Code' }
    }

    const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otpCode }),
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

export const createPost = async (input: {
  title: string
  imageTitle: string
  description: string
  accessToken: string
}) => {
  try {
    const { title, imageTitle, description, accessToken } = input

    if (!title || title === '') {
      return { success: false, data: null, message: 'Please enter your title' }
    }

    if (!imageTitle || imageTitle === '') {
      return { success: false, data: null, message: 'Please enter your image title' }
    }

    if (!description || description === '') {
      return { success: false, data: null, message: 'Please enter your description' }
    }

    if (!accessToken) {
      return { success: false, data: null, message: 'Access Token is invalid' }
    }

    const response = await fetch(`${API_BASE_URL}/api/post/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ title, imageTitle, description }),
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

export const getPostList = async (input: { limit: number; page: number; keyword: string }) => {
  try {
    const limit = input.limit ?? 10
    const page = input.page ?? 1
    const keyword = input.keyword ?? ''

    const response = await fetch(`${API_BASE_URL}/api/post?limit=${limit}&page=${page}&keyword=${keyword}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

//Dictionary
export const getDictionary = async (searchWord: string) => {
  try {
    const response = await fetch(`${API_DICTIONARY_URL}${searchWord}`, {
      method: 'GET',
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
    // return response.json()
  } catch (error) {
    return []
  }
}

//Topic
export const getDeckList = async (userId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/topic-deck?userId=${userId}`, {
      method: 'GET',
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

export const createDeck = async (input: { topicName: string; userId: string; accessToken: string }) => {
  try {
    const { topicName, userId, accessToken } = input

    if (!topicName || topicName === '') {
      return { success: false, data: null, message: 'Please enter your title' }
    }

    const response = await fetch(`${API_BASE_URL}/api/topic-deck/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ topicName, userId }),
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

export const deleteDeck = async (topicId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/topic-deck/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topicId }),
    })

    const rawResponse = await response.json()

    if (rawResponse) {
      console.log(JSON.stringify({ topicId }))
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}

//Card
export const getCard = async (input: {
  limit: number
  page: number
  keyword: string
  level: string
  topicName: string
}) => {
  try {
    if (!input.topicName) {
      return { success: false, data: null, message: 'Please enter Topic Name' }
    }
    const limit = input.limit ?? 10
    const page = input.page ?? 1
    const keyword = input.keyword ?? ''
    const level = input.level ?? 'easy,normal,hard'
    const topicName = input.topicName

    const response = await fetch(
      `${API_BASE_URL}/api/card?limit=${limit}&page=${page}&keyword=${keyword}&level=${level}&topicName=${topicName}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const rawResponse = await response.json()

    if (rawResponse) {
      return rawResponse
    }
  } catch (error) {
    return { success: false, data: null, message: 'Something went wrong' }
  }
}
