import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import GridContainer from "components/Grid/GridContainer";
import DynamicComponent from "./DynamicComponent";
import GridItem from "components/Grid/GridItem";


const styles = {
    ...registerPageStyle
};
let benefitsArray = [];
let deleted = [];
function AdditionalBenefits(props) {
    const { classes, handleAddBenefits } = props;
    const [state, setState] = useState({
        windscreen: false,
        entertainment: false,
        towing: false,
        repair: false,
        medical: false,

        buttonState: true,
        button: {
            windscreenButton: true,
            entertainmentButton: true,
            towingButton: true,
            repairButton: true,
            medicalButton: true
        },
        windscreenState: "",
        entertainmentState: "",
        towingState: "",
        repairState: "",
        medicalState: ""
    });
    const [values, setValues] = useState({
        benefitValues: [
            { name: "windscreen", value: 0 },
            { name: "entertainment", value: 0 },
            { name: "towing", value: 0 },
            { name: "repair", value: 0 },
            { name: "medical", value: 0 }
        ]
    });

    const handleButtonClick = stateName => {
        let name = `${stateName}Button`;
        setState(prevState => ({
            ...state,
            button: {
                ...prevState.button,
                [name]: false
            }
        }));

        let newItems = values.benefitValues.filter(
            item => item.name === stateName && item.value !== 0
        );
        let benefitsObject = newItems[newItems.length - 1]; //returns full value

        benefitsArray.push(benefitsObject);
        handleAddBenefits(benefitsArray);
    };
    const handleRemoveButtonClick = stateName => {
        let name = `${stateName}Button`;
        setState(prevState => ({
            ...state,
            button: {
                ...prevState.button,
                [name]: true
            }
        }));
        let deletedBenefits = values.benefitValues.filter(
            item => item.name === stateName
        );
        deleted.push(deletedBenefits[deletedBenefits.length - 1]);
        console.log(deleted);
        /*
       add motorPrivate.RemoveFunction()
        */
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

        //################################################################################
        //### UPDATE ARRAY STATE IMMUTABLY,COMPARE NAME PROPERTY WITH PASSED STATENAME #####
        //##############################################################################
        setValues({
            ...values,
            benefitValues: [
                ...values.benefitValues.filter(item => item.name === stateName),
                { name: stateName, value: parseFloat(event.target.value) }
            ]
        });
    };
    const handleToggle = stateName => {
        switch (stateName) {
            case "windscreen":
                setState({ ...state, windscreen: !state.windscreen });
                break;
            case "entertainment":
                setState({ ...state, entertainment: !state.entertainment });
                break;
            case "towing":
                setState({ ...state, towing: !state.towing });
                break;
            case "repair":
                setState({ ...state, repair: !state.repair });
                break;
            case "medical":
                setState({ ...state, medical: !state.medical });
                break;
            default:
                break;
        }
    };
    const {
        windscreenState,
        entertainmentState,
        towingState,
        repairState,
        medicalState,
        button,
        windscreen,
        entertainment,
        medical,
        repair,
        towing
    } = state;

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={windscreen}
                    handleToggle={handleToggle}
                    toggleStateName={"windscreen"}
                    stateName={"windscreen"}
                    toggleLabel={"WindScreen"}
                    textLabel={"WindScreen"}
                    textId={"windscreen"}
                    errorState={windscreenState}
                    change={change}
                    buttonState={button.windscreenButton}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                />
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={entertainment}
                    handleToggle={handleToggle}
                    toggleStateName={"entertainment"}
                    stateName={"entertainment"}
                    toggleLabel={"Vehicle Entertainment System"}
                    textLabel={"Entertainment"}
                    textId={"entertainment"}
                    errorState={entertainmentState}
                    change={change}
                    buttonState={button.entertainmentButton}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={towing}
                    handleToggle={handleToggle}
                    toggleStateName={"towing"}
                    stateName={"towing"}
                    toggleLabel={"Towing / Recovery Expense"}
                    textLabel={"Towing"}
                    textId={"towing"}
                    errorState={towingState}
                    change={change}
                    buttonState={button.towingButton}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={repair}
                    handleToggle={handleToggle}
                    toggleStateName={"repair"}
                    stateName={"repair"}
                    toggleLabel={"Repair Authority"}
                    textLabel={"Repair"}
                    textId={"repair"}
                    errorState={repairState}
                    change={change}
                    buttonState={button.repairButton}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <DynamicComponent
                    state={medical}
                    handleToggle={handleToggle}
                    toggleStateName={"medical"}
                    stateName={"medical"}
                    toggleLabel={"Medical Expenses"}
                    textLabel={"Medical"}
                    errorState={medicalState}
                    textId={"medical"}
                    change={change}
                    buttonState={button.medicalButton}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                />
            </GridItem>
        </GridContainer>
    );
}
export default withStyles(styles)(AdditionalBenefits);
/*

 */
