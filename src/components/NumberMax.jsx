import React from "react";
import { connect } from "react-redux";

const NumberMax = (props) => {
  let max = props.numeros.max;

  return <div className="card">{`segundo número: ${max}`}</div>;
};

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  };
}

export default connect(mapStateToProps)(NumberMax);
