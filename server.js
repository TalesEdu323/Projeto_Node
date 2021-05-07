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



app.use(static('public'))
app.listen(8088, () =>{ console.log('Server running on port 5050')})