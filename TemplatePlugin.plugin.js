/**
 * @name TemplatePlugin
 * @author FabioSmuu
 * @authorId 837101681731960832
 * @version 1.0.0
 * @description Template de Plugin para Discord Better
 * @authorLink https://github.com/FabioSmuu
 * @source https://github.com/FabioSmuu/Template-PluginDiscordBetter
 */

module.exports = (async => {
	return class {
		constructor() {
		//...
		}

		getName() {
			return 'TemplatePlugin'
		}

		getAuthor() {
			return 'FabioSmuu'
		}

		getDescription() {
			return 'Template de Plugin para Discord Better'
		}

		getVersion() {
			return'1.0.0'
		}

		load () {
			console.log('Plugin carregado!')
		}

		start () {
			console.log('API: ', BdApi)
		}

		stop () {
			//...
		}
	}
})()