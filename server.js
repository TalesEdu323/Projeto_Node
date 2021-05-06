const cors = require('cors')
const express = require('express')
const app = express ()
app.use(cors())

app.get('/' , (req, res) => {
    return res.json([{
        name:'qualquer coisa'},
       {name: 'Qualquer fasfas coisa'}
])
})


app.listen('8088')