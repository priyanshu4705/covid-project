import React from "react";
import { Line } from "react-chartjs-2";
import { colorpallet } from '../assets/js/Utils'

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
            },
        ],
    },
};

function LineGraph({ data, caseType = "cases" }) {

    const message = (
        <>
            <h2 style={{ color: "red" }}>Ooops!!</h2>
            <h1 style={{ marginTop: "2rem" }}>{data.message}</h1>
        </>
    );

    const chart = (
        <div style={{ height: "calc(100vh - 25rem)", paddingTop:"1rem" }}>
            {data?.length > 0 && (
                <Line
                    options={options}
                    data={{
                        datasets: [
                            {
                                label: caseType,
                                backgroundColor: colorpallet[caseType].backgroundColor,
                                borderColor: colorpallet[caseType].color,
                                data: data,
                            },
                        ],
                    }}
                />
            )}
        </div>
    );
    return (
        data.message ? message : chart
    );
}

export default LineGraph;
