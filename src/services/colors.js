import axios from 'axios'

const apiUrl = 'https://reqres.in/api/colors'

async function getAllColors (params = {}) {
  const { data } = await axios.get(apiUrl, {
    params: {
      per_page: 9,
      ...params
    }
  })

  return data
}

export {
  getAllColors
}
