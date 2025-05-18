import { schema, rules } from '@adonisjs/validator'

export default class StoreBookValidator {
  public schema = schema.create({
    title: schema.string({}, [
      rules.required(),
      rules.maxLength(100),
    ]),
    author: schema.string({}, [
      rules.required(),
      rules.maxLength(50),
    ]),
  })

  public messages = {
    'title.required': 'Judul buku wajib diisi',
    'title.maxLength': 'Judul buku maksimal 100 karakter',
    'author.required': 'Penulis wajib diisi',
    'author.maxLength': 'Nama penulis maksimal 50 karakter',
  }
}
