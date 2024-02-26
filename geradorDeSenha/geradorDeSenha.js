function gerarSenha(comprimento) {
  let caracteres =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%&()*+,-./:;=>[?]^_`{|}~‚„ˆ‘’“”"'
  let senha = ''

  for (let i = 0; i < comprimento; i++) {
    let randoindex = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[randoindex]
  }
  return senha
}

console.log(gerarSenha(32))
