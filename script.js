// ==============================
// LOGIN SEDERHANA
// ==============================
function login() {
    const name = document.getElementById('username').value.trim();
    const region = document.getElementById('region').value.trim();

    if (name === "" || region === "") {
        alert("Silakan isi Nama dan Daerah Asal.");
        return;
    }

    // Sembunyikan form login, tampilkan dashboard
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

    // Tampilkan nama dan daerah
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayRegion').innerText = region;
}

function logout() {
    // Kembali ke halaman login
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';

    // Reset input
    document.getElementById('username').value = "";
    document.getElementById('region').value = "";
}

// ==============================
// SCROLL KE SECTION
// ==============================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({behavior: "smooth"});
    }
}

// ==============================
// FORMULIR KONTAK
// ==============================
function submitContactForm(event) {
    event.preventDefault(); // Mencegah reload page

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Silakan isi semua kolom formulir.");
        return;
    }

    alert("Terima kasih, " + name + "! Pesan Anda telah terkirim.");
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// ==============================
// EVENT LISTENER UNTUK FORM KONTAK
// ==============================
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }
});
