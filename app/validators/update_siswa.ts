// app/Validators/update_siswa.ts
import { schema, rules } from '@adonisjs/validator'

export default class UpdateSiswaValidator {
  public schema = schema.create({
    nama: schema.string.optional({}, [
      rules.maxLength(100),
      rules.trim()
    ]),
    umur: schema.number.optional([
      rules.range(5, 18)
    ]),
    alamat: schema.string.optional({}, [
      rules.maxLength(255),
      rules.trim()
    ]),
  })

  public messages = {
    'nama.maxLength': 'Nama siswa maksimal 100 karakter',
    'umur.range': 'Umur siswa harus antara 5 sampai 18 tahun',
    'kelas.maxLength': 'Kelas maksimal 10 karakter',
    'alamat.maxLength': 'Alamat maksimal 255 karakter',
  }
}
