import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from './TasksFilter'

function Footer({ activeTodoCount, makeFiltered, clearCompleted }) {
  const itemsLeftPostfix = activeTodoCount < 2 ? ' item left' : ' items left'
  return (
    <footer className="footer">
      <span className="todo-count">{activeTodoCount + itemsLeftPostfix}</span>
      {<TasksFilter makeFiltered={makeFiltered} />}
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear Completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  activeTodoCount: PropTypes.number.isRequired,
  makeFiltered: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
}

export default Footer
