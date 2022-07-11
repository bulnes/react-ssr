import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDomServer from 'react-dom/server'

import App from '../src/App'

const PORT = 8000

const app = express()

// Apenas para as rotas exclusivas na raiz
app.use('^/$', (req, res) => {
  const entryFile = path.resolve(__dirname, '..', 'build', 'index.html')

  fs.readFile(entryFile, 'utf-8', (err, rawIndexFileContent) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Something wrong happened')
    }

    return res.send(
      rawIndexFileContent.replace(
        '<div id="root"></div>', 
        `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
      )
    )
  })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`)
})
