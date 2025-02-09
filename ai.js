const messagesContainer = document.getElementById("chat-messages");
const inputField = document.getElementById("input-field");
const sendButton = document.getElementById("send-btn");
const chatbot = document.getElementById("chatbot");
const chatToggle = document.getElementById("chat-toggle");
const sendSound = document.getElementById("send-sound");
const receiveSound = document.getElementById("receive-sound");

// Data tanya jawab tentang perusahaan
const faqData = [{
    keywords: ["nama kamu", "siapa nama kamu", "nama lu"],
    response: "Nama saya syafiq."
}, {
    keywords: ["umur", "berapa umur kamu", "usia kamu", "usia"],
    response: "usia saya 16 tahun."
}, {
    keywords: ["tinggal di mana", "lokasi kamu", "tempat tinggal"],
    response: "Saya tinggal di kota cirebon."
}, {
    keywords: ["hobi", "kegemaran", "suka ngapain"],
    response: "Saya suka coding, itu adalah kegiatan favorit saya."
}, {
    keywords: ["makanan favorit", "suka makan apa", "makanan kesukaan"],
    response: "Makanan favorit saya adalah curry dari kimukatsu."
}, {
    keywords: ["pekerjaan", "kerja apa", "profesi kamu", "freelance"],
    response: "Saya freelance membuka jasa pembuatan website dengan fitur chat ai di dalam website nya."
}, {
    keywords: ["cita-cita", "impian kamu", "mimpi kamu"],
    response: "Cita-cita saya adalah menjadi software developer / arsitektur."
}, {
    keywords: ["warna favorit", "suka warna apa", "warna kesukaan"],
    response: "Warna favorit saya adalah putih dan hitam."
}, {
    keywords: ["film favorit", "suka nonton apa", "film kesukaan"],
    response: "Film favorit saya adalah film marvel."
}, {
    keywords: ["musik favorit", "suka dengerin apa", "lagu favorit"],
    response: "Saya suka mendengarkan musik jazzy."
}, {
    keywords: ["halo", "hai", "helo", "hello", "hi"],
    response: "halo! apakah ada yang ingin saya bantu?"
}, {
    keywords: ["tanya", "nanya", "bertanya"],
    response: "silahkan untuk bertanya tentang saya."
}, {
    keywords: ["agama"],
    response: "agama saya islam"
}, {
    keywords: ["saya bisa kenal kamu lebih dekat?", "boleh kenalan?", "mau kenalan dong", "kenalan"],
    response: "Tentu! Saya senang bisa berbagi tentang diri saya. Apa yang ingin kamu tahu? apakah kamu ingin kenalan dengan saya?"
}, {
    keywords: ["kabar", "apa kabar", "gimana hari kamu"],
    response: "Saya baik! Terima kasih sudah bertanya. Bagaimana dengan kamu?"
}, {
    keywords: ["cerita", "tentang syafiq", "tentang kamu", "tentang lu", "tentang anda"],
    response: "hmm coba kamu langsung kunjungi halaman about yaa"
}, {
    keywords: ["tinggi badan", "berapa tinggi kamu", "tinggi kamu"],
    response: "Tinggi saya sekitar 165 cm."
}, {
    keywords: ["js", "html", "css", "java", "javascript", "python", "php", "react"],
    response: "menurut saya itu adalah bahasa pemrograman yang bagus namun untuk saat ini yang paling bagus adalah python."
}, {
    keywords: ["berat badan", "berapa berat badan kamu", "berat kamu"],
    response: "Berat badan saya sekitar 50 kg."
}, {
    keywords: ["skill", "keahlian", "bakat"],
    response: "Saya memiliki keahlian di bidang web development, terutama dalam membuat website dengan fitur chat AI."
}, {
    keywords: ["bahasa pemrograman", "bisa coding apa", "ngoding apa aja"],
    response: "Saya bisa menggunakan beberapa bahasa pemrograman seperti Javascript, React, Java, PHP, laravel."
}, {
    keywords: ["framework favorit", "framework apa yang kamu gunakan"],
    response: "Saya sering menggunakan React.js dan Node.js dalam pengembangan website."
}, {
    keywords: ["database favorit", "database"],
    response: "Saya lebih sering menggunakan MongoDB dan MySQL untuk database."
}, {
    keywords: ["hardware favorit", "pakai laptop apa", "spesifikasi laptop kamu"],
    response: "Saya menggunakan laptop dengan prosesor Intel Core i7, RAM 16GB, dan SSD 512GB."
}, {
    keywords: ["sistem operasi", "pakai OS apa", "OS favorit"],
    response: "Saya lebih nyaman menggunakan Mac os dan Windows 11 untuk pengembangan."
}, {
    keywords: ["aplikasi", "software favorit", "alat coding favorit"],
    response: "Saya sering menggunakan VS Code dan GitHub dalam bekerja."
}, {
    keywords: ["game favorit", "suka main game apa", "game kesukaan"],
    response: "Saya suka bermain game seperti Valorant dan GTA V."
}, {
    keywords: ["hobi selain coding", "kegiatan favorit selain coding"],
    response: "Selain coding, saya suka membaca buku tentang teknologi dan bermain game."
}, {
    keywords: ["hewan peliharaan", "punya hewan peliharaan?", "suka hewan apa"],
    response: "Saya suka kucing, tapi saya belum punya hewan peliharaan sendiri."
}, {
    keywords: ["negara impian", "mau tinggal di mana", "ingin ke mana"],
    response: "Saya ingin mengunjungi mekkah suatu hari nanti."
}, {
    keywords: ["kendaraan favorit", "suka mobil apa", "suka motor apa"],
    response: "Saya suka mobil sport seperti Nissan GTR dan motor sport seperti Yamaha R1."
}, {
    keywords: ["olahraga favorit", "suka olahraga apa"],
    response: "Saya suka jogging di waktu luang."
}, {
    keywords: ["minuman favorit", "suka minum apa", "minuman"],
    response: "Minuman favorit saya adalah kopi calf."
}, {
    keywords: ["pernah ikut lomba?", "pengalaman lomba", "lomba coding"],
    response: "Saya pernah ikut beberapa lomba coding tingkat sekolah."
}, {
    keywords: ["suka coding", "alasan belajar coding"],
    response: "Saya suka coding karena bisa membuat sesuatu yang bermanfaat dan menyelesaikan masalah dengan teknologi."
}, {
    keywords: ["motivasi hidup", "quotes favorit", "kata-kata motivasi"],
    response: "Saya percaya bahwa 'Kegagalan adalah awal dari kesuksesan' dan selalu belajar dari pengalaman."
}, {
    keywords: ["sosial media", "punya instagram?", "akun sosmed"],
    response: "Saya aktif di Instagram dan tiktok, jika ingin tahu lebih lanjut bisa tanya langsung lewat whatsapp!"
}, {
    keywords: ["lagi ngapain", "lagi apa", "sedang apa"],
    response: "Saya sedang menunggu pertanyaan dari anda mengenai tentang saya"
}, {
    keywords: ["teman", "punya banyak teman?", "circle pertemanan"],
    response: "Saya punya beberapa teman dekat yang juga suka coding dan teknologi."
}, {
    keywords: [" coding", "udah lama belajar coding", "berapa lama jadi programmer"],
    response: "Saya sudah belajar coding selama beberapa tahun, tapi terus berusaha belajar dan berkembang setiap hari."
}, {
    keywords: ["AI", "apa itu AI", "penjelasan AI"],
    response: "AI (Artificial Intelligence) adalah kecerdasan buatan yang digunakan untuk meniru kemampuan berpikir dan mengambil keputusan seperti manusia."
}, {
    keywords: ["chatbot", "apa itu chatbot", "penjelasan chatbot"],
    response: "Chatbot adalah program yang dirancang untuk berinteraksi dengan pengguna melalui percakapan, sering digunakan untuk layanan pelanggan atau otomatisasi tugas."
}, {
    keywords: ["cloud", "apa itu cloud", "penjelasan cloud computing"],
    response: "Cloud computing adalah teknologi yang memungkinkan pengelolaan dan penyimpanan data melalui internet, tanpa memerlukan perangkat keras lokal."
}, {
    keywords: ["big data", "data", "apa itu big data"],
    response: "Big data merujuk pada volume data yang sangat besar dan kompleks yang membutuhkan alat khusus untuk dianalisis dan diproses."
}, {
    keywords: ["coding di mana", "belajar coding di mana", "sumber belajar coding"],
    response: "Saya belajar coding dari berbagai sumber online seperti YouTube, kursus di Udemy, dan dokumentasi resmi bahasa pemrograman."
}, {
    keywords: ["framework JavaScript", "framework JS favorit", "framework JavaScript apa yang kamu suka"],
    response: "Selain React.js, saya juga menyukai Vue.js dan Angular untuk membangun aplikasi web interaktif."
}, {
    keywords: ["teknologi", "apa teknologi yang sedang berkembang", "teknologi yang akan datang"],
    response: "Beberapa teknologi masa depan yang menarik adalah AI, blockchain, dan Internet of Things (IoT)."
}, {
    keywords: ["cloud storage", "penyimpanan cloud", "apa itu cloud storage"],
    response: "Cloud storage adalah layanan penyimpanan data secara online di server, memungkinkan akses mudah dan fleksibel dari berbagai perangkat."
}, {
    keywords: ["automasi", "apa itu automasi", "penjelasan automasi"],
    response: "Automasi adalah penggunaan teknologi untuk mengontrol dan mengoperasikan proses atau tugas tanpa intervensi manusia."
}, {
    keywords: ["keamana", "apa itu keamanan siber", "penjelasan keamanan siber"],
    response: "Keamanan adalah praktik melindungi sistem komputer dan jaringan dari ancaman, serangan, dan akses ilegal."
}, {
    keywords: ["hacker", "apa itu hacker", "penjelasan hacker"],
    response: "Hacker adalah seseorang yang mencoba mengakses sistem atau jaringan komputer secara ilegal atau untuk tujuan tertentu, seperti eksplorasi atau peretasan."
}, {
    keywords: ["web development", "apa itu web development", "penjelasan web development"],
    response: "Web development adalah proses membangun dan memelihara situs web, termasuk desain, pengkodean, dan pengujian."
}, {
    keywords: ["full stack developer", "apa itu full stack developer", "penjelasan full stack developer"],
    response: "Full stack developer adalah seorang pengembang yang mampu bekerja di seluruh lapisan aplikasi web, mulai dari frontend hingga backend."
}, {
    keywords: ["backend", "apa itu backend developer", "penjelasan backend developer"],
    response: "Backend developer bekerja di sisi server aplikasi, menangani pengelolaan data, pengolahan logika bisnis, dan integrasi dengan API."
}, {
    keywords: ["frontend", "apa itu frontend developer", "penjelasan frontend developer"],
    response: "Frontend developer berfokus pada pengembangan bagian depan aplikasi web yang berinteraksi langsung dengan pengguna, menggunakan HTML, CSS, dan JavaScript."
}, {
    keywords: ["open source", "apa itu open source", "penjelasan open source"],
    response: "Open source adalah perangkat lunak yang kode sumbernya tersedia untuk umum, sehingga dapat digunakan, dimodifikasi, dan didistribusikan secara bebas."
}, {
    keywords: ["jasa website", "pembuatan website", "buat web"],
    response: "ya saya membuka jasa pembuatan website silahkan untuk mengunjungi IG : codeweb.id."
}, {
    keywords: ["codeweb", "owner", "pemilik"],
    response: "saya adalah owner dari codeweb.id."
}, {
    keywords: ["terimakasih", "makasi", "syukron", "thank"],
    response: "sama sama saya senang membantu anda."
}, {
    keywords: ["kamu siapa", "anda siapa", "lu siapa", "siapa pembuat kamu", "siapa yang buat kamu", "pembuat", "pencipta", "buat kamu"],
    response: "saya adalah chat AI yang di buat dan di kembangkan oleh syafiq"
}, {
    keywords: ["sekolah", "student", "kelas", "pelajar"],
    response: "saya sekolah di SMK informatika al irsyad dan saya baru menduduki smk kelas 1"
}, {
    keywords: ["kontak", "hubungi", "contact"],
    response: "silahkan kunjungi halaman contact di website saya"
}, {
    keywords: ["portofolio", "hasil", "kerjakan"],
    response: "silahkan untuk mengunjungi halaman portofolio di website saya saya telah mengerjakan project website untuk instantprintjkt.com dan adhome.co.id dengan fitur fitur yang menarik"
}, {
    keywords: ["gombal"],
    response: "Kalau aku jadi developer, aku pasti pilih kamu jadi partner, karena kamu selalu bikin hati aku 'responsive'."
}, {
    keywords: ["suka", "menyukai"],
    response: "kamu suka denganku? silahkan hubungi halaman contact"
}, {
    keywords: ["game"],
    response: "ya aku bisa membuat game dengan canvas javascript"
}, {
    keywords: ["about", "tentang"],
    response: "silahkan untuk mengunjungi halaman about di website saya"
}, {
    keywords: ["rekomendasi film", "film yang bagus", "film terbaik"],
    response: "Jika kamu suka film aksi, saya rekomendasikan 'Avengers: Endgame'. Untuk drama, coba tonton 'The Pursuit of Happyness'."
}, {
    keywords: ["rekomendasi buku", "buku yang bagus", "buku terbaik"],
    response: "Jika kamu suka buku self-development, coba baca 'Atomic Habits' oleh James Clear. Untuk fiksi, 'The Alchemist' karya Paulo Coelho sangat inspiratif!"
}, {
    keywords: ["rekomendasi musik", "lagu bagus", "musik terbaru"],
    response: "Jika kamu suka musik chill, coba dengarkan lagu 'Blinding Lights' dari The Weeknd. Untuk genre lain, saya juga suka musik jazz dan saya duka mendengarkan musik diskoria."
}, {
    keywords: ["rekomendasi game", "game seru", "game favorit"],
    response: "Coba mainkan 'The Witcher 3' untuk petualangan yang mendalam, atau 'mobile legends' jika kamu ingin bermain dengan teman-teman."
}, {
    keywords: ["rekomendasi tempat liburan", "liburan di mana", "destinasi liburan"],
    response: "Kalau kamu suka pantai, Bali adalah pilihan yang bagus. Untuk pengalaman berbeda, coba kunjungi Bandung yang penuh dengan kenangan nantinya."
}, {
    keywords: ["rekomendasi restoran", "rekomendasi makanan", "tempat makan enak", "restoran favorit"],
    response: "Di Cirebon, saya rekomendasikan kamu coba 'Sate kambing dan empal gentong di kejaksan' yang terkenal enak. Di kota lain, 'Warung Nasi Goreng Kebon Sirih' di Jakarta juga populer, jika ingin resto di mall saya suka kimukatsu."
}, {
    keywords: ["rekomendasi aplikasi", "aplikasi keren", "aplikasi terbaik"],
    response: "Jika kamu ingin produktivitas yang lebih baik, coba gunakan 'Notion' untuk mencatat. Untuk pengelolaan waktu, saya rekomendasikan 'Trello'."
}, {
    keywords: ["rekomendasi buku teknologi", "buku teknologi terbaru", "buku teknologi keren"],
    response: "Untuk teknologi, coba baca 'The Innovators' oleh Walter Isaacson yang menceritakan kisah para penemu teknologi terbesar."
}, {
    keywords: ["rekomendasi belajar coding", "belajar coding apa", "belajar coding di mana"],
    response: "Saya rekomendasikan mulai dengan kursus di 'freeCodeCamp' untuk pemula. Selain itu, 'The Odin Project' juga sumber yang sangat baik."
}, {
    keywords: ["rekomendasi gadget", "gadget terbaik", "smartphone bagus"],
    response: "Jika kamu butuh smartphone dengan kamera terbaik, coba lihat 'iPhone 15'. Untuk Android, 'Samsung Galaxy S23' juga sangat solid."
}, {
    keywords: ["love you"],
    response: "i love you to"
}, {
    keywords: ["assalamualaikum", "asslkm"],
    response: "waalaikumsalam"
}, {
    keywords: ["kontol", "anjing", "ngentot", "babi", "sialan", "brengsek", "memek", "monyet", "kirik", "ketek", "goblok", "bego"],
    response: "waalaikumsalam"
}, {
    keywords: ["ganteng", "pintar", "jenius", "gasah", "tampan"],
    response: "terimakasih sudah memuji saya :)"
}, {
    keywords: ["pesan website", "order", "beli web", "pesan web", "bikin web"],
    response: "untuk itu silahkan kunjungi halmaan contact saya "
}, {
    keywords: ["augmented reality", "apa itu AR", "penjelasan augmented reality"],
    response: "Augmented Reality (AR) adalah teknologi yang menggabungkan elemen digital dengan dunia nyata, biasanya melalui perangkat seperti smartphone atau kacamata AR."
}];



// Fungsi untuk mencocokkan pertanyaan pengguna dengan keyword
function findResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    for (const faq of faqData) {
        if (faq.keywords.some(keyword => userMessage.includes(keyword))) {
            return faq.response;
        }
    }
    return "Mohon maaf, saya tidak memiliki informasi tentang itu. Silakan tanyakan hal lain tentang perusahaan kami.";
}

// Fungsi untuk menambahkan pesan ke UI
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    const bubbleDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);
    bubbleDiv.classList.add("bubble");
    bubbleDiv.textContent = message;

    messageDiv.appendChild(bubbleDiv);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll otomatis ke bawah
}

// Fungsi untuk menangani pesan pengguna

function handleUserMessage() {
    const userMessage = inputField.value.trim();
    if (!userMessage) return;

    // Tambahkan pesan pengguna ke UI
    addMessage(userMessage, "user");
    sendSound.play(); // Tambahkan ini untuk suara pengguna

    // Cari dan tampilkan respons
    const botResponse = findResponse(userMessage);
    setTimeout(() => {
        addMessage(botResponse, "bot");
        receiveSound.play(); // Tambahkan ini untuk suara bot
    }, 1000);

    inputField.value = ""; // Bersihkan input
}
// Event listener untuk tombol kirim
sendButton.addEventListener("click", handleUserMessage);

// Event listener untuk tombol Enter
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleUserMessage();
});

// Event listener untuk toggle chatbot
chatToggle.addEventListener("click", () => {
    if (chatbot.style.display === "none" || chatbot.style.display === "") {
        chatbot.style.display = "flex";
    } else {
        chatbot.style.display = "none";
    }
});