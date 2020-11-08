const express = require("express");
const connectDatabase = require('./config/db')

const app = express();

connectDatabase();

app.use(express.json({
    extended: false
}))

app.get("/", (req, res) => res.json({ msg: "Welcome to the jungle baby!!!" }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'))
app.use('/api/profiles', require('./routes/profiles'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
