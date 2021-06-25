import React from 'react';
import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import Button from "./Button";
import {Link as ReactRouterLink} from "react-router-dom";
import SearchIcon from "./icons/SearchIcon";
import NotFoundImage from "./images/not-found.png";
import ArrowIcon from "./icons/ArrowIcon";
import ClearIcon from "./icons/ClearIcon";
import useSearchString from "../../hooks/useSearchString";

const dropdownItems = [
    { id: 1, value: "sku", label: "SKU" },
    { id: 2, value: "division", label: "Отдел" },
    { id: 3, value: "subdivision", label: "Подотдел" },
    { id: 4, value: "type", label: "Тип" },
    { id: 5, value: "subtype", label: "Подтип" },
    { id: 6, value: "model", label: "Модель" },
];

function Search({
    disabled = false,
    onSearch
}) {
    const {searchString} = useSearchString();

    const autocompleteStyles = {
        container: (provided, state) => ({
            ...provided,
            width: 412,
        }),
        placeholder: (base) => ({
            ...base,
            margin: 0,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: 400,
        }),
        input: (provided) => ({
            ...provided,
            margin: 0,
            marginLeft: 162,
            fontSize: 18,
        }),
        noOptionsMessage: (base) => ({
            ...base,
            fontWeight: 500,
            fontSize: 18,
            padding: 0,
        }),
    };

    const dropdownStyles = {
        menu: (provided) => ({
            ...provided,
            width: "auto",
        }),

        container: (provided, state) => ({
            ...provided,
            width: 117,
        }),

        option: (provided) => ({
            ...provided,
            width: 160,
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.12px",
            textAlign: "left",
            cursor: "pointer",
            paddingLeft: 16,
            paddingTop: 12,
            paddingBottom: 12,
        }),

        control: (provided) => ({
            ...provided,
            border: "none",
            background: "none",
            width: 160,
        }),

        valueContainer: (provided) => ({
            ...provided,
            height: 32,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 4,
            backgroundColor: "#E8E9EB",
            borderRadius: 4,
        }),

        singleValue: (provided) => ({
            ...provided,
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.12px",
        }),
    };

    const SearchButton = ({ innerProps }) => (
        <Button
            {...innerProps}
            as={ReactRouterLink}
            to="/chords/main"
            style={{ width: 40, height: 40, borderRadius: "0px 4px 4px 0px" }}
            iconOnly
            disabled={disabled}
            onClick={onSearch}
        >
            <SearchIcon size="24px" />
        </Button>
    );

    const NoOptionsMessage = (props) => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 20,
                    paddingBottom: 20,
                }}
            >
                <img src={NotFoundImage} style={{ width: 91, marginBottom: 24 }} />

                <components.NoOptionsMessage {...props}>
                    <span>Ничего не найдено</span>
                </components.NoOptionsMessage>
            </div>
        );
    };

    const SingleValueControl = ({ children, ...props }) => {
        return (
            <components.SingleValue {...props}>
                <span>{`Найти\xa0${children}`}</span>
                <span style={{ marginLeft: 10 }}>
          <ArrowIcon />
        </span>
            </components.SingleValue>
        );
    };

    return (
        <div style={{position: 'relative'}}>
            <AsyncSelect
                styles={autocompleteStyles}
                components={{
                    DropdownIndicator: SearchButton,
                    IndicatorSeparator: () => null,
                    ClearIndicator: () => null,
                    NoOptionsMessage: NoOptionsMessage,
                }}
                placeholder="Введи SKU" // searchBy
                value={searchString}
            />

            <div style={{ position: "absolute", top: 2, left: 0 }}>
                <Select
                    options={dropdownItems}
                    styles={dropdownStyles}
                    defaultValue={dropdownItems[0]}
                    isSearchable={false}
                    // menuIsOpen
                    components={{
                        IndicatorSeparator: () => null,
                        Placeholder: () => null,
                        SingleValue: SingleValueControl,
                        DropdownIndicator: () => null,
                    }}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: "#F2F3F5",
                            primary: "#464C5C",
                        },
                    })}
                />
            </div>

            <Button
                style={{
                    background: "transparent",
                    position: "absolute",
                    top: 5,
                    right: 30,
                }}
                onClick={() => setSearchString("")}
            >
                <ClearIcon width={10} height={10} />
            </Button>
        </div>
    );
}

export default Search;
