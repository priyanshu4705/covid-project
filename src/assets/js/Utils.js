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
  let ydata;
  const reqdata = data.timeline[type];

  for(let i in reqdata){
    if(lastpoint){
      ydata = reqdata[i] - lastpoint;
      let point = {
        x:i,
        y: ydata < 0 ? 0 : ydata,
      }
      chartData.push(point);
    }
    lastpoint = reqdata[i];
  }

  return chartData;
}

export const colorpallet = {
  cases:{
    backgroundColor:"",
    color:"#555",
  },
  recovered:{
    backgroundColor:"rgba(125, 215, 29, 0.4)",
    color:"green",
  },
  deaths:{
    backgroundColor:"rgba(204, 16, 52, 0.5)",
    color:"#CC1034",
  }
}