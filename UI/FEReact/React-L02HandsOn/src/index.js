import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = () => {
    return (
            <table>
                <tr>
                    <th>State</th>
                    <th>Population</th>
                    <th>Capital</th>
                </tr>
                <tr>
                    <td>Idaho</td>
                    <td></td>
                    <td>Boise</td>
                </tr>
                <tr>
                    <td>Tennessee</td>
                    <td>6.651 million</td>
                    <td>Nashville</td>
                </tr>
                <tr>
                    <td>Maine</td>
                    <td>1.331 million</td>
                    <td>Agusta</td>
                </tr>
                <tr>
                    <td>Wisconsin</td>
                    <td>5.779 million</td>
                    <td>Madison</td>
                </tr>
            </table>
    );
}

ReactDOM.render(stateInfo(), document.getElementById('root'));