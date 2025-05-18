import BooksController from '#controllers/books_controller'
import SiswaController from '#controllers/siswas_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
.group(() => {
  router.get('/', [BooksController, 'index'])
  router.post('/', [BooksController, 'store'])
  router.get('/:id', [BooksController, 'show'])
  router.put('/:id', [BooksController, 'update'])
  router.delete('/:id', [BooksController, 'destroy'])
})
.prefix('/books')

router
.group(() => {
  router.get('/', [SiswaController, 'index'])
  router.post('/', [SiswaController, 'store'])
  router.get('/:id', [SiswaController, 'show'])
  router.put('/:id', [SiswaController, 'update'])
  router.delete('/:id', [SiswaController, 'destroy'])
})
.prefix('/siswa')

// router.resource('books', BooksController).apiOnly()

// router.resource('siswas', SiswasController).apiOnly()