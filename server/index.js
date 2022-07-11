// Isso é para habilitar importações de CSS em JavaScript
// Sem isso o Node apresenta erro ao tentar interpretar o CSS via JS
require('ignore-styles')

// Babel compilará (automaticamente) os arquivos em tempo de execução
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')
