(function(){
  var date  = new Date();

  var numb  = date.getUTCDate();//day number
  var month = date.getMonth();//month number
  var day   = date.getDay();//day number 0-6
  var year  = date.getFullYear();

  var days = [ //xīngqí qī
    ["Воскресенье","星期日","xīng qí rì"],//sunday
    ["Понедельник","星期一","xīng qí yī"],//monday
    ["Вторник","星期二","xīng qí èr"],    //tuesday
    ["Среда","星期三","xīng qí sān"],     //wednesday
    ["Четверг","星期四","xīng qí sì"],    //thursday
    ["Пятница","星期五","xīng qí wǔ"],    //friday
    ["Суббота","星期六","xīng qí liù"]    //saturday
  ];

  var months = [
    ["январь","一月","yī yuè"],          //january
    ["февраль","二月","èr yuè"],         //february
    ["март","三月","sān yuè"],           //march
    ["апрель","四月","sì yuè"],          //april
    ["май","五月","wǔ yuè"],             //may
    ["июнь","六月","liù yuè"],           //june
    ["июль","七月","qī yuè"],            //july
    ["август","八月","bā yuè"],          //august
    ["сентябрь","九月","jiǔ yuè"],       //september
    ["октябрь","十月","shí yuè"],        //october
    ["ноябрь","十一月","shí yī yuè"],     //november
    ["декабрь","十二月","shí èr yuè"]     //december
  ];

  var numbers = [
    ["первое","一","yī"],
    ["второе","二","èr"],
    ["третье","三","sān"],
    ["четвёртое","四","sì"],
    ["пятое","五","wǔ"],
    ["шестое","六","liù"],
    ["седьмое","七","qī"],
    ["восемое","八","bā"],
    ["девятое","九","jiǔ"],
    ["десятое","十","shí"],
    ["одиннадцатое","十一","shí"],
    ["двенадцатое","十二","shí"],
    ["тринадцатое","十三","shí"],
    ["четырнадцатое","十四","shí"],
    ["пятьнадцатое","十五","shí"],
    ["шестнадцатое","十六","shí"],
    ["семнадцатое","十七","shí"],
    ["восемнадцатое","十八","shí"],
    ["девятнадцатое","十九","shí"],
    ["двадцатое","二十","shí"],
    ["двадцать первое","二十一","shí"],
    ["двадцать второе","二十二","shí"],
    ["двадцать третье","二十三","shí"],
    ["двадцать четвёртое","二十四","shí"],
    ["двадцать пятое","二十五","shí"],
    ["двадцать шестое","二十七","shí"],
    ["двадцать седьмое","二十七","shí"],
    ["двадцать восемое","二十八","shí"],
    ["двадцать девятое","二十九","shí"],
    ["тридцатое","三十","shí"],
    ["тридцать первое","三十一","shí"]
  ];

  document.getElementById('russian').innerHTML = days[day][0]+" "+numbers[numb-1][0]+" "+months[month][0];
  document.getElementById('chinese').innerHTML = months[month][1]+numbers[numb-1][1]+"日"+days[day][1];
  document.getElementById('pinyin').innerHTML = months[month][2]+" "+numbers[numb-1][2]+" rì "+days[day][2];
  document.getElementById('date').innerHTML = numb+"/"+(month+1)+"/"+year;
})();
