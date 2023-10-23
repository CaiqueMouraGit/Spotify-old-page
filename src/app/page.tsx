
import SideTopMenu from './components/sideTopMenu'
import SearchMenu from './components/searchMenu'
import UserMenu from './components/userMenu'
import CardPlayArtist from './components/cardPlayArtist'
import CardMixPlaylist from './components/cardMixPlaylist'
import SideMenu from './components/sideMenu'
import MediaBar from './components/mediaBar'
import BackAndForthButton from './components/backAndForthButton'

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">

      <div className="flex flex-1 overflow-auto ">
        <aside className="w-64 bg-zinc-900 px-6 pt-6 hidden md:block overflow-y-scroll">
          <SideTopMenu ></SideTopMenu>
          <SideMenu></SideMenu>

        </aside>

        <main className=" flex-1 bg-zinc-800 px-6 pt-2 overflow-y-scroll">
          <div className='flex justify-between '>
            <div className='flex space-x-3'>
              <BackAndForthButton/>
              <SearchMenu></SearchMenu>
            </div>
            <UserMenu></UserMenu>
          </div>

          <h1 className='text-3xl font-semibold mt-10'>Boa Tarde</h1>

          <section className='grid grid-cols-1 gap-3 mt-8 md:grid-cols-2 lg:grid-cols-3'>
            <CardPlayArtist alt="Capa Joshua Tree Deluxe Edition - U2" img="/JoshuaTree-Deluxe.jpg">The Joshua Tree (Super Deluxe)</CardPlayArtist>
            <CardPlayArtist alt="Capa The Whippoorwill - BlackBerry Smoke" img="/The Whippoorwill.jpg">The Whippoorwill</CardPlayArtist>
            <CardPlayArtist alt="Foto John Mellencamp" img="/John Mellencamp.jpg">John Mellencamp</CardPlayArtist>
            <CardPlayArtist alt="Capa Believe in me - Duff McKagan" img="/Believe in me.jpg">Believe in Me</CardPlayArtist>
            <CardPlayArtist alt="Capa Take It Easy - Eagles" img="/Take It Easy.jpg">Take It Easy</CardPlayArtist>
            <CardPlayArtist alt="Capa Goodbye Yellow Brick Road - Elton John" img="/Goodbye Yellow Brick Road.jpg">Goodbye Yellow Brick Road</CardPlayArtist>

          </section>

          <div className='flex items-baseline justify-between mb-10'>
            <h1 className='text-3xl font-semibold mt-10 hover:underline hover:cursor-pointer'>Feito para Zero</h1>
            <a href='' className='text-zinc-400 font-semibold hover:underline align-text-bottom'>Mostrar tudo</a>
          </div>

          <section className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7'>
            <CardMixPlaylist alt="Foto John Mellencamp" img="/Daily mix 1.png" description="Slipknot, Megadeth, Atreyu e mais">Daily mix 1</CardMixPlaylist>
            <CardMixPlaylist alt="Foto John Mellencamp" img="/Daily mix 2.png" description="Lynyrd Skynyrd, Aerosmith, Crosby...">Daily mix 2</CardMixPlaylist>
            <CardMixPlaylist alt="Foto John Mellencamp" img="/Daily mix 3.png" description="Fresno, Oswaldo Montenegro, Wilson..." disable="hidden sm:block">Daily mix 3</CardMixPlaylist>
            <CardMixPlaylist alt="Foto John Mellencamp" img="/Daily mix 4.png" description="Ritchie Kotzen, Nita Strauss, Maragold e mais" disable="hidden lg:block">Daily mix 4</CardMixPlaylist>
            <CardMixPlaylist alt="Foto John Mellencamp" img="/Daily mix 5.png" description="Oasis, Supergrass, Suede e mais" disable="hidden xl:block" >Daily mix 5</CardMixPlaylist>
            <CardMixPlaylist alt="Foto John Mellencamp" img="/Daily mix 6.png" description="Royal Blood, Arctic Monkeys, The Killers e mais" disable="hidden 2xl:block">Daily mix 6</CardMixPlaylist>
            <CardMixPlaylist alt="Foto John Mellencamp" img="/Daily mix 7.png" description="Sua mixtape semanal cheia novas músicas" disable="hidden 2xl:block">Daily mix 7</CardMixPlaylist>
          </section>

          <div className='flex items-baseline justify-between mb-10'>
            <h1 className='text-3xl font-semibold mt-10 hover:underline hover:cursor-pointer'>Suas músicas estão com saudade</h1>
            <a href='' className='text-zinc-400 font-semibold hover:underline align-text-bottom'>Mostrar tudo</a>
          </div>

          <section className='grid grid-cols-2 gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7'>
            
            <CardMixPlaylist alt="Foto Bruce Springsteen" img="/Bruce Springsteen.jpg" description="Artista" rb={'50%'}>Bruce Springsteen</CardMixPlaylist>
            <CardMixPlaylist alt="Foto Richie Kotzen - live 2015" img="/Live 2015 - Richie Kotzen.jpg" description="Richie Kotzen">Live 2015</CardMixPlaylist>
            <CardMixPlaylist alt="Foto Lynyrd Skynyrd - Street Survivors" img="/Street Survivors.jpg" description="Lynyrd Skynyrd" disable="hidden sm:block">Street Survivors</CardMixPlaylist>
            <CardMixPlaylist alt="Foto Pearl Jam - Ten" img="/Ten.jpg" description="Pearl Jam" disable="hidden lg:block">Ten</CardMixPlaylist>
            <CardMixPlaylist alt="Foto Don McLean - American Pie" img="/American Pie.png" description="Don McLean" disable="hidden xl:block">American Pie</CardMixPlaylist>
            <CardMixPlaylist alt="Foto Elton John" img="/Elton John.jpg" description="Artista" rb={'50%'} disable="hidden 2xl:block">Elton John</CardMixPlaylist>
            <CardMixPlaylist alt="Foto (What's the Story) Morning Glory" img="/Morning Glory.jpg" description="Oasis" disable="hidden 2xl:block">(Whats the Story) ...</CardMixPlaylist>

          </section>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-600 px-6 py-2">
        <MediaBar />
      </footer>
    </div>
  )
}
