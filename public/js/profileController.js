function getProjectCount(t){let o="https://cuntato.herokuapp.com/api/get-project-count?userID=";o+=t,$.get(o,function(){}).done(t=>{let o=t.data;$("#projectCount").html(o)})}$(function(){getProjectCount($("span").attr("id"))});