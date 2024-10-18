import React, { useState } from 'react';
import { useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

const BarChartComponent = () => {
    // https://api.worldbank.org/v2/countries/USA/indicators/SP.POP.TOTL?per_page=5000&format=json
    // https://api.worldbank.org/v2/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json
    // https://api.worldbank.org/v2/countries/CHN/indicators/SP.POP.TOTL?per_page=5000&format=json

    const [fetchDate, setFetchDate] = useState([]);
    const [valueOfCountry, setValueCountry] = useState([]);
    const { t, i18n } = useTranslation();

    const handleFetchData = async () => {
        await Promise.all([
            fetch('https://api.worldbank.org/v2/countries/USA/indicators/SP.POP.TOTL?per_page=5000&format=json'),
            fetch('https://api.worldbank.org/v2/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json'),
            fetch('https://api.worldbank.org/v2/countries/CHN/indicators/SP.POP.TOTL?per_page=5000&format=json'),
        ]).then((responses) => {
            // return responses.filter((response) => response.status === 'fulfilled').map((data) => console.log(data.value.json(), 'data-value')) // if allSettled 
            Promise.all(responses.map((response) => {
                const fetchedData = response.json();
                console.log(fetchedData, 'fetchedData')
                return fetchedData;
            })).then((data) => {
                data.map((values) => {
                    const periodOfYears = values[1].slice(0, 6).map((value) => {
                        return value.date;
                    })
                    setFetchDate(periodOfYears);
                })
                const contries = data.map((countries) => {
                    return {
                        data:
                            countries[1].slice(0, 6).map((countryValue) => {
                                return countryValue.value;
                            })
                    };
                })
                setValueCountry(contries);

            })
        })
    }

    const handleFetchData1 = async () => {
        await Promise.allSettled([
            fetch('https://api.worldbank.org/v2/countries/USA/indicators/SP.POP.TOTL?per_page=5000&format=json'),
            fetch('https://api.worldbank.org/v2/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json'),
            fetch('https://api.worldbank.org/v2/countries/CHN/indicators/SP.POP.TOTL?per_page=5000&format=json'),
        ]).then((response) => response.map((data) => {
            if (data.status === 'fulfilled') {
                console.log(data.value.json(), 'settled-data');
            }
        }))
    }

    useEffect(() => {
        handleFetchData();
        handleFetchData1();
    }, [])

    console.log(valueOfCountry, 'vaueofcoun')

    return (
        <div>
            <h1>{t("Hello world")}</h1>
            <div className='flex flex-col'>
                <button onClick={() => i18n.changeLanguage('hindi')}>Change to Hindi</button>
                <button onClick={() => i18n.changeLanguage('fr')}>Change to French</button>
                <button onClick={() => i18n.changeLanguage('en')}>Change to English</button>
            </div>
            <BarChart
                series={valueOfCountry}
                height={290}
                xAxis={[{ data: fetchDate.slice(0, 6).map((date) => date), scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
        </div>
    )
}

export default BarChartComponent;