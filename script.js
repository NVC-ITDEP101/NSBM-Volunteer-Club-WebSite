
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            // Remove 'active' class from all slides
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Reset to start if at the end, or go to end if at the start
            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;
            
            // Add 'active' class to the target slide
            slides[currentSlide].classList.add('active');
        }

        function moveSlide(step) {
            currentSlide += step;
            showSlide(currentSlide);
        }

        // Optional: Auto-play every 5 seconds
        setInterval(() => moveSlide(1), 5000);




        const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Target Section 2
const section2 = document.querySelector('#section2');
observer.observe(section2);

function gotopage () {
    window.location.href = "Board member.html";
}


 // Intersection Observer to trigger reveal and animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                animateMemberCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(document.querySelector('.stats-container'));

    function animateMemberCounters() {
        const counters = document.querySelectorAll('.stat-counter');
        const speed = 150; 

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }












// Add this to your existing observer script
const section3 = document.querySelector('#section3');
observer.observe(section3);

const section4 = document.querySelector('#section4');
observer.observe(section4);











const modal = document.getElementById("newsModal");
const closeModal = document.querySelector(".close-modal");

// Select all news cards
document.querySelectorAll('.news-card').forEach(card => {
    card.style.cursor = "pointer"; // Make it look clickable
    
    card.addEventListener('click', () => {
        // Get data from the clicked card
        const img = card.querySelector('img').src;
        const date = card.querySelector('.news-date').innerText;
        const title = card.querySelector('h4').innerText;
        const desc = card.querySelector('p').innerText;

        // Fill the modal
        document.getElementById('modalImg').src = img;
        document.getElementById('modalDate').innerText = date;
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalDescription').innerText = desc + " More detailed content regarding this specific event can be placed here. This window provides a focused view for your club members to read the full update.";

        // Show the modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    });
});

// Close modal when clicking 'X'
closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

// Close modal when clicking outside of it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};








const card = document.querySelectorAll('.news-card');

// When mouse enters: Pop Up
card.forEach((card) => {
    card.onmouseover = function() {
        card.style.transform = "scale(1.1) translateY(-10px)";
    };
});

// When mouse leaves: Go back to normal
card.forEach((card) => {
    card.onmouseout = function() {
        card.style.transform = "scale(1) translateY(0)";
        card.style.transition = "transform 0.05s ease";
    };
});












//mobile responsive



document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-list a');
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTexts = document.querySelectorAll('.slider-text');
    const slides = document.querySelectorAll('.slide img');

    const applyMobileFixes = () => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // 1. Shrink Nav Bar
            if (nav) nav.style.height = '50px';
            navLinks.forEach(link => { link.style.fontSize = '12px'; });

            // 2. Fix Slider & Remove Black Space
            if (sliderContainer) {
                sliderContainer.style.height = '250px'; // Set a fixed height for mobile
                sliderContainer.style.width = '100%';
                sliderContainer.style.overflow = 'hidden';
            }

            slides.forEach(img => {
                img.style.height = '300px'; // Match container height
                img.style.objectFit = 'cover';
            });

            // 3. Move Text ONTO the Slide
            sliderTexts.forEach(text => {
                text.style.position = 'absolute';
                text.style.top = '50%';         // Center vertically
                text.style.left = '5%';        // Center horizontally
                text.style.transform = 'translate(-50%, -50%)';
                text.style.width = '90%';
                text.style.textAlign = 'center';
                text.style.zIndex = '10';       // Ensure it stays above image
                text.style.background = 'transparent'; // Remove any block backgrounds

                const h1 = text.querySelector('h1');
                const h2 = text.querySelector('h2');
                if (h1) {
                    h1.style.fontSize = '20px';
                    h1.style.margin = '0';
                    h1.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)'; // Make text readable
                }
                if (h2) {
                    h2.style.fontSize = '12px';
                    h2.style.textShadow = '1px 1px 3px rgba(0,0,0,0.7)';
                }
            });

        } else {
            // Reset to Desktop (Original Styles)
            if (nav) nav.style.height = '80px';
            if (sliderContainer) sliderContainer.style.height = '100vh';
            slides.forEach(img => { img.style.height = '100vh'; });
            sliderTexts.forEach(text => {
                text.style.position = 'absolute';
                text.style.top = '55%';
                text.style.transform = 'none';
                const h1 = text.querySelector('h1');
                if (h1) h1.style.fontSize = '50px';
            });
        }
    };

    applyMobileFixes();
    window.addEventListener('resize', applyMobileFixes);
});




//section 2 mobile responsive

const applySection2MobileFixes = () => {
    const isMobile = window.innerWidth <= 768;
    
    // Select Section 2 elements
    const trapeziumBg = document.querySelector('.trapezium-bg');
    const contentWrapper = document.querySelector('.content-wrapper');
    const imageBox = document.querySelector('.glass-card');
    const textBox = document.querySelector('.text-box');
    const memberBtn = document.querySelector('.member-btn');
    const aboutImg = document.querySelector('.image-box img');

    if (isMobile) {
        // 1. Fix Background: Reduce height so it doesn't push elements down
        if (trapeziumBg) {
            trapeziumBg.style.width = '100%';
            trapeziumBg.style.height = '250px'; 
            trapeziumBg.style.position = 'absolute';
            trapeziumBg.style.top = '0';
            trapeziumBg.style.clipPath = 'polygon(0 0, 100% 0, 0% 100%, 0% 100%)';
            
        }

        // 2. Fix Layout: Stack items and center them
        if (contentWrapper) {
            contentWrapper.style.display = 'flex';
            contentWrapper.style.flexDirection = 'column';
            contentWrapper.style.alignItems = 'center';
            contentWrapper.style.padding = '20px';
            contentWrapper.style.gap = '20px';
        }

        // 3. Shrink Image: Prevent it from taking too much space
        if (imageBox) {
            imageBox.style.width = 'auto'; 
            imageBox.style.height = '50%';
            imageBox.style.top = '0';
            imageBox.style.borderRadius ='24px';
            
           
        }
        if (aboutImg) {
            aboutImg.style.width = '100%';
            aboutImg.style.height = 'auto';
            aboutImg.style.borderRadius = '15px';
        }

        // 4. Center Button: Fix the "cutting" and "right-side" issue
        if (memberBtn) {
            memberBtn.style.display = 'block';
            memberBtn.style.margin = '40px auto'; // Centers horizontally with space
            memberBtn.style.position = 'relative';
            memberBtn.style.left = '0';
            memberBtn.style.transform = 'none';
            memberBtn.style.width = 'fit-content';
            memberBtn.style.clear = 'both';
        }

        // 5. Adjust Text Box
        if (textBox) {
            textBox.style.width = '100%';
            textBox.style.textAlign = 'center';
            textBox.style.color = '#333'; // Ensure visibility
        }

    } 
};

// Execute and listen for window changes
window.addEventListener('resize', applySection2MobileFixes);
applySection2MobileFixes();





//section 3 mobile responsive
const applySection3MobileFixes = () => {
    const isMobile = window.innerWidth <= 768;
    
    // Select Section 3 elements
    const trapeziumBgRight = document.querySelector('.trapezium-bg-right');
    const statNumbersRow = document.querySelector('.stat-numbers-row');
    const statItems = document.querySelectorAll('.stat-item');
    const modernStatCard = document.querySelector('.modern-stat-card');

    if (isMobile) {
        // 1. Fix Trapezium Background (Right side)
        if (trapeziumBgRight) {
            trapeziumBgRight.style.width = '100%';
            trapeziumBgRight.style.height = '100%';
            trapeziumBgRight.style.position = 'absolute';
            trapeziumBgRight.style.top = '0';
            trapeziumBgRight.style.right = '0';
            // Shape: Slanted from top-right to bottom-left
            trapeziumBgRight.style.clipPath = 'polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)';
            trapeziumBgRight.style.zIndex = '-1';
        }

        // 2. Increase Stat-Numbers-Row Width & Justify
        if (statNumbersRow) {
            statNumbersRow.style.width = '100%';       // Increased width
            statNumbersRow.style.display = 'flex';
            statNumbersRow.style.flexDirection = 'row'; // Keep them side-by-side on mobile
            statNumbersRow.style.justifyContent = 'space-around'; // Justify contents
            statNumbersRow.style.alignItems = 'center';
            statNumbersRow.style.padding = '10px 0';
        }

        // 3. Adjust Stat Items for better spacing
        statItems.forEach(item => {
            item.style.flex = '1';
            item.style.textAlign = 'center';
            
            const counter = item.querySelector('.stat-counter');
            if (counter) counter.style.fontSize = '2rem'; // Shrink numbers slightly for mobile
        });

        // 4. Ensure the main card is wide enough
        if (modernStatCard) {
            modernStatCard.style.width = '95%';
            modernStatCard.style.padding = '20px 10px';
            modernStatCard.style.margin = '0 auto';
        }

    } 
};

// Run on load and resize
window.addEventListener('resize', applySection3MobileFixes);
applySection3MobileFixes();


const applySection4MobileFixes = () => {
    const isMobile = window.innerWidth <= 768;
    
    // Select Section 3 elements
    const newscrd = document.querySelector('.news-card');
    const statNumbersRow = document.querySelector('.stat-numbers-row');
    
    if (isMobile) {
        // 1. Fix Trapezium Background (Right side)
        if (newscrd) {
            newscrd.style.width = '100%';
            newscrd.style.height = '90%';
            newscrd.style.top = '20px';
           
        }

       
    } 
};

// Run on load and resize
window.addEventListener('resize', applySection3MobileFixes);
applySection4MobileFixes();