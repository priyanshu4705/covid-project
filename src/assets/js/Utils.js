export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const buildGlobalChartData = (data, caseType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[caseType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }
  return chartData;
};

export const buildCountryChartData = (data, type="cases") =>{
  if(data.message){
    return data;
  }

  let chartData = [];
  let lastpoint;
  const reqdata = data.timeline[type];

  for(let i in reqdata){
    if(lastpoint){
      let point = {
        x:i,
        y:reqdata[i] - lastpoint,
      }
      chartData.push(point);
    }
    lastpoint = reqdata[i];
  }

  return chartData;
}