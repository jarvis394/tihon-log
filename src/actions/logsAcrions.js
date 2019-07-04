import rp from 'request-promise-native'

/**
 * Gets logs
 *
 * @function
 * @returns object
 */
export const getLogs = (count = 200, offset = 0) => {
  return dispatch => {
    dispatch({ type: 'GET_LOGS' })

    rp({
      url:
        'https://tihon.glitch.me/api/logs/main?count=' +
        count +
        '&offset=' +
        offset,
      method: 'GET',
      json: true
    })
      .then(res =>
        dispatch({
          type: 'GET_LOGS_SUCCESS',
          payload: res.data
        })
      )
      .catch(e =>
        dispatch({
          type: 'GET_LOGS_REJECTED',
          payload: e
        })
      )
  }
}
