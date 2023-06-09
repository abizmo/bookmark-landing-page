import BookmarkLogo from './components/BookmarLogo';
import Header from './components/Header';
import { Container } from './components/UI';
import Theme from './theme';
import iconFacebook from './assets/images/icon-facebook.svg';
import iconTwitter from './assets/images/icon-twitter.svg';

function App() {
  return (
    <Theme>
      <Header>
        <Header.Logo>
          <BookmarkLogo />
        </Header.Logo>
        <Header.NavBar>
          <Header.NavList>
            <Header.NavItem href='#'>Feature</Header.NavItem>
            <Header.NavItem href='#'>Pricing</Header.NavItem>
            <Header.NavItem href='#'>Contact</Header.NavItem>
          </Header.NavList>
          <Header.Socials>
            <Header.SocialLink alt='facebook' icon={iconFacebook} href='#' />
            <Header.SocialLink alt='twitter' icon={iconTwitter} href='#' />
          </Header.Socials>
        </Header.NavBar>
      </Header>
      <main>
        <section>
          <Container>
            <img src='' alt='hero' />
            <div>
              <h1>A Simple Bookmark Manager</h1>
              <p>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div>
                <button>Get it on Chrome</button>
                <button>Get it on Firefox</button>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
            <ul>
              <li>Simple Bookmarking</li>
              <li>Speedy Searching</li>
              <li>Easy Sharing</li>
            </ul>
            <article>
              <img src='' alt='bookmark' />
              <h3>Bookmark in one click</h3>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <button>More Info</button>
            </article>
            <article>
              <img src='' alt='search' />
              <h3>Intelligent search</h3>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button>More Info</button>
            </article>
            <article>
              <img src='' alt='share' />
              <h3>Share your bookmarks</h3>
              <p>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button>More Info</button>
            </article>
          </Container>
        </section>
        <Container>
          <section>
            <h2>Download the extension</h2>
            <p>
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
            <ul>
              <li>
                <h4>Add to Chrome Minimum</h4>
                <p>version 62</p>
                <button>Add & Install Extension</button>
              </li>
              <li>
                <h4>Add to Firefox Minimum</h4>
                <p>version 55</p>
                <button>Add & Install Extension</button>
              </li>
              <li>
                <h4>Add to Opera Minimum</h4>
                <p>version 46</p>
                <button>Add & Install Extension</button>
              </li>
            </ul>
          </section>
          <section>
            <h2>Frequently Asked Questions</h2>
            <p>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
            <ul>
              <li>
                {/* <!-- Question 1 --> */}
                <h4>What is Bookmark?</h4>
                {/* <!-- Answer 1 --> */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt justo eget ultricies fringilla. Phasellus blandit
                  ipsum quis quam ornare mattis.
                </p>
              </li>
              <li>
                {/* <!-- Question 2 --> */}
                <h4>How can I request a new browser?</h4>
                {/* <!-- Answer 2 --> */}
                <p>
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                  massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                  luctus eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus
                  eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdiet.
                </p>
              </li>
              <li>
                {/* <!-- Question 3 --> */}
                <h4>Is there a mobile app?</h4>
                {/* <!-- Answer 3 --> */}
                <p>
                  Sed consectetur quam id neque fermentum accumsan. Praesent
                  luctus vestibulum dolor, ut condimentum urna vulputate eget.
                  Cras in ligula quis est pharetra mattis sit amet pharetra
                  purus. Sed sollicitudin ex et ultricies bibendum.
                </p>
              </li>
              <li>
                {/* <!-- Question 4 --> */}
                <h4>What about other Chromium browsers?</h4>
                {/* <!-- Answer 4 --> */}
                <p>
                  Integer condimentum ipsum id imperdiet finibus. Vivamus in
                  placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                  gravida pellentesque non ut velit.
                </p>
              </li>
            </ul>
            <button>More Info</button>
          </section>
        </Container>
        <section>
          <Container>
            <p>35,000+ already joined</p>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form>
              <input type='email' name='' id='' />
              <button>Contact Us</button>
            </form>
          </Container>
        </section>
      </main>
      <footer>
        <Container>
          <BookmarkLogo />
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <p className='attribution'>
            Challenge by{' '}
            <a
              href='https://www.frontendmentor.io?ref=challenge'
              target='_blank'
            >
              Frontend Mentor
            </a>
            . Coded by <a href='#'>Your Name Here</a>.
          </p>
        </Container>
      </footer>
    </Theme>
  );
}

export default App;
