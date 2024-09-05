# Desenvolvimento de plugins em [BetterDiscord](https://github.com/BetterDiscord/Installer/releases/tag/v1.0.0-beta).

> AVISO: Não estou ciente se ainda funciona em 2024 a diante.


> Para ver as logs do plugin, pressione: `CTRL` + `SHIFT` + `I`

> Salve sempre seu arquivo com a extensão `.plugin.js`

> BetterDiscord possui suporte a Nodejs!

### Configurações do plugin:
- Nome do plugin [linha 2](/TemplatePlugin.plugin.js#L2) & [linha 19](/TemplatePlugin.plugin.js#L19)
- Descrição do plugin [linha 6](/TemplatePlugin.plugin.js#L6) & [linha 27](/TemplatePlugin.plugin.js#L27)
- Versão do plugin [linha 5](/TemplatePlugin.plugin.js#L5) & [linha 31](/TemplatePlugin.plugin.js#L31)
- Autor/Desenvolvedor [linha 3](/TemplatePlugin.plugin.js#L3) & [linha 23](/TemplatePlugin.plugin.js#L23)
- ID do autor [linha 4](/TemplatePlugin.plugin.js#L4)
- GitHub do autor [linha 7](/TemplatePlugin.plugin.js#L7)
- Source do plugin [linha 8](/TemplatePlugin.plugin.js#L8)
- Botão de doação [linha9](/TemplatePlugin.plugin.js#L9)

### Funções reservadas e API:

| Nomenclatura | Descrição |
| - | - |
| [load](/TemplatePlugin.plugin.js#L34) | Executa seu escopo quando o plugin é instalado.
| [start](/TemplatePlugin.plugin.js#L38) | Executa seu escopo na inicialização do plugin.
| [stop](/TemplatePlugin.plugin.js#L42) | Executa seu escopo na finalização do plugin.
| [BdApi](/TemplatePlugin.plugin.js#L39) | API par manipulação do BetterDiscord.

#### Exemplo de uso da API:
> Na [linha 40](/TemplatePlugin.plugin.js#L40) será inserido uma falha de estilo css quando iniciar o plugin.

> Já na [linha 44](/TemplatePlugin.plugin.js#L44) esta mesma folha de estilo, será removida quando desativar o plugin. 

**Obrigado pela sua atenção!**
