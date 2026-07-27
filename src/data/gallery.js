// Design gallery — social media / graphic design posts.
// Each import points to a real file inside src/assets/gallery/.
// Filenames are CASE-SENSITIVE and the extension must match exactly
// (e.g. .PNG is different from .png).
import g01 from "../assets/gallery/9871237999.png";
import g02 from "../assets/gallery/ASSIGNMENT.png";
import g03 from "../assets/gallery/ASSIGNMENT2.png";
import g04 from "../assets/gallery/ASSIGNMENT3.png";
import g05 from "../assets/gallery/AutomationFirst.png";
import g06 from "../assets/gallery/omki.png";
import g07 from "../assets/gallery/omkic.png";
import g08 from "../assets/gallery/perc.png";
import g09 from "../assets/gallery/seo.png";
import g10 from "../assets/gallery/thumb1.png";
import g11 from "../assets/gallery/thumb2.jpeg";
import g12 from "../assets/gallery/thumb3.png";
import g13 from "../assets/gallery/thumb4.png";
import g14 from "../assets/gallery/thumb5.png";
import g15 from "../assets/gallery/thumb6.png";
import g16 from "../assets/gallery/thumb8.png";
import g17 from "../assets/gallery/thumb9.png";
import g18 from "../assets/gallery/thum10.png";
import g19 from "../assets/gallery/social.png";

export const gallery = [
  { src: g01, caption: "Graphic design work" },      // 0
  { src: g02, caption: "Assignment design" },         // 1  ← featured
  { src: g03, caption: "Assignment design" },         // 2  ← featured
  { src: g04, caption: "Assignment design" },         // 3  ← featured
  { src: g05, caption: "Automation project" },        // 4
  { src: g06, caption: "Om — brand piece" },          // 5
  { src: g07, caption: "Om — icon" },                 // 6
  { src: g08, caption: "Percentage / data visual" },  // 7
  { src: g09, caption: "SEO visual" },                // 8
  { src: g10, caption: "Thumbnail design" },          // 9
  { src: g11, caption: "Thumbnail design" },          // 10
  { src: g12, caption: "Thumbnail design" },          // 11
  { src: g13, caption: "Thumbnail design" },          // 12
  { src: g14, caption: "Thumbnail design" },          // 13
  { src: g15, caption: "Thumbnail design" },          // 14
  { src: g16, caption: "Thumbnail design" },          // 15
  { src: g17, caption: "Thumbnail design" },          // 16
  { src: g18, caption: "Thumbnail design" },
  { src: g19, caption: "Social media post" },         // 17
];

// The 3 best designs featured on the home page (indexes into gallery above):
// ASSIGNMENT (1), ASSIGNMENT2 (2), ASSIGNMENT3 (3)
export const featured = [1, 2, 3];