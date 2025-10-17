// Add simple interactivity — smooth scroll and console info

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Console message for visitors
console.log("🌍 ValueTeam | Flood & Climate Risk Ledger — VCSP Hackathon 2025");
console.log("Follow our project: https://github.com/valueteamvcsphackathon");