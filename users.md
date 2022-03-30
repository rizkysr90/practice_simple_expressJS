# USERS CRUD

## Directions

- Diberikan satu file bertipe `users.json` yang berisikan data beberapa users. 
    - Tugas kalian diminta untuk membuat CRUD yang membuat, membaca, mengedit, dan menghapus `users`.
    - Gunakan route `/users` untuk melakukan seluruh kegiatan CRUD.
    - Route utama atau `/` apabila di hit hanya menampilkan pesan 'Hello World'.

- Gunakan middleware `morgan` untuk menampilkan logging message. 
- Gunakan middleware yang kalian butuhkan untuk memproses `request`.
- Tampilkan status code yang sesuai dengan proses yang dijalankan.
- Buatlah error handler apabila endpoint yang ditembak `tidak ada` / `gagal proses`.

## Challenges

- Buatlah routing dengan folder terpisah.
- Buatlah error handler apabila user yang dicari tidak ditemukan.
- Buatlah error handler apabila data yang dikirim tidak lengkap.