import React from "react";
import {Icon} from 'fronton-react';

function SearchIcon(props) {
    return (
        <Icon {...props}>
            <svg fill="none" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M20.49 19l-4.988-5h-.794l-.276-.274A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16a6.47 6.47 0 004.225-1.566l.276.274v.792l4.998 4.991L20.49 19zM14 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="#fff"/></svg>
        </Icon>
    );
}

export default SearchIcon;