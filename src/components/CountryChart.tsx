import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/indexes';
import { getCountryDetails, reducerSlice } from '../store/reducer';
import  Chart  from 'react-charts';

const CountryChart: any = () => {
    const dispatch = useAppDispatch();
    useEffect(() => { 
        dispatch(reducerSlice.actions.setScreenDetail('Country By Charts'));
        dispatch(getCountryDetails())
    }, [])
    const dataForChart = useSelector((state: RootState) => state.reducer.dataForChart);

    const data = {
            label: 'Series 1',
            data: dataForChart.map(elem => elem[0].population)
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
        <div>
            { console.log(data)}
            {data && <Chart data={data} series={series} axes={axes} tooltip />}

      <br />
      {/* <SyntaxHighlighter code={sourceCode} /> */}
        </div>
    );
}

export default CountryChart;