function getUserProjects(e){let o="https://cuntato.herokuapp.com/api/get-project-list?userID=";o+=e,$.get(o,function(){}).done(e=>{let o="";if(void 0!==(e=e.data)){for(let t=e.length-1;t>=0;t--){let a="/project?projectName="+e[t]._projectname;a+="&projectToken="+e[t]._projecttoken,o+=" <div class='col s12 m6 l4'>",o+="<div class='card rounded project-card'>",o+="<div class='card-content'> <h5 class='truncate'>",o+="<a id='"+e[t]._projecttoken+"' href='"+a+"' ",o+="class='project-link'>"+e[t]._projectname+"</a>",o+="</h5> <span id='copyId"+t+"'>"+e[t]._projecttoken+"</span>",o+=" <i id='Id"+t+"' class='material-icons right ",o+="copy-btn'>content_copy</i>",o+="</div></div></div>"}$("#projectList").html(o),copyToClipboard()}$(".circle-loader").hide(),$("main").show()}).fail(()=>{showToast("Something broken while loading projects","red darken-3")})}function copyToClipboard(){$(".copy-btn").click(function(){let e=$("#copy"+this.id).text(),o=document.createElement("input");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("copy"),showToast("Copied to clipboard ","green darken-3"),document.body.removeChild(o)})}function createProject(e){$("#createID").click(function(){let o=$("#projectName").val(),t=$("#domainURL").val();$.post("https://cuntato.herokuapp.com/api/get-project-token",{userID:e,projectName:o,domainURL:t},function(){}).done(o=>{"ok"===o.status?(showToast("Project created successfully","green darken-3"),getUserProjects(e),$("#projectName").val(""),$("#domainURL").val(""),$(".modal").modal("close")):"Provide a valid project name"===o.message?showToast("Project name is required","yellow darken-3"):"Provide a valid domain URL"===o.message?showToast("Domain name is required","yellow darken-3"):"update your plan"===o.message?showToast("Permission denied","yellow darken-3"):"Already use this name"===o.message&&showToast("Name is already used","red darken-3")}).fail(()=>{showToast("Something went wrong","red darken-3")})})}function showToast(e,o){M.toast({html:e,classes:o})}$(function(){let e=$("span").attr("id");$("main").hide(),getUserProjects(e),createProject(e)});