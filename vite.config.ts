import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

function quoteCounter(): Plugin {
  return {
    name: 'quote-counter',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0]
        if (path !== '/api/quotes') {
          next()
          return
        }
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end()
          return
        }
        req.setEncoding('utf8')
        const chunks: string[] = []
        req.on('data', (chunk: string) => chunks.push(chunk))
        req.on('end', () => {
          void server.ssrLoadModule('/api/quotes.ts').then(async (mod) => {
            const handleQuote = mod.handleQuote as (input: string) => Promise<number>
            const status = await handleQuote(chunks.join(''))
            res.statusCode = status
            res.end()
          }).catch(() => {
            res.statusCode = 503
            res.end()
          })
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    quoteCounter(),
    viteImagemin({
      verbose: true,
    }),
  ],
})
