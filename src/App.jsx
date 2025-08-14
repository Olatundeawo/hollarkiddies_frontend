import Routing from "../assest/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

function App() {
  return (
    <div>
      <div className="max-h-full w-full bg-white-600">
        <Routing />
      </div>

      <footer className="flex font-pacifico w-full bg-gray-900 text-white text-center py-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm">
            © 2025 Hollartkiddies. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-lg font-medium text-gray-700">
            <ul className="flex flex-col lg:pl-12 md:pl-8 sm:flex-row sm:flex-wrap mt-4  gap-4 w-full">
              <li className="hover:text-blue-500 transition-colors">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="text-cyan-700 text-2xl"
                  />
                </a>
              </li>

              <li className="hover:text-blue-500 transition-colors">
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faWhatsappSquare}
                    className="text-green-700 text-2xl"
                  />
                </a>
              </li>
              <li className="hover:text-blue-500 transition-colors">
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="text-emerald-700 text-xl"
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-2 text-gray-300">
            Made with <span className="text-red-500">♥</span> by
            <a
              href="https://twitter.com/bokinsin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1"
            >
              Babatunde
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
