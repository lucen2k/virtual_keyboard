/*** This file is dynamically generated ***
█████▄ ▄████▄   █████▄ ▄████▄ ██████   ███████▄ ▄████▄ █████▄ ██ ██████ ██  ██
██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██     ██  ██
██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██▀▀   ▀▀▀▀██
█████▀ ▀████▀   ██  ██ ▀████▀   ██     ██ ██ ██ ▀████▀ █████▀ ██ ██     █████▀
*/

/* Japanese Hiragana Keyboard Layout
* from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdJapan.html
*/
jQuery.keyboard.layouts["ms-Japanese Hiragana"] = {
	"name" : "ms-Japanese Hiragana",
	"lang" : ["ja"],

	// Hiragana
	"normal" : [
		"\u308d:Ro \u306c:Nu \u3075:Hu \u3042:A \u3046:U \u3048:E \u304a:O \u3084:Ya \u3086:Yu \u3088:Yo \u308f:Wa \u307b:Ho \u3078:He {bksp}",
		"{tab} \u305f:Ta \u3066:Te \u3044:I \u3059:Su \u304b:Ka \u3093:N \u306a:Na \u306b:Ni \u3089:Ra \u305b:Se \u309b \u309c \u3080:Mu",
		"\u3061:Ti \u3068:To \u3057:Si \u306f:Ha \u304D:Ki \u304f:Ku \u307e:Ma \u306e:No \u308a:Ri \u308c:Re \u3051:Ke {enter}",
		"{shift} \u3064:Tu \u3055:Sa \u305d:So \u3072:Hi \u3053:Ko \u307f:Mi \u3082:Mo \u306d:Ne \u308b:Ru \u3081:Me {shift}",
		"{accept} {space} {meta3} {meta1:Kana} {cancel}"
	],
	"shift" : [
		"\u308d:Ro \u306c:Nu \u3075:Hu \u3041:a \u3045:u \u3047:e \u3049:o \u3083:ya \u3085:yu \u3087:yo \u3092:Wo \u30fc \u3078:He {bksp}",
		"{tab} \u305f:Ta \u3066:Te \u3043:i \u3059:Su \u304b:Ka \u3093:N \u306a:Na \u306b:Ni \u3089:Ra \u305b:Se \u300c \u300d \u3080:Mu",
		"\u3061:Ti \u3068:To \u3057:Si \u306f:Ha \u304D:Ki \u304f:Ku \u307e:Ma \u306e:No \u308a:Ri \u308c:Re \u3051:Ke {enter}",
		"{shift} \u3063:tu \u3055:Sa \u305d:So \u3072:Hi \u3053:Ko \u307f:Mi \u3082:Mo \u3001 \u3002 \u30fb {shift}",
		"{accept} {space} {meta3} {meta1:Kana} {cancel}"
	],
	// English - half width (normal)
	// \u5168 全 = full width active; switch to half width
	// \u534a 半 = half width active; switch to full width
	"meta1" : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; : {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {space} {default:Eng} {meta2:\u534a:full} {cancel}"
	],
	"meta1-shift" : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		"A S D F G H J K L + * {enter}",
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {space} {default:Eng} {meta2:\u534a:full} {cancel}"
	],
	// English - full width
	"meta2" : [
		"\uff40 \uff11 \uff12 \uff13 \uff14 \uff15 \uff16 \uff17 \uff18 \uff19 \uff10 \uff0d \uff1d {bksp}",
		"{tab} \uff51 \uff57 \uff45 \uff52 \uff54 \uff59 \uff55 \uff49 \uff4f \uff50 \uff3b \uff3d \uffe5",
		"\uff41 \uff53 \uff44 \uff46 \uff47 \uff48 \uff4a \uff4b \uff4c \uff1b \uff07 {enter}",
		"{shift} \uff5a \uff58 \uff43 \uff56 \uff42 \uff4e \uff4d \uff0c \uff0e \uff0f {shift}",
		"{accept} {space} {default:Eng} {meta1:\u5168:half} {cancel}"
	],
	"meta2-shift" : [
		"\uff5e \uff01 \uff20 \uff03 \uff04 \uff05 \uff3e \uff06 \uff0a \uff08 \uff09 \uff3f \uff0b {bksp}",
		"{tab} \uff31 \uff37 \uff25 \uff32 \uff34 \uff39 \uff35 \uff29 \uff2f \uff30 \uff5b \uff5d \uff5c",
		"\uff21 \uff33 \uff24 \uff26 \uff27 \uff28 \uff2a \uff2b \uff2c \uff1a \uff02 {enter}",
		"{shift} \uff3a \uff38 \uff23 \uff36 \uff22 \uff2e \uff2d \uff1c \uff1e \uff1f {shift}",
		"{accept} {space} {meta3:Eng} {meta1:\u5168:half} {cancel}"
	],
	// Katakana full width
	"meta3" : [
		"\u30ed:Ro \u30cc:Nu \u30d5:Hu \u30a2:A \u30a6:U \u30a8:E \u30aa:O \u30e4:Ya \u30e6:Yu \u30e8:Yo \u30ef:Wa \u30db:Ho \u30d8:He {bksp}",
		"{tab} \u30bf:Ta \u30c6:Te \u30a4:I \u30b9:Su \u30ab:Ka \u30f3:N \u30ca:Na \u30cb:Ni \u30e9:Ra \u30bb:Se \u309b \u309c \u30e0:Mu",
		"\u30c1:Ti \u30c8:To \u30b7:Si \u30cf:Ha \u30ad:Ki \u30af:Ku \u30de:Ma \u30ce:No \u30ea:Ri \u30ec:Re \u30b1:Ke {enter}",
		"{shift} \u30c4:Tu \u30b5:Sa \u30bd:So \u30d2:Hi \u30b3:Ko \u30df:Mi \u30e2:Mo \u30cd:Ne \u30eb:Ru \u30e1:Me {shift}",
		"{accept} {space} {default} {meta2} {meta4:\u5168:half} {cancel}"
	],
	"meta3-shift" : [
		"\u30ed:Ro \u30cc:Nu \u30d5:Hu \u30a1:a \u30a5:u \u30a7:e \u30a9:o \u30e3:ya \u30e5:yu \u30e7:yo \u30f2:Wo \u30fc \u30d8:He {bksp}",
		"{tab} \u30bf:Ta \u30c6:Te \u30a3:i \u30b9:Su \u30ab:Ka \u30f3:N \u30ca:Na \u30cb:Ni \u30e9:Ra \u30bb:Se \u300c \u300d \u30e0:Mu",
		"\u30c1:Ti \u30c8:To \u30b7:Si \u30cf:Ha \u30ad:Ki \u30af:Ku \u30de:Ma \u30ce:No \u30ea:Ri \u30ec:Re \u30b1:Ke {enter}",
		"{shift} \u30c3:tu \u30b5:Sa \u30bd:So \u30d2:Hi \u30b3:Ko \u30df:Mi \u30e2:Mo \u3001 \u3002 \u30fb {shift}",
		"{accept} {space} {default} {meta2} {meta4:\u5168:half} {cancel}"
	],
	// Katakana half width
	"meta4" : [
		"\uff9b:Ro \uff87:Nu \uff8c:Hu \uff71:A \uff73:U \uff74:E \uff75:O \uff94:Ya \uff95:Yu \uff96:Yo \uff9c:Wa \uff8e:Ho \uff8d:He {bksp}",
		"{tab} \uff80:Ta \uff83:Te \uff72:I \uff7d:Su \uff76:Ka \uff9d:N \uff85:Na \uff86:Ni \uff97:Ra \uff7e:Se \uff9e \uff9f \uff91:Mu",
		"\uff81:Ti \uff84:To \uff7c:Si \uff8a:Ha \uff77:Ki \uff78:Ku \uff8f:Ma \uff89:No \uff98:Ri \uff9a:Re \uff79:Ke {enter}",
		"{shift} \uff82:Tu \uff7b:Sa \uff7f:So \uff8b:Hi \uff7a:Ko \uff90:Mi \uff93:Mo \uff88:Ne \uff99:Ru \uff92:Me {shift}",
		"{accept} {space} {default} {meta1} {meta3:\u534a:full} {cancel}"
	],
	"meta4-shift" : [
		"\uff9b:Ro \uff87:Nu \uff8c:Hu \uff67:a \uff69:u \uff6a:e \uff6b:o \uff6c:ya \uff6d:yu \uff6e:yo \uff66:Wo \uff70 \uff8d:He {bksp}",
		"{tab} \uff80:Ta \uff83:Te \uff68:i \uff7d:Su \uff76:Ka \uff9d:N \uff85:Na \uff86:Ni \uff97:Ra \uff7e:Se \u300c \u300d \uff91:Mu",
		"\uff81:Ti \uff84:To \uff7c:Si \uff8a:Ha \uff77:Ki \uff78:Ku \uff8f:Ma \uff89:No \uff98:Ri \uff9a:Re \uff79:Ke {enter}",
		"{shift} \uff6f:tu \uff7b:Sa \uff7f:So \uff8b:Hi \uff7a:Ko \uff90:Mi \uff93:Mo \u3001 \u3002 \u30fb {shift}",
		"{accept} {space} {default} {meta1} {meta3:\u534a:full} {cancel}"
	]
};


// Keyboard Language
// please update this section to match this language and email me with corrections!
// hu = ISO 639-1 code for Hungarian
// ***********************
jQuery.keyboard.language.hu = {
	language: 'Magyar (Hungarian)',
	display : {
		'a'      : '\u2714:Rendben (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Rendben:Rendben (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'T\u00f6r\u00f6l:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'M\u00e9gsem:Cancel (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Haszn\u00e1ld az eg\u00e9r g\u00f6rget\u0151t a t\u00f6bbi billenty\u0171 \u00e1tv\u00e1lt\u00e1shoz',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// "all" is used here for example purposes, by convention it should be the ISO 639-1 code for the specified language
// ***********************
jQuery.keyboard.language.it = {
	language: 'Italiano (Italian)', // e.g. 'Русский (Russian)'
	display : {
		'a'      : '\u2714:Accetta (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accetta:Accetta (Shift+Enter)',
		'alt'    : 'AltGr:Grafemi Alternativi',
		'b'      : '\u2190:Cancella',    // Left arrow (same as &larr;)
		'bksp'   : 'Canc:Cancella',
		'c'      : '\u2716:Annulla (Esc)', // big X, close - same action as cancel
		'cancel' : 'Annulla:Annulla (Esc)',
		'clear'  : 'C:Pulisci',             // clear num pad
		'combo'  : '\u00f6:Tasti Combinati',
		'dec'    : ',:Decimale',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Invio',        // down, then left arrow - enter symbol
		'enter'  : 'Invio:Invio',
		'lock'   : '\u21ea Bloc:Bloc Maiusc', // caps lock
		's'      : '\u21e7:Maiusc',        // thick hollow up arrow
		'shift'  : 'Maiusc:Maiusc',
		'sign'   : '\u00b1:Cambia Segno',  // +/- sign for num pad
		'space'  : '&nbsp;:Spazio',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Usa la rotella del mouse per vedere altri tasti'

	// uncomment, then include changes to the comboRegex here
	/*
	, comboRegex : /([`\'~\^\"ao])([a-z])/mig,
	*/

	// uncomment, then include any changes to the combos option here
	/*
	, combos : {
		// grave
		'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2",
				u:"\u00f9", U:"\u00d9", y:"\u1ef3", Y:"\u1ef2" },
		// acute & cedilla
		"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3",
				u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" },
		// umlaut/trema
		'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6",
				u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" },
		// circumflex
		'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4",
				u:"\u00fb", U:"\u00db", y:"\u0177", Y:"\u0176" },
		// tilde
		'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5",
				u:"\u0169", U:"\u0168", y:"\u1ef9", Y:"\u1ef8", n:"\u00f1", N:"\u00d1" }
	},
	// language direction
	rtl : false
	*/
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// lv = ISO 639-1 code for Latvian
// ***********************
jQuery.keyboard.language.lv = {
	language: 'Latvie\u0161u (Latvian)',
	display : {
		'a'      : '\u2714:Pie\u0146emt (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Pie\u0146emt:Pie\u0146emt (Shift+Enter)',
		'alt'    : 'AltGr:Altern\u0113\u0161anas tausti\u0146\u0161',
		'b'      : '\u2190:Atpaka\u013Catk\u0101pe',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Atpaka\u013Catk\u0101pe',
		'c'      : '\u2716:Atcelt (Esc)', // big X, close - same action as cancel
		'cancel' : 'Atcelt:Atcelt (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Izmanto peles riten\u012Bti, lai apskat\u012Btu citus tausti\u0146us',
	// New combos using specific accents
	combos : {
		// duplicated from regular combos, used specific accents here instead
		// acute & cedilla c C é É n N ó Ó s S z Z
		"'" : { c:"\u0107", C:"\u0106", e:"\u00e9", E:"\u00c9", n:"\u0144", N:"\u0143", o:"\u00f3", O:"\u00d3", s:"\u015b", S:"\u015a", z:"\u017a", Z:"\u0179" },
		// diaeresis: ä Ä ö Ö ü Ü
		'\u00a8' : { a:"\u00e4", A:"\u00c4", o:"\u00f6", O:"\u00d6", u:"\u00fc", U:"\u00dc" },
		// degree sign å Å e E g z Z
		'\u00b0' : { a:"\u00e5", A:"\u00c5", e:"\u0117", E:"\u0116", g:"\u0121", z:"\u017c", Z:"\u017b" },
	},
	comboRegex : /([`\'~\^\"ao\u00a8\u00b0])([a-z])/mig
};

/**
 * Burmese Keyboard Language
 * please update this section to match this language and email me with corrections!
 * my = ISO 639-1 code for Burmese
 * thanks to @laminko (https://github.com/laminko);
 * see https://github.com/Mottie/Keyboard/pull/507
 * license for this file: WTFPL
 */
jQuery.keyboard.language.my = {
	language: '\u1017\u1019\u102c (Burmese)', // e.g. 'Русский (Russian)'
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Cancel (Esc)',
		'clear'  : 'C:\u101b\u103e\u1004\u103a\u1038\u101c\u1004\u103a\u1038\u101b\u1014\u103a', // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:\u1012\u101e\u1019',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : '\u1021\u1001\u103c\u102c\u1038\u1001\u101c\u102f\u1010\u103a\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1019\u103c\u1004\u103a\u101b\u1005\u1031\u101b\u1014\u103a \u1019\u1031\u102c\u1000\u103a\u1005\u103a\u101d\u103e\u102e\u1038\u101c\u103a\u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b'

	// uncomment, then include changes to the comboRegex here
	/*
	, comboRegex : /([`\'~\^\"ao])([a-z])/mig,
	*/

	// uncomment, then include any changes to the combos option here
	/*
	, combos : {
		// grave
		'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2",
				u:"\u00f9", U:"\u00d9", y:"\u1ef3", Y:"\u1ef2" },
		// acute & cedilla
		"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3",
				u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" },
		// umlaut/trema
		'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6",
				u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" },
		// circumflex
		'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4",
				u:"\u00fb", U:"\u00db", y:"\u0177", Y:"\u0176" },
		// tilde
		'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5",
				u:"\u0169", U:"\u0168", y:"\u1ef9", Y:"\u1ef8", n:"\u00f1", N:"\u00d1" }
	},
	// language direction
	rtl : false
	*/
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// pl = ISO 639-1 code for Polish
// ***********************
jQuery.keyboard.language.pl = {
	language: 'Polski (Polish)',
	display : {
		'a'      : '\u2714:Akceptuj (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Akceptuj (Shift+Enter)',
		'alt'    : 'AltGr:Polskie znaki',
		'b'      : '\u2190:Cofnij',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Cofnij',
		'c'      : '\u2716:Anuluj (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Anuluj (Esc)',
		'clear'  : 'C:Czyść',             // clear num pad
		'combo'  : '\u00f6:Klawisze kombo',
		'dec'    : '.:Dziesiętny',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Zmień znak',  // +/- sign for num pad
		'space'  : '&nbsp;:Spacja',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Użyj rolki aby zobaczyć pozozstałe klawisze',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// pt = ISO 639-1 code for Portuguese
// ***********************
jQuery.keyboard.language.pt = {
	language: 'Portugu\u00eas (Portuguese)',
	display : {
		'a'      : '\u2714:Aceitar (Shift+Enter)',           // ALTERNATE accept button - unicode for check mark symbol
		'accept' : 'Aceitar:Concluir (Shift+Enter)',         // Accept button text
		'alt'    : 'AltGr:Carateres Adicionais/CTRL+ALT',    // Alt button text (AltGr is for international key sets)
		'b'      : '\u2190:Retroceder',                      // ALTERNATE backspace button - unicode for left arrow. Same as ← ( &larr; ) - Left arrow
		'bksp'   : '\u2190 Bksp:Retroceder',                 // Backspace button text
		'c'      : '\u2716:Cancelar/Escape (Esc)',           // ALTERNATE cancel button - unicode for big X
		'cancel' : 'Cancel:Cancelar/Escape(Esc)',            // Cancel button text
		'clear'  : 'C:Limpar',                               // Clear window content (used in num pad)
		'combo'  : '\u00f6:Acentuação Automática',        // (Toggle combo (diacritic) key
		'dec'    : '.:Decimal',                              // Decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Introduzir/Mudar de Linha',       // ALTERNATE enter button - unicode for down, then left arrow (enter symbol)
		'enter'  : 'Enter\u21b5:Introduzir/Mudar de Linha',  // Enter button text
		'lock'   : '\u21ea Lock:CapsLock/Maiúsculas',       // Caps lock button - unicode for double lined up arrow
		's'      : '\u21e7:Shift/Maiúsculas',               // ALTERNATE shift button - unicode for a thick up arrow
		'shift'  : '\u21ea Shift:Maiúsculas-Minúsculas',   // Shift button text
		'sign'   : '\u00b1:Mudar Sinal',                     // Change sign (used in num pad) - unicode for a +- symbol
		'space'  : '&nbsp;:Espaço',                         // Space button text
		't'      : '\u21e5:Tab/Tabela/Avançar',             // ALTERNATE tab button - unicode for right arrow to bar (used since only one directional tabs available)
		'tab'    : '\u21e5 Tab:Tabela/Avançar'              // Tab button text (Note: \u21b9 is the true tab symbol (left & right arrows) but not used here)
	},
	wheelMessage : 'Use a roda do rato/navegador para ver mais teclas',

	// Update regex for the combos above
	comboRegex : /([`\'~\^\"ao\u00b4])([a-z])/mig,
	// New combos using specific accents
	combos : {
		"\u00b4" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3", u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" }, // acute & cedilla
		// remove apostrophe combo
		"'" : {}
	}

};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ro = ISO 639-1 code for Romanian
// ***********************
jQuery.keyboard.language.ro = {
	language: 'Rom\u00e2n\u0103 (Romanian)',
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Cancel (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : ',:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Schimba semnul',  // +/- sign for num pad
		'space'  : '&nbsp;:Spatiu',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Foloseste rotita mouse-ului pentru a vedea si celelalte caractere',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ru = ISO 639-1 code for Russian
// ***********************
jQuery.keyboard.language.ru = {
	language: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (Russian)',
	display : {
		'a'      : '\u2714:Сохранить (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Сохранить:Сохранить (Shift+Enter)',
		'alt'    : 'РУС:Русская клавиатура',
		'b'      : '\u2190:Удалить символ слева',    // Left arrow (same as &larr;)
		'bksp'   : '\u21e6:Удалить символ слева',
		'c'      : '\u2716:Отменить (Esc)', // big X, close - same action as cancel
		'cancel' : 'Отменить:Отменить (Esc)',
		'clear'  : 'C:Очистить',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : ',:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Ввод',        // down, then left arrow - enter symbol
		'enter'  : 'Ввод:Перевод строки',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Верхний регистр',        // thick hollow up arrow
		'shift'  : '\u21e7:Верхний регистр',
		'sign'   : '\u00b1:Сменить знак',  // +/- sign for num pad
		'space'  : 'Пробел:',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// sq = ISO 639-1 code for Albanian
// ***********************
jQuery.keyboard.language.sq = {
	language : 'Shqip (Albanian)',
	display : {
		'a'      : '\u2714:Prano (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Prano:Prano (Shift+Enter)',
		'alt'    : 'Alt:Alternativ',
		'b'      : '\u2190:Hap\u00ebsir\u00ebn Mbrapa',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Hap\u00ebsir\u00ebn Mbrapa',
		'c'      : '\u2716:Anuloj (Arratisjes)', // big X, close - same action as cancel
		'cancel' : 'Anuloj:Anuloj (Arratisjes)',
		'clear'  : 'C:Qart\u00eb',             // clear num pad
		'combo'  : '\u00f6:Kombinimi',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Shkruani',        // down, then left arrow - enter symbol
		'enter'  : 'Shkruani:Shkruani',
		'lock'   : '\u21ea Bllokoj:Caps Lock', // caps lock
		'next'   : 'Next \u21e8',
		'prev'   : '\u21e6 Prev',
		's'      : '\u21e7:Ndryshim',        // thick hollow up arrow
		'shift'  : 'Ndryshim:Ndryshim',
		'sign'   : '\u00b1:Ndryshimi Regjistrohu',  // +/- sign for num pad
		'space'  : '&nbsp;:Hap\u00ebsir\u00eb',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'P\u00ebrdorimi mousewheel p\u00ebr t\u00eb par\u00eb \u00e7el\u00ebsat e tjera',

	// New combos using specific accents
	// Not sure what to do with these accents:  ˇ ˘ ˙ ° ˛ ˝
	comboRegex : /([`\'~\^\"ao\/])([a-z])/gim,
	combos : {
		// new combos below ( forward slash + d, forward slash + l )
		'/' : { d:"\u0111", D:"\u0110", l:"\u0142", L:"\u0141" } // stroke đ Đ ł Ł
	}
};
