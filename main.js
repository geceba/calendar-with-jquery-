
var $window = $(window);
var $month = $('#js-month');
var $tbody = $('#js-calendar-body');
var flagDay = false;

var today = new Date();
var currentYear = today.getFullYear(),
    currentMonth = today.getMonth();
    var dayBool = false;
    var numberIDBOOL = 0; 
$window.on('load',function(){
  calendarHeading(currentYear, currentMonth);
  calendarBody(currentYear, currentMonth, today);

  $('td').click(function(e) {
    //validate date. if the date is less than the current date it can not be selected
    //ignore weekend
    
    $('td').removeClass('color');
    var getID = $(this).attr('id');


    if(numberIDBOOL <= parseInt(getID)) {
        var values = 0;
        
        if(parseInt(getID) === 5 || parseInt(getID) === 12 || parseInt(getID) === 19 || parseInt(getID) === 26 || parseInt(getID) === 33) {
            values = parseInt(getID)+10;
        } else {
            values = parseInt(getID)+8;
        }

        $('#'+getID).addClass('color');
        $('#'+values).addClass('color');

        switch(parseInt(getID)) {
            // saturday
            case 6:
                console.log('i cannot permit this ')
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 13:
                console.log('i cannot permit this ')
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 20:
                console.log('i cannot permit this ')
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 27:
                console.log('i cannot permit this ')
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 34:
                console.log('i cannot permit this ')
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            // sunday
            case 0:
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 7:
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 14:
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 21:
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;

            case 28:
                $('#'+getID).removeClass('color');
                $('#'+values).removeClass('color');
            break;
            
            default:
            break;
        }
    } else {
        for(var tail = numberIDBOOL-1; tail>=0; tail -- ){
            $('#'+tail).removeClass('color');          
        }
        
    }

  });
  
});

function calendarBody(year, month, today){
  var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false;
  var startDate = new Date(year, month, 1);
  var endDate  = new Date(year, month + 1 , 0);
  var startDay = startDate.getDay();
  var endDay = endDate.getDate();
  var textSkip = true;
  var textDate = 1;

  var tableBody ='';
  var numberid = 0;
  for (var row = 0; row < 6; row++){
    var tr = '<tr>';
    
    for (var col = 0; col < 7; col++) {
      if (row === 0 && startDay === col){
        textSkip = false;
      }
      if (textDate > endDay) {
        textSkip = true;
      }
      var addClass = '';

      if(todayYMFlag && textDate === today.getDate() && !textSkip) {
        addClass = 'is-today';

         dayBool = true;
         if(dayBool) {
            numberIDBOOL = numberid;
            //console.log(numberIDBOOL, "valor")
         }
      } else {
        addClass = '';
      }

      var textTd = textSkip ? '&nbsp;' : textDate++;
      var td = '<td id="'+(numberid++)+'" class="'+addClass+'">'+textTd+'</td>';
      tr += td;
    }
    tr += '</tr>';
    tableBody += tr;
  }
  $tbody.html(tableBody);
}

function calendarHeading(year, month){
  $month.text(month + 1);
}



