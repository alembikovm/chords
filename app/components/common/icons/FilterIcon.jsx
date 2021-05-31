import React from "react";
import {Icon} from 'fronton-react';

function FilterIcon(props) {
    return (
        <Icon {...props}>
            <svg fill="none" viewBox="0 0 20 20"><path d="M11.667 4.167h1.666v1.666h2.5a.833.833 0 010 1.667h-2.5v1.667h-1.666v-5z" fill="#333"/><path d="M10.833 7.5H4.167a.833.833 0 110-1.667h6.666V7.5z" fill="#333"/><path d="M7.5 10.833h1.667V12.5h6.666a.833.833 0 010 1.667H9.167v1.666H7.5v-5z" fill="#333"/><path d="M6.667 14.167h-2.5a.833.833 0 110-1.667h2.5v1.667z" fill="#333"/></svg>
        </Icon>
    );
}

export default FilterIcon;