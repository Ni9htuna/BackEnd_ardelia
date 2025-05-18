import type { HttpContext } from '@adonisjs/core/http'
import Book from '#models/book'
import StoreBookValidator from '#validators/store_book'
import UpdateBookValidator from '#validators/update_book'

export default class BooksController {
  public async index({ response }: HttpContext) {
    const books = await Book.all()
    return response.ok(books)
  }

  public async store({ request, response }: HttpContext) {
    const data = await request.validate(StoreBookValidator)
    const books = await Book.create(data)
    return response.created(books)
  }

  public async show({ params, response }: HttpContext) {
    const books = await Book.find(params.id)
    if (!books) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }
    return response.ok(books)
  }

  public async update({ params, request, response }: HttpContext) {
    const books = await Book.find(params.id)
    if (!books) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }
    const data = await request.validate(UpdateBookValidator)
    books.merge(data)
    await books.save()
    return response.ok(books)
  }

  public async destroy({ params, response }: HttpContext) {
    const books = await Book.find(params.id)
    if (!books) {
      return response.notFound({ message: 'Buku tidak ditemukan' })
    }
    await books.delete()
    return response.noContent()
  }
}
