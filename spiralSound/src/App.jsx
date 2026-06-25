import React from 'react';
import {RenderProducts, applySearchFilter} from '../../js/productUI.jsx';
import products from './components/products.jsx';


export default function App() {
  return (
    <div>
      <products/>
      <RenderProducts/>
    </div>
  )
}

/*
import express from 'express'
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'
import { meRouter } from './routes/me.js'
import { cartRouter } from './routes/cart.js' 
import session from 'express-session'
import dotenv from 'dotenv'

dotenv.config()

const app = express() 
const PORT = 3000
const secret = process.env.SPIRAL_SESSION_SECRET || 'default_secret'

app.usegit(express.json()) 

app.use(session({ 
  secret: secret,
  resave: false,  
  saveUninitialized: false,
  cookie: {
    httpOnly: true, 
    secure: false,
    sameSite: 'lax'
  }
}))

app.use(express.static('public'))

app.use('/api/products', productsRouter)

app.use('/api/auth/me', meRouter)

app.use('/api/auth', authRouter)

app.use('/api/cart', cartRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 



*/

 