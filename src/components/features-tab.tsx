import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { buttonVariants } from './ui/button'

const FeaturesTab = () => {
  return (
    <Tabs defaultValue='bookmark' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='bookmark'>Simple bookmarking</TabsTrigger>
        <TabsTrigger value='search'>Speedy searching</TabsTrigger>
        <TabsTrigger value='share'>Easy sharing</TabsTrigger>
      </TabsList>
      <TabsContent value='bookmark'>
        <div>
          <img
            src='./images/illustration-features-tab-1.svg'
            alt='simple bookmarking'
          />
        </div>
        <div>
          {/* <SecondaryHeading tag='h3' class='text-neutral-900'> */}
          Bookmark in one click
          {/* </SecondaryHeading> */}
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <a href='#' className={buttonVariants()}>
            More Info
          </a>
        </div>
      </TabsContent>
      <TabsContent value='search'>
        <div>
          <img
            src='./images/illustration-features-tab-2.svg'
            alt='speedy searching'
          />
        </div>
        <div>
          {/* <SecondaryHeading tag='h3' class='text-neutral-900'> */}
          Intelligent search
          {/* </SecondaryHeading> */}
          <p>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <a href='#' className={buttonVariants()}>
            More Info
          </a>
        </div>
      </TabsContent>
      <TabsContent value='share'>
        <div>
          <img src='./images/illustration-features-tab-3.svg' alt='tab 3' />
        </div>
        <div>
          {/* <SecondaryHeading tag='h3' class='text-neutral-900'> */}
          Share your bookmarks
          {/* </SecondaryHeading> */}
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <a href='#' className={buttonVariants()}>
            More Info
          </a>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default FeaturesTab
