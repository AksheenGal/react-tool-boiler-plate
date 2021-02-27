import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/indexes';
import { getCountryDetails, reducerSlice } from '../store/reducer';
import { Chart } from 'react-charts';
import { PieChart } from 'react-minimal-pie-chart';

const CountryChart: any = () => {
    const dispatch = useAppDispatch();
    useEffect(() => { 
        dispatch(reducerSlice.actions.setScreenDetail('Country By Charts'));
        dispatch(getCountryDetails())
    }, [])
    const dataForChart = useSelector((state: RootState) => state.reducer.dataForChart);

    const data = [{
            label: 'Country population',
            data: dataForChart.map(elem => [elem[0].name, elem[0].population])
  }]
  
  const pieData = dataForChart.map((elem) => { 
    return { 
      title: elem[0].name,
      value: elem[0].population,
      color: getRandomColor()
    }
  })

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


      const series = React.useMemo(
        () => ({
          type: 'bar'
        }),
        []
      )
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'bottom' },
          { position: 'left', type: 'linear', stacked: false }
        ],
        []
      )
  return (
      <div style={{}}>
        <div style={{height: '400px',width: '50%', display: 'inline-block'}}>
            { console.log(data)}
            {data && <Chart data={data} series={series} axes={axes} tooltip />}
        </div>
        <PieChart style={{height: '400px',width: '50%'}} data={pieData} segmentsShift={(index) => (index === 0 ? 1 : 0.5)}/>
      </div>
    );
}

export default CountryChart;