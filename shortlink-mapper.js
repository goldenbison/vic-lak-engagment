/**
 * Wedding Invitation Guest Link Mapper
 * 
 * This script creates a mapping system for shortened invitation links
 * Save this as shortlink-mapper.js and include it in your website
 */

// Create a guest mapping object
const guestMap = {};

// Map each guest to a short code
// Format: guestMap["shortcode"] = "Full Guest Name";

// Ming Lux and Pu Nith's Guests (g1-g28)
guestMap["g1"] = "ឯកឧត្តម ម៉ៅ គង្គា នឹង លោកជំទាវ";
guestMap["g2"] = "ឯកឧត្តម ឯក សំអុល";
guestMap["g3"] = "លោកជំទាវ ឯក ឆវីវណ្ណា";
guestMap["g4"] = "លោកជំទាវ ឡាយ ឌីណា នឹង ឯកឧត្តម";
guestMap["g5"] = "លោកជំទាវ ជុប បញ្ញា នឹង ឯកឧត្តម";
guestMap["g6"] = "លោក លី ហូវ នឹង លោកស្រី";
guestMap["g7"] = "លោកស្រី ថោង រដ្ថា នឹង ស្វាមុី";
guestMap["g8"] = "ឯកឧត្តម ហៀង សម្បិត្ត នឹង លោកជំទាវ";
guestMap["g9"] = "លោក តាំង តាយ នឹង លោកស្រី";
guestMap["g10"] = "លោក រស់ បញ្ញា នឹង លោកស្រី";
guestMap["g11"] = "លោក មាឃ សឿង នឹង លោកស្រី";
guestMap["g12"] = "លោក សំ សាវិន នឹង លោកស្រី";
guestMap["g13"] = "លោកស្រី សឿង ដាលីន នឹង ស្វាមុី";
guestMap["g14"] = "លោកស្រី នួន និតនិមល នឹង ស្វាមុី";
guestMap["g15"] = "លោកស្រី សំ សុពណ៍ នឹង ស្វាមុី";
guestMap["g16"] = "លោកស្រី នួន ដារីណែត នឹង ស្វាមុី";
guestMap["g17"] = "ឯកឧត្តម នួន វណ្ណះ នឹង លោកទំទាវ";
guestMap["g18"] = "លោក អុឹម នៅ នឹង លោកស្រី";
guestMap["g19"] = "លោក ប៉ែន ភារិន នឹង លោកស្រី";
guestMap["g20"] = "លោកស្រី មាន គន្ធា នឹង ស្វាមុី";
guestMap["g21"] = "លោកស្រី មាន បុផ្ផា";
guestMap["g22"] = "លោក សាយ ប៊ុនធឿន នឹង លោកស្រី";
guestMap["g23"] = "លោកស្រី នង ណារី នឹង ស្វាមុី";
guestMap["g24"] = "លោក ស៊ូ ហារីស នឹង លោកស្រី";
guestMap["g25"] = "លោក ឯក សារុន នឹង លោកស្រី";
guestMap["g26"] = "លោក អេង អូដេ នឹង លោកស្រី";
guestMap["g27"] = "លោក ប៉ែន រ៉ាលីន";
guestMap["g28"] = "លោក មាន សីហា នឹង លោកស្រី";

// Mom and Dad's Guests (g29-g54)
guestMap["g29"] = "ឯកឧត្តម សុត ដែល្លី និង លោកជំទាវ";
guestMap["g30"] = "បង អុន និង ក្មួយផល ក្មួយឌីនិងស្វាមី";
guestMap["g31"] = "ក្មួយ គន្ធា និងស្វាមី";
guestMap["g32"] = "ក្មួយ ខ្លឹង និងភរិយា";
guestMap["g33"] = "ក្មួយ ម៉ាំង និងភរិយា";
guestMap["g34"] = "ទ័រអ៊ី និងទៀ";
guestMap["g35"] = "ចែ មួយ និងស្វាមី";
guestMap["g36"] = "ប្អូន ម៉ាប់ និងភរិយា";
guestMap["g37"] = "គូ កាំង សុជាតិ និងគីម";
guestMap["g38"] = "ប្អូនស្រី កនិកា និងស្វាមី";
guestMap["g39"] = "ប្អូនប្រុស កញ្ញារីទ្ធិ និងភរិយា";
guestMap["g40"] = "ចែ ចេង ណាប់";
guestMap["g41"] = "ឯកឧត្តម បួន សារ:មុនី និងលោកជំទាវ";
guestMap["g42"] = "ក្មួយ បូលីវី និងស្វាមី";
guestMap["g43"] = "ក្មួយ សុផារី និង ស្វាមី";
guestMap["g44"] = "ជំទាវ អ៊ី សុង វួចនី និង ឯកឧត្តម ទៀ";
guestMap["g45"] = "ចឹក សុង ង៉ុយ និងស៊ីម";
guestMap["g46"] = "His Excellency Jean-François Tain";
guestMap["g47"] = "លោក ប៉ែន ចាន់ដាវុធ និងភរិយា ព្រមទាំងក្មួយៗ";
guestMap["g48"] = "លោក កេត សូថា និងភរិយា ព្រមទាំងក្មួយៗ";
guestMap["g49"] = "លោក ផន សូឌី និងភរិយា ព្រមទាំងក្មួយៗ";
guestMap["g50"] = "លោកស្រី ប៉ែន យុត្តិកា និង ក្មួយប្រុស";
guestMap["g51"] = "លោក យស ចាន់ថារិទ្ធិ និងភរិយា ព្រមទាំងចៅ";
guestMap["g52"] = "ក្មួយស្រី សុត សុជាតា";
guestMap["g53"] = "លោកស្រី ខូវ ផល្លា និងក្មួយៗ";
guestMap["g54"] = "លោកស្រី ខូវ រ៉ាវី និងក្មួយស្រី";

// Keo's Guests (g55-g89)
guestMap["g55"] = "Srun Sothaneth & Husband";
guestMap["g56"] = "Sun Manich";
guestMap["g57"] = "Ly Chanphallika";
guestMap["g58"] = "Sor SreyKa";
guestMap["g59"] = "Sok Nina";
guestMap["g60"] = "Kun SopheaDonita";
guestMap["g61"] = "Suon Boliza";
guestMap["g62"] = "Im Liliza & Husband";
guestMap["g63"] = "Tha Monyneath";
guestMap["g64"] = "Kea Muyly & Husband";
guestMap["g65"] = "Meas Sochivornmonineath";
guestMap["g66"] = "Saly Vuthiya";
guestMap["g67"] = "Seng Chonineath";
guestMap["g68"] = "Kim MeyMey";
guestMap["g69"] = "Sievlinh";
guestMap["g70"] = "You Angelina";
guestMap["g71"] = "Amber";
guestMap["g72"] = "Tip Chanlinda";
guestMap["g73"] = "Long Sreynith";
guestMap["g74"] = "Phou Sreymai";
guestMap["g75"] = "Mak Kunthea";
guestMap["g76"] = "Ros Sopheakneath";
guestMap["g77"] = "Lor Channet";
guestMap["g78"] = "Chim Phithavro";
guestMap["g79"] = "Dy Kimhour";
guestMap["g80"] = "SkeelsRyan Kim";
guestMap["g81"] = "Nyden";
guestMap["g82"] = "Ly Rosa";
guestMap["g83"] = "Celine";
guestMap["g84"] = "Chris";
guestMap["g85"] = "Pech Danin & Husband";
guestMap["g86"] = "Keo Pisetraksmey";
guestMap["g87"] = "Ching Long";
guestMap["g88"] = "Molya";
guestMap["g89"] = "Mouykim";

// Victor's Guests (g90-g94)
guestMap["g90"] = "Pen Pichponleur & Spouse";
guestMap["g91"] = "Sok Rothoudom";
guestMap["g92"] = "Mr. Sutharsan Chelladurai";
guestMap["g93"] = "Chan Darapiseth";
guestMap["g94"] = "Sar Yotmorkoth & Heng Socheata";
guestMap["g95"] = "ឯកឧត្តម គី សិរីវឌ្ឍន៍";
guestMap["g96"] = "Long Chandalis";
guestMap["g97"] = "Zana";
guestMap["g98"] = "Zara";
guestMap["g99"] = "Bun";
guestMap["g100"] = "Typi";
guestMap["g101"] = "Visa";
guestMap["g102"] = "Satra";
guestMap["g103"] = "Bonita";
guestMap["g104"] = "Ek Viraksunnry & Husband";
guestMap["g105"] = "SinEk KunrathDevy";
guestMap["g106"] = "លោក ទុង រតនា";
guestMap["g107"] = "លោកស្រី Sinat Leak នឹង ស្វាមី"

// Function to look up guest by short code and redirect as needed
function handleGuestRedirect() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check if we have a 'g' (guest code) parameter
  const guestCode = urlParams.get('g');
  
  if (guestCode && guestMap[guestCode]) {
    // Replace the URL with one that includes the guest's name
    const guestName = guestMap[guestCode];
    
    // Create a new URL with full guest info
    const newParams = new URLSearchParams();
    newParams.set('guest', guestCode);
    newParams.set('name', guestName);
    
    // Construct the new URL without reloading the page
    const newUrl = `${window.location.pathname}?${newParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
    
    // Make sure the guest name element is updated
    const guestNameElement = document.getElementById('guest-name-placeholder');
    if (guestNameElement) {
      guestNameElement.textContent = guestName;
      
      // Check if the text is primarily English
      const englishPattern = /[a-zA-Z]/g;
      const nonEnglishPattern = /[^\u0000-\u007F]/g;
      
      const englishChars = (guestName.match(englishPattern) || []).length;
      const nonEnglishChars = (guestName.match(nonEnglishPattern) || []).length;
      
      // If it has more English characters than non-English
      if (englishChars > nonEnglishChars) {
        // Find the parent guest-name-box and set the language attribute
        const guestNameBox = document.querySelector('.guest-name-box');
        if (guestNameBox) {
          guestNameBox.setAttribute('data-lang', 'en');
        }
      }
    }
    
    // Update the hidden form field if it exists
    const guestNameField = document.getElementById('guest-name-field');
    if (guestNameField) {
      guestNameField.value = guestName;
    }
    
    // Update the guest-id field if it exists
    const guestIdField = document.getElementById('guest-id-field');
    if (guestIdField) {
      guestIdField.value = guestCode;
    }
    
    console.log(`Guest mapped: ${guestCode} -> "${guestName}"`);
  } else if (guestCode) {
    console.log(`Guest code not found: ${guestCode}`);
  }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', handleGuestRedirect);

// Export the guest map for potential other uses
window.weddingGuestMap = guestMap;