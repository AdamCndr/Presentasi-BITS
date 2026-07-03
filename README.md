# BITS — Presentasi Kerja Praktek 2026

Repositori ini berisi presentasi statis untuk **Business Intelligence Tiga Serangkai (BITS)**.

## 🏗️ Arsitektur & Struktur File

Presentasi ini menggunakan **Hash Routing** (`#/cover`, `#/tim-kami`), yang berarti navigasi tidak memerlukan _page reload_ dan sangat aman untuk di-_host_ di server statis seperti GitHub Pages tanpa memerlukan konfigurasi khusus.

```text
📁 Presentasi-BITS
├── 📄 index.html           # App shell (hanya kerangka utama)
├── 📁 assets/              # Gambar, icon, dan logo
└── 📁 src/                 # Source code utama
    ├── 📄 app.js           # Entry point aplikasi (menggabungkan slide & komponen)
    ├── 📄 router.js        # Logika Hash Router navigasi slide
    ├── 📄 state.js         # State management ringan (menyimpan posisi slide aktif)
    ├── 📁 components/      # UI Global (Header, Progress Bar, Navigasi)
    ├── 📁 slides/          # [PENTING] Tempat konten slide berada (1 file = 1 slide)
    └── 📁 styles/
        └── 📄 global.css   # Semua CSS terpusat di sini
```

## 🚀 Cara Menjalankan Secara Lokal

Karena aplikasi ini menggunakan _ES Modules_ (import/export antar file JavaScript), browser **tidak mengizinkan** Anda menjalankannya hanya dengan klik dua kali (double-click) pada file `index.html`. Anda memerlukan _local web server_.

### Menggunakan VS Code (Paling Mudah)

1. Buka folder ini di Visual Studio Code.
2. Install ekstensi **"Live Server"** dari tab Extensions.
3. Klik tombol **"Go Live"** di pojok kanan bawah VS Code.
4. Browser akan otomatis terbuka.

### Menggunakan Node.js

Jika Anda sudah memiliki Node.js terinstal, jalankan perintah berikut di terminal/Command Prompt dari dalam folder ini:

```bash
npx serve .
```

Lalu buka `http://localhost:3000` di browser Anda.

## ✍️ Cara Mengedit atau Menambahkan Slide

Struktur modular membuat pengeditan sangat mudah, pembagian kerja tim tidak akan bentrok.

**Mengedit Slide yang Ada:**
Buka folder `src/slides/`. Setiap file merepresentasikan satu slide. Anda cukup mengubah _string HTML_ yang direturn oleh fungsi `render()` di dalam file tersebut.

**Menambahkan Slide Baru:**

1. Buat file baru di `src/slides/`, misal `slide-baru.js`.
2. Format isinya mengikuti file slide lain (jangan lupa set property `order` untuk menentukan urutannya).
3. Buka `src/app.js`, tambahkan `import` slide baru Anda di bagian atas.
4. Masukkan nama variabel slide tersebut ke dalam _array_ `slides` di `app.js`.

## 🌐 Cara Hosting / Publikasi

Proyek ini **100% statis**. Anda tidak memerlukan server khusus (tidak butuh Node.js server, PHP, atau database) untuk menjalankannya.

Cara terbaik untuk menampilkannya saat presentasi adalah menggunakan **GitHub Pages**:

1. Buat repository di GitHub dan _push_ semua kode ini.
2. Pergi ke tab **Settings** > **Pages** di repository Anda.
3. Pada bagian _Source_, pilih branch `main` atau `master`, lalu klik _Save_.
4. Tunggu beberapa menit, link presentasi (contoh: `https://username.github.io/Presentasi-BITS`)

---
