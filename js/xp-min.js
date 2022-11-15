function numberWithCommas(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function isToday(a){return today=new Date,a.getDate()==today.getDate()&&a.getMonth()==today.getMonth()&&a.getFullYear()==today.getFullYear()}var dateOptions={year:"numeric",month:"long",day:"numeric"},dateNoYearOptions={month:"long",day:"numeric"},today=new Date,seasonStart=new Date("09/18/2022"),seasonEnd=new Date("12/02/2022"),daysRemaining=Math.ceil((seasonEnd.getTime()-today.getTime())/864e5)+1,daysTotal=Math.ceil((seasonEnd.getTime()-seasonStart.getTime())/864e5),xp100PerDay=totalPerLevel[100]/daysTotal,xp200PerDay=totalPerLevel[200]/daysTotal;function populateSummary(){var a=Math.floor(100-100*daysRemaining/daysTotal);$("#summary").append('<span class="text-danger">'+daysRemaining+"</span>/"+daysTotal+" Days Remaining. We're "+a+"% there."),$("#100card .card-body").append('<p class="card-text">'+numberWithCommas(totalPerLevel[100])+" Total XP Required<br/>"+numberWithCommas(Math.ceil(xp100PerDay))+" XP/day</p>"),$("#200card .card-body").append('<p class="card-text">'+numberWithCommas(totalPerLevel[200])+" Total XP Required<br/>"+numberWithCommas(Math.ceil(xp200PerDay))+" XP/day</p>")}function populateXpTable(){var a,e=$("#xpTable tbody");for(a=2;a<xpPerLevel.length&&a<=totalPerLevel.length;a++)e.append('<tr><th scope="row">'+(a-1)+" &rarr; "+a+"</th><td>"+numberWithCommas(xpPerLevel[a])+"</td><td>"+numberWithCommas(totalPerLevel[a])+"</td></tr>")}var days100Data=[],days200Data=[],daysDateData=[];function populateDaysTable(){var a,e=$("#daysTable tbody"),t=2,r=2;for(a=1;a<=daysTotal;a++){for(var o=Math.round(xp100PerDay*a);totalPerLevel[t]<o;)t++;days100Data.push(t);for(var n=Math.round(xp200PerDay*a);totalPerLevel[r]<n;)r++;days200Data.push(r);var d=new Date(seasonStart.getTime());d.setDate(seasonStart.getDate()+a-1),daysDateData.push(d.toLocaleDateString("en-US",dateNoYearOptions));var s="";isToday(d)&&(s=' class="today bg-warning" ',$("#target100level").text(t),$("#target200level").text(r)),e.append('<tr id="day'+a+'" '+s+'><th scope="row">'+a+" ("+d.toLocaleDateString("en-US",dateNoYearOptions)+")</td><td>"+t+" ("+numberWithCommas(o)+" XP)</td><td>"+r+" ("+numberWithCommas(n)+" XP)</td></tr>")}}