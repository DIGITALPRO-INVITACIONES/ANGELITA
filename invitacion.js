'use strict';
const get = id => document.getElementById(id);
const music=get('music');music.volume=.55;
const confirmation='https://wa.me/15713562697?text='+encodeURIComponent('Hola, quiero confirmar mi asistencia al cumpleaños de Angelita el sábado 24 de octubre de 2026 a las 4:00 p. m. Mi nombre es: \nCantidad de personas: ');
document.querySelectorAll('.confirm-link').forEach(a=>a.href=confirmation);
get('questions').href='https://wa.me/15713562697?text='+encodeURIComponent('Hola, tengo una consulta sobre el cumpleaños de Angelita en el salón Happily el 24 de octubre.');
const maps='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Happily salón de eventos Monseñor Salvatierra 591 Santa Cruz de la Sierra Bolivia');
get('maps-main').href=maps;get('maps-quick').href=maps;
function musicState(){const playing=!music.paused;get('music-toggle').setAttribute('aria-pressed',String(playing));get('music-toggle').setAttribute('aria-label',playing?'Pausar música':'Reproducir música');get('music-toggle').innerHTML=(playing?'Ⅱ':'♫')+' <span>Música</span>';}
music.addEventListener('play',musicState);music.addEventListener('pause',musicState);
get('enter').addEventListener('click',()=>{get('enter').disabled=true;get('invitation').hidden=false;get('utilities').hidden=false;get('quick-actions').hidden=false;get('cover').classList.add('opening');music.play().catch(musicState);setTimeout(()=>{get('cover').hidden=true;document.body.classList.remove('sealed');window.scrollTo(0,0);document.querySelector('.name').focus({preventScroll:true});},650);});
get('music-toggle').addEventListener('click',()=>{if(music.paused)music.play().catch(musicState);else music.pause();});
get('effects-toggle').addEventListener('click',()=>{const off=document.body.classList.toggle('effects-off');get('effects-toggle').setAttribute('aria-pressed',String(!off));get('effects-toggle').setAttribute('aria-label',off?'Activar animaciones':'Pausar animaciones');});
for(let n=0;n<22;n++){const star=document.createElement('span');star.className='soft-sparkle';star.textContent=n%2?'✧':'✦';star.style.cssText=`--x:${Math.random()*98}%;--y:${Math.random()*100}%;--size:${12+Math.random()*11}px;--speed:${4+Math.random()*6}s;--delay:-${Math.random()*10}s`;get('sparkles').append(star);}
for(let n=0;n<7;n++){const bow=document.createElement('span');bow.className='floating-bow';bow.innerHTML='<svg aria-hidden="true"><use href="#bow"/></svg>';bow.style.cssText=`--x:${Math.random()*95}%;--size:${22+Math.random()*12}px;--speed:${19+Math.random()*13}s;--delay:-${Math.random()*30}s`;get('sparkles').append(bow);}
const birthday=new Date('2026-10-24T16:00:00-04:00').getTime();
function countdown(){const delta=Math.max(0,birthday-Date.now());const values=[Math.floor(delta/86400000),Math.floor(delta/3600000)%24,Math.floor(delta/60000)%60,Math.floor(delta/1000)%60];get('countdown').innerHTML=values.map((v,i)=>`<div><strong>${String(v).padStart(2,'0')}</strong><span>${['Días','Horas','Minutos','Segundos'][i]}</span></div>`).join('');if(!delta)document.querySelector('.countdown-copy>.eyebrow').textContent='¡UN DÍA PARA GUARDAR EN EL CORAZÓN!';}
countdown();setInterval(countdown,1000);
const photos=[{src:'assets/angelita-pastel.webp',alt:'Angelita sonriendo junto a su pastel rosa',caption:'Una sonrisa que lo ilumina todo.'},{src:'assets/angelita-sentada.webp',alt:'Angelita sentada con su vestido rosa de lunares',caption:'Tres años de momentos bonitos.'}];
document.querySelectorAll('.photo-open').forEach(button=>button.addEventListener('click',()=>{const photo=photos[Number(button.dataset.photo)];get('photo-full').src=photo.src;get('photo-full').alt=photo.alt;get('photo-caption').textContent=photo.caption;get('photo-dialog').showModal();}));
get('photo-close').addEventListener('click',()=>get('photo-dialog').close());
get('photo-dialog').addEventListener('click',event=>{if(event.target===get('photo-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close();}});
function publicURL(){if(location.protocol==='file:'||['localhost','127.0.0.1'].includes(location.hostname)){get('share-status').textContent='El enlace para compartir estará disponible cuando se publique la invitación.';return null;}return location.href.split('#')[0];}
async function copyLink(){const url=publicURL();if(!url)return;try{await navigator.clipboard.writeText(url);get('share-status').textContent='Enlace copiado. Ya puedes compartir la invitación.';}catch{get('share-status').textContent='Copia el enlace de la barra del navegador para compartirlo.';}}
get('copy-link').addEventListener('click',copyLink);get('share').addEventListener('click',async()=>{const url=publicURL();if(!url)return;if(navigator.share){try{await navigator.share({title:'Angelita cumple 3 años',text:'¡Ven a celebrar con Angelita! Sábado 24 de octubre, 4:00 p. m., salón Happily.',url});}catch(e){if(e.name!=='AbortError')await copyLink();}}else await copyLink();});

// Globos de orejitas y lazo: decorativos y sin bloquear botones ni lectura.
for(let n=0;n<9;n++){
 const balloon=document.createElement('span');balloon.className='mouse-balloon';
 balloon.style.cssText=`--balloon-x:${[3,88,15,76,6,91,28,64,46][n]}%;--balloon-size:${44+n%3*13}px;--balloon-color:${['#e8a5c9','#d990b7','#f0bdd7'][n%3]};--balloon-speed:${22+n%4*3}s;--balloon-delay:-${n*3.7}s`;
 balloon.innerHTML='<svg viewBox="0 0 120 240" aria-hidden="true"><path d="M61 136q-19 23 0 45t0 53" fill="none" stroke="#ad8394" stroke-width="1.7"/><circle cx="60" cy="85" r="40" fill="currentColor" stroke="#fff9fc" stroke-width="2"/><circle cx="27" cy="38" r="25" fill="currentColor" stroke="#fff9fc" stroke-width="2"/><circle cx="94" cy="38" r="25" fill="currentColor" stroke="#fff9fc" stroke-width="2"/><path d="m60 120-7 13h15Z" fill="currentColor"/><path d="M55 36C43 11 30 9 32 33s8 31 24 12m9-9c12-25 25-27 23-3s-8 31-24 12" fill="#cd548f"/><ellipse cx="60" cy="39" rx="9" ry="10" fill="#c64785"/><path d="M36 63q-17 35 4 48" fill="none" stroke="#fff5fa" stroke-width="4" stroke-linecap="round"/></svg>';
 get('floating-balloons').append(balloon);
}
