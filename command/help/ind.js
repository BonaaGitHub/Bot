exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` πββοΈ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.eror = () =>{
	return` Yah eror`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}
β’ Total User : ${totalUser.length}

Mantep Bro, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner deck ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin deck ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup deck`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror deck !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group deck`
	}

exports.wait = () =>{
	return`β³ Sabar Deck ~`
	}
exports.ok = () =>{
	return` β Udh Deck ~`
	}
exports.welcome = () =>{
	return`Welkom Deck Ikutin Rules Grup Or Kik`
      }
exports.leave = () =>{
	return`Yahaha Keluar Beban Grup`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
β­ββ§
ββ’INFO BOTβ’
βVERSI : 6.66
βFITUR : 300
βCREATOR : Bona Yg Tamvan
βMODEL SCRIPT : BETA
βSUBSCRIBE CHANNEL zBlaze Deck
βhttps://bit.ly/ytzblaze
β°ββββββββββββββββ β³Ή

β­ββ¬£ *List Menu*
β β’ ${prefix}menu
β β’ ${prefix}help
β
β *Download*
β β’ ${prefix}play [query]
β β’ ${prefix}song [judul lagu]
β β’ ${prefix}pinterest [query]
β β’ ${prefix}ytmp3 [url]
β β’ ${prefix}ytmp4 [url]
β β’ ${prefix}cocofun [url]
β β’ ${prefix}ig [url]
β β’ ${prefix}igstalk
β β’ ${prefix}githubstalk
β β’ ${prefix}ytsearch [query]
β β’ ${prefix}mediafire [url]
β β’ ${prefix}tiktok [url]
β β’ ${prefix}tiktoknowm [url]
β β’ ${prefix}tiktokwm [url]
β β’ ${prefix}tiktokaudio [url]
β β’ ${prefix}soundcloud [url]
β β’ ${prefix}telesticker [url]
β
β *Wibu*
β β’ ${prefix}otaku
β β’ ${prefix}komiku
β β’ ${prefix}chara
β β’ ${prefix}rias
β β’ ${prefix}akeno
β β’ ${prefix}naruto
β β’ ${prefix}kaneki
β β’ ${prefix}rimuru
β β’ ${prefix}akira
β β’ ${prefix}kurama
β β’ ${prefix}dazai
β β’ ${prefix}miku
β β’ ${prefix}mikasa
β β’ ${prefix}eren
β β’ ${prefix}titan
β β’ ${prefix}levi
β β’ ${prefix}sakura
β β’ ${prefix}hinata
β β’ ${prefix}neji
β β’ ${prefix}shinobu
β β’ ${prefix}kurumi
β β’ ${prefix}rem
β β’ ${prefix}minato
β β’ ${prefix}jiraya
β β’ ${prefix}tsunade
β β’ ${prefix}kiba
β β’ ${prefix}boruto
β β’ ${prefix}sarada
β β’ ${prefix}sasuke
β β’ ${prefix}madara
β β’ ${prefix}obito
β β’ ${prefix}tanjiro
β β’ ${prefix}nezuko
β β’ ${prefix}luffy
β β’ ${prefix}zoro
β β’ ${prefix}sanji
β β’ ${prefix}gon
β β’ ${prefix}killua
β β’ ${prefix}sagiri
β β’ ${prefix}zenitsu
β β’ ${prefix}natsu
β β’ ${prefix}genos
β β’ ${prefix}saitama
β β’ ${prefix}inosuke
β β’ ${prefix}inori
β
β *Sfw Dan Nsfw*
β β’ ${prefix}waifu
β β’ ${prefix}husbu
β β’ ${prefix}loli
β β’ ${prefix}milf
β β’ ${prefix}cosplay
β β’ ${prefix}wallml
β β’ ${prefix}futanari
β β’ ${prefix}nekoh
β β’ ${prefix}anal
β β’ ${prefix}hentai
β β’ ${prefix}ahegao
β β’ ${prefix}ass
β β’ ${prefix}blowjob
β β’ ${prefix}bdsm
β β’ ${prefix}cuckold
β β’ ${prefix}cum
β β’ ${prefix}ero
β β’ ${prefix}femdom
β β’ ${prefix}foot
β β’ ${prefix}gangbang
β β’ ${prefix}glasses
β β’ ${prefix}masturbation
β β’ ${prefix}orgy
β β’ ${prefix}panties
β β’ ${prefix}pussy
β β’ ${prefix}things
β β’ ${prefix}yuri
β β’ ${prefix}neko
β
β *Asupan*
β β’ ${prefix}asupan
β β’ ${prefix}ukty
β β’ ${prefix}ghea
β β’ ${prefix}rikagusriani
β β’ ${prefix}bocil
β β’ ${prefix}santuy
β
β *Convert*
β β’ ${prefix}stiker [video/image]
β β’ ${prefix}semoji π
β β’ ${prefix}attp
β β’ ${prefix}ttp
β β’ ${prefix}toimg
β β’ ${prefix}smeme [text]
β β’ ${prefix}memegen [text|text2]
β β’ ${prefix}toptt
β β’ ${prefix}tomp3
β β’ ${prefix}tomp4
β β’ ${prefix}fast [video/vn]
β β’ ${prefix}tupai [video/vn]
β β’ ${prefix}vibra [video/vn]
β β’ ${prefix}tourl [image/video]
β β’ ${prefix}robot [video/vn]
β β’ ${prefix}slow [video/vn]
β β’ ${prefix}bass [video/vn]
β β’ ${prefix}nightcore [video/vn]
β
β *Education*
β β’ ${prefix}nuliskiri [text]
β β’ ${prefix}nuliskanan [text]
β β’ ${prefix}brainly [soal]
β β’ ${prefix}foliokiri [text]
β β’ ${prefix}foliokanan [text]
β β’ ${prefix}pantun
β 
β *Walpaper*
β β’ ${prefix}walpaper
β β’ ${prefix}teknologi
β β’ ${prefix}programmer
β β’ ${prefix}gamer
β β’ ${prefix}anime
β β’ ${prefix}muslim
β β’ ${prefix}cyber
β
β *Other*
β β’ ${prefix}ssweb
β β’ ${prefix}cekapikey [lolhuman]
β β’ ${prefix}delete
β β’ ${prefix}meme
β β’ ${prefix}readmore
β β’ ${prefix}infogempa
β β’ ${prefix}upswvideo
β β’ ${prefix}upswteks
β β’ ${prefix}upswimage
β β’ ${prefix}quotesanime
β β’ ${prefix}searchgc [link]
β β’ ${prefix}playstore [nama apk]
β
β *Islam*
β β’ ${prefix}kisahnabi
β β’ ${prefix}surah
β
β *Sound*
β β’ ${prefix}sound
β β’ ${prefix}sound1
β β’ ${prefix}sound2
β β’ ${prefix}sound3
β β’ ${prefix}sound4
β β’ ${prefix}sound5
β β’ ${prefix}sound6
β β’ ${prefix}sound7
β β’ ${prefix}sound8
β β’ ${prefix}sound9
β β’ ${prefix}sound10
β β’ ${prefix}sound11
β β’ ${prefix}sound12
β β’ ${prefix}sound13
β β’ ${prefix}sound14
β β’ ${prefix}sound15
β β’ ${prefix}sound16
β β’ ${prefix}sound17
β β’ ${prefix}sound18
β β’ ${prefix}sound19
β β’ ${prefix}sound20
β β’ ${prefix}sound21
β β’ ${prefix}sound22
β β’ ${prefix}sound23
β β’ ${prefix}sound24
β β’ ${prefix}sound25
β
β *Game*
β β’ ${prefix}tebakgambar 
β β’ ${prefix}suit
β β’ ${prefix}family100
β β’ ${prefix}caklontong
β β’ ${prefix}truth
β β’ ${prefix}dare
β β’ ${prefix}gaycek
β β’ ${prefix}sangecek
β β’ ${prefix}lesbicek
β β’ ${prefix}gantengcek
β β’ ${prefix}cantikcek
β β’ ${prefix}cantik
β β’ ${prefix}ganteng
β β’ ${prefix}jelek
β β’ ${prefix}goblok
β β’ ${prefix}bego
β β’ ${prefix}pinter
β β’ ${prefix}jago
β β’ ${prefix}nolep
β β’ ${prefix}monyet
β β’ ${prefix}babi
β β’ ${prefix}beban
β β’ ${prefix}baik
β β’ ${prefix}jahat
β β’ ${prefix}anjing
β β’ ${prefix}haram
β β’ ${prefix}kontol
β β’ ${prefix}pakboy
β β’ ${prefix}wibu
β β’ ${prefix}hebat
β β’ ${prefix}sadboy
β β’ ${prefix}sadgirl
β β’ ${prefix}apakah
β β’ ${prefix}kapankah
β β’ ${prefix}pakgirl
β β’ ${prefix}jadian
β
β *TeksPro*
β β’ ${prefix}blackpink text
β β’ ${prefix}neon text
β β’ ${prefix}greenneon text
β β’ ${prefix}advanceglow text
β β’ ${prefix}futureneon text
β β’ ${prefix}sandwriting text
β β’ ${prefix}sandsummer text
β β’ ${prefix}sandengraved text
β β’ ${prefix}metaldark text
β β’ ${prefix}neonlight text
β β’ ${prefix}holographic text
β β’ ${prefix}text1917 text
β β’ ${prefix}minion text
β β’ ${prefix}deluxesilver text
β β’ ${prefix}newyearcard text
β β’ ${prefix}bloodfrosted text
β β’ ${prefix}halloween text
β β’ ${prefix}jokerlogo text
β β’ ${prefix}fireworksparkle text
β β’ ${prefix}natureleaves text
β β’ ${prefix}bokeh text
β β’ ${prefix}toxic text
β β’ ${prefix}strawberry text
β β’ ${prefix}box3d text
β β’ ${prefix}roadwarning text
β β’ ${prefix}breakwall text
β β’ ${prefix}icecold text
β β’ ${prefix}luxury text
β β’ ${prefix}cloud text
β β’ ${prefix}summersand text
β β’ ${prefix}horrorblood text
β β’ ${prefix}thunder text
β β’ ${prefix}pornhub text1 text2
β β’ ${prefix}glitch text1 text2
β β’ ${prefix}avenger text1 text2
β β’ ${prefix}space text1 text2
β β’ ${prefix}ninjalogo text1 text2
β β’ ${prefix}marvelstudio text1 text2
β β’ ${prefix}lionlogo text1 text2
β β’ ${prefix}wolflogo text1 text2
β β’ ${prefix}steel3d text1 text2
β β’ ${prefix}wallgravity text1 text2
β
β *Photooxy*
β β’ ${prefix} shadow text
β β’ ${prefix} cup text
β β’ ${prefix} cup1 text
β β’ ${prefix} romance text
β β’ ${prefix} smoke text
β β’ ${prefix} burnpaper text
β β’ ${prefix} lovemessage text
β β’ ${prefix} undergrass text
β β’ ${prefix} love text
β β’ ${prefix} coffe text
β β’ ${prefix} woodheart text
β β’ ${prefix} woodenboard text
β β’ ${prefix} summer3d text
β β’ ${prefix} wolfmetal text
β β’ ${prefix} nature3d text
β β’ ${prefix} underwater text
β β’ ${prefix} golderrose text
β β’ ${prefix} summernature text
β β’ ${prefix} letterleaves text
β β’ ${prefix} glowingneon text
β β’ ${prefix} fallleaves text
β β’ ${prefix} flamming text
β β’ ${prefix} harrypotter text
β β’ ${prefix} carvedwood text
β β’ ${prefix} tiktok text1 text2
β β’ ${prefix} arcade8bit text1 text2
β β’ ${prefix} battlefield4 text1 text2
β β’ ${prefix} pubg text1 text2
β
β *Info*
β β’ ${prefix}owner
β β’ ${prefix}donasi
β β’ ${prefix}rules
β β’ ${prefix}daftar
β β’ ${prefix}creator
β β’ ${prefix}ping
β β’ ${prefix}sewabot
β
β *Owner*
β β’ ${prefix}bc [text]
β β’ ${prefix}bc2 [text]
β β’ ${prefix}leave
β β’ ${prefix}get [link]
β β’ ${prefix}shutdown
β β’ ${prefix}restart
β β’ ${prefix}buggc
β β’ ${prefix}join
β β’ ${prefix}setppbot
β β’ ${prefix}creategrup @tag
β β’ ${prefix}listgroup
β β’ ${prefix}block
β β’ ${prefix}unblock
β β’ ${prefix}setppbot
β β’ >
β β’ $
β β’  => 
β
β *Group*
β β’ ${prefix}antilink 1 / 0
β β’ ${prefix}antivirtex 1 / 0
β β’ ${prefix}hidetag [text]
β β’ ${prefix}linkgrup
β β’ ${prefix}setpp
β β’ ${prefix}grup open/close
β β’ ${prefix}add 628
β β’ ${prefix}tagall
β β’ ${prefix}kick @tag
β β’ ${prefix}setdesc [text] 
β β’ ${prefix}setname [text] 
β°ββ¬£
β­ββ§ BIG THANKS TO β§
ββ ORTU
ββ ZEEONE OFC (OWN SC)
ββ ALDI FAUZI (MASTAH)
ββ zBlaze (MALING)
β°ββββββββββββββββ β³Ή
`
	}