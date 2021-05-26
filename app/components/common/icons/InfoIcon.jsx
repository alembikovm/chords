import React from "react";
import {Icon} from 'fronton-react';

function InfoIcon(props) {
    return (
        <Icon {...props}>
            <svg fill="none" viewBox="0 0 18 18"><path fillRule="evenodd" clipRule="evenodd" d="M8.166 4.833h1.667V6.5H8.166V4.833zm0 3.334h1.667v5H8.166v-5zM9 .667A8.336 8.336 0 00.667 9c0 4.6 3.733 8.333 8.333 8.333S17.333 13.6 17.333 9 13.6.667 9 .667zm0 15A6.675 6.675 0 012.333 9 6.676 6.676 0 019 2.333 6.676 6.676 0 0115.666 9 6.675 6.675 0 019 15.667z" fill="#CED0D6"/></svg>
        </Icon>
    );
}

export default InfoIcon;