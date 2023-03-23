<h1>Matrix Operations API</h1>
This API performs various operations on a matrix contained in a CSV file uploaded by the user.

<h2>Requirements</h2>

Node.js (v12 or higher)
npm (v6 or higher)

<h2>Installation</h2>
Clone the repository: git clone https://github.com/your-username/matrix-operations-api.git
Install dependencies: npm install

<h2>Usage</h3>
Start the server: npm start
Send a POST request to the /echo endpoint with a CSV file attached and the desired operation in the op query parameter.

<h2>Example Request</h2>
````
curl -X POST http://127.0.0.1:8080/echo\?op\=invert 
    -H "Content-Type: multipart/form-data" 
    -F file=@path/to/your/file.csv
````

<h2>Available Operations</h2>

`invert`: Inverts the matrix.

`flatten`: Flattens the matrix to a one-dimensional array.

`sum`: Calculates the sum of all the elements in the matrix.

`multiply`: Calculates the product of all the elements in the matrix.

`echo` (default): Echoes the matrix back as a CSV string.


License
This project is licensed under the MIT License. See the LICENSE file for details.
