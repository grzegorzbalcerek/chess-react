import React from 'react';

function ChessApp() {
  return (
    <div>
        <h2>Chess</h2>
        <AppBoard/>
    </div>
  );
}

export default ChessApp;

const columnLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const rows = [1,2,3,4,5,6,7,8]

function AppBoard() {
    return (
        <table>
            <ColumnLabels/>
            {rows.map(row => <Row row={row}/>)}
            <ColumnLabels/>
        </table>
    )
}

function ColumnLabels() {
    return (
        <tr>
          <td> </td>
          {columnLabels.map(label => <td>{label}</td>)}
          <td> </td>
        </tr>
    )
}

function Row(props: {row: number}) {
    return (
        <tr>
            <td>{props.row}</td>
            {columnLabels.map(label => <td>{'.'}</td>)}
            <td>{props.row}</td>
        </tr>
    )
}
