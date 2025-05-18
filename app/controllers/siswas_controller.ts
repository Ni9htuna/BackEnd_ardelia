// app/Controllers/Http/SiswaController.ts

import type { HttpContext } from '@adonisjs/core/http'
import Siswa from '#models/siswa'
import StoreSiswaValidator from '#validators/store_siswa'
import UpdateSiswaValidator from '#validators/update_siswa'

export default class SiswaController {

  public async index({ response }: HttpContext) {
    const siswas = await Siswa.all()
    return response.ok(siswas)
  }

  public async store({ request, response }: HttpContext) {
    const data = await request.validate(StoreSiswaValidator)
    const siswa = await Siswa.create(data)
    return response.created(siswa)
  }

  public async show({ params, response }: HttpContext) {
    const siswa = await Siswa.find(params.id)
    if (!siswa) {
      return response.notFound({ message: 'Data siswa tidak ditemukan' })
    }
    return response.ok(siswa)
  }

  public async update({ params, request, response }: HttpContext) {
    const siswa = await Siswa.find(params.id)
    if (!siswa) {
      return response.notFound({ message: 'Data siswa tidak ditemukan' })
    }
    const data = await request.validate(UpdateSiswaValidator)
    siswa.merge(data)
    await siswa.save()
    return response.ok(siswa)
  }

  public async destroy({ params, response }: HttpContext) {
    const siswa = await Siswa.find(params.id)
    if (!siswa) {
      return response.notFound({ message: 'Data siswa tidak ditemukan' })
    }
    await siswa.delete()
    return response.noContent()
  }
}
