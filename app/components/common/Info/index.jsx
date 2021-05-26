import React from "react";
import {Tooltip} from "fronton-react";
import InfoIcon from "../icons/InfoIcon";
import Container from "./Container";

function Index({title}) {
    return (
        <Tooltip title={title}>
            <Container>
                <InfoIcon size="16.67px" />
            </Container>
        </Tooltip>
    );
}

export default Index;