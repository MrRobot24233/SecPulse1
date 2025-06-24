    document.addEventListener('DOMContentLoaded', function() {
    // كود التنقل بين الصفحات
    document.querySelectorAll('nav a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (!page) return;
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const target = document.getElementById(page);
            if (target) target.classList.add('active');
            document.querySelectorAll('nav a[data-page]').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // القائمة الجانبية للموبايل
    const mobileMenu = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');
    if (mobileMenu && navUl) {
        mobileMenu.addEventListener('click', function() {
            navUl.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenu.textContent = navUl.classList.contains('active') ? '✖' : '☰';
        });
    }
});
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('discountForm');
        var thanks = document.getElementById('fiverrThanks');
        if(form && thanks) {
            form.addEventListener('submit', function(e) {
                setTimeout(function() {
                    form.style.display = 'none';
                    thanks.style.display = 'block';
                }, 500);
            });
        }
    });

    // البحث في صفحة الأدوات
    document.addEventListener('DOMContentLoaded', function() {
        // البحث في صفحة التعلم
        const searchInput = document.getElementById('learn-search');
        const filterSelect = document.getElementById('learn-filter');
        const cards = document.querySelectorAll('#learn .tools-grid .tool-card');

        function filterLearn() {
            const search = searchInput.value.trim().toLowerCase();
            const level = filterSelect.value;
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                const cardLevel = card.getAttribute('data-level') || '';
                const matchSearch = search === '' || text.includes(search);
                const matchLevel = !level || (cardLevel && cardLevel.includes(level));
                card.style.display = (matchSearch && matchLevel) ? '' : 'none';
            });
        }

        if (searchInput && filterSelect) {
            searchInput.addEventListener('input', filterLearn);
            filterSelect.addEventListener('change', filterLearn);
            // دعم الضغط على Enter
            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    filterLearn();
                }
            });
        }
    });

    // هنا تضع الزر
    document.addEventListener('DOMContentLoaded', function() {
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });