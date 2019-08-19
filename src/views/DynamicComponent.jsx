import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import GridItem from "components/Grid/GridItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";
const styles = {
    ...registerPageStyle,
    ...userProfileStyles
};
function DynamicComponent(props) {
    const {
        classes,
        state,
        handleToggle,
        toggleStateName,
        stateName,
        errorState,
        toggleLabel,
        textLabel,
        textId,
        change,
        handleButtonClick,
        handleRemoveButton,
        buttonState
    } = props;
    return (
        <GridContainer justify={"center"}>
            <GridItem xs={12} sm={12} md={12}>
                <FormControlLabel
                    classes={{
                        root: classes.checkboxLabelControl,
                        label: classes.checkboxLabel
                    }}
                    control={
                        <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(`${toggleStateName}`)}
                            checkedIcon={<Check className={classes.checkedIcon} />}
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                            }}
                        />
                    }
                    label={<span>{toggleLabel}</span>}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                {state ? (
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={8}>
                            <FormControl fullWidth className={classes.selectFormControl}>
                                <TextField
                                    id={`${textId}`}
                                    label={`${textLabel}`}
                                    margin="normal"
                                    variant="outlined"
                                    error={`${errorState}` === "error"}
                                    onChange={event => change(event, `${stateName}`, "number")}
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Button
                                className={classes.updateProfileButton}
                                color={buttonState ? "twitter" : "warning"}
                                onClick={
                                    buttonState
                                        ? () => handleButtonClick(stateName)
                                        : () => handleRemoveButton(stateName)
                                }
                            >
                                {buttonState ? "ADD" : "Remove"}
                            </Button>
                        </GridItem>
                    </GridContainer>
                ) : null}
            </GridItem>
        </GridContainer>
    );
}
export default withStyles(styles)(DynamicComponent);
