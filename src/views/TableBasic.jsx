import MUIDataTable from "mui-datatables";

const columns = ["id", "Nome", "Sexo", "cidade", "Estado"]

const data = [
    [1, "Maria", "Feminino", "Goiânia", "GO"],
    [2,"Flavia", "Feminino", "Goiânia", "GO"],
    [3,"Adriano", "Masculino", "Goiânia", "GO"],
    
    [4, "Andressa", "Feminino", "Brasilia", "DF"],
    [5, "Danilo", "Masculino", "Brasilia", "DF"],
    [6, "Cristina", "Feminino", "Brasilia", "DF"],
]
const options = { filterType: 'checkbox'}

export function TableBasic(){
    return(
        <MUIDataTable
            title="Table title"
            data={data}
            columns={columns}
            options={options}
        />
    )
}
