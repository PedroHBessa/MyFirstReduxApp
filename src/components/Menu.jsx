import React from "react";
import { connect } from "react-redux";
import { changeMinValue, changeMaxValue } from "../store/actions/numeros";
import NumberMin from "./NumberMin";
import NumberMax from "./NumberMax";
import Media from "./Media";

const Menu = (props) => {
  return (
    <div className="Menu">
      <div className="cards">
        <div className="card">
          <span>number1:</span>
          <input
            type="number"
            onChange={(e) => props.changeMin(e.target.value)}
          />
          <span>number2:</span>
          <input
            type="number"
            onChange={(e) => props.changeMax(e.target.value)}
          />
        </div>
      </div>
      <div className="cards">
        <NumberMin />
        <NumberMax />
      </div>
      <div className="card">
        <Media />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    changeMin(minValue) {
      const action = changeMinValue(minValue);
      dispatch(action);
    },
    changeMax(maxValue) {
      const action = changeMaxValue(maxValue);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Menu);
