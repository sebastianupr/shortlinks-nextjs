import * as yup from 'yup'

const URL_MESSAGE = 'Please add a correct url'

const linkSchema = yup.string().url(URL_MESSAGE)

export const shorterLinkSchema = yup.object().shape({
  link: linkSchema.required('Please add a link')
})
