hex = ["ff0000","ff0400","ff0700","ff0b00","ff0f00","ff1200","ff1600","ff1900","ff1d00","ff2100","ff2400","ff2800","ff2c00","ff2f00","ff3300","ff3700","ff3a00","ff3e00","ff4100","ff4512","ff4900","ff4c00","ff5120","ff5400","ff5700","ff5b00","ff5f00","ff6200","ff6600","ff6900","ff6d00","ff7100","ff7400","ff7800","ff7c00","ff7f00","ff8300","ff8700","ff8a00","ff8e00","ff9100","ff9512","ff9900","ff9c00","ffa000","ffa400","ffa700","ffab00","ffaf00","ffb200","ffb600","ffb900","ffbd00","ffc100","ffc400","ffc800","ffcc00","ffcf00","ffd300","ffd700","ffda00","ffda00","ffde00","ffe100","ffe512","ffe900","ffec00","fff000","fff400","fff700","fffb00","ffff00","f7ff00","efff00","e6ff00","ddff00","d4ff00","ccff00","c3ff00","baff00","b2ff00","a9ff00","a0ff00","97ff00","8fff00","86ff00","7dff00","74ff00","6cff00","63ff00","5aff00","52ff00","49ff00","40ff00","37ff00","2fff00","26ff00","1dff00","14ff00","0cff00","03ff00","00ff06","00ff0e","00ff17","00ff20","00ff29","00ff31","00ff3a","00ff43","00ff4c","00ff54","00ff5d","00ff66","00ff6e","00ff77","00ff80","00ff89","00ff91","00ff9a","00ffa3","00ffac","00ffb4","00ffbd","00ffc6","00ffce","00ffd7","00ffe0","00ffe9","00fff1","00fffa","00fdff","00faff","01f8ff","01f5ff","02f2ff","02efff","03ecff","03e9ff","04e6ff","04e3ff","05e0ff","05ddff","06daff","06d8ff","07d5ff","07d2ff","08cfff","08ccff","09c9ff","09c6ff","0ac4ff","0bc1ff","0bbeff","0cbbff","0cb8ff","0db5ff","0db2ff","0eafff","0eacff","0fa9ff","0fa6ff","10a3ff","10a1ff","119eff","119bff","1298ff","1295ff","1392ff","138fff","148dff","148aff","1587ff","1584ff","1681ff","167eff","177bff","1778ff","1875ff","1872ff","196fff","1a6dff","1d6bff","2269ff","2667ff","2a65ff","2e63ff","3261ff","365fff","3a5dff","3e5bff","4359ff","4657ff","4b55ff","4e53ff","5351ff","574fff","5b4dff","604bff","6349ff","6847ff","6b46ff","7043ff","7342ff","7840ff","7c3dff","803cff","843aff","8838ff","8c36ff","9034ff","9532ff","9930ff","9d2eff","a12cff","a52aff","a928ff","ad26ff","b124ff","b622ff","b920ff","be1eff","c11dff","c61aff","ca19ff","ce17ff","d214ff","d613ff","db11ff","de0fff","e30dff","e60bff","eb09ff","ef07ff","f305ff","f703ff","fb01ff","ff00fd","ff00f0","ff00e3","ff00d7","ff00ca","ff00bd","ff00b1","ff00a4","ff0098","ff008b","ff007e","ff0072","ff0065","ff0058","ff004c","ff003f","ff0033","ff0026","ff0019","ff000d"]

for(var i = 0;i < hex.length; i++)
{
   var r = parseInt(hex[i].substring(0,2),16)
   var g = parseInt(hex[i].substring(2,4),16)
   var b = parseInt(hex[i].substring(4,6),16)
   console.log(r+","+g+","+b)
}
