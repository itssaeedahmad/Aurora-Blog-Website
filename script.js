const posts=[
{title:"Lorem ipsum dolor",img:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200",date:"Jan 12",file:"page1.html"},
{title:"Lorem ipsum dolor",img:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",date:"Feb 03",file:"page2.html"},
{title:"Lorem ipsum dolor",img:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",date:"Mar 18",file:"page3.html"},
{title:"Lorem ipsum dolor",img:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200",date:"Apr 27",file:"page4.html"}
];

const grid=document.getElementById('postGrid');
posts.forEach(p=>{
    const card=document.createElement('a');
    card.href=p.file;
    card.className='card fade';
    card.innerHTML=`<img src="${p.img}"><div class="card-content"><h3>${p.title}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.</p><span>${p.date}</span></div>`;
    grid.appendChild(card);
});

function scrollToPosts(){
    document.getElementById('posts').scrollIntoView({behavior:'smooth'});
}

const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){e.target.classList.add('visible');}
    });
});
document.querySelectorAll('.fade').forEach(el=>observer.observe(el));

const canvas=document.getElementById('bg');
const ctx=canvas.getContext('2d');
let w,h,particles=[];
function resize(){w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight;}
window.addEventListener('resize',resize);resize();
for(let i=0;i<90;i++){
    particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.6+0.4,v:Math.random()*0.35+0.08});
}
function animate(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='rgba(122,162,255,0.75)';
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
        p.y-=p.v;if(p.y<0)p.y=h;
    });
    requestAnimationFrame(animate);
}
animate();

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    multiplier: 1.2,
    inertia: 0.85
});