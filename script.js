document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil semua elemen konten box, card, dan galeri untuk dianimasikan
    const elemenAnimasi = document.querySelectorAll('.content-box, .card, .gallery-item');

    // 2. Pasang class dasar animasi ke semua elemen tersebut
    elemenAnimasi.forEach(el => {
        el.classList.add('fade-in-element');
    });

    // 3. Logika mendeteksi scroll / kemunculan elemen di layar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Memberikan jeda (delay) sedikit antar elemen agar munculnya berurutan rapi
                setTimeout(() => {
                    entry.target.classList.add('muncul');
                }, index * 100); 
                
                // Berhenti mengamati jika sudah muncul sekali
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Animasi aktif jika 15% bagian elemen sudah masuk layar
    });

    // 4. Jalankan pengamat pada setiap elemen
    elemenAnimasi.forEach(el => {
        observer.observe(el);
    });
});