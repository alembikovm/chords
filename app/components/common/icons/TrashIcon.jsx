import React from "react";
import {Icon} from "fronton-react";

function TrashIcon(props) {
    return (
        <Icon {...props}>
            <svg fill="none" viewBox="0 0 12 16"><path fillRule="evenodd" clipRule="evenodd" d="M8.916 1.333L8.083.5H3.916l-.833.833H.167V3h11.666V1.333H8.916zm-6.25 12.5h6.667V5.5H2.666v8.333zm-1.666 0c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667v-10H1v10z" fill="#464C5C"/></svg>
        </Icon>
    );
}

export default TrashIcon;