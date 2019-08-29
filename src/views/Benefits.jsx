import React, { useEffect, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import GridContainer from "components/Grid/GridContainer";
import DynamicComponent from "./DynamicComponent";
import GridItem from "components/Grid/GridItem";

const styles = {
  ...registerPageStyle
};
let benefitsArray = [];
function AdditionalBenefits(props) {
  const {  handleAddBenefits } = props;
  const [state, setState] = useState({});
  const [values, setValues] = useState({
    benefitValues: [
      { name: "windscreen", value: 0, id: 1 },
      { name: "entertainment", value: 0, id: 12 },
      { name: "towing", value: 0, id: 13 },
      { name: "repair", value: 0, id: 14 },
      { name: "medical", value: 0, id: 15 }
    ]
  });
  const [newValues, setNewValues] = useState({});

  useEffect(() => {
    let name = values.benefitValues.map(name => name.name);
    let a = {};
    let b = {};
    for (let i in name) {
      a[name[i] + "State"] = false;
      a[name[i] + "Button"] = true;
      a[name[i]] = false;
      b[name[i]] = "";
      setState({ ...state, ...a });
      setNewValues({ ...newValues, ...b });
    }

  }, []);
  const handleButtonClick = stateName => {
    let name = `${stateName}Button`;
    setState({ ...state, [name]: !state[name] });

    let newItems = values.benefitValues.find(item => item.name === stateName);

    let new_benefit = {};
    new_benefit.name = newItems.name;
    new_benefit.value = parseFloat(newValues[stateName]);
    new_benefit.id = newItems.id;

    benefitsArray.push(new_benefit);
    handleAddBenefits(benefitsArray);
    console.log(new_benefit);
  };
  const handleRemoveButtonClick = stateName => {
    let name = `${stateName}Button`;
    setState({
      ...state,
      [name]: !state[name]
    });
    setNewValues({ ...newValues, [stateName]: "" });

    for (let i = 0; i < benefitsArray.length; i++) {
      if (benefitsArray[i].name === stateName) {
        benefitsArray.splice(i, 1);
      }
    }
    console.log(benefitsArray);
  };

  const verifySum = value => {
    let sum = /^[1-9][0-9]{1,8}$/;
    return sum.test(value);
  };
  const change = (event, stateName, type) => {
    if (type === "number") {
      if (verifySum(event.target.value)) {
        setState({ ...state, [stateName + "State"]: "success" });
      } else {
        setState({ ...state, [stateName + "State"]: "error" });
      }
    }
    setNewValues({ ...newValues, [stateName]: event.target.value });
  };
  const handleToggle = stateName => {
    setState({ ...state, [stateName]: !state[stateName] });
  };

  return (
    <GridContainer justify="center">
      {values.benefitValues.map(benefit =>
        values.benefitValues.length % 2 === 0 ? (
          <GridItem xs={12} sm={12} md={6} key={benefit.id}>
            <DynamicComponent
              state={state[benefit.name]}
              handleToggle={handleToggle}
              toggleStateName={benefit.name}
              stateName={benefit.name}
              toggleLabel={benefit.name}
              textLabel={benefit.name}
              textId={benefit.name}
              errorState={state[benefit.name + "State"]}
              change={change}
              value={newValues[benefit.name]}
              buttonState={state[benefit.name + "Button"]}
              handleButtonClick={handleButtonClick}
              handleRemoveButton={handleRemoveButtonClick}
            />
          </GridItem>
        ) : (
          <GridItem xs={12} sm={12} md={8} key={benefit.id}>
            <DynamicComponent
              state={state[benefit.name]}
              handleToggle={handleToggle}
              value={newValues[benefit.name]}
              toggleStateName={benefit.name}
              stateName={benefit.name}
              toggleLabel={benefit.name}
              textLabel={benefit.name}
              textId={benefit.name}
              errorState={state[benefit.name + "State"]}
              change={change}
              buttonState={state[benefit.name + "Button"]}
              handleButtonClick={handleButtonClick}
              handleRemoveButton={handleRemoveButtonClick}
            />
          </GridItem>
        )
      )}
    </GridContainer>
  );
}
export default withStyles(styles)(AdditionalBenefits);
