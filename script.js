document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. ANIMASI FADE IN UP (KODE SEBELUMNYA)
    // ==========================================
    const elemenAnimasi = document.querySelectorAll('.content-box, .card, .gallery-item');
    elemenAnimasi.forEach(el => el.classList.add('fade-in-element'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('muncul');
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elemenAnimasi.forEach(el => observer.observe(el));


    // ==========================================
    // 2. EFEK TEKS MENGETIK OTOMATIS (TYPING)
    // ==========================================
    // Mengubah teks deskripsi di Home agar mengetik bergantian
    const pHome = document.querySelector('#home p');
    if (pHome) {
        const kataKata = [
            "Selamat datang di ruang digital saya.",
            "Pelajar SMK Pawyatan Daha 1 Kediri.",
            "Pesilat Pagar Nusa (PN LOSS).",
            "Web Developer pemula yang senang berkreasi."
        ];
        let kataIndex = 0;
        let hurufIndex = 0;
        let hapus = false;

        function ketik() {
            const kataSaatIni = kataKata[kataIndex];
            if (!hapus) {
                pHome.textContent = kataSaatIni.substring(0, hurufIndex + 1) + "|";
                hurufIndex++;
                if (hurufIndex === kataSaatIni.length) {
                    hapus = true;
                    setTimeout(ketik, 2000); // Jeda sebelum menghapus teks
                } else {
                    setTimeout(ketik, 80);
                }
            } else {
                pHome.textContent = kataSaatIni.substring(0, hurufIndex - 1) + "|";
                hurufIndex--;
                if (hurufIndex === 0) {
                    hapus = false;
                    kataIndex = (kataIndex + 1) % kataKata.length;
                    setTimeout(ketik, 500);
                } else {
                    setTimeout(ketik, 40);
                }
            }
        }
        ketik();
    }


    // ==========================================
    // 3. GENERATOR PARTIKEL HIJAU MELAYANG
    // ==========================================
    const body = document.body;
    const kontainerPartikel = document.createElement('div');
    kontainerPartikel.id = 'particle-container';
    body.appendChild(kontainerPartikel);

    // Membuat 40 partikel melayang secara acak
    for (let i = 0; i < 40; i++) {
        const partikel = document.createElement('div');
        partikel.classList.add('particle');
        
        // Atur posisi dan ukuran acak
        const ukuran = Math.random() * 5 + 2; // ukuran 2px - 7px
        partikel.style.width = `${ukuran}px`;
        partikel.style.height = `${ukuran}px`;
        partikel.style.left = `${Math.random() * 100}vw`;
        
        // Atur durasi dan delay animasi acak agar alami
        partikel.style.animationDuration = `${Math.random() * 6 + 4}s`;
        partikel.style.animationDelay = `${Math.random() * 5}s`;
        
        kontainerPartikel.appendChild(partikel);
    }
});