import goyalImage from './assets/goyal.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from "@fortawesome/free-solid-svg-icons";

function App() {

  return (
    <>
      <div className="container w-full mx-0 px-0 max-w-none">
        <div className="flex flex-row w-full">
          <aside className="bg-red-100 flex-[2] text-right px-8">
            <h2>
              <a href="/goyal/">home page</a>
              <span> of</span>
            </h2>
            <h1>
              Kanav Goyal
            </h1>
            <h2>
              Undergraduate of the Practice of Computer Science
            </h2>
            <h3>
              <a href="https://www.nitj.ac.in">NIT Jalandhar</a>
            </h3>

            <h3>
              <a href="mailto:kanavgoyal898@gmail.com">kanavgoyal898@gmail.com</a>
            </h3>
            <p className="flex gap-2 justify-end">
              <a href="">
                <FontAwesomeIcon icon={faComputer} />
              </a>
            </p>
            <nav>
              <div>
                <ul>
                  <li>Navigation Bar Item</li>
                </ul>
              </div>
            </nav>
          </aside>
          <main className="bg-blue-100 flex-[3] px-8">
            <figure>
              <a href={goyalImage}>
                <img src={goyalImage} alt="Kanav Goyal @NITJ" />
              </a>
              <figcaption className="text-right">Kanav Goyal @NITJ</figcaption>
            </figure>
            <dl>
              <dt>Month, Year</dt>
              <dl>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam quo quidem a sunt ab. Quae iure consequuntur assumenda corporis animi praesentium earum omnis aspernatur quos voluptatem ipsa deleniti, incidunt tempore porro! Tenetur ab voluptatibus non. Fugiat, pariatur veritatis nemo dolorum quae velit ipsum, dolorem amet id nobis rem non nesciunt architecto magnam saepe debitis! Possimus quas perferendis, facilis corporis minus nostrum saepe eligendi tenetur vel iure. Aperiam molestiae, saepe praesentium magnam quasi voluptatum consequuntur nesciunt itaque facere impedit soluta molestias possimus deleniti sunt. Magni explicabo aliquid delectus deleniti, tenetur facilis illo voluptates, vel officiis ratione necessitatibus ut doloribus eius quam in iste, nihil rerum. Dolorem eum, sunt cum quaerat odio repellendus maxime doloremque vitae eveniet beatae iste dignissimos, corrupti inventore error minus dolor voluptatum neque! Laborum, laboriosam.</dl>
            </dl>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;