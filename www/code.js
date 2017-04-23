NavBar_HOM.onclick=function(choice){
  if(typeof choice == "object") return;
  if (choice == "ICA") { ChangeForm(ICA); }
  if (choice == "GES") { ChangeForm(GES); }
  if (choice == "ECO") { ChangeForm(ECO); }
  if (choice == "DIS") { ChangeForm(DIS); }
}
FooterBar_HOM.onclick=function(choice){
  ChangeForm(CTC);
}
Header_ICA.onclick=function(){
  ChangeForm(HOM)
}
FooterBar_ICA.onclick=function(choice){
  if(typeof choice == "object") return;
  if (choice == "GES") { ChangeForm(GES); }
  if (choice == "ECO") { ChangeForm(ECO); }
}
List_ICA.onclick=function(choice){
  if(typeof choice == "object") return;
  if (choice == 2) { ChangeForm(ICA_TDT); }
}
List_ICASESSIONS.onclick=function(choice){
  if(typeof choice == "object") return;
  if (choice == 1) { window.open('http://ecol2.com/timeline/date/embed/?lang=fr&initial_zoom=2&title=ICA%20-%202%C3%A8me%20semestre&source=1N5wBbZNWZlfExpMwqfdaTH5OS88L6K8FsRzNqNlx74g','_blank') }
  if (choice == 2) { window.open('http://ecol2.com/timeline/date/embed/?lang=fr&initial_zoom=2&title=ICA%20-%202%C3%A8me%20semestre&source=1dxNZDig02rfAax-QLs7FgE4S5UJ8kOUm77_yBMJ7Aoo','_blank') }
  if (choice == 3) { window.open('http://ecol2.com/timeline/date/embed/?lang=fr&initial_zoom=2&title=ICA%20-%202e%20semestre&source=1TK_MqhUoX3wOBpAGQthDqG4WtF34SMnpHnBCdTQajdw','_blank') }
}
Header_ICATDT.onclick=function(){
  ChangeForm(ICA)
}
FooterBar_GES.onclick=function(choice){
  if(typeof choice == "object") return;
  if (choice == "ICA") { ChangeForm(ICA); }
  if (choice == "ECO") { ChangeForm(ECO); }
}
Header_GES.onclick=function(){
  ChangeForm(HOM)
}
List_GesSESSIONS.onclick=function(choice){
  if(typeof choice == "object") return;
  if (choice == 1) { window.open('http://ecol2.com/timeline/date/embed/?lang=fr&initial_zoom=2&title=GESTION%20-%202e%20semestre&source=1lBVwX7qTAc97Ka8jBkp4V4TRZd-OYej459v0jqgIN8E','_blank') }
  if (choice == 2) { window.open('http://ecol2.com/timeline/date/embed/?lang=fr&initial_zoom=2&title=GESTION%20-%201er%20semestre&source=1gbhA4ehShYf5EuZpQDPbaVdzVdHJ0eVTYT08JO5Rmo0','_blank') }
  if (choice == 3) { window.open('http://ecol2.com/timeline/date/embed/?lang=fr&initial_zoom=2&title=GESTION%20-%202%C3%A8me%20semestre&source=16co0A3uvqgu_gnnyoAUX43us3L5XDQV0uHniGpWbqI0','_blank') }
}
Header_GesJRN.onclick=function(){
  ChangeForm(GES)
}
Header_GesCPT.onclick=function(){
  ChangeForm(GES)
}
Header_GesJEU.onclick=function(){
  ChangeForm(GES)
}
Header_GesREF.onclick=function(){
  ChangeForm(GES)
}
FooterBar_ECO.onclick=function(choice){
  if(typeof choice == "object") return;
  if (choice == "GES") { ChangeForm(GES); }
  if (choice == "ICA") { ChangeForm(ICA); }
}
Header_ECO.onclick=function(){
  ChangeForm(HOM)
}
Header_DIS.onclick=function(){
  ChangeForm(HOM)
}
Header_CTC.onclick=function(){
  ChangeForm(HOM)
}