import React from "react";
import { connect } from "react-redux";

const NumberMax = (props) => {
  let max = props.numeros.max;
  let min = props.numeros.min;
  let media = (+max + +min) / 2;

  return <div className="card">{`média: ${media}`}</div>;
};

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  };
}

export default connect(mapStateToProps)(NumberMax);
