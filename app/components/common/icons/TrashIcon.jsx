import React from "react";
import {Icon} from "fronton-react";

function TrashIcon(props) {
    return (
        <Icon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#E6615E" fillRule="evenodd" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" clipRule="evenodd"/></svg>
        </Icon>
    );
}

export default TrashIcon;
