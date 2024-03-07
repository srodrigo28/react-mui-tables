import MUIDataTable from "mui-datatables";
import users from "./../base/users.json"
import { BarChart } from '@mui/x-charts/BarChart';

import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const columns = [
    {
        name: "id",
        label: "Código",
        options: { filter: true, sort: true }
    },
    {
        name: "nome",
        label: "nome",
        options: { filter: true, sort: true }
    },
    {
        name: "sexo",
        label: "sexo",
        options: { filter: true, sort: true }
    },
    {
        name: "serie",
        label: "serie",
        options: { filter: true, sort: true }
    },
    {
        name: "status",
        label: "status",
        options: { filter: true, sort: true }
    },
];

const options = {  filterType: 'checkbox', sort: true };

const series2 = [
    {
      type: 'bar',
      stack: '',
      yAxisKey: 'eco',
      data: [2, 5, 3, 4, 1],
    },
    {
      type: 'bar',
      stack: '',
      yAxisKey: 'eco',
      data: [5, 6, 2, 8, 9],
    },
    {
      type: 'line',
      yAxisKey: 'pib',
      color: 'red',
      data: [1000, 1500, 3000, 5000, 10000],
    },
  ];

export function TableJson(){
    return(
        <>
            <h1 className="mb-5">Mui Datatables Exemplo</h1>
            <MUIDataTable
            
                title={"Produtos React Mui"}
                data={users}
                columns={columns}
                options={options}
            />
            {/* Exemplo Gráfico 1 */}
            <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: ['sexo', 'serie', 'status'],
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: [2, 5, 3],
                    },
                ]}
                width={500}
                height={300}
            />
            {/* Exemplo Gráfico 2 */}
            <ChartContainer
            // https://mui.com/x/react-charts/getting-started/
            series={series2}
            width={500}
            height={400}
            xAxis={[
                {
                id: 'years',
                data: [2010, 2011, 2012, 2013, 2014],
                scaleType: 'band',
                valueFormatter: (value) => value.toString(),
                },
            ]}
            yAxis={[
                {
                id: 'eco',
                scaleType: 'linear',
                },
                {
                id: 'pib',
                scaleType: 'log',
                },
            ]}
            >
            <BarPlot />
            <LinePlot />
            <ChartsXAxis label="Years" position="bottom" axisId="years" />
            <ChartsYAxis label="Results" position="left" axisId="eco" />
            <ChartsYAxis label="PIB" position="right" axisId="pib" />
            </ChartContainer>
        </>
    )
}