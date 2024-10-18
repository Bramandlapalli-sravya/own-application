import React, { useEffect } from "react";
import { PageStyles } from "../TopNavigation/styles.ts";
import Foodilicious from "../Home/Foodilicious.tsx";
import EmployeeDisplayPurejs from "../Home/EmployeeDisplayPurejs.js";
import Pagination from "./Pagination.tsx";
import Timer from "./Timer.js";
import EmiCalculator from "./EmiCalculator.tsx";
import PasswordGenerator from "./PasswordGenerator.tsx";
import ProgressBar from "./Progressbar.tsx";
import FunctionApp from "./Progressbar.tsx";
import { Grid } from "@mui/material";
import GridLights from "../Home/GridLights.tsx";
import LikeButton from "./LikeButton.tsx";
import LoadMoreData from "./LoadMoreData.tsx";
import DarkLightTheme from "./DarkLightTheme.tsx";
import { ThemeProvider } from "../../hooks/useThemeHook.js";
import RestAPIReqMethods from "./RestAPIReqMethods.tsx";
import { API, ContextAPI } from "./ContextAPI.js";
import Otp from "./Otp/Otp.tsx";
import MultiSelectSearch from "./MultiSelectSearch.tsx";
import DeliverySteeperStatus from "./DeliverySteeperStatus.tsx";
import { UseThrottleComponent } from "./UseThrottleComponent.tsx";
import { QuizQuestions } from "./QuizQuestions/QuizQuestions.tsx";
import SelectedGrid from "./SelectedGrid/Grid.tsx";
import { CurrencyConvertor } from "./CurrencyConvertor/index.tsx";
import { NotesComponent } from "./NotesComponent/index.jsx";
import { HabitTracker } from "../Home/HabitTracker/index.tsx";
import { TicTac } from "./TicTac/index.tsx";
import Anagram from "../FrontendPrograms/Anagram.tsx";
import Notification from "./Notification/index.tsx";
import useNotification from '../../hooks/useNotification.jsx';
import { AutoComplete } from "./AutoSuggestions/autocomplete.jsx";
import FormValidationInterview from "../InterviewQuestions/FormValidationInterview.tsx";
import SearchSuggestions from "../InterviewQuestions/SearchSuggestions/index.tsx";
import NestedComments from "./NestedComments/Components/NestedComments.jsx";
import commentsData from "./NestedComments/Data/comments.json";
import BarChartComponent from "./BarChartComponent/index.tsx";

import { useState, Suspense } from "react";
// import "./styles.css";
import SearchFilterTable from "./SearchFilterTable/SearchFilterTable.tsx";
import Counter from "./Counter/index.tsx";
import GuessTheNumber from "./GuessTheNumber/index.tsx";
import Accordion from "./Accordion/index.tsx";
import MyOwnReduxToolkitProvider from "../../MyOwnReduxToolkitProvider/MyOwnReduxToolkitProvider.js";
import { StringTransformer } from "./StringTransformer/index.tsx";
import TelephoneFormatter from "./TelephoneFormatter/index.tsx";
import Accessibility from "./AccessibiltyInterview/index.tsx";
import ARIACombobox from "./AccessibiltyInterview/index.tsx";



function Home() {

    // const GetColor = () => {
    //     const { colorValue, ChangeColor } = API();

    //     return (
    //         <>
    //             <div>This is color: {colorValue}</div>
    //             <button onClick={ChangeColor}>Click</button>
    //         </>
    //     )
    // }
    // console.log(color, 'color');

    // const { triggerNotification, NotificationComponent } = useNotification('bottom-left');


    const fetchSuggestions = async (query) => {
        const response = await fetch(
            `https://dummyjson.com/recipes/search?q=${query}`
        );
        const data = await response.json();
        console.log(data.recipes, "data");
        return data.recipes;
    };

    const [searchValue, setSearchValue] = useState("");
    const [searchTheInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClick = () => {
        setSearchInput(searchValue);
    };

    console.log(searchTheInput, "searchTheInput");

    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);



    return (
        <div className="w-full h-full">
            {/* <Form/> */}
            {/* <Foodilicious /> */}
            {/* <EmployeeDisplay/> this is the React with TypeScript version of the EmployeeDisplay component */}
            {/* <EmployeeDisplayPurejs /> this is the React with Javascript version of the EmployeeDisplayPureJS component */}
            {/* <Pagination /> */}
            {/* <Timer /> */}
            {/* <EmiCalculator/> */}
            {/* <PasswordGenerator /> */}
            {/* <ProgressBar /> */}
            {/* <GridLights /> */}
            {/* <LikeButton /> */}
            {/* <LoadMoreData /> */}
            {/* <ThemeProvider>
                <DarkLightTheme />
            </ThemeProvider> */}
            {/* <RestAPIReqMethods /> */}
            {/* <ContextAPI>
                <div>
                    <GetColor />
                </div>
            </ContextAPI> */}
            {/* <Otp /> */}
            {/* <MultiSelectSearch /> */}
            {/* <DeliverySteeperStatus /> */}
            {/* calling a function or api or component for every delay time we provided */}
            {/* <UseThrottleComponent /> */}
            {/* <QuizQuestions /> */}
            {/* <SelectedGrid /> */}
            {/* <CurrencyConvertor /> */}
            {/* <NotesComponent /> */}
            {/* using redux toolkit */}
            {/* <HabitTracker /> */}
            {/* <TicTac /> */}
            {/* <Anagram /> */}
            {/* Toast Messages */}
            {/* <button onClick={() => triggerNotification({ type: 'success', message: 'file sent success', duration: '10000' })}>Click Success</button>
            <button onClick={() => triggerNotification({ type: 'error', message: 'file failed', duration: '10000' })}>Click Error</button>
            {NotificationComponent} */}
            {/* Toast Messages */}
            {/* <AutoComplete
                // staticData={<></>}
                placeholder={'Enter Recipe'}
                fetchSuggestions={fetchSuggestions}
                dataKey={"name"}
                customLoading={<>Loading Recipes...</>}
                onSelect={() => { }}
                onChange={() => { }}
                onBlur={() => { }}
                onFocus={() => { }}
                customStyles={{}}
            /> */}
            {/* Frontend System Designs Questions */}
            {/* <FormValidationInterview /> */}
            {/* <SearchSuggestions /> */}
            {/* <BarChartComponent /> */}
            {/* <NestedComments
                comments={commentsData}
                onSubmit={() => { }}
                onEdit={() => { }}
                onDelete={() => { }}
            /> */}
            {/* <div className="App">
                <input type={"search"} value={searchValue} onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
                <SearchFilterTable handleClick={searchTheInput} />
            </div> */}
            {/* Frontend Mini Challenges */}
            {/* <Counter /> */}
            {/* <Suspense fallback={<div>Loading....</div>}> */}
            {/* <GuessTheNumber /> */}
            {/* </Suspense> */}
            {/* <Accordion /> */}
            {/* <MyOwnReduxToolkitProvider/> */}
            {/* <StringTransformer /> */}
            {/* <TelephoneFormatter /> */}
            {/* <Accessibility /> */}
            {/* <ARIACombobox /> */}
        </div>
    )
}

export default Home;