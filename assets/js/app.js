const ratio = .1
const option = {
     root: null,
     rootMargin: '0px',
     threshold: ratio
 }
 const handleIntersect = function ( entries, observer){
     entries.forEach(function(entry){
         if (entry.intersectionRatio > ratio){ 
             entry.target.classList.add('reveal-visible')
             observer.unobsrve(entry.target)
         }  
         
     })
 }
 const observer = new IntersectionObserver(handleIntersect, option);
 document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
 })
