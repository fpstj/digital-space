// src/fontawesome.ts

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faMedium,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

// Add the icons you want to use globally
library.add(faGithub, faLinkedinIn, faStackOverflow, faMedium, faDev);
