import { Home as HomeIcon, Search, Library, Plus, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
export default () => {
    return (
        <nav className="list-none space-y-10 font-semibold text-base text-zinc-400">
        <li className='space-y-4  '>
          <ul >
            <a className='flex items-center gap-4 hover:text-zinc-50' href=''> <HomeIcon />Início</a>
          </ul>

          <ul >
            <a className='flex items-center gap-4 hover:text-zinc-100' href=''> <Search />Buscar</a>
          </ul>

          <ul>
            <a className='flex items-center gap-4 hover:text-zinc-100' href=''><Library />Sua Biblioteca</a>
          </ul>
        </li>

        <li className='space-y-4'>
          <ul >
            <a className='flex items-center gap-4 hover:text-zinc-100' href=''><Plus className='text-black bg-zinc-400'></Plus>Criar Playlist</a>
          </ul>

          <ul >
            <a className='flex items-center gap-4 hover:text-zinc-100' href=''><Heart className='text-gray-300 p-1 bg-gradient-to-tl from-purple-500 to from-purple-400'></Heart>Músicas Curtidas</a>
          </ul>
        </li>

        <li className="border-t border-zinc-600 pt-6 space-y-4">
          <ul className='hover:text-zinc-50'><a href=''>Playlists</a></ul>
          <ul className='hover:text-zinc-50'><a href=''>Rock 90</a></ul>
          <ul className='hover:text-zinc-50'><a href=''>Rock 80</a></ul>
          <ul className='hover:text-zinc-50'><a href=''>Alternative</a></ul>
        </li>

      </nav>
    )
}