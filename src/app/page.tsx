import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between py-4 px-8 bg-sky-600 text-white">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="ml-2 text-3xl font-semibold">ToDoGroup</h1>
        </div>

        <nav>
          <ul className="flex space-x-4 font-medium text-lg">
            <li>
              <Link href="/login">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='min-h-[80vh] flex flex-col'>
        <div className='bg-slate-200 rounded-lg p-8 m-auto max-w-4xl flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-semibold'>ToDoGroup</h1>
          <Image src="/logo.png" alt="logo" width={100} height={100} className='mt-4'/>

          <h2 className='text-2xl font-semibold mt-4'>Login</h2>
        </div>
      </main>
    </>
  )
}
