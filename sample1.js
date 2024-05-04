
cbrtt=[
'rotateX(-10deg) rotateY(-10deg) rotateZ(0deg)',
'rotateX(-10deg) rotateY(-100deg) rotateZ(0deg)',
'rotateX(-100deg) rotateY(0deg) rotateZ(-10deg)',
'rotateX(80deg) rotateY(0deg) rotateZ(10deg)',
'rotateX(-10deg) rotateY(80deg) rotateZ(0deg)',
'rotateX(-10deg) rotateY(170deg) rotateZ(0deg)'
];
cbid.addEventListener('click',
 function(){
  cbid.style.transform='rotateX('+(800+200*Math.random())+'deg) rotateY('+(50+100*Math.random())+'deg) rotateZ('+(50+100*Math.random())+'deg)';
  setTimeout(function(){
   cbid.style.transform=cbrtt[Math.floor(Math.random()*6)];
  },1500);
 }
,false);
