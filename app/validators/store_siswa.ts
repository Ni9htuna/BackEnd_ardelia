// app/Validators/store_siswa.ts
import { schema, rules } from '@adonisjs/validator'

export default class StoreSiswaValidator {
  public schema = schema.create({
    nama: schema.string({}, [
      rules.maxLength(100),
      rules.trim()
    ]),
    umur: schema.number([
      rules.range(5, 18)
    ]),
    alamat: schema.string.optional({}, [
      rules.maxLength(255),
      rules.trim()
    ]),
  })

  public messages = {
    'nama.required': 'Nama siswa wajib diisi',
    'nama.maxLength': 'Nama siswa maksimal 100 karakter',
    'umur.required': 'Umur siswa wajib diisi',
    'umur.range': 'Umur siswa harus antara 5 sampai 18 tahun',
    'kelas.required': 'Kelas wajib diisi',
    'kelas.maxLength': 'Kelas maksimal 10 karakter',
    'alamat.maxLength': 'Alamat maksimal 255 karakter',
  }
}
