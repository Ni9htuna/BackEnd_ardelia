import { schema, rules } from '@adonisjs/validator'

export default class UpdateBookValidator {
  public schema = schema.create({
    // Optional, tapi kalau ada isinya wajib maksimal 100 karakter
    title: schema.string.optional({}, [rules.maxLength(100)]),

    // Optional juga, maksimal 50 karakter kalau ada isi
    author: schema.string.optional({}, [rules.maxLength(50)]),
  })

  public messages = {
    'title.maxLength': 'Judul buku maksimal 100 karakter!',
    'author.maxLength': 'Nama penulis maksimal 50 karakter!',
  }
}
