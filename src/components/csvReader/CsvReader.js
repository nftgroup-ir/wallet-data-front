import { useState } from 'react';


export default function CsvReader() {
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    const [data, setData] = useState()


    const loginButton = {
        padding: '20px',
        backgroundColor: "#dbdbdb",
        border: 'none',
        borderRadius: "30px",
        margin: '50px'
    }
    const table = {
        borderTop: '1px solid black'
    }
    function chekEmpty(params) {
        if (params.address !== '') {
            return params
        }
    }

    function sendToServer(array) {
        array = array.filter(chekEmpty)
        fetch('http://localhost:8000/api/csv/', {
            method: 'POST',
            body: JSON.stringify(array),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data) {
                    console.log('kardam')
                } else {
                    alert('nashod')
                }
            })
    }


    const processCSV = (str, delim = ',') => {
        const headers = str.slice(0, str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n') + 1).split('\n');

        const newArray = rows.map(row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })
        sendToServer(newArray)
        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();


        reader.onload = function (e) {
            const text = e.target.result;
            processCSV(text)
        }

        reader.readAsText(file);
    }

    return (
        <form id='csv-form'>
            <input
                style={{ marginTop: '30px' }}
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br />
            <button
                style={loginButton}
                onClick={(e) => {
                    e.preventDefault()
                    if (csvFile) submit()
                }}
            >
                Submit
            </button>
            <br />
            <br />
            {csvArray.length > 0 ?
                <>
                    <table>
                        <thead>
                            <th>address</th>
                            <th>email</th>
                            <th>point</th>
                        </thead>
                        <tbody >
                            {
                                csvArray.map((item, i) => (
                                    <tr key={i}>
                                        <td >{item.address}</td>
                                        <td>{item.email}</td>
                                        <td>{item.points}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <h3>{JSON.stringify(data)}</h3>
                </> : null}
        </form>
    );

}