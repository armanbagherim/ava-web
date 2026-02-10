'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "13eac690b2b30f23c64eafc6b41de341",
"version.json": "51f7adc832ada0b042160876603ccc9c",
"splash/img/light-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/light-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/dark-3x.png": "da261be18bbda768fa1462fd8a8cef46",
"splash/img/light-4x.png": "e0346148103c17a87682a35525499afe",
"splash/img/dark-2x.png": "9371a9e18df59f2bbe9b32e04c3fc5d4",
"splash/img/dark-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/img/logo.svg": "a01710307e976ff3ad41850699ab7f5b",
"splash/img/light-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"splash/style.css": "740c493f9c5dfc859ca07663691b24fb",
"favicon.ico": "eb800bef9a36eed43edd25db9b3a3f11",
"index.html": "b621bb355f1b62de8904ebfbe9947d96",
"/": "b621bb355f1b62de8904ebfbe9947d96",
"auth.html": "88530dca48290678d3ce28a34fc66cbd",
"main.dart.js": "0fb174996fd6a18dc72aaeea4801c391",
"config.json": "46bf71f0f6516e0571ad38ef37dd1348",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "719ac4475d34f4882fc4607997e4c645",
"icons/Icon-192.png": "322012f409f2fc4f8d7b7fb1cad6f8fa",
"icons/512.png": "a3a8d9e73af9d61bd91b8274e838b8e0",
"icons/192.png": "313700bbbb919025a56c4b3583505df5",
"icons/Icon-512.png": "719ac4475d34f4882fc4607997e4c645",
"manifest.json": "5fb8be3b530180fccae649d079bccf1e",
"main.dart.js_1.part.js": "c49cc8291957d239697ad06a824774e3",
".git/config": "efbb9e47e4acf365a252d2f2f537184c",
".git/objects/61/d6e33746db0b415a1efa91be3e92dab0d58b06": "63f2beb86e8f72eeebea70ec91047b78",
".git/objects/0d/1d2a74dff146ef80e56dd61c6411cd43c8d39c": "47bdf2055012b8f2a21cb96518f2312a",
".git/objects/0d/d2f9fa88d590826a12f1d64b20986fdd15d372": "b8bf8e667a87ee4f3f571d431f8e23da",
".git/objects/0d/29164138e3311e19ac89614c18f7a0fc1830ab": "48c2826843777ba707a6ea24b506c49e",
".git/objects/92/54b7fdc6c8ae52c2882be959d47ec64bcbcef1": "a570151ebd47a49b6521313e576917f3",
".git/objects/92/016a3deffc0efdc6c84a5a4098e5e387453664": "c7fbb013794a4c45339f60c241bc8306",
".git/objects/66/f4f9e9e1507844a6378107f95f789aa6733abe": "3a79dec8a2194791c322577aa7d82508",
".git/objects/66/54d94e6d2e0218311a671c4935a0a0c6c1571c": "503c34260d9106acdc8d15a614cc90dd",
".git/objects/66/8463f908dbc59981e2891ff09e883e42fca840": "073cc9eb7d11bbec7ac8d0268f65f872",
".git/objects/66/5f5f33df5a52fb3aad29b3aa07b1cc79fabd35": "e338c43e22d6bd269ede13a98a872a85",
".git/objects/66/2c93c05d18be3a6c9cc90ed5dbf7dde751b022": "28d1802ad28afb1672f465700088a4ca",
".git/objects/3e/43ae691150711652f5509de1221585187382ed": "651fdf7daa8d51df5ac99bbf0fdf3173",
".git/objects/50/0784be7574678c3f63835439538552618c6126": "4e7f14ab0c77604662deb77734a24d4b",
".git/objects/50/aba1ab7fa06a37cff6b4dd224e7d7608f80be6": "03cf61735345827055eb3305832870b3",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/3b/b4b618da791b8e49ae4bd2f9de3ac80703e3bd": "f7f569032c89841ef87aa6f038ba186b",
".git/objects/6f/67038b095bbfd97fad63cf175cffa272c50b93": "95d14c11802c0dcec33e9a29b275d259",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9b/527d42ed9255f0df2ec502f595615794fb0d10": "256862295da20c04536735e89956d3e9",
".git/objects/9b/8e9c3eb59b873df326365d482f8dd4bb84c6d3": "b80628ad13699916b854c41449106d21",
".git/objects/04/eb12bb5632c89db526d53012e2ff49784aeb09": "2f5755f19f1491a4f714ed2f5f646bfa",
".git/objects/6a/bf691fd333c3cf2f605313d2fa1450f6035eef": "a25f1d296b56c9e9602b5b57e115e300",
".git/objects/6a/b8f505d2ba234acf13b1d117c9964e78300835": "8469932e337a96d60e8989bbc2fd6e29",
".git/objects/35/f9197f7d8d823454b8380216fe0a8c0a81aaaf": "ac10f15957d672d4b6268756102c7461",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/7c4265c6f8ddac3952b83d2b8b951d2b108564": "ac836506c5bcdf16a5142abda676c26a",
".git/objects/56/fc34099f2f2c5e85d8e0020baad1297aea094b": "a15afc0e6a01292951835f7ea3960978",
".git/objects/51/c56c6cf47e0ab743110ff3009b6f12369dca74": "0d5abb0140d9cdd4660291a1caff97c8",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/c6a0cb6698759f6646242ed1b5b73c6caec7d0": "5bd71ef707776186d3325ad1da84d0da",
".git/objects/58/c545588c254c4dde81bf0c914f2060d51a2aab": "06a7af3336fd0225eb4a6375dd49e017",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/20354aa5d1f9bbfa507588c4f79499ec30758d": "edacb6e5348732f12543df87ec112d6d",
".git/objects/93/3539e0a20c79b72a9c305e59b9d66bbd50341a": "e32dfa7dc10bafc1fe98815c7452c26f",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/b7b7ee4777a02d6174e6ff1798fabfca70b374": "82d821e34e29a81cbdf33bd21e784e4c",
".git/objects/0e/e39a336f0a77d868009131a4f0bde08e64866f": "784c57f7bb5a1ae5a5d67ffecc2b0e4a",
".git/objects/0e/bd1df8bae64d4dcc19181c18d4836df6da4240": "46ca9f87f66b0441aede1a1cd3bed8ce",
".git/objects/0e/a1729af9cf047d03ffb7f0cef1803f66a481dc": "6f21dfb0c4eb8730255c5caed12687dd",
".git/objects/60/3b38d5d572dcc65d871896fb12b8d4b4661f5a": "0f4864ca21da7192c3bd7edef074dee9",
".git/objects/60/78e9458f974bbde82d64a42a6682ca105103a8": "41a9cd003c144e976f84db2eb323e2af",
".git/objects/60/621fdcaf48c3115520f54a24ce7490d84dd0f2": "765d00420693a9c6f8ab1bbfc678e028",
".git/objects/60/03f5cf7a22c0c6916b11c6085505bd3d8f6f50": "f7e578cf26a3244d832276c58ca00b76",
".git/objects/5a/839c059a2420f9113cbdb6fd57566a06943fed": "6e60578ab6a4e53c2e439ed4d7d6c188",
".git/objects/33/e106953c9c52ad5634f6c5602af711d1ed5162": "2c995188b8829be8faf46746ab8b06d3",
".git/objects/05/34f7d06212abbe9cf4bda63643598530d5dacd": "1b1d6095ddbd94e8db829b9e409602b9",
".git/objects/9c/bc77c7ecbe33b0dd0f66befb8a9953b8bf2e8c": "0c8f96161a10c3b1a07afd26bb1626b3",
".git/objects/02/482b9ccb0a4bca50cf80d8938e0d1242d1a788": "d7a521e21c1e6e96000e348081454a21",
".git/objects/a3/6562af3c349eb4f08310cb723f0a15f13d2fd9": "687986bb21fb0edab1e5741fa2cb0b7a",
".git/objects/b5/98b2a8e75444117cba435016934e717c29c857": "2fc8000bf580e69f7dc1d2fa355b5d0d",
".git/objects/b5/9328f5914b3df84b081f0ad98c9facf731230d": "acf5fa248626f4fe5420447106fa3128",
".git/objects/d9/bc4426129f835a18533968349dac815fc2aa6b": "92c6a8fd92534246dd6e61469a43f6ea",
".git/objects/d9/8cd840e82b05df912b0c061d9dbbf056340dbf": "ce5772ee1df4185b97f4f60d780f83d6",
".git/objects/d9/567cefa71feec83be140240e97f5dce7eb8391": "d2b70c3a772d364ed67fc1890e389e6a",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ac/502f2d167d5c6c105f5479f1a97179a84d3142": "b877e840bd1c30348d312b040c080296",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/be/d67d5d28227a88a7f7908f9e12f781641664f4": "5901b22c73b24d8ff29d89340b300af2",
".git/objects/b3/5d07fd9d0744e32002f2ea50c17bf4911d929e": "9b209725d1ef314620a8e8520b84960b",
".git/objects/da/fa3b70704e58630f8eeceae91ad69bbb54ebe0": "1695a2d3eb777fcbd58d874cd1af1aaa",
".git/objects/b4/71e905452aa37013e722161389494eaa7ba9e8": "bb3faf88d3cdfbeb43e2517c97152171",
".git/objects/b4/a57d3705246ffef90244457b31fe9235899dc9": "2d25faf4e1b701aa48f0da89417b78a0",
".git/objects/b4/ce6d4d2511890b5af57657ad27f37dd5aa0d95": "6551221f7fe4bd2d661cdb486e25b213",
".git/objects/b4/099653de1b0c01435f38d3f95138159a31c668": "964f4d5b08859131d2b0aef7b6d1f7e6",
".git/objects/a2/2d8a0b596929c24c145309f610791899695d9e": "9c1fdecf30be7226a9028c7550b214a0",
".git/objects/a5/7be5f5c74d79591c362a072177be840b911b75": "9bbbfe2af48964925c09b0f06c02b36f",
".git/objects/a5/61a448da6aa2e077414e557af291fab2a79bbc": "3cb2389ec88b699eb21da2c7fc788855",
".git/objects/bd/5673a0410f3edc69b3d63d87896b39865da81f": "b9c29b6865318bbfe42b29fc23393544",
".git/objects/d1/4fb8d6b4241ea0dc2d902add4c35ee1572de3c": "9aaf2593954d3d47abe1f7b8024ab501",
".git/objects/d6/96c41256bd5a5e263e67bb0f66fccc48062212": "682560864ee17f31986fefc4564790a2",
".git/objects/d6/64e4f24ee6cec18a0e071e6c2b8fa58ab7de25": "d8047bafa1c39a9d671b8fba3c232afd",
".git/objects/bc/59481e8a8b79645b7e5a5c16a9546550dc48f4": "7291d19903e8148b55595b80230c119b",
".git/objects/bc/b21f53eae21cf07a700f82b200af4f1a0a3373": "daaa2121f3457ee15d361a3647c4a9f1",
".git/objects/ae/15d3c97262e6911ce88d4a7eff0fb62d049ed6": "0cfffad8dbfda3b770d68ddd0592332a",
".git/objects/d8/8a71538a251438318b3fe221c645a7b8a4eff0": "9f0288d72cd36b45d6d2bcd88c70802a",
".git/objects/ab/d3e51b2013b275c7b65bcf41e2009d013046f0": "3bf1ac8b5b8ebc115a1476b40625db4d",
".git/objects/e5/dea9a8cc14782f28bad3731f88519efcca6c8e": "3cf91cbb88311f1e0a620b553d54ae4a",
".git/objects/e2/09d1a16d23619656e2e9440f9c978fda53c0b7": "64be894b84cd6ac446fd5434948f73b2",
".git/objects/e2/5fbb8afd95de49c4e1449f9fa7cf6b49743daa": "85f89d2400623b1a9378fcdf45147bab",
".git/objects/e2/42f872fec7cc7d6bf69024ee777653d147c7ab": "0cc21eb8f86a333c200a9ebd7193c064",
".git/objects/f4/03bf51c207922a4373f23f34158b2e9037c9a6": "003a6800e8c8824443a5e907ce7ac590",
".git/objects/f4/c0bdb922597c27f2e8d2eaccadf53aa8a8caff": "e3fcb1e17dbabbe5bec8c762a139041f",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/2009815e4d91a2ee40ae928e1174cd984727d1": "98a06f98bdd011fbfa1d6d54581bd505",
".git/objects/eb/b1f067833b544426f5f7ce2b45ae2879df49ff": "ac727fe4a9968fb6ae0c4459f0300c81",
".git/objects/c9/7898caa757b3fc1647e04e9a5c5ccee54705c0": "dbb0ea78dfc5d8ae54848597cbba5d25",
".git/objects/fd/ffdeb5f1c93443262e3cb1cc300ff835d8453e": "717b3754ff4a8df229c1fa303b953054",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/0e93921537f8d63b9a7b7af54e9b0b8f26e1d2": "66c78b9f3af59c9908f5259a0aa7d7fd",
".git/objects/f5/ba3042e0bb972a5385cb95b358aa9855063cfa": "2f08341b828715fb53ce0945ee2b92f9",
".git/objects/e3/3927fc76f917f6736fc2913a417972e420df05": "d437fb04cd539eb59004fe558ccae32c",
".git/objects/e3/97a2a5c0e6c4549b4e7ec011cc65b3bce41087": "a48309ae917e2561314f1d20d0290cc1",
".git/objects/e3/1974488f507cee066efd924f0ac858010fbd85": "360a4bf400df21e33473ebc20ed772bc",
".git/objects/cf/1891bea8c8ca699420d40fa38b74762ff2c76f": "b72d1e7a364d427a799b63dfad1d5d37",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/2353cd766f041ac7c836c62f453a11f49c0755": "e20ad52aa186d5bcec0a456e56b468a0",
".git/objects/ed/92842baf1057802e8afb3262321cbcfbc495e5": "3d5341b7fde2f67fb7f78ce4ceba0fa6",
".git/objects/c1/382653c002f95bfa65c34e1c8401a1de26019b": "479879e37e601f07f05960b39ad7b5c6",
".git/objects/c6/1f7a0fc995a6f2baa4384090bcc8f645170107": "cae88b3527ae2aa05c74258828b87b41",
".git/objects/4b/9a09b416bab3592ec5ee3f517e665482da1580": "953e9f3035b7c6514dd82ba441fffb50",
".git/objects/7d/4daae4bd9c1ea3cbd46743ecf351f69f5e2e89": "c8f03eb969319ed346c922e31e8e7836",
".git/objects/29/b90f15eff34a288da57d65faa138d00b878945": "82297a31795be2c1cbb95e9498a41b28",
".git/objects/29/489b7fe30f904cb59f8b08768a5bfbc76ac267": "c9160390da6fe4533e21ab746ef8d73b",
".git/objects/29/3539715ba8012675abd67feae4619fb95eeb8c": "d04caa8b4c68058f17ff1ac6b20674ca",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/d286488e2bbff61698a82e2dc7878ac111d902": "f9859e93fe56e41cb644367e56fbe358",
".git/objects/7c/fdf4c1c610752cd6a06f744a8c018a4b5fa9a9": "2764ae516fbf4b1508df67edeb1cccb3",
".git/objects/42/9b3e5e699f8a6d327e28cd17b8d1700f4bdf6b": "621350cb94589a43c217e8adb621818f",
".git/objects/42/a37db2a6772f734c65a931cfa049528f6fa933": "3c6862c1963352df468bef7b4e2e2b2d",
".git/objects/89/633548be6870a1e267b32abfd07ca2ff68689b": "cf966cf884603b5005e590e4eb41d447",
".git/objects/45/402124bb6c53403c493f462c8bfd229eaf89a6": "9252196a2cfa45e272eac05bf2cb4c76",
".git/objects/1f/5e4cca2d0b13ca098bb695cf3e10e54f6507d6": "17017379802efb39a2b57b3f23080e8a",
".git/objects/87/bcf29e09f46730f277543867e0d46e1243e702": "a37513fcadf64729d2b494c335059dbf",
".git/objects/87/14cea6bd474045fc1b3984cdf66c2fdf7e0abf": "11acc9b9b350b80708b1415270caf4f8",
".git/objects/80/6485b73a8f2ab006adfc4f1a5922f6b0bf2e90": "5eed81346a6072403493785808f5fc19",
".git/objects/28/a971b7f6cf113838e81e26cd701c81df09c048": "239182187632dd12e5bd27e48383b83b",
".git/objects/7b/74379bcc39c64b79b5f6a30042db4d1ad3a3a8": "bba91ae1db5db734dd5c20e68f6009b8",
".git/objects/7e/576c6f49a1ce07e54a3132f5f91a88e027a023": "a45adea8fa2709649d09cc6031020e09",
".git/objects/7e/380d40350d8d4fb31af72c0f449924533b2e5a": "f6f1d6f39e38507aa1b64623bcb5571b",
".git/objects/7e/e9d3c0e578e5560e7c5ac89085cde8753a5da8": "7235ec1ca15ca939a51c79530a723651",
".git/objects/4c/89be8a5bee35a7f5b61a04a896deff6e99cd4e": "bbc5779ceeb8d79a6eaaa3392d6af2f4",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/72/8e6e7aa8a252e6e0b6bb07f516b7b3cd735324": "36cfb2110cdfcad99440bbf2e05b913a",
".git/objects/44/70d67ee5cd12a53f2e20cb3552c59f64df31a0": "033fc31fad2955d92b409c6855a80344",
".git/objects/44/9e008be6126052f7751ea544a30adcb2b61a63": "61bc2ac0f9717ba9400a316a174f9629",
".git/objects/2f/9db5b06bb583972cfaddf85a7283b394d10323": "7f23659cbcec81e96a85effba5438700",
".git/objects/2f/061d4ed05f6859d004131d4fd3c59785d1b795": "9aad16ab935b158d26ce02a59d2a68b6",
".git/objects/2f/297028727a5ad41e29c4dbbe9acab50e4834ad": "26f3f54279b7492413a8de6122cb6df9",
".git/objects/43/4a68684cc0a85f0aef9077e27cfacb30f65354": "d0b75dc88c914b9c5a35a565ddc80483",
".git/objects/88/f3c7a3ea95694b7300aaf2be4833620f73d288": "7792f1b330dacce72ab6cd50ceb9e4bb",
".git/objects/88/c1bb115621b0f7ba9cf8d9294c8370a86bcf96": "49750aecd424ded2ebcc952a690e36c4",
".git/objects/88/0b8ae582971055677c260cd705e1db283c8efc": "c78ef43f441c3e012f06a72bb9ece626",
".git/objects/88/ebd6455aa05db4ad4712e4791fb8c11d32cc5e": "c7abeb8770dc308736031dfb963c89fa",
".git/objects/07/a29dd2b65752583e7d488c7f13dfa962f814b6": "eb07dd71b58c95cfd0182ff2260313c2",
".git/objects/00/99b512b6dbbc52f595bc604b6300b0ff72b329": "84019fc9da0245385716f06c5b902373",
".git/objects/00/8abf3159994a6f95e91c82a28058cbaaaadb7b": "c1d2d682e460586911195007a668f206",
".git/objects/00/f2b2d6eaf2606aeaabdabe24740b222520b6e7": "eefb9c316e6f54ca87ed00145662b7c0",
".git/objects/00/6b3a30d357ce537d8795817b4d1aded47dd38e": "b80f392d9f8baa5be51988cdb64e9ded",
".git/objects/6e/070027f1b284fdc4e773e1c0fd33cff980fefb": "2cdb72de6e4b28c3e1e519cc97ee35d2",
".git/objects/9a/eb98e4e599f51e2cb4e538f8de583f534f4ebb": "7a4db082d10c699998a769c38ed1d51b",
".git/objects/36/7e4a5b16f72a7a154b61d7e7d618bb6ea2aa4d": "c5ab9ecfb6b73a69b120931e84e46743",
".git/objects/36/893e89246f8afdac8a0737cd8c9292a0dcd512": "e5fc9898006769eeec26fe585b7141e6",
".git/objects/36/85f5d518af838bc560280743e55d5f7cd3abb4": "7c24a9eb9de09369b04e9256dc8d8d38",
".git/objects/36/a28bac7a26cda8a7eff56b45610fac655211a3": "1311f7e5a0050909a8fea717ad563a18",
".git/objects/91/806c77bd8a5b2e747f42cd32d891ea77b53017": "e64c21da3f2a48f1d6cac93e136e825a",
".git/objects/91/a8ba8184c7785e64f77e8eec4b236dfd0b3600": "0fad9b5f572ec1abcf6ffe7c1ce5802e",
".git/objects/65/cec731d25ff7f309a9a0652cb4ac47aad73065": "6fcbaa1ea6d2614c999c7462be7f681a",
".git/objects/65/2986845652c352031df904ab7ec1d673c064fe": "74a0665b060d400a8a3872b055a687f5",
".git/objects/96/a9ad57a25ee4c96f20f9b6cacd5d7911eda09f": "5445887e4f3bb3b8e1bd740c4f48fc93",
".git/objects/96/6715ffa2be8fbae0f2311bba1a799c1e19fea2": "677ca6caa045f4813f254140f93cb534",
".git/objects/96/bfca56cf62c41308ee6374764d8b20b92889ba": "2e77a683489ef729793bd3dad63e8fc2",
".git/objects/96/96457f695b2a2f6a92a0f0d14383a34c8db82c": "071952f5bb136694e0b3d21713977e3a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/98/5daba766deab019c24f0d8ccafa5dc4038e5dd": "55f37e39dc770e1bed1b01bd8017b03a",
".git/objects/53/bdb4dd52f05f7b189a16c3151fc30ac4ff89b8": "837e0e28dec5ca651ed5606413fa7d2d",
".git/objects/53/601d645e792eda2aace04a8d9cf6b94e877f83": "e54984e3f55017bc784e53222166eb10",
".git/objects/53/a13f3c961663bbe680ad2fefdfd1f6a219916d": "a944b9c0952c89ee0742b5f8e5d3bfa5",
".git/objects/3f/0dd0252473048ffb11b98b6a9eb9eb6218ac5b": "a32f8b268d1dca7c0df3a12670a2b650",
".git/objects/30/0d95f03f701d90f8049f85fd75a031dcfe875e": "b26c02a192197ebfaa3276fa48812884",
".git/objects/30/1dc2776407708efcdc783d00ba1122adcdcd38": "9f6e7949f1e549a987851318c595390d",
".git/objects/30/8f6b312ef996f2bd41bb391726e80ce08e0f1d": "f450c926d87e31e2d90fa76f4cc78710",
".git/objects/5e/2133bdf51dad1d2e351d525fc6bc5582103ffc": "d89301a93122111ec20fbdd85139e05f",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/3acbca0622583e2de48c775a006234e2a07dbc": "7fd801baddc73335f7c9ced0d3b94ec6",
".git/objects/6d/68e423c5d4b15c847b987c687284318f687426": "b6e3fa1410c72ce4515fdc65933825e5",
".git/objects/6d/8be7b3a1dd06647ed722009197c2c05025fa40": "625429664b5f99c1cd1b1ddbf59fe471",
".git/objects/01/6b38e3fa88994bb088398f186f231cf199e010": "3ec8e74ae123ab001ca23fe0d58f6eae",
".git/objects/01/e56fda4f8a13e363459d1a8ef1a51e4d7b3db7": "f0dd6dbf79f73311f4526b06561183d2",
".git/objects/06/72c9cdbdbc14613bc9f6bf9328982885a0a171": "314f76c912ea517de9a6280d0524046e",
".git/objects/39/0f2bf8efe683d1b44c0b5d87f433d9b498b9dd": "34d3745ef0e0ae209a5e323811d9ff79",
".git/objects/55/a43f32543e292738e90a25c61ffd6d7316c058": "7e48ae89d24502910dfc194ab81b3925",
".git/objects/97/735ca7d617d350f87d6f6d4a5857952fb996e3": "0fac3f614686048e8d8e5874fc1c7aed",
".git/objects/97/2e36f560ce2545a35730b22f60fe5fcbb297ab": "16076f2e514611dcad5efbb79947a992",
".git/objects/97/214cab0e630c104c9b3c090730714e5dc332d6": "ef94bd9d218621d386a34709edd8f633",
".git/objects/63/b5d4d375510a8caf712232ff588681face281c": "9a6c461186390217b3cff0e80e9065ac",
".git/objects/63/1a678130a8fac6e84b051b59583fc5c7d94920": "b62178fa860336f98f197471f9101edf",
".git/objects/0f/d598ba586514a7cc8fb306b5cdcf793d6ea78d": "dae2daee323929b82fa66fd8d065c6ca",
".git/objects/d3/6ab3c8d744ad78e4d015478d13401df4653aa8": "86933d24c7aca05cdda633fa79a7643b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/22723314ea19eb282c554f61b2e654f01e6f44": "e1b6580f9b558f2fb206198ea70324d4",
".git/objects/d4/65cbb0971a2aecc007feb3c94c8f53a3f97023": "0f6bef4186413925837a5c8c6645a879",
".git/objects/ba/f89cb4bfa574ae83ce6c4c4cb34cb70cb967b2": "ea626781472d3b3243841a2eb0982269",
".git/objects/ba/92f85d4328be0100930916433da081dae89eb7": "27b390cbda894d25e7df834bcf0669d6",
".git/objects/ba/9af12ba22ac7b693e6bbd02e05f912f4352116": "e1f1e06119898de63cfcf1d7358c3d1e",
".git/objects/a7/14179e8320d7b399ba1f6c4d60a464a400ab6f": "939051806ef725d4a4dd59bee88a28a1",
".git/objects/a7/a0eedc67d498005f92be6ac9091dc28673dd2c": "7b0af5da7b5406d1749d40a28bb0d44f",
".git/objects/b8/20647803e765c69c4c4a261c20a8f73eed9815": "7c68f4e3c062bb1f5cadea245ea7deac",
".git/objects/dd/0fcc077e46dddd5ff1da306341fb87c68e18f9": "4b29da7764a75e09b316d32f6b78ad2e",
".git/objects/dd/7b095ceecaa7f42b308aa4182a1a07cb20c57e": "99aa773781cf3bceffaf91d7fab58060",
".git/objects/dd/4b437b7ad4f26b46a9dca6f6826b508b7ba545": "559b942288a0be7d1d216b25e831380e",
".git/objects/dc/2b171173c4fe255fb76ab8e79716918576affe": "419f0e77ca476625cfdc819811efa804",
".git/objects/b6/27f52801ffb9f2d7ebde438c873a738424907d": "619c5d8b9b748505c091e73214836a76",
".git/objects/a9/006aa65729955fddf94ec4717ebaca96fecd2b": "1057ba2539f4cfddf1fbfce0832a1dfa",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/132832dc291e7b1c2e4e70aaaf7c2da267a666": "9f4e8744729c199a2486a9c9a4ff105d",
".git/objects/d5/1c6571777187596a681388fa19fbc732b9528e": "6676cc33df692cff331a45d1f96fc5cd",
".git/objects/d2/e9477eb1b2340e2e5c7c8e2d86c39ac08f3219": "ca9acdb47d2397e0b37ac3e91ac1f8cf",
".git/objects/d2/ae929b2fedaf00e4840a918a3129c66ebe1db6": "45c6286893d024f6c992ce4634bfe6bc",
".git/objects/aa/758720de07078868747fc5762c972104e75fa8": "d14a963ed29d4851096bad676d48146d",
".git/objects/db/f4d1207953769ba0a1bdcec719dc13c2924f2e": "b8a17c24e03c9c318ec44dd95b973703",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "15af9524d664e39a6f548412b724c2e3",
".git/objects/a8/021b17f34c1d82affb122fa64f0b3cb7ddfef4": "7603a5e17342b7870a2e5d064f81e5a9",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/a1/b8ba6b4ae684063b4f33aa754163b37f737dbd": "750e4fa2900c0534297730c732f640f6",
".git/objects/ef/5a5c6d8778b5880e2d344992b3b2aac465631c": "e386344714fc8f0a0c1db3111fcc9b14",
".git/objects/c3/9a1dc35fcf96b459e2f4bb9a6b3b477fce4535": "51d1b5855a56845ca5dcae2ba9d3d6a9",
".git/objects/c4/872519c7e59a4b41e49ee6171926cce2e0c1ef": "d6d8949d6cf444016938725f3c432370",
".git/objects/c4/08fffdca9474c22fe3ef1dc35428c718c888f1": "58c8cf49c2477720ad20729523341e2b",
".git/objects/ea/13df11bd3db8645692317dab090b4e7e9af46f": "238b43c845157fc568819bca5ef2cd66",
".git/objects/ea/2d9620b6d4c2c00640b79a709c4b8d8de33964": "544e7c6c9cd1a07fca1bb34bb73c7af1",
".git/objects/ea/b2b1e7081a273981446153f853f34b939bbd44": "30d39241acf0384735db24d7b674b1ac",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/d671379a6f808fe3a8181cb2b52c1b4e339c03": "c535b9eb66d04735dff603dacb3d79b3",
".git/objects/cc/bb40e2fddd6f11092148df2abf7fceba6eb092": "ab57e3558222e2767bbbc09f2c6a20b1",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/86d54f1ef14fb6dbf687d31dc0c13316307f43": "b01734fc2ccd08d8e3ddbc1caba3159a",
".git/objects/f0/056fdd3f48f6c4d34880c35fe10e16e467b9eb": "42dd5da2f6686d2852359a274a0e4dd1",
".git/objects/f0/67b5bd41f073e180f2f6c8733f73f75b0ef4a4": "2c293a0d698753e9591205c159368bca",
".git/objects/f0/eb702cfd934f5be1043bc4d45bdbbe3d893c0d": "669d50df0b3072865c1d5b569f630bc5",
".git/objects/e8/19ba0148fdf00588041b5f4b3b4f55684f85ae": "80db1943690d05848227b7ca77c2e027",
".git/objects/fa/146ab682af6fb8861f676c2a54633813f53fa7": "094e2ddfb16d4ac8bb294e5255883934",
".git/objects/f6/95a34ed4a297b7470f096958dabe54f684f18e": "fd86ec9033766c63d6df84f5b1492d69",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f6/52f244accfa1435bdb386c608d4300ba34fd06": "3a1d7712bb44ca79f4e3c7a9d3c08aea",
".git/objects/e9/9b7946556b362e7a33dc926f738eec27901ed9": "248635eb74edfcdd10c8f4014df8e960",
".git/objects/f1/cc083fef5a43d3273432e3d1fc90f1f16122cb": "e75d35439996db1b62e0ad4dfec0ac7c",
".git/objects/e7/6d35df510b5da95712be39911bc4587b9a117b": "ec17ff3f9351d6f9785df574c9bcdb50",
".git/objects/cb/2982add4775c1a616739ae4f60d13f388423f6": "d0993c8805f3bec440ee9fd22f7a8776",
".git/objects/cb/19756f678904a65d817a8865f5caa333d19823": "d43e1ae18f704013248ff768bf0621f1",
".git/objects/f8/5b53f50d4c0044398623e15ebd77b01d50e877": "bcec4f1ff021d566d1932f6312a17f6d",
".git/objects/f8/dceb4c6357960a314340da70b20d8a64966411": "13a4eefbea0a71c84cc3f9f552ed5270",
".git/objects/ce/9e507b7dabc41549e8185811f7e3196aab0c85": "0b114f1afb040720b697e053c94b69ce",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/62b83e7bad6714d9e4363358d2874c61c4b784": "e546b796294824ccf137a25c870d4db4",
".git/objects/46/990ee552809affcd178db358e7edd20bc916db": "a13ba65d8a490814d53ce3ca2197a9d6",
".git/objects/79/ebeb1b99caa3b8f5c090028856b631d5338060": "20753ce41417693d37e19b154b50cc7f",
".git/objects/1b/6bd736b1be19995b65c9fc8e6f55b5d5f93e16": "530b3017d2621bf50659df2c8e010ff6",
".git/objects/1b/f58a6fdf99492fd04ee0c598c4d1cdee004a85": "f3ac34df3f4d1b8537db78cf2f37effd",
".git/objects/1b/35ee500f25dce6d881392ea33079db79a1c1e1": "c9ce83b7ce4b40d5a9daa9375d484eec",
".git/objects/48/4b3241ee6512a500f0eaf6c5ddb339786d2fa1": "bedde65c409cc405fda05f91a659ce32",
".git/objects/70/5b14a32f2c15c5eb99c8386448e97c3928b41b": "26645165ee3b2eec6ecab670d7e42ce2",
".git/objects/24/acf8587c0d223bdd19f589b6a7bf45e19760a8": "5e17491351ac2ec3bc894e33fb4c4c4e",
".git/objects/23/a2235b494ebceb458f8d36311e5dd174b18b4d": "5ee7b6d44312209f75c17902c227f223",
".git/objects/23/006e99fde844a4d139de8914f6e682f6788375": "150da13dce8f7986d84a4fe4e2220b16",
".git/objects/8d/394927f30ab23533b95de9ea120433c1bd65bc": "1604057f85b7aa7e93c99ba14b6457d2",
".git/objects/15/dc78d6a944f5b6463451a7696bd359c1e734cc": "f2588e0005b5bc0fd7e360290ad97a60",
".git/objects/12/1f2b6d37e82ceae7b83074e28326831bdc2e8f": "295fa5621dcaac15c2b757c4a1bab110",
".git/objects/85/a267737007803e0b362c6e13e0153efa01c75d": "60be89e84c684808a1b54872a53b7385",
".git/objects/85/380bee9ac0bf1982c1aa22ae60551cdaf86b1d": "fb50112e7cb1750f9ea63ffe02c29181",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/39326887c57e0a9cfca6de3655c6c689d15c5e": "2a2ff565226a1dfe09b5309f1c42637c",
".git/objects/71/41b43b7b4987be348c09b854272c457c81b53b": "d0eddf600d96b013527643a8e001b58c",
".git/objects/76/c81dc4edac9ba128583f44e9d87770dab71b66": "108e2a18be597ae7c846abfe0ed9c4b1",
".git/objects/1c/cbc464600d91e67c4cc7117c30e37e060e59bb": "dd812a53122bf1df35a6dda4b4fc429a",
".git/objects/82/8809e83a2867e6707bcb7c6a91f8cf70b0fba7": "e6434d2e566ddfe0b5dafdd4846061bb",
".git/objects/82/e850cedbb7c6d91215e58236e107ce644ed310": "2db9f6132ec3a37e1efb36a5039a5483",
".git/objects/82/512b200bf01295b373192b49a071481f3fefe1": "2aaa1f99af5c7811861a557186a75dfe",
".git/objects/2e/9da650a48114c488d5ca4d3b364a45953a91a8": "294a0c0cdadc41b5d15eb66b20439505",
".git/objects/2e/fe72fc3d9a057aa66d9c22355046766ca4d7dd": "ff8ef894a7a9dcb4fef5f67e6133d697",
".git/objects/2b/37adce7824a62126b67cbb2c22bfb56003a640": "8827fc0425f057f28a2ec4974f4ab883",
".git/objects/2b/6c08a1ef02e851660def0102c9eab6afadb5b9": "a396c3ebd08f66de701482f1251bb4e1",
".git/objects/47/c884730430a1a29b6f2a1bd7beaf5ed8094175": "bc340fd036104eefb1c5b87dbdc78a53",
".git/objects/47/3d8ed13bc9e8faf9f7e18cd062b73b63b20f56": "1d85d897701c8e478dd4367b4a20d8a9",
".git/objects/13/7e751d0dedf648e9e61cf3376b8411e7ff031b": "17c012255fa6df1ce52cf21fe415ca90",
".git/objects/7a/c3b46d516acb658e31ecfd8d1b20ae90f3f552": "fa431c4127404291b452be19b79321c2",
".git/objects/8e/8e041a0beef7ef207652f11b057d7bf21e8290": "a3841e316712fdd0a9aecfc6409a6a54",
".git/objects/22/1ffbfcf85b1289093e366b74e9a8e8304fe5de": "0cdcef726919690cf1974c591ae6f339",
".git/objects/25/c60a05c9f71730cafe37fc8a99b46615fb64c3": "06c1d781fdc6bab2d432e1244427e25f",
".git/objects/25/740415d1c096ed8a5a9906e5988d0d1bd2167d": "a7790337ff88403f0cd02b677abe48b9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75c05195652f72fa651c5ccb36316e8c",
".git/logs/refs/heads/main": "75c05195652f72fa651c5ccb36316e8c",
".git/logs/refs/remotes/origin/main": "a3c044794a6c2ecddacefb5fa4818d02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "49124c9329513e9f71db37349c93a8e6",
".git/refs/remotes/origin/main": "49124c9329513e9f71db37349c93a8e6",
".git/index": "713ce83557f0eda4eed9b9893bf9e6e5",
".git/COMMIT_EDITMSG": "ae2c04ba6dab43d43ce8ace288e58123",
"config%20copy.json": "46bf71f0f6516e0571ad38ef37dd1348",
"assets/main.dart.js": "2f545ed7a91b54f030358347a658a78f",
"assets/flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"assets/NOTICES": "b229d8415e9bef404f5ac4d1393a7578",
"assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "8acced4fbc1aeb7b66d211398b50be33",
"assets/AssetManifest.bin.json": "6fb2d88b4ed1a9c3dcb68c9051be782b",
"assets/main.dart.js_271.part.js": "d98eddc5febbb329906ddf66306b07dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fc0406b24f188003eb8add51b4e7cd32",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/handy_window/assets/handy-window-dark.css": "45fb3160206a5f74c0a9f1763c00c372",
"assets/packages/handy_window/assets/handy-window.css": "0434ee701235cf1c72458fd4ce022a64",
"assets/style.css": "740c493f9c5dfc859ca07663691b24fb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "a72237ec49fcc4dea18a2f9d02300681",
"assets/fonts/MaterialIcons-Regular.otf": "f4e03917e70bbc7143432cc25e43fdb2",
"assets/assets/logo_transparent.png": "056b82c87bdb47d07ed9b99dc3f92390",
"assets/assets/sas-emoji.json": "b9d99fc6dda6a3250af57af969b4a02d",
"assets/assets/banner.png": "0baa20d1bc5bb325a2a9c0f96b45a5e3",
"assets/assets/vodozemac/vodozemac_bindings_dart.js": "d8a180a7a69f7559dc198660737f1132",
"assets/assets/vodozemac/vodozemac_bindings_dart_bg.wasm": "9ed7979a1fd643a9672f474c31062f65",
"assets/assets/info-logo.png": "64bea878b2fb61c945ee80f5286d05c7",
"assets/assets/banner_transparent.png": "364e2030f739bf0c7ed1c061c4cb5901",
"assets/assets/sounds/notification.ogg": "d928d619828e6dbccf6e9e40f1c99d83",
"assets/assets/sounds/phone.ogg": "5c8fb947eb92ca55229cb6bbf533c40f",
"assets/assets/sounds/call.ogg": "7e8c646f83fba83bfb9084dc1bfec31e",
"assets/assets/favicon.png": "49f645bf75e9169d6e92f1f3eb47246e",
"assets/assets/logo.jpg": "67ed7e7f89faa84c13bf608c310594d1",
"assets/assets/logo.png": "fdf5ee40de0f3bfbafe3a91ade4e8deb",
"assets/assets/fonts/iransans/IRANSansXFaNum-Black.ttf": "71b39fcd5a99576f4ed5aa0452153d8f",
"assets/assets/fonts/iransans/IRANSansXFaNum-Bold.ttf": "4b67ac4a1cf16c1e0bd59bb2099e5ae7",
"assets/assets/fonts/iransans/IRANSansXFaNum-Regular.ttf": "27fad752d4c101730c76d75d98cf2183",
"assets/assets/fonts/iransans/IRANSansXFaNum-Thin.ttf": "2eef988f6412c129be8f28cce4684f98",
"assets/assets/fonts/iransans/IRANSansXFaNum-Medium.ttf": "3c08154f4d5e905b9b9724aeab3fbf39",
"assets/assets/fonts/iransans/IRANSansXFaNum-ExtraBold.ttf": "4b419c9a2f93c8e99825a6125268eb18",
"assets/assets/fonts/iransans/IRANSansXFaNum-UltraLight.ttf": "05b48fa25a38b20ad4658502ad33b3e1",
"assets/assets/fonts/iransans/IRANSansXFaNum-DemiBold.ttf": "9777f9e7551258ada77c590ce39679bc",
"assets/assets/fonts/iransans/IRANSansXFaNum-Light.ttf": "d223b4a19cdedd81c764c90f449c85ad",
"assets/assets/logo.svg": "d663e56a88152c6b9869c77ecbb1669d",
"assets/main.dart.js_2.part.js": "93244c7c8fedafc9ff314cd6998a6803",
"assets/light-1x.png": "db5b72b7f4b38640c974f20d9c90f464",
"FluffyChat.html": "6d10012354db99d2d1e43830a3006649",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
