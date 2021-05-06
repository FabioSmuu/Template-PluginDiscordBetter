# Repositorio sobre o desenvolvimento de plugins em [BetterDiscord](https://github.com/BetterDiscord/Installer/releases/tag/v1.0.0-beta).

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/smuu)

### Configurações obrigatórias:
- Nome do plugin [a](b)
- Descrição do plugin [a](b)
- Versão do plugin [a](b)
- Autor/Desenvolvedor [a](b)

### Funções reservadas e API:

| Nomenclatura | Descrição |
| - | - |
| load | Executa seu escopo quando o plugin é instalado.
| start | Executa seu escopo na inicialização do plugin.
| stop | Executa seu escopo na finalização do plugin.
| BdApi | API par manipulação do BetterDiscord.

### Como criar um comando:
Seguindo o exemplo do arquivo [comando.js](/handler/comandos/Exemplo/comando.js) podemos ver como um comando é criado.

```js
module.exports.info = {
    cmd: ['exemplo', 'e'], //Irá funcionar usando prefixo + nome  (!exemplo ou !e)
    roles: ['perm-bot', 'exemplo1', 'exemplo2'],
    users: ['Fabio', 'Smuu'],
    deleted: true,
    dm: false
}

module.exports.comando = async (client, msg, args) => {
    //Aqui é onde ocorre a magica, pois, tudo o que for criado neste bloco será executado ao chamar o comando.
}
```

Como esta descrito no exemplo acima, temos de configurar as roles e os users que poderam executar o comando.

Estes valores são configurados na [config.json](/handler/config.json).

**Obrigado pela sua atenção!**
