import axios from "axios"

const putToken = async (email: string, accessToken: string) => {
  const _ = await axios.put(`${process.env.API_BASE_URL}/api/user/update`, {
    access_token: accessToken,
    email: email,
  })
}

export { putToken }
