(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{215:function(a,e,s){a.exports=s.p+"assets/img/helpmenu.63deede6.png"},225:function(a,e,s){"use strict";s.r(e);var o=s(2),i=Object(o.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Commands")]),a._v(" "),o("p",[a._v("Understanding how the commands work in the project is super simple. All you have to do is type "),o("code",[a._v("/guilds")]),a._v(" and you will be presented with a very nice-looking help menu!")]),a._v(" "),o("p",[o("img",{attrs:{src:s(215),alt:"HelpMenu"}})]),a._v(" "),o("hr"),a._v(" "),o("h3",{attrs:{id:"aliases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[a._v("#")]),a._v(" Aliases")]),a._v(" "),o("p",[a._v("Since Guilds is such a big project, we knew that it can get repetitive typing out full commands each time so we have made the follow aliases work so you don't have to type everything out each time. Use whichever you want!")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Possible Options")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("/guilds")])]),a._v(" "),o("tr",[o("td",[a._v("/guild")])]),a._v(" "),o("tr",[o("td",[a._v("/g")])])])]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"action-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#action-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Action Commands")]),a._v(" "),o("p",[a._v("Action commands control the user's choice to proceed with some of the commands in the plugin. We know that some people get curious when playing with commands and we've designed the commands that cause bigger changes to ask for a confirmation.")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild cancel")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.cancel"),o("br"),a._v("\nIf a user has an active action, it will cancel it and not proceed further with what they were trying to do.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild confirm")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.confirm"),o("br"),a._v("\nIf a user has an active action, it will confirm the action and continue with what they were attempting to do.")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"admin-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#admin-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Admin Commands")]),a._v(" "),o("p",[a._v("Admin commands are basically self-understandable. They give you the power over how the plugin is used and can do many things to modify how the plugin works.")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin addplayer <player> <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nAllows you to put a player into a guild by force.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin give <player> <amount>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guids.command.admin"),o("br"),a._v("\nAllows you to give upgrade tickets to players.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin prefix <guild> <prefix>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nAllows you to change the prefix of a guild by force.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin remove <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nAllows you to remove a guild as a whole by force.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin removeplayer <player>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nAllows you to remove a player from their guild by force.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin rename <guild> <new name>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nAllows you change the current name of a guild by force.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin spy")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nToggles the ability to see all guild chat.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin status <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nToggle the status of a guild by force.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin update-languages")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nRe-download the language files for the plugin")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin upgrade <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nForce upgrade a guild's tier.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild admin vault <guild> <vault #>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nOpen any guild's vault")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild reload")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.admin"),o("br"),a._v("\nReloads the configuration files.")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"ally-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ally-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Ally Commands")]),a._v(" "),o("p",[a._v("The ally commands are a set of commands that let guild members control different actions such as listing their current allies or adding and removing them!")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild ally accept <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.ally.accept"),o("br"),a._v("\nThis command allows you to accept an ally invite from another guild if there is one currently pending!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild ally add <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.ally.add\nThis command allows you to send an ally request to another guild!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild ally decline <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.ally.decline"),o("br"),a._v("\nThis command allows you to decline and incoming ally invite from another guild!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild ally list")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.ally.list"),o("br"),a._v("\nThis command allows you to list all the allies of your guild!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild ally remove <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.ally.remove"),o("br"),a._v("\nThis command allows you to remove any of your current allies!")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"bank-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bank-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Bank Commands")]),a._v(" "),o("p",[a._v("One of the cool features about this plugin is that it allows each guild to have a centralized bank that all players in a guild can work together to grow!")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild bank balance")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.bank.balance"),o("br"),a._v("\nAllows you to check the current balance of your guild bank!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild bank deposit <amount>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.bank.deposit"),o("br"),a._v("\nAllows you to put money from your balance into your guild bank!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild bank withdraw <amount>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.bank.withdraw"),o("br"),a._v("\nAllows you to take money from your guild bank and put it back into your personal balance!")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"claim-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#claim-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Claim Commands")]),a._v(" "),o("p",[a._v('Another cool feature of this plugin is the ability to make claims! This is ultilized through the WorldGuard Hook and allows players to "claim" land for their guild members to use.')]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild claim")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.claim"),o("br"),a._v("\nCreate a guild claim surrounding you!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild unclaim")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.unclaim"),o("br"),a._v("\nGet rid of your current guild claim!")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"code-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Code Commands")]),a._v(" "),o("p",[a._v("This feature is actually a new one at the time of writing this wiki. The idea came to me when I realized I wanted to allow a group of my friends to join my guild but at the time I didn't know all their usernames. This feature allows you to create an invite code with the option of one-time-usage or multiple-uses and you can give it to anyone, then they can use that code to join the guild at any time!")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild code create [uses]")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.code.create"),o("br"),a._v("\nCreate an invite code for your guild that can be used by anyone!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild code delete <code>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.code.delete"),o("br"),a._v("\nRemove an invite code from your guild")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild code info <code>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.code.info"),o("br"),a._v("\nAllows you to retrieve specific information about a guild code!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild code list")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.code.list"),o("br"),a._v("\nAllows you to list all your current guild codes!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild code redeem <code>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.code.redeem"),o("br"),a._v("\nAllows you to redeem an invite code!")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"gui-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gui-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" GUI Commands")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild buff")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.buff"),o("br"),a._v("\nOpens the guild buff GUI.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild list")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.list"),o("br"),a._v("\nOpens the guild list GUI.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild vault <#>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.vault"),o("br"),a._v("\nOpens a guild vault GUI.")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"homes-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#homes-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Homes Commands")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild delhome")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.delhome"),o("br"),a._v("\nDelete your guild home.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild home")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.home"),o("br"),a._v("\nTeleport to your guild home.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild sethome")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.sethome"),o("br"),a._v("\nSet your guild home to your current location.")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"management-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#management-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Management Commands")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild create <name> [prefix]")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.create"),o("br"),a._v("\nCreate a new guild!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild delete")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.delete"),o("br"),a._v("\nDeletes your current guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild kick <player>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.kick"),o("br"),a._v("\nKicks a player from your guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild prefix <prefix>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.prefix"),o("br"),a._v("\nSet a new prefix for your guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild rename <name>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.rename"),o("br"),a._v("\nSet a new name for your guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild status")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.status"),o("br"),a._v("\nToggles the status of your guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild transfer <player>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.transfer"),o("br"),a._v("\nTransfer your guild to another person.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild upgrade")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.upgrade"),o("br"),a._v("\nUpgrade your guild's tier.")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"member-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#member-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Member Commands")]),a._v(" "),o("p",[a._v("Commands handled by members of the server / guild.")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild accept <name>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.accept"),o("br"),a._v("\nAccepted a guild invite from a guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild check")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.check"),o("br"),a._v("\nChecks to see if a user has any pending guild invites.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/ guild decline <name>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.decline"),o("br"),a._v("\nDeclines a pending guild invite from a guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild demote <player>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.demote"),o("br"),a._v("\nDemote a player in your guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild invite <player>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.invite"),o("br"),a._v("\nInvite a player to your guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild language <language>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.language"),o("br"),a._v("\nSet the plugin language to your choosing!")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild leave")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.leave"),o("br"),a._v("\nLeave your current guild.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild promote <player>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.promote"),o("br"),a._v("\nPromote a player in your guild.")]),a._v(" "),o("hr"),a._v(" "),o("h2",{attrs:{id:"misc-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#misc-commands","aria-hidden":"true"}},[a._v("#")]),a._v(" Misc Commands")]),a._v(" "),o("p",[a._v("Random commands that haven't been categorized yet.")]),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild chat")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.chat"),o("br"),a._v("\nToggles the guild chat.")]),a._v(" "),o("hr"),a._v(" "),o("p",[o("code",{staticClass:"command"},[a._v("/guild request <guild>")]),o("br"),a._v(" "),o("strong",[a._v("Permission")]),a._v(": guilds.command.request"),o("br"),a._v("\nSend a request to join a guild.")])])},[],!1,null,null,null);e.default=i.exports}}]);