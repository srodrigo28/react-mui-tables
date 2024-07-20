import axios from "axios"
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react"

export function TableAxios(){
    const url = "http://localhost:3000/produtos";

    // 1 - hooks
    const [products, setProducts] = useState([]);

    // 2 - hooks
    useEffect(() => {
        getData()
    }, [])
    
    // 3 - hooks
    const getData = async () => {
        await axios.get(url).then((response) => {
            const data = response.data
            // console.log(data)
            setProducts(data)
        })
    }

    // 4 - hooks
    const columns = [
        { name: "id",        label: "id"},
        { name: "descricao", label: "Descricao" },
        { name: "valor",     label: "Valor" },
        { name: "data",      label: "Data" }
    ]

    // 5 - hooks
    return(
        <>
            <MUIDataTable
                title="Contas Axios"
                data={products}
                columns={columns}
            />
        </>
    )
}