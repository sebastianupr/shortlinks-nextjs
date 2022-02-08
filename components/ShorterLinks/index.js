import { useContext, useEffect } from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import classNames from 'classnames'

import Context from 'Context/Context'

import FormButton from 'components/FormButton'
import Spinner from 'components/Spinner'

import useAddShorterLink from 'swrHooks/useAddShorterLink'

import { shorterLinkSchema } from 'schemas/shorterLinks'

import style from './style.module.css'

export default function ShorterLinks () {
  const { shorterLinkData, mutate, loading } = useAddShorterLink()

  const state = useContext(Context)
  const { setShorterLinks } = state

  const handleFormikSubmit = async (values, { resetForm }) => {
    mutate(values.link).then(() => {
      resetForm()
    })
  }

  useEffect(() => {
    if (shorterLinkData) {
      setShorterLinks((currentLinks) => {
        return currentLinks
          .filter((link) => link.code !== shorterLinkData.code)
          .concat([shorterLinkData])
      })
    }
  }, [shorterLinkData])

  return (
    <>
      <Spinner show={loading} />

      <Formik
        initialValues={{ link: '' }}
        initialTouched={{ link: false }}
        validationSchema={shorterLinkSchema}
        onSubmit={handleFormikSubmit}
      >
        {({ handleSubmit }) => (
          <div className={style.shorterLinksForm}>
            <form onSubmit={handleSubmit} className={style.gridForm}>
              <Field name="link">
                {({ field, meta }) => (
                  <div
                    className={classNames(
                      style.input,
                      meta.touched && meta.error && style.error
                    )}
                  >
                    <label htmlFor="link">
                      <input
                        type="text"
                        placeholder="Shorten a link here..."
                        {...field}
                      />
                    </label>
                    <ErrorMessage name="link">
                      {(msg) => <p>{msg}</p>}
                    </ErrorMessage>
                  </div>
                )}
              </Field>

              <div className={style.buttonMobile}>
                <FormButton type="submit">Shorten It!</FormButton>
              </div>
              <div className={style.buttonDesktop}>
                <FormButton className={style.button} type="submit">
                  Shorten It!
                </FormButton>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  )
}
