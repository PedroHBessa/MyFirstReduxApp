import React from "react";
import { connect } from "react-redux";

const NumberMin = (props) => {
  let min = props.numeros.min;

  return <div className="card">{`primeiro numero: ${min}`}</div>;
};

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  };
}

export default connect(mapStateToProps)(NumberMin);
