const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 5000;
const { DATABASE_URL } = process.env;



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on ${PORT}/`);
});