import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div className='col center-align valign-center'>
    <div >
      <button className="waves-effect waves-light btn" onClick={onUndo} disabled={!canUndo}>
         Undo 
    </button>
    </div>
    <div >
      <button className="waves-effect waves-light btn" onClick={onRedo} disabled={!canRedo}>
        Redo
    </button>
    </div>
  </div>

)

const mapStateToProps = (state) => ({
  canUndo: state.labels.past.length > 0,
  canRedo: state.labels.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo