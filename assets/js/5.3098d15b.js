(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{215:function(a,e,o){a.exports=o.p+"assets/img/helpmenu.63deede6.png"},221:function(a,e,o){"use strict";o.r(e);var i=o(2),t=Object(i.a)({},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),i("p",[a._v("Understanding how the commands work in the project is super simple. All you have to do is type "),i("code",[a._v("/guilds")]),a._v(" and you will be presented with a very nice-looking help menu!")]),a._v(" "),i("p",[i("img",{attrs:{src:o(215),alt:"HelpMenu"}})]),a._v(" "),i("hr"),a._v(" "),i("h3",{attrs:{id:"aliases"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[a._v("#")]),a._v(" Aliases")]),a._v(" "),i("p",[a._v("Since Guilds is such a big project, we knew that it can get repetitive typing out full commands each time so we have made the follow aliases work so you don't have to type everything out each time. Use whichever you want!")]),a._v(" "),i("table",[i("thead",[i("tr",[i("th",[a._v("Possible Options")])])]),a._v(" "),i("tbody",[i("tr",[i("td",[a._v("/guilds")])]),a._v(" "),i("tr",[i("td",[a._v("/guild")])]),a._v(" "),i("tr",[i("td",[a._v("/g")])])])]),a._v(" "),i("hr"),a._v(" "),i("h2",{attrs:{id:"understanding"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#understanding","aria-hidden":"true"}},[a._v("#")]),a._v(" Understanding")]),a._v(" "),i("p",[a._v("// Add stuff later")]),a._v(" "),i("h2",{attrs:{id:"action-commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#action-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Action Commands")]),a._v(" "),i("p",[a._v("Action commands control the user's choice to proceed with some of the commands in the plugin. We know that some people get curious when playing with commands and we've designed the commands that cause bigger changes to ask for a confirmation.")]),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild cancel")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.cancel"),i("br"),a._v("\nIf a user has an active action, it will cancel it and not proceed further with what they were trying to do.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild confirm")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.confirm"),i("br"),a._v("\nIf a user has an active action, it will confirm the action and continue with what they were attempting to do.")]),a._v(" "),i("hr"),a._v(" "),i("h2",{attrs:{id:"admin-commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#admin-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Admin Commands")]),a._v(" "),i("p",[a._v("Admin commands are basically self-understandable. They give you the power over how the plugin is used and can do many things to modify how the plugin works.")]),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin addplayer <player> <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nAllows you to put a player into a guild by force.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin prefix <guild> <prefix>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nAllows you to change the prefix of a guild by force.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin remove <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nAllows you to remove a guild as a whole by force.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin removeplayer <player>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nAllows you to remove a player from their guild by force.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin rename <guild> <new name>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nAllows you change the current name of a guild by force.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin spy")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nToggles the ability to see all guild chat.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin status <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nToggle the status of a guild by force.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin upgrade <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nForce upgrade a guild's tier.")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild admin vault <guild> <vault #>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),i("br"),a._v("\nOpen any guild's vault")]),a._v(" "),i("hr"),a._v(" "),i("h2",{attrs:{id:"ally-commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ally-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Ally Commands")]),a._v(" "),i("p",[a._v("The ally commands are a set of commands that let guild members control different actions such as listing their current allies or adding and removing them!")]),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild ally accept <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.ally.accept"),i("br"),a._v("\nThis command allows you to accept an ally invite from another guild if there is one currently pending!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild ally add <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.ally.add\nThis command allows you to send an ally request to another guild!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild ally decline <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.ally.decline"),i("br"),a._v("\nThis command allows you to decline and incoming ally invite from another guild!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild ally list")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.ally.list"),i("br"),a._v("\nThis command allows you to list all the allies of your guild!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild ally remove <guild>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.ally.remove"),i("br"),a._v("\nThis command allows you to remove any of your current allies!")]),a._v(" "),i("hr"),a._v(" "),i("h2",{attrs:{id:"bank-commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bank-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Bank Commands")]),a._v(" "),i("p",[a._v("One of the cool features about this plugin is that it allows each guild to have a centralized bank that all players in a guild can work together to grow!")]),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild bank balance")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.bank.balance"),i("br"),a._v("\nAllows you to check the current balance of your guild bank!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild bank deposit <amount>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.bank.deposit"),i("br"),a._v("\nAllows you to put money from your balance into your guild bank!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild bank withdraw <amount>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.bank.withdraw"),i("br"),a._v("\nAllows you to take money from your guild bank and put it back into your personal balance!")]),a._v(" "),i("hr"),a._v(" "),i("h2",{attrs:{id:"claim-commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#claim-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Claim Commands")]),a._v(" "),i("p",[a._v('Another cool feature of this plugin is the ability to make claims! This is ultilized through the WorldGuard Hook and allows players to "claim" land for their guild members to use.')]),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild claim")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.claim"),i("br"),a._v("\nCreate a guild claim surrounding you!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild unclaim")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.unclaim"),i("br"),a._v("\nGet rid of your current guild claim!")]),a._v(" "),i("hr"),a._v(" "),i("h2",{attrs:{id:"code-commands"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Code Commands")]),a._v(" "),i("p",[a._v("This feature is actually a new one at the time of writing this wiki. The idea came to me when I realized I wanted to allow a group of my friends to join my guild but at the time I didn't know all their usernames. This feature allows you to create an invite code with the option of one-time-usage or multiple-uses and you can give it to anyone, then they can use that code to join the guild at any time!")]),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild code create [uses]")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.code.create"),i("br"),a._v("\nCreate an invite code for your guild that can be used by anyone!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild code delete <code>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.code.delete"),i("br"),a._v("\nRemove an invite code from your guild")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild code info <code>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.code.info"),i("br"),a._v("\nAllows you to retrieve specific information about a guild code!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild code list")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.code.list"),i("br"),a._v("\nAllows you to list all your current guild codes!")]),a._v(" "),i("hr"),a._v(" "),i("p",[i("code",{staticClass:"command"},[a._v("/guild code redeem <code>")]),i("br"),a._v(" "),i("strong",[a._v("Permission")]),a._v(": guilds.command.code.redeem"),i("br"),a._v("\nAllows you to redeem an invite code!")]),a._v(" "),i("hr")])},[],!1,null,null,null);e.default=t.exports}}]);