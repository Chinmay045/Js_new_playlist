
const express = require('express')
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000
const { mergePDFs } = require('./testpdf.js')

app.use('/static', express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'template/index.html'));
})


app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    console.log(req.files)
    await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    // res.send({ data: req.files })
    res.redirect('/static/merged.pdf')
})

app.listen(port, () => {
    console.log(`Example app listening on port https://localhost${port}`)
})