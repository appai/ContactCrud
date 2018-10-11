import apisauce from 'apisauce'

const create = (baseURL = 'https://simple-contact-crud.herokuapp.com/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})

  // CONTACT
  const getContact = () => api.get('contact')
  const postContact = (params) => api.post('contact', {
    firstName: params.firstName,
    lastName: params.lastName,
    age: params.age,
    photo: params.photo,
  })
  const getContactDetail = (params) => api.get('contact/' + params.id)
  const putContactDetail = (params) => api.put('contact/' + params.id, {
    firstName: params.firstName,
    lastName: params.lastName,
    age: params.age,
    photo: params.photo,
  })
  const deleteContactDetail = (params) => api.delete('contact/' + params.id)

  return {
    getRoot,
    getRate,
    getUser,

    // CONTACT
    getContact,
    postContact,
    getContactDetail,
    putContactDetail,
    deleteContactDetail
  }
}

export default {
  create
}
