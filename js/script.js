// Menunggu halaman selesai dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    
    // Mengambil semua elemen <section>
    const sections = document.querySelectorAll('section');

    // Opsi untuk IntersectionObserver
    // threshold 0.1 artinya animasi mulai saat 10% elemen masuk layar
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    // Fungsi callback saat elemen terlihat
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' untuk memicu animasi CSS
                entry.target.classList.add('visible');
                // (Opsional) Hentikan observasi setelah muncul agar tidak animasi ulang
                // observer.unobserve(entry.target); 
            }
        });
    };

    // Membuat instance observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Menerapkan observer ke setiap section
    sections.forEach(section => {
        observer.observe(section);
    });
});