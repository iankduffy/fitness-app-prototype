import Link from "next/link"
import Image from "next/image"

interface Props {
  url: string
  image: string
  mainText: string
  description: string
}

export function PageLink({url, image, mainText, description = ''} : Props ) {
  return (
    <Link href={url} className='bg-gray-200 rounded-3xl relative overflow-hidden flex items-end after:block after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-transparent after:from-black'>
      <div className="absolute h-full hover:scale-105 duration-500">
      <Image src={image} alt={mainText} width='1700' height='1000' 
      />
      </div>
      <div className="p-4 z-10 text-white">
        {mainText}
      </div>
    </Link>
  )
}