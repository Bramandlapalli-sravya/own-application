import React from "react";

function EmiCalculator() {

    const [totalCost, setTotalCost] = React.useState<any>(0);
    const [interest, setInterest] = React.useState<any>(0);
    const [processingFee, setProcessingFee] = React.useState<any>(0);
    const [downPayment, setDownPayment] = React.useState<any>(0);
    const [loanPerMonth, setLoanPerMonth] = React.useState<any>(0);

    return (
        <div>
            <div className="flex flex-col">
                <div>
                    <span>Total cost of rate: </span>
                    <input type="text" id="totalCost" value={totalCost} onChange={(e) => setTotalCost(e.target.value)} />
                </div>
                <div>
                    <span>Interest Rate(in %) : </span>
                    <input type="text" id="totalCost" value={interest} onChange={(e) => setInterest(e.target.value)} />
                </div>
                <div>
                    <span>processing fee(in %) : </span>
                    <input type="text" id="totalCost" value={processingFee} onChange={(e) => { setProcessingFee(e.target.value) }} />
                </div>
                <div>
                    <span>Down Payment : </span>
                    <input type="range" id="totalCost" min={0} max={totalCost} value={downPayment} onChange={(e) => { setDownPayment(e.target.value) }} />
                </div>
                <div>
                    <span>Loan Per Month : </span>
                    <input type="range" id="totalCost" value={loanPerMonth} min={0} max={totalCost} onChange={(e) => { setLoanPerMonth(e.target.value) }} />
                </div>
            </div>
        </div>
    )
}

export default EmiCalculator;