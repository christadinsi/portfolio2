const nav = document.querySelector("nav");
      const header = document.querySelector("header");

      const sectionOneOptions = {
        rootMargin : "-200px 0px 0px 0px"
      };

      const sectionOneObserver = new IntersectionObserver
      (function(
        entries, sectionOneObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting){
            nav.classList.add("nav-scolled");
          } else {
            nav.classList.remove("nav-scolled");
          }
        });
      },
      sectionOneOptions);
      
      sectionOneObserver.observe(header);   