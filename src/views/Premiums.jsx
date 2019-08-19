import React from "react";
import Extensions from "./Extensions";
import withStyles from "@material-ui/core/styles/withStyles";
import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import Accordion from "components/Accordion/Accordion.jsx";
import Benefits from "./Benefits";
import GridItem from "../components/Grid/GridItem";

class Premiums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            benefits: null,
            extensions: null
        };
    }

    handleAddBenefits = event => {
        this.setState({ benefits: event });
    };

    handleAddExtensions = event => {
        this.setState({ extensions: event });
    };

    render() {
        return (
            <GridItem xs={6} sm={6 } md={6}>
            <Accordion
                active={-1}
                collapses={[
                    {
                        title: "Add Additional Benefits",
                        content: (
                            <Benefits handleAddBenefits={this.handleAddBenefits} />
                        )
                    },
                    {
                        title: "Add Other Extensions",
                        content: (
                            <Extensions handleAddExtensions={this.handleAddExtensions} />
                        )
                    }
                ]}
            />
            </GridItem>
        );
    }
}

export default withStyles(registerPageStyle)(Premiums);
