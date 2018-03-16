import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import ImageLabelView from '../components/ImageLabelView';
import {addBox} from '../actions'

const convertStatetoArray = (boxlist) => {
  return Object.keys(boxlist).reduce((boxes, key) => {
    boxes.push(boxlist[key]);
    return boxes;
  }, []);
};

const mapStateToProps = (state) => {
  const boxesArray = convertStatetoArray(state.present)
  return {
    boxes: boxesArray,
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCurrentBox: (id, position) => {
      dispatch(addBox(id, position));
    },
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageLabelView);
