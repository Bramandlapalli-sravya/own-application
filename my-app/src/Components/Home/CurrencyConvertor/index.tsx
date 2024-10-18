import React, { useEffect, useState } from "react"
import { Dropdown } from "./Dropdown";
import { FaArrowsLeftRight } from "react-icons/fa6";

export const CurrencyConvertor = () => {

    //api.frankfurter.app/currencies    
    // api.frankfurter.app/latest?from=USD&to=INR

    const [currencies, setCurrencies] = useState<any>([]);
    const [amount, setAmount] = useState<number>(1);
    const [fromCurrency, setFromCurrency] = useState<string>("USD");
    const [toCurrency, setToCurrency] = useState<string>('INR');
    const [covertedAmount, setCovertedAmount] = useState<number>(0);
    const [fromFavorite, setFromFavorite] = useState<[] | any>([]);
    const [toFavorite, setToFavorite] = useState<[] | any>([]);

    const fetchCurrencies = async () => {
        try {
            const response = await fetch('https://api.frankfurter.app/currencies');
            const data = await response.json();
            setCurrencies(Object.keys(data));
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCurrencies();
    }, [])


    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const currencyConvert = async () => {
        if (!amount) return;
        try {
            const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await response.json();
            // console.log(data.rates);
            setCovertedAmount(data.rates[toCurrency]);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleFavorite = (currency, type) => {
        if (type === 'from') {
            setFromFavorite((prev) => {
                if (prev.includes(currency)) {
                    return prev.filter(fav => fav !== currency);
                } else {
                    return [...prev, currency];
                }
            });
        } else if (type === 'to') {
            setToFavorite((prevFavorites) => {
                if (prevFavorites.includes(currency)) {
                    return prevFavorites.filter(fav => fav !== currency);
                } else {
                    return [...prevFavorites, currency];
                }
            });
        }
    };



    const swapcurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    return (
        <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-large shadow-md">
            <h1 className="mb-5 text-2xl font-semibold text-gray-700">Curreny Converter </h1>

            <div className="flex items-end justify-center gap-4">
                <Dropdown className={'w-full'} currencies={currencies} currency={fromCurrency} setCurrency={setFromCurrency} handlefavorite={() => handleFavorite(fromCurrency, 'from')} title="From" favorites={fromFavorite} />
                {/* swap button */}
                <FaArrowsLeftRight style={{ width: 100, height: 24, marginBottom: 10, cursor: "pointer" }} onClick={swapcurrencies} />
                <Dropdown className={'w-full'} currencies={currencies} currency={toCurrency} setCurrency={setToCurrency} title="To" handlefavorite={() => handleFavorite(toCurrency, 'to')} favorites={toFavorite} />
            </div>
            <div>
                <label htmlFor="Amount" className="block text-sm font-medium text-gray-700">Amount: </label>
                <input id="Amount" type="number" value={amount} onChange={handleAmountChange} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus: outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="flex justify-end mt-6"><button className="px-5 py-2 bg-indigo-600 text-white rounded-md" onClick={currencyConvert}>Convert</button></div>
            <div>Coverted Amount: {covertedAmount}</div>
        </div>
    )
};

