import 'styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className='pb-20'>{children}</main>
        <nav className='w-full p-5 bg-gray-100 fixed bottom-0 shadow-2xl z-10 shadow-slate-400'>
          Navigation Goes Here
        </nav>
      </body>
    </html>
  )
}
