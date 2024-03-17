import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { buttonVariants } from './ui/button'
import SecondaryHeading from './ui/secondary-heading'

const features = [
  {
    id: 'bookmark',
    name: 'Simple bookmarking',
    img: './images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    href: '#'
  },
  {
    id: 'search',
    name: 'Speedy searching',
    img: './images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    href: '#'
  },
  {
    id: 'share',
    name: 'Easy sharing',
    img: './images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    href: '#'
  }
]

const FeaturesTab = () => {
  return (
    <Tabs defaultValue={features[0].id} className='border border-red-400'>
      <TabsList>
        {features.map((f) => (
          <TabsTrigger key={f.id} value={f.id}>
            {f.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {features.map((f) => (
        <TabsContent key={f.id} value={f.id}>
          <div>
            <img src={f.img} alt={f.name} />
          </div>
          <div>
            <SecondaryHeading tag='h3' className='text-neutral-900'>
              {f.title}
            </SecondaryHeading>
            <p>{f.description}</p>
            <a href={f.href} className={buttonVariants()}>
              More Info
            </a>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default FeaturesTab
