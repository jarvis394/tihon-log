/**
 * Logs reducer
 *
 * @function
 * @returns {object}
 */
export default function reducer(
  state = {
    logs: [],
    fetched: true,
    fetching: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case 'GET_LOGS': {
      return {
        ...state,
        fetching: true
      }
    }

    case 'GET_LOGS_SUCCESS': {
      return {
        ...state,
        logs: action.payload,
        fetched: true,
        fetching: false
      }
    }

    case 'GET_LOGS_REJECTED': {
      return {
        ...state,
        error: action.payload,
        fetched: false,
        fetching: false
      }
    }

    default:
      return state
  }
}
