
import React from 'react'
import PropTypes from 'prop-types'

export default function Task({task:{id, title, state}, onArchiveTask, onPinTask}) {
  return (
    <div className={`list-item ${state}`} >
      <label htmlFor='checked' aria-label={`archiveTask-${id}`} className='checkbox'>
        <input type='checkbox' id={`archiveTask-${id}`} checked={state === 'TASK_ARCHIVED'} disabled={true} name='checked' />
      </label>

      <label htmlFor='title' aria-label={title} className={title}>
        <input type='text' value={title} readOnly={true} name='title' placeholder='Input title'/>
      </label>

      {
        state !== 'TASK_ARCHIVED' && (
          <button
          className='pin-button'
          onClick={()=>onPinTask(id)}
          aria-label={`pinTask-${id}`}
          id={`pinTask-${id}`}
          key={`pinTask-${id}`} >
            <span className='icon-star' />
          </button>
        )
      }

    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    state:PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
}