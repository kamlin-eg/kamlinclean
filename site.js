const $=id=>document.getElementById(id);
const bookings=JSON.parse(localStorage.getItem('kamlin_bookings')||'[]');
$('bookingForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const item={id:Date.now(),name:$('bName').value,phone:$('bPhone').value,place:$('bPlace').value,service:$('bService').value,area:$('bArea').value,date:$('bDate').value,notes:$('bNotes').value,status:'جديد',created:new Date().toISOString()};
 bookings.unshift(item);localStorage.setItem('kamlin_bookings',JSON.stringify(bookings));
 $('bookingMsg').textContent='تم حفظ طلبك بنجاح. سيتم فتح واتساب لإكمال الإرسال.';
 const msg=`طلب خدمة جديد من موقع كاملين%0Aالاسم: ${item.name}%0Aالهاتف: ${item.phone}%0Aالمكان: ${item.place}%0Aالخدمة: ${item.service}%0Aالمنطقة: ${item.area}%0Aالتاريخ: ${item.date}%0Aالتفاصيل: ${item.notes}`;
 setTimeout(()=>window.open('https://wa.me/201010420272?text='+msg,'_blank'),500);
 e.target.reset();
});
document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));