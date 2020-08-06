function getProjectDomain(t){let e="https://cuntato.herokuapp.com/api/get-project-domain?projectToken=";e+=t,$.get(e,function(){}).done(t=>{let e=t.data;$("#domain").val(e)}).fail(()=>{showToast("Problem faced while loading domain URL","red darken-3")})}function setProjectRelatedCode(t){$("#codeHTML1").text("<input type='text' name='name' id='dataName'>"),$("#codeHTML2").text("<input type='email' name='email' id='dataEmail'>"),$("#codeHTML3").text("<input type='text' name='message' id='dataMessage'>"),$("#codeHTML4").text("<input type='button' value='Send' id='btnSend'>");let e="$('#btnSend').click(function() {<br>";e+="let url = 'https://cuntato.herokuapp.com/api/project-data';<br>",e+="let data = {<br>",e+="'name': $('#dataName').val(),<br>",e+="'email': $('#dataEmail').val(),<br>",e+="'message': $('#dataMessage').val()<br>};<br>",e+="data = JSON.stringify(data);<br>",e+="let projectID = '"+t+"';<br>",e+="let currentURL = window.location.href;<br>",e+="$.post(url, { data , projectID: projectID, currentURL: currentURL }, function() {})<br>",e+=".done((res) => {<br>",e+="console.log('Message sent successfully');<br>",e+="})<br>.fail(() => {<br>",e+="console.log('Something went wrong')<br>",e+="})<br>});<br>",$("#jquery").html(e),copyCode()}function copyCode(){$("#code-copy-btn").click(function(){let t=document.getElementById("jquery"),e=document.createElement("textarea");e.value=t.textContent,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove(),showToast("Code copied to clipboard","green darken-3")})}function getProjectData(t){let e="https://cuntato.herokuapp.com/api/project-data?project=";e+=t,$.get(e,function(){}).done(t=>{if(void 0===t.getData||null===t.getData||0===t.getData.length){let t="<div class='center-align'> <img src='./img/svg/empty.svg'";t+="alt='empty' class='responsive-img no-msg-img' />",t+="<h3>No one has written yet!</h3></div>",$("#nothingData").html(t)}else generateTable(t.getData),downloadData();$(".circle-loader").hide(),$("main").show()}).fail(()=>{showToast("Something broken while loading messages","red darken-3")})}function generateTable(t){let e="<table id='example' class='display'>";e+="<thead><tr><th>Name</th><th>Email</th>",e+="<th>Message</th><th>Send Date</th></tr></thead><tbody>";for(let a=t.length-1;a>=0;a--)e+="<tr><td>"+t[a].data.name+"</td>",e+="<td>"+t[a].data.email+"</td>",e+="<td>"+t[a].data.message+"</td>",e+="<td>"+t[a].data.createAt+"</td></tr>";e+=" </tbody></table>",$("#proTableID").html(e)}function downloadData(){$("#example").DataTable({dom:"Bfrtip",buttons:["copyHtml5","excelHtml5","csvHtml5","pdfHtml5"]})}function updateDomainURL(t){$("#yesChange").click(function(){let e=$("#domain").val();$.post("https://cuntato.herokuapp.com/api/update-domain-url",{projectToken:t,newURL:e},function(){}).done(t=>{"ok"===t.status?showToast("Domain name updated successfully","green darken-3"):showToast("Something went wrong","red darken-3")}).fail(()=>{showToast("Something went wrong","red darken-3")}),$(".modal").modal("close"),$("#domain").val(""),getProjectDomain(t)}),$("#noChange").click(function(){$(".modal").modal("close")})}function showToast(t,e){M.toast({html:t,classes:e})}$(function(){let t=$("span").attr("id");$("main").hide(),getProjectDomain(t),setProjectRelatedCode(t),getProjectData(t),updateDomainURL(t)});