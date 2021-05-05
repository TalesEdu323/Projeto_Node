const express = require('express')
const app = express ()

app.get('/' , (req, res) => {
    return res.json([{
        name:'qualquer coisa'},
       {name: 'Qualquer coisa'}
])
})
s

app.listen('8088')