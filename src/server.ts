import dotenv from 'dotenv'
dotenv.config()

const PORT: number = parseInt(`${process.env.PORT || 3000}`)

import app from './app.ts'

app.listen(PORT, () => console.log(`Server is runing at ${PORT}`))
