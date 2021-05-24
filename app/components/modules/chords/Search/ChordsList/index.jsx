import React from 'react';
import ChordsListWrapper from './ChordsListWrapper';
import ChordsListHeader from './ChordsListHeader';
import ChordsListMain from "./ChordsListMain";
import CheckboxContainer from "./CheckboxContainer";
import ChordsSelectedText from "./ChordsSelectedText";
import List from './List';
import {Pagination, PaginationItem} from "fronton-react";
import {Checkbox} from 'fronton-react';

class ChordsList extends React.Component {
    render() {
        return (
            <ChordsListWrapper>
                <ChordsListMain>
                    <ChordsListHeader>
                        <CheckboxContainer>
                            <Checkbox />
                        </CheckboxContainer>
                        <ChordsSelectedText>
                            0 связок выбрано
                        </ChordsSelectedText>
                    </ChordsListHeader>
                    <List/>
                </ChordsListMain>
                <Pagination
                    itemsCount={100}
                    itemsPerPage={10}
                    currentPage={1}
                    hidePrev={true}
                    hideNext={false}
                    prevText={"<"}
                    nextText={">"}
                    item={(value) =>
                        <PaginationItem onClick={() => console.log('pagination')}>
                            {value}
                        </PaginationItem>
                    }
                />
            </ChordsListWrapper>
        );
    }
}

export default ChordsList;