import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prisma from '@/prisma/prisma'

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json()

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (userExists) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ user: { id: user.user_id, name: user.username, email: user.email } })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}