(function(){
  var date  = new Date();

  var numb  = date.getUTCDate();//day number
  var month = date.getMonth();//month number
  var day   = date.getDay();//day number 0-6
  var year  = date.getFullYear();

  var days = [ //xīngqí qī
    ["Sunnandæg","星期日","xīng qí rì"],//sunday
    ["Mōnandæg","星期一","xīng qí yī"],//monday
    ["Tīwesdæg","星期二","xīng qí èr"],    //tuesday
    ["Ƿōdnesdæg","星期三","xīng qí sān"],     //wednesday
    ["Þunresdæg","星期四","xīng qí sì"],    //thursday
    ["Frigedæg","星期五","xīng qí wǔ"],    //friday
    ["Sæternesdæg","星期六","xīng qí liù"]    //saturday
  ];

  var months = [
    ["Æfterra geola","一月","yī yuè"],          //january
    ["solmōnað","二月","èr yuè"],         //february
    ["hreðmōnað","三月","sān yuè"],           //march
    ["eastermōnað","四月","sì yuè"],          //april
    ["ðrīmilcemōnað","五月","wǔ yuè"],             //may
    ["Ærra liða","六月","liù yuè"],           //june
    ["Æfterra liða","七月","qī yuè"],            //july
    ["Ƿeodmōnað","八月","bā yuè"],          //august
    ["Hāligmōnað","九月","jiǔ yuè"],       //september
    ["Ƿinterfylleð","十月","shí yuè"],        //october
    ["blōtmōnað","十一月","shí yī yuè"],     //november
    ["Ærra geola","十二月","shí èr yuè"]     //december
  ];

  var numbers = [
    ["1","一","yī"],
    ["2","二","èr"],
    ["3","三","sān"],
    ["4","四","sì"],
    ["5","五","wǔ"],
    ["6","六","liù"],
    ["7","七","qī"],
    ["8","八","bā"],
    ["9","九","jiǔ"],
    ["10","十","shí"],
    ["11","十一","shí"],
    ["12","十二","shí"],
    ["13","十三","shí"],
    ["14","十四","shí"],
    ["15","十五","shí"],
    ["16","十六","shí"],
    ["17","十七","shí"],
    ["18","十八","shí"],
    ["19","十九","shí"],
    ["20","二十","shí"],
    ["21","二十一","shí"],
    ["22","二十二","shí"],
    ["23","二十三","shí"],
    ["24","二十四","shí"],
    ["25","二十五","shí"],
    ["26","二十七","shí"],
    ["27","二十七","shí"],
    ["28","二十八","shí"],
    ["29","二十九","shí"],
    ["30","三十","shí"],
    ["31","三十一","shí"]
  ];

  document.getElementById('russian').innerHTML = days[day][0]+" "+numbers[numb-1][0]+" "+months[month][0];
  document.getElementById('chinese').innerHTML = months[month][1]+numbers[numb-1][1]+"日"+days[day][1];
  document.getElementById('pinyin').innerHTML = months[month][2]+" "+numbers[numb-1][2]+" rì "+days[day][2];
  document.getElementById('date').innerHTML = numb+"/"+(month+1)+"/"+year;
})();
