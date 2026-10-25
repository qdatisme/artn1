(() => {
 const surface=document.querySelector('#rotate-surface'), reset=document.querySelector('#reset-angle'), fold=document.querySelector('#fold'), panel=document.querySelector('.panel');
 let target=null,pointer=null,lastX=0,angle=0;
 const apply=()=>target?.setAttribute('rotation',{x:0,y:angle,z:0});
 function end(){if(pointer!==null&&surface.hasPointerCapture(pointer))surface.releasePointerCapture(pointer);pointer=null;surface.classList.remove('dragging');}
 surface.addEventListener('pointerdown',e=>{if(surface.hidden||pointer!==null||!e.isPrimary||(e.pointerType==='mouse'&&e.button!==0))return;pointer=e.pointerId;lastX=e.clientX;surface.setPointerCapture(pointer);surface.classList.add('dragging');});
 surface.addEventListener('pointermove',e=>{if(e.pointerId!==pointer)return;angle=((angle+(e.clientX-lastX)*.6)%360+360)%360;lastX=e.clientX;apply();});
 ['pointerup','pointercancel','lostpointercapture'].forEach(n=>surface.addEventListener(n,end));
 reset?.addEventListener('click',()=>{end();angle=0;apply();});
 document.querySelector('#rotate-left')?.addEventListener('click',()=>{angle=(angle+330)%360;apply();});
 document.querySelector('#rotate-right')?.addEventListener('click',()=>{angle=(angle+30)%360;apply();});
 fold?.addEventListener('click',()=>{const c=panel.classList.toggle('collapsed');fold.textContent=c?'Mở rộng':'Thu gọn';fold.setAttribute('aria-expanded',String(!c));});
 document.addEventListener('ar-tracking',e=>{end();angle=0;apply();target=e.detail.found?document.querySelector('#animal-model-'+e.detail.id):null;surface.hidden=!target;apply();});
 window.addEventListener('blur',end);document.addEventListener('visibilitychange',()=>{if(document.hidden)end();});
})();