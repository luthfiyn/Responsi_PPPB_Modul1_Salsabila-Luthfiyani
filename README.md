# Responsi_PPPB_Modul1_Salsabila-Luthfiyani
# Shoe Wash API

## Deskripsi Umum
Proyek Shoe Wash API ini merupakan proyek yang dibuat untuk memenuhi tugas responsi praktikum PPB Modul 1 yaitu modul API. Proyek Shoe Wash API ini merupakan REST API sederhana untuk layanan daftar barang cuci sepatu yang dibuat menggunakan Node.js + Express.js + Supabase dan dapat di-deploy ke Vercel.

## Tujuan
1. Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) data sepatu dalam REST API
2. Mengimplementasikan filter berdasarkan status (`/shoewash?status=Selesai`)
3. Terhubung dengan Supabase sebagai database
4. Dapat dijalankan lokal atau online (via Vercel)

## Fitur Utama
| Metode | Endpoint                 | Deskripsi                                                             |
| ------ | ----------               | ----------------------------------------------------------------------|
| GET    | /shoewash                | Menampilkan seluruh daftar sepatu yang sedang dicuci.                 |
| POST   | /shoewash                | Menambahkan data sepatu baru ke dalam daftar.                         |
| PUT    | /shoewash/:id            | Memperbarui status sepatu (misalnya dari Proses menjadi Selesai).     |
| DELETE | /shoewash/:id            | Menghapus data sepatu yang sudah selesai dicuci.                      |
| GET    | /shoewash?status=Selesai | Filter data sepatu yang sudah selesai dikerjakan                      |

## Struktur Data
Struktur data sepatu yang disimpan:

```
{
    "id": "06b55c0b-7b60-4a12-8346-b5b0990ad1ce",
    "name": "Onitsuka Tiger Mexico 66",
    "owner": "Salsabila Luthfiyani",
    "status": "Proses",
    "notes": "Warna Birch/ Peacoat",
    "created_at": "2025-10-23T12:46:32.379496+00:00",
    "updated_at": null
}
```
Keterangan:

- id → Nomor unik sepatu
- nama → Nama sepatu atau merek pelanggan
- owner → Nama Pelanggan
- status → Status proses cuci (Sedang Dicuci / Selesai)
- notes → Keterangan pelayanan

## Contoh Request dan Response
GET /shoewash
Response:

```
[
{
    "id": "06b55c0b-7b60-4a12-8346-b5b0990ad1ce",
    "name": "Onitsuka Tiger Mexico 66",
    "owner": "Salsabila Luthfiyani",
    "status": "Proses",
    "notes": "Warna Birch/ Peacoat",
    "created_at": "2025-10-23T12:46:32.379496+00:00",
    "updated_at": null
}
]

```
Body:
POST/shoewash
```
{
  "name": "Adidas Superstar",
  "owner": "Luthfiyan",
  "status": "Selesai",
  "notes": "Warna Putih"
}
```
Response:
```
{
    "success": true,
    "message": "Data sepatu berhasil ditambahkan",
    "data": {
        "id": "4e5da46e-f626-4512-82c8-a5c989b8e6b7",
        "name": "Adidas Superstar",
        "owner": "Luthfiyan",
        "status": "Selesai",
        "notes": "Warna Putih",
        "created_at": "2025-10-23T13:51:35.326596+00:00",
        "updated_at": null
    }
}
```
Body:
PUT/shoewash
```
{
  "name": "Adidas Superstar",
  "owner": "Salsabila Luthfiyani",
  "status": "Proses",
  "notes": "Warna Putih"
}
```
Response:
```
{
    "success": true,
    "message": "Data sepatu berhasil diubah",
    "data": {
        "id": "4e5da46e-f626-4512-82c8-a5c989b8e6b7",
        "name": "Adidas Superstar",
        "owner": "Salsabila Luthfiyani",
        "status": "Proses",
        "notes": "Warna Putih",
        "created_at": "2025-10-23T13:51:35.326596+00:00",
        "updated_at": "2025-10-23T13:55:57.117+00:00"
    }
}

```

DELETE/shoewash
Response:
```
{
    "success": true,
    "message": "Data sepatu berhasil dihapus"
}
```

/shoewash?status=Selesai
Response:
```
{
    "success": true,
    "message": "Data sepatu berhasil diambil",
    "count": 3,
    "data": [
        {
            "id": "deb34305-e0d5-4d48-9909-7c0b0cc07daa",
            "name": "Shop at Blow",
            "owner": "Luthfiyaniw",
            "status": "Selesai",
            "notes": "Warna Beige",
            "created_at": "2025-10-23T12:56:32.099332+00:00",
            "updated_at": null
        },
        {
            "id": "6d5e081f-74a0-4ca3-bf7c-4596e509acbb",
            "name": "Skechers Walk",
            "owner": "Luthfi Lagi",
            "status": "Selesai",
            "notes": "Warna Putih",
            "created_at": "2025-10-23T12:55:55.271996+00:00",
            "updated_at": null
        },
        {
            "id": "06b55c0b-7b60-4a12-8346-b5b0990ad1ce",
            "name": "Onitsuka Tiger Mexico 66",
            "owner": "Salsabila Luthfiyani",
            "status": "Selesai",
            "notes": "Siap Diambil",
            "created_at": "2025-10-23T12:46:32.379496+00:00",
            "updated_at": "2025-10-23T12:50:34.323+00:00"
        }
    ]
}
```

## Langkah Instalasi dan Cara Menjalankan API
Langkah Instalasi dan Cara Menjalankan API

1. Clone repository
```
git clone https://github.com/username/shoe-wash-api.git
cd shoe-wash-api
```
2. Install dependencies
```
npm install
```

3. Buat file .env di root proyek, lalu isi dengan konfigurasi Supabase:
```
SUPABASE_URL=https://dudhchgamvsjptbnlmmy.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1ZGhjaGdhbXZzanB0Ym5sbW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTQ1MzAsImV4cCI6MjA3Njc5MDUzMH0.6VR8-qzFaIOVy8JlO6QXArfKuUnGhz3GPEqDJnlgdBc
PORT=3000
```

4. Jalankan server secara lokal
```
npm run dev
```
5. Akses API di browser atau Postman
```   
http://localhost:3000
```
6. Coba endpoint CRUD
```
GET /items — melihat semua data
GET /items?status=Selesai — filter berdasarkan status
POST /items — tambah data sepatu
PUT /items/:id — ubah status sepatu
DELETE /items/:id — hapus data sepatu
```

## Link Deploy (Vercel)
```
https://responsi-pppb-modul1-salsabila-luth.vercel.app/shoewash
```

