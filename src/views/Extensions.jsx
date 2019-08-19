import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";
import DynamicComponent from "./DynamicComponent";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const styles = {
    ...registerPageStyle,
    ...userProfileStyles
};
let extension = [];
function Extensions(props) {
    const { handleAddExtensions } = props;
    const [state, setState] = useState({
        lossOfUse: false,
        excessProtector: false,
        AAMembership: false,
        violence: false,
        forcedATM: false,
        personalAccident: false,
        stationAccommodation: false,
        lossOfPersonalEffect: false,
        //buttonControls
        button: {
            lossOfUseButton: true,
            excessProtectorButton: true,
            AAMembershipButton: true,
            violenceButton: true,
            forcedATMButton: true,
            personalAccidentButton: true,
            stationAccommodationButton: true,
            lossOfPersonalEffectButton: true
        },
        //State
        lossOfUseState: "",
        excessProtectorState: "",
        AAMembershipState: "",
        violenceState: "",
        forcedATMState: "",
        personalAccidentState: "",
        stationAccommodationState: "",
        lossOfPersonalEffectState: ""
    });

    const [values, setValues] = useState({
        extensionValues: [
            { name: "lossOfUse", value: 0 },
            { name: "excessProtector", value: 0 },
            { name: "AAMembership", value: 0 },
            { name: "violence", value: 0 },
            { name: "forcedATM", value: 0 },
            { name: "personalAccident", value: 0 },
            { name: "stationAccommodation", value: 0 },
            { name: "lossOfPersonalEffect", value: 0 }
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

        let newItem = values.extensionValues.filter(
            item => item.name === stateName && item.value !== 0
        );

        let extensionsObject = newItem[newItem.length - 1];
        extension.push(extensionsObject);

        handleAddExtensions(extension);
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
            extensionValues: [
                ...values.extensionValues.filter(item => item.name === stateName),
                { name: stateName, value: parseInt(event.target.value) }
            ]
        });
    };

    const handleToggle = stateName => {
        switch (stateName) {
            case "lossOfUse":
                setState({ ...state, lossOfUse: !state.lossOfUse });
                break;
            case "excessProtector":
                setState({ ...state, excessProtector: !state.excessProtector });
                break;
            case "AAMembership":
                setState({ ...state, AAMembership: !state.AAMembership });
                break;
            case "violence":
                setState({ ...state, violence: !state.violence });
                break;
            case "forcedATM":
                setState({ ...state, forcedATM: !state.forcedATM });
                break;
            case "personalAccident":
                setState({ ...state, personalAccident: !state.personalAccident });
                break;
            case "stationAccommodation":
                setState({
                    ...state,
                    stationAccommodation: !state.stationAccommodation
                });
                break;
            case "lossOfPersonalEffect":
                setState({
                    ...state,
                    lossOfPersonalEffect: !state.lossOfPersonalEffect
                });
                break;
            default:
                break;
        }
    };
    const {
        lossOfUse,
        excessProtector,
        AAMembership,
        violence,
        forcedATM,
        personalAccident,
        stationAccommodation,
        lossOfPersonalEffect,
        lossOfUseState,
        excessProtectorState,
        AAMembershipState,
        violenceState,
        forcedATMState,
        personalAccidentState,
        stationAccommodationState,
        lossOfPersonalEffectState,
        button
    } = state;
    const {
        lossOfUseButton,
        excessProtectorButton,
        AAMembershipButton,
        violenceButton,
        forcedATMButton,
        personalAccidentButton,
        stationAccommodationButton,
        lossOfPersonalEffectButton
    } = button;
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={lossOfUse}
                    handleToggle={handleToggle}
                    toggleStateName={"lossOfUse"}
                    stateName={"lossOfUse"}
                    toggleLabel={"Loss Of Use"}
                    textLabel={"Loss Of Use"}
                    textId={"lossOfUse"}
                    errorState={lossOfUseState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={lossOfUseButton}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={excessProtector}
                    handleToggle={handleToggle}
                    toggleStateName={"excessProtector"}
                    stateName={"excessProtector"}
                    toggleLabel={"Excess Protector"}
                    textLabel={"Excess Protector"}
                    textId={"excessProtector"}
                    errorState={excessProtectorState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={excessProtectorButton}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={AAMembership}
                    handleToggle={handleToggle}
                    toggleStateName={"AAMembership"}
                    stateName={"AAMembership"}
                    toggleLabel={"AA Membership"}
                    textLabel={"AA Membership"}
                    textId={"AAMembership"}
                    errorState={AAMembershipState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={AAMembershipButton}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={violence}
                    handleToggle={handleToggle}
                    toggleStateName={"violence"}
                    stateName={"violence"}
                    toggleLabel={"Political Violence and Terrorism"}
                    textLabel={"Political Violence"}
                    textId={"violence"}
                    errorState={violenceState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={violenceButton}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={forcedATM}
                    handleToggle={handleToggle}
                    toggleStateName={"forcedATM"}
                    stateName={"forcedATM"}
                    toggleLabel={"Forced ATM Withdrawal"}
                    textLabel={"Forced Withdrawal"}
                    textId={"forcedATM"}
                    errorState={forcedATMState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={forcedATMButton}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={personalAccident}
                    handleToggle={handleToggle}
                    toggleStateName={"personalAccident"}
                    stateName={"personalAccident"}
                    toggleLabel={"Personal Accident"}
                    textLabel={"Personal Accident"}
                    textId={"personalAccident"}
                    errorState={personalAccidentState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={personalAccidentButton}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={stationAccommodation}
                    handleToggle={handleToggle}
                    toggleStateName={"stationAccommodation"}
                    stateName={"stationAccommodation"}
                    toggleLabel={"Out of Station Accommodation"}
                    textLabel={" Accommodation"}
                    textId={"stationAccommodation"}
                    errorState={stationAccommodationState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={stationAccommodationButton}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <DynamicComponent
                    state={lossOfPersonalEffect}
                    handleToggle={handleToggle}
                    toggleStateName={"lossOfPersonalEffect"}
                    stateName={"lossOfPersonalEffect"}
                    toggleLabel={"Loss Of Personal Effect"}
                    textLabel={"Personal Effect"}
                    textId={"lossOfPersonalEffect"}
                    errorState={lossOfPersonalEffectState}
                    change={change}
                    handleButtonClick={handleButtonClick}
                    handleRemoveButton={handleRemoveButtonClick}
                    buttonState={lossOfPersonalEffectButton}
                />
            </GridItem>
        </GridContainer>
    );
}
export default withStyles(styles)(Extensions);
