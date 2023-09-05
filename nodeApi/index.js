const  express = require('express');
var sqlite = require('sqlite3')
const  cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Allow all origins
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 5000;
var db = new sqlite.Database('../database.sqlite')

app.get('/', (req, res)=> {
    console.log("requested");
    db.all('SELECT * FROM users', function(err, rows) {
        console.log(rows)
        res.send(rows)
    })
})


app.post('/post',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    console.log(req);
     db.run(`INSERT INTO Users (name, email) VALUES (?,?)`,[name,email], function (err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    })
    res.send(`A row has been inserted with rowid ${this.lastID}`)
})

app.listen(port, function() {
    console.log('Listening on port '+port)
}
)

