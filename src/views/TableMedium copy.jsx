import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "id",
        label: "Código",
        options: { filter: true, sort: true }
    },
    {
        name: "produto",
        label: "Produto",
        options: { filter: true, sort: true }
    },
    {
        name: "categoria",
        label: "Caetegoria",
        options: { filter: true, sort: true }
    },
    {
        name: "qtd",
        label: "Qtd",
        options: { filter: true, sort: true }
    },
    {
        name: "valor",
        label: "Valor",
        options: { filter: true, sort: true }
    },
];

const data = [
 {id: 1, produto: "TV Smart Samsung 55", categoria: "TV Smart", qtd: 55, valor: "R$ 2.300,00" },
 {id: 2, produto: "TV Smart Sony 65", categoria: "TV Smart", qtd: 20, valor: "R$ 3.700,00" },
 {id: 3, produto: "Notebook Samsung core i5", categoria: "Notebook", qtd: 37, valor: "R$ 2.700,00" },
 {id: 4, produto: "Notebook Dell core i7", categoria: "Notebook", qtd: 27, valor: "R$ 5.300,00" },
];

const options = {
  filterType: 'checkbox',
};

export function TableMedium2(){
    return(
        <div className="container">
            <MUIDataTable
                title={"Produtos React Mui"}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    )
}