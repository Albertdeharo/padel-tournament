import * as React from "react";
import { useTable } from "react-table";

function FirstTable() {

  const customData = [
    {
        "first_name":"Pampli",
        "category":"A",
    },
    {
        "first_name":"Alba",
        "category":"B",
    },
    {
        "first_name":"Albert",
        "category":"C",
    }];
  const data = React.useMemo(() => customData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Category",
        accessor: "category",
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

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