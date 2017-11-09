(function(){
  var date = new Date();
  var days = [
    ["Воскресенье","lundi/sonntag","星期日/xīng qí rì"],     //sunday
    ["Понедельник","ponedel'nik/montag","星期一/xīng qí yī"],   //monday
    ["Вторник","mardi/dienstag","星期二/xīng qí'èr"],         //tuesday
    ["Среда","mercredi/mittwoch","星期三/xīng qí sān"],            //wednesday
    ["Четверг","jeudi/donnerstag","星期四/xīng qí sì"],      //thursday
    ["Пятница","vendredi/freitag","星期五/xīng qí wǔ"],        //friday
    ["Суббота","samedi/samstag","星期六/xīng qí liù"]          //saturday
  ];
  document.getElementById('russian').innerHTML = days[date.getDay()][0];
  document.getElementById('german').innerHTML  = days[date.getDay()][1];
  document.getElementById('chinese').innerHTML = days[date.getDay()][2];
})();
