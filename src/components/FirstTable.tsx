import * as React from "react";
import { useTable } from "react-table";
import { useState } from "react";
import "./FirstTable.scss"

function FirstTable() {
  const customData = [
    {
        "name":"Pampli",
        "category":"A",
    },
    {
        "name":"Alba",
        "category":"B",
    },
    {
        "name":"Albert",
        "category":"C",
    }];
    const customColumns = [
      {
        Header: "Nom",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
      }
    ];
  const [dataWorking, setDataWorking] = useState(customData);
  const [columnsWorking, setColumnsWorking] = useState(customColumns);


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns:columnsWorking, data:dataWorking });

  return (
    <div className="table-container">
    <table {...getTableProps()}>
        <thead>
        {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                {column.render("Header")}
                </th>
            ))}
            </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
            prepareRow(row);
            return (
            <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
            </tr>
            );
        })}
        </tbody>
    </table>
    </div>
  );
}

export default FirstTable;