// import Siswa from '#models/siswa'


import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Siswa extends BaseModel {
  @column({ isPrimary: true })
  public id?: number

  @column()
  public nama?: string

  @column()
  public email?: string

  @column()
  public umur?: number

  @column.dateTime({ autoCreate: true })
  public createdAt?: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt?: DateTime
}
