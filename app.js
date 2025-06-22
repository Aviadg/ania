// English for Polish Nutritionists - Application JavaScript

// Data
const lessons = [
    {
        id: 1,
        title: "Basic Nutrients",
        words: [
            { polish: "białko", english: "protein" },
            { polish: "tłuszcz", english: "fat" },
            { polish: "węglowodany", english: "carbohydrates" },
            { polish: "witaminy", english: "vitamins" },
            { polish: "minerały", english: "minerals" },
            { polish: "woda", english: "water" },
            { polish: "błonnik", english: "fiber" },
            { polish: "energia", english: "energy" },
            { polish: "kalorie", english: "calories" },
            { polish: "składniki odżywcze", english: "nutrients" }
        ]
    },
    {
        id: 2,
        title: "Food Groups",
        words: [
            { polish: "owoce", english: "fruits" },
            { polish: "warzywa", english: "vegetables" },
            { polish: "mięso", english: "meat" },
            { polish: "ryby", english: "fish" },
            { polish: "nabiał", english: "dairy" },
            { polish: "jaja", english: "eggs" },
            { polish: "ziarna", english: "grains" },
            { polish: "orzechy", english: "nuts" },
            { polish: "nasiona", english: "seeds" },
            { polish: "strączkowe", english: "legumes" }
        ]
    },
    {
        id: 3,
        title: "Basic Dietary Concepts",
        words: [
            { polish: "dieta", english: "diet" },
            { polish: "odżywianie", english: "nutrition" },
            { polish: "trawienie", english: "digestion" },
            { polish: "metabolizm", english: "metabolism" },
            { polish: "nawodnienie", english: "hydration" },
            { polish: "głód", english: "hunger" },
            { polish: "apetyt", english: "appetite" },
            { polish: "zbilansowana dieta", english: "balanced diet" },
            { polish: "posiłek", english: "meal" },
            { polish: "przekąska", english: "snack" }
        ]
    },
    {
        id: 4,
        title: "Vitamins and Minerals",
        words: [
            { polish: "witamina A", english: "vitamin A" },
            { polish: "witamina C", english: "vitamin C" },
            { polish: "witamina D", english: "vitamin D" },
            { polish: "wapń", english: "calcium" },
            { polish: "żelazo", english: "iron" },
            { polish: "potas", english: "potassium" },
            { polish: "magnez", english: "magnesium" },
            { polish: "sód", english: "sodium" },
            { polish: "cynk", english: "zinc" },
            { polish: "elektrolity", english: "electrolytes" }
        ]
    },
    {
        id: 5,
        title: "Weight Management",
        words: [
            { polish: "otyłość", english: "obesity" },
            { polish: "nadwaga", english: "overweight" },
            { polish: "niedowaga", english: "underweight" },
            { polish: "wskaźnik masy ciała", english: "body mass index" },
            { polish: "utrata wagi", english: "weight loss" },
            { polish: "przyrost masy", english: "weight gain" },
            { polish: "spalanie kalorii", english: "calorie burning" },
            { polish: "tkanka tłuszczowa", english: "body fat" },
            { polish: "masa mięśniowa", english: "muscle mass" },
            { polish: "bilans energetyczny", english: "energy balance" }
        ]
    },
    {
        id: 6,
        title: "Cooking Methods",
        words: [
            { polish: "gotowanie", english: "boiling" },
            { polish: "pieczenie", english: "baking" },
            { polish: "smażenie", english: "frying" },
            { polish: "grillowanie", english: "grilling" },
            { polish: "duszenie", english: "stewing" },
            { polish: "parowanie", english: "steaming" },
            { polish: "krojenie", english: "chopping" },
            { polish: "mieszanie", english: "mixing" },
            { polish: "mielenie", english: "grinding" },
            { polish: "blanszowanie", english: "blanching" }
        ]
    },
    {
        id: 7,
        title: "Dietary Restrictions",
        words: [
            { polish: "wegetarianizm", english: "vegetarianism" },
            { polish: "weganizm", english: "veganism" },
            { polish: "alergia pokarmowa", english: "food allergy" },
            { polish: "nietolerancja laktozy", english: "lactose intolerance" },
            { polish: "celiakia", english: "celiac disease" },
            { polish: "bezglutenowy", english: "gluten-free" },
            { polish: "dieta niskosodowa", english: "low-sodium diet" },
            { polish: "dieta niskowęglowodanowa", english: "low-carb diet" },
            { polish: "dieta ketogeniczna", english: "ketogenic diet" },
            { polish: "post przerywany", english: "intermittent fasting" }
        ]
    },
    {
        id: 8,
        title: "Nutrition Assessment",
        words: [
            { polish: "ocena stanu odżywienia", english: "nutritional assessment" },
            { polish: "pomiar fałdów skórnych", english: "skinfold measurement" },
            { polish: "impedancja bioelektryczna", english: "bioelectrical impedance" },
            { polish: "wywiad żywieniowy", english: "dietary interview" },
            { polish: "dziennik żywieniowy", english: "food diary" },
            { polish: "zapotrzebowanie energetyczne", english: "energy requirement" },
            { polish: "stan nawodnienia", english: "hydration status" },
            { polish: "wyniki laboratoryjne", english: "laboratory results" },
            { polish: "analiza składu ciała", english: "body composition analysis" },
            { polish: "monitorowanie postępów", english: "progress monitoring" }
        ]
    },
    {
        id: 9,
        title: "Clinical Nutrition",
        words: [
            { polish: "niedożywienie", english: "malnutrition" },
            { polish: "cukrzyca", english: "diabetes" },
            { polish: "nadciśnienie", english: "hypertension" },
            { polish: "hiperlipidemia", english: "hyperlipidemia" },
            { polish: "żywienie dojelitowe", english: "enteral nutrition" },
            { polish: "żywienie pozajelitowe", english: "parenteral nutrition" },
            { polish: "zaburzenia odżywiania", english: "eating disorders" },
            { polish: "suplementacja", english: "supplementation" },
            { polish: "niedobór składników odżywczych", english: "nutrient deficiency" },
            { polish: "równowaga kwasowo-zasadowa", english: "acid-base balance" }
        ]
    },
    {
        id: 10,
        title: "Advanced Nutrition Concepts",
        words: [
            { polish: "chronożywienie", english: "chrononutrition" },
            { polish: "nutrigenomika", english: "nutrigenomics" },
            { polish: "mikrobiota jelitowa", english: "gut microbiota" },
            { polish: "przeciwutleniacze", english: "antioxidants" },
            { polish: "prebiotyki", english: "prebiotics" },
            { polish: "probiotyki", english: "probiotics" },
            { polish: "bioaktywne składniki", english: "bioactive compounds" },
            { polish: "gęstość odżywcza", english: "nutrient density" },
            { polish: "synergia składników", english: "nutrient synergy" },
            { polish: "indeks glikemiczny", english: "glycemic index" }
        ]
    }
];

const phraseCategories = [
    {
        id: 1,
        title: "Greeting and Introduction",
        phrases: [
            { polish: "Dzień dobry. Nazywam się Anna i jestem dietetykiem.", english: "Good morning. My name is Anna and I'm a dietitian." },
            { polish: "Miło mi Pana/Panią poznać.", english: "It's nice to meet you." },
            { polish: "Jak się Pan/Pani dzisiaj czuje?", english: "How are you feeling today?" },
            { polish: "Czy to Pana/Pani pierwsza wizyta u dietetyka?", english: "Is this your first visit to a dietitian?" },
            { polish: "Zanim zaczniemy, czy ma Pan/Pani jakieś pytania?", english: "Before we begin, do you have any questions?" },
            { polish: "Co Pana/Panią skłoniło do umówienia się na konsultację?", english: "What made you decide to schedule a consultation?" },
            { polish: "Dzisiejsza konsultacja potrwa około godziny.", english: "Today's consultation will take about an hour." },
            { polish: "Chciał(a)bym poznać Pana/Pani cele żywieniowe.", english: "I'd like to understand your nutritional goals." },
            { polish: "Czy mogę zapytać, co Pan/Pani chce osiągnąć?", english: "May I ask what you're hoping to achieve?" },
            { polish: "W trakcie dzisiejszego spotkania zbierzemy informacje i stworzymy plan.", english: "During today's meeting, we'll gather information and create a plan." }
        ]
    },
    {
        id: 2,
        title: "Taking Medical History",
        phrases: [
            { polish: "Czy ma Pan/Pani jakieś problemy zdrowotne?", english: "Do you have any health concerns?" },
            { polish: "Czy przyjmuje Pan/Pani jakieś leki?", english: "Are you taking any medications?" },
            { polish: "Czy ma Pan/Pani jakieś alergie pokarmowe?", english: "Do you have any food allergies?" },
            { polish: "Jak ocenia Pan/Pani swój obecny stan zdrowia?", english: "How would you rate your current health?" },
            { polish: "Czy w rodzinie występują choroby przewlekłe?", english: "Are there any chronic diseases in your family?" },
            { polish: "Czy ma Pan/Pani nietolerancje pokarmowe?", english: "Do you have any food intolerances?" },
            { polish: "Czy przeszedł/przeszła Pan/Pani operacje żołądka lub jelit?", english: "Have you had any stomach or intestinal surgeries?" },
            { polish: "Czy miewa Pan/Pani problemy z trawieniem?", english: "Do you experience digestive issues?" },
            { polish: "Czy stosował(a) Pan/Pani wcześniej jakieś diety?", english: "Have you followed any diets previously?" },
            { polish: "Czy monitoruje Pan/Pani swoje ciśnienie krwi?", english: "Do you monitor your blood pressure?" }
        ]
    },
    {
        id: 3,
        title: "Discussing Current Diet",
        phrases: [
            { polish: "Proszę opisać, co zjadł(a) Pan/Pani wczoraj.", english: "Please describe what you ate yesterday." },
            { polish: "Ile posiłków dziennie Pan/Pani spożywa?", english: "How many meals do you eat per day?" },
            { polish: "Czy regularnie spożywa Pan/Pani śniadania?", english: "Do you regularly eat breakfast?" },
            { polish: "Jakie są Pana/Pani ulubione produkty?", english: "What are your favorite foods?" },
            { polish: "Czy są produkty, których Pan/Pani nie lubi?", english: "Are there any foods you dislike?" },
            { polish: "Jak często jada Pan/Pani poza domem?", english: "How often do you eat out?" },
            { polish: "Czy często spożywa Pan/Pani przetworzoną żywność?", english: "Do you often consume processed foods?" },
            { polish: "Ile wody dziennie Pan/Pani wypija?", english: "How much water do you drink daily?" },
            { polish: "Czy spożywa Pan/Pani alkohol? Jak często?", english: "Do you consume alcohol? How often?" },
            { polish: "Czy dodaje Pan/Pani cukier do napojów?", english: "Do you add sugar to your beverages?" }
        ]
    },
    {
        id: 4,
        title: "Lifestyle Assessment",
        phrases: [
            { polish: "Jaki jest Pana/Pani tryb pracy?", english: "What is your work schedule like?" },
            { polish: "Czy uprawia Pan/Pani jakieś sporty lub ćwiczenia?", english: "Do you play any sports or exercise?" },
            { polish: "Jak ocenia Pan/Pani swój poziom stresu?", english: "How would you rate your stress level?" },
            { polish: "Ile godzin śpi Pan/Pani w nocy?", english: "How many hours do you sleep at night?" },
            { polish: "Czy pali Pan/Pani papierosy?", english: "Do you smoke?" },
            { polish: "Jakie są Pana/Pani nawyki związane z jedzeniem?", english: "What are your eating habits?" },
            { polish: "Czy ma Pan/Pani czas na przygotowywanie posiłków?", english: "Do you have time to prepare meals?" },
            { polish: "Jak często robi Pan/Pani zakupy spożywcze?", english: "How often do you grocery shop?" },
            { polish: "Czy ma Pan/Pani dostęp do świeżych produktów?", english: "Do you have access to fresh produce?" },
            { polish: "Czy lubi Pan/Pani gotować?", english: "Do you enjoy cooking?" }
        ]
    },
    {
        id: 5,
        title: "Goals and Motivation",
        phrases: [
            { polish: "Jakie są Pana/Pani główne cele żywieniowe?", english: "What are your main nutritional goals?" },
            { polish: "Dlaczego chce Pan/Pani zmienić swoje nawyki żywieniowe?", english: "Why do you want to change your eating habits?" },
            { polish: "Co motywuje Pana/Panią do poprawy zdrowia?", english: "What motivates you to improve your health?" },
            { polish: "Czy próbował(a) Pan/Pani wcześniej zmienić swoją dietę?", english: "Have you tried to change your diet before?" },
            { polish: "Co było najtrudniejsze w poprzednich próbach?", english: "What was most challenging in previous attempts?" },
            { polish: "Jakie zmiany są dla Pana/Pani realistyczne?", english: "What changes are realistic for you?" },
            { polish: "Czy ma Pan/Pani wsparcie rodziny?", english: "Do you have family support?" },
            { polish: "Ile czasu może Pan/Pani poświęcić na przygotowanie posiłków?", english: "How much time can you dedicate to meal preparation?" },
            { polish: "Jakie są Pana/Pani oczekiwania wobec naszej współpracy?", english: "What are your expectations for our work together?" },
            { polish: "Co byłoby dla Pana/Pani sukcesem?", english: "What would success look like for you?" }
        ]
    },
    {
        id: 6,
        title: "Giving Recommendations",
        phrases: [
            { polish: "Zalecam zwiększenie spożycia warzyw.", english: "I recommend increasing your vegetable intake." },
            { polish: "Proszę ograniczyć spożycie produktów przetworzonych.", english: "Please limit your consumption of processed foods." },
            { polish: "Warto pić więcej wody.", english: "It's beneficial to drink more water." },
            { polish: "Sugeruję jedzenie regularnych posiłków.", english: "I suggest eating regular meals." },
            { polish: "Dobrze byłoby ograniczyć spożycie cukru.", english: "It would be good to reduce your sugar intake." },
            { polish: "Warto włączyć do diety więcej błonnika.", english: "It's worth including more fiber in your diet." },
            { polish: "Proszę zwracać uwagę na wielkość porcji.", english: "Please pay attention to portion sizes." },
            { polish: "Zachęcam do czytania etykiet produktów.", english: "I encourage you to read product labels." },
            { polish: "Dobrym pomysłem jest planowanie posiłków z wyprzedzeniem.", english: "Planning meals in advance is a good idea." },
            { polish: "Warto zastanowić się nad suplementacją witaminy D.", english: "It's worth considering vitamin D supplementation." }
        ]
    },
    {
        id: 7,
        title: "Explaining Nutrition Concepts",
        phrases: [
            { polish: "Białko jest potrzebne do budowy i naprawy tkanek.", english: "Protein is necessary for building and repairing tissues." },
            { polish: "Węglowodany są głównym źródłem energii.", english: "Carbohydrates are the main source of energy." },
            { polish: "Tłuszcze są ważne dla zdrowia, ale w odpowiednich ilościach.", english: "Fats are important for health, but in appropriate amounts." },
            { polish: "Błonnik pomaga w prawidłowym trawieniu.", english: "Fiber helps with proper digestion." },
            { polish: "Witaminy i minerały są niezbędne dla wielu funkcji organizmu.", english: "Vitamins and minerals are essential for many bodily functions." },
            { polish: "Bilans energetyczny to różnica między kaloriami przyjętymi a spalonymi.", english: "Energy balance is the difference between calories consumed and burned." },
            { polish: "Metabolizm to wszystkie procesy chemiczne zachodzące w organizmie.", english: "Metabolism is all the chemical processes occurring in your body." },
            { polish: "Indeks glikemiczny określa, jak szybko wzrasta poziom cukru we krwi.", english: "Glycemic index determines how quickly blood sugar rises." },
            { polish: "Nawodnienie jest kluczowe dla prawidłowego funkcjonowania organizmu.", english: "Hydration is crucial for proper body functioning." },
            { polish: "Gęstość odżywcza to ilość składników odżywczych w stosunku do kalorii.", english: "Nutrient density is the amount of nutrients relative to calories." }
        ]
    },
    {
        id: 8,
        title: "Meal Planning Guidance",
        phrases: [
            { polish: "Śniadanie powinno zawierać białko i węglowodany złożone.", english: "Breakfast should include protein and complex carbohydrates." },
            { polish: "Warto przygotować posiłki na kilka dni z góry.", english: "It's worthwhile to prepare meals for several days in advance." },
            { polish: "Przekąski między posiłkami powinny być zdrowe i pożywne.", english: "Snacks between meals should be healthy and nutritious." },
            { polish: "Proszę pamiętać o włączeniu różnokolorowych warzyw do diety.", english: "Please remember to include colorful vegetables in your diet." },
            { polish: "Starajmy się ograniczyć spożycie słodkich napojów.", english: "Let's try to limit the consumption of sweet beverages." },
            { polish: "Kolacja powinna być lekka i zjedzona kilka godzin przed snem.", english: "Dinner should be light and eaten several hours before sleep." },
            { polish: "Warto mieć przy sobie zdrowe przekąski, gdy jest się poza domem.", english: "It's good to have healthy snacks with you when you're away from home." },
            { polish: "Spróbujmy wprowadzić więcej roślin strączkowych do Pana/Pani diety.", english: "Let's try to introduce more legumes into your diet." },
            { polish: "Ryby morskie są dobrym źródłem kwasów omega-3.", english: "Saltwater fish are a good source of omega-3 acids." },
            { polish: "Orzechy i nasiona to zdrowe źródła tłuszczów.", english: "Nuts and seeds are healthy sources of fats." }
        ]
    },
    {
        id: 9,
        title: "Addressing Challenges",
        phrases: [
            { polish: "Co jest dla Pana/Pani najtrudniejsze w zmianie nawyków?", english: "What is most difficult for you in changing habits?" },
            { polish: "Jak radzi sobie Pan/Pani z jedzeniem pod wpływem emocji?", english: "How do you handle emotional eating?" },
            { polish: "Co zazwyczaj prowadzi do podjadania między posiłkami?", english: "What usually leads to snacking between meals?" },
            { polish: "Jak można dostosować plan do Pana/Pani napiętego harmonogramu?", english: "How can we adapt the plan to your busy schedule?" },
            { polish: "Co może pomóc w ograniczeniu spożycia przetworzonej żywności?", english: "What might help in reducing processed food consumption?" },
            { polish: "Jak możemy poradzić sobie z sytuacjami społecznymi i jedzeniem?", english: "How can we handle social situations and eating?" },
            { polish: "Co zrobić, gdy nie ma czasu na przygotowanie zdrowego posiłku?", english: "What to do when there's no time to prepare a healthy meal?" },
            { polish: "Jak radzić sobie z głodem podczas ograniczania kalorii?", english: "How to deal with hunger while limiting calories?" },
            { polish: "Co może pomóc w utrzymaniu motywacji długoterminowo?", english: "What might help maintain motivation long-term?" },
            { polish: "Jak sobie radzić z nawrotami do starych nawyków?", english: "How to handle reverting to old habits?" }
        ]
    },
    {
        id: 10,
        title: "Follow-up and Progress",
        phrases: [
            { polish: "Jak idzie realizacja planu żywieniowego?", english: "How is the nutrition plan working for you?" },
            { polish: "Jakie zmiany Pan/Pani zauważył(a) od naszego ostatniego spotkania?", english: "What changes have you noticed since our last meeting?" },
            { polish: "Czy pojawiły się jakieś trudności?", english: "Have there been any difficulties?" },
            { polish: "Czy ma Pan/Pani jakieś pytania dotyczące planu?", english: "Do you have any questions about the plan?" },
            { polish: "Jak czuje się Pan/Pani fizycznie po wprowadzeniu zmian?", english: "How do you feel physically after implementing the changes?" },
            { polish: "Proszę omówić swój dziennik żywieniowy.", english: "Please go through your food diary." },
            { polish: "Czy zauważył(a) Pan/Pani poprawę w zakresie [symptom]?", english: "Have you noticed any improvement regarding [symptom]?" },
            { polish: "Warto wprowadzić kilka modyfikacji do planu.", english: "It's worth making a few modifications to the plan." },
            { polish: "Co ocenia Pan/Pani jako największy sukces do tej pory?", english: "What do you consider your biggest success so far?" },
            { polish: "Ustalmy cele na kolejny okres.", english: "Let's set goals for the next period." }
        ]
    }
];

// Application state
let activeTab = 'vocabulary';
let speechAvailable = false;
let showEnglish = false;

// Vocabulary state
let currentLessonIndex = 0;
let currentWordIndex = 0;

// Phrases state
let currentCategoryIndex = 0;
let currentPhraseIndex = 0;

// Context descriptions for phrase categories
const contextDescriptions = [
    "Use these phrases when meeting a client for the first time to establish rapport and set expectations.",
    "Use these phrases to gather important medical information that might affect nutritional recommendations.",
    "Use these phrases to understand your client's current eating habits and food preferences.",
    "Use these phrases to learn about your client's lifestyle factors that may impact their nutrition.",
    "Use these phrases to understand what motivates your client and establish realistic goals.",
    "Use these phrases when providing specific dietary recommendations to your client.",
    "Use these phrases to explain nutritional concepts in a clear, understandable way.",
    "Use these phrases when helping your client plan and prepare healthy meals.",
    "Use these phrases to identify and address challenges your client may face.",
    "Use these phrases during follow-up appointments to track progress and make adjustments."
];

// Initialize the app
function init() {
    // Check if speech synthesis is available
    speechAvailable = 'speechSynthesis' in window;
    
    // Set up event listeners
    setupEventListeners();
    
    // Render initial content
    renderCurrentTab();
}

function setupEventListeners() {
    // Tab switching
    document.getElementById('vocab-tab').addEventListener('click', () => switchTab('vocabulary'));
    document.getElementById('phrases-tab').addEventListener('click', () => switchTab('phrases'));
}

function renderCurrentTab() {
    const appContent = document.getElementById('app-content');
    
    if (activeTab === 'vocabulary') {
        appContent.innerHTML = getVocabularyHTML();
        setupVocabularyEventListeners();
        createLessonNavigation();
        updateVocabularyContent();
    } else {
        appContent.innerHTML = getPhrasesHTML();
        setupPhrasesEventListeners();
        createCategoryNavigation();
        updatePhrasesContent();
    }
}

function getVocabularyHTML() {
    return `
        <!-- Vocabulary Navigation -->
        <div class="bg-green-600 shadow-lg">
            <div class="container mx-auto px-4 py-2">
                <div id="lesson-nav" class="flex overflow-x-auto pb-2 hide-scrollbar">
                    <!-- Lesson buttons will be dynamically inserted here -->
                </div>
            </div>
        </div>
        
        <!-- Vocabulary Content -->
        <div class="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
            <div class="w-full max-w-2xl">
                <!-- Current Lesson Info -->
                <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 id="lesson-title" class="text-2xl font-bold text-gray-800"></h2>
                    <p id="lesson-progress" class="text-gray-600 mt-2"></p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div id="lesson-progress-bar" class="bg-green-600 h-2 rounded-full" style="width: 0%"></div>
                    </div>
                </div>
                
                <!-- Word Card -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <!-- Polish word always shown -->
                    <div class="mb-6 text-center">
                        <h3 class="text-lg text-gray-600 mb-1">Polish term:</h3>
                        <h2 id="polish-word" class="text-4xl font-bold"></h2>
                    </div>
                    
                    <!-- Challenge text -->
                    <div id="challenge-text" class="my-6 py-4 border-t border-b border-gray-200 text-center">
                        <p class="text-xl">Say this term in English!</p>
                    </div>
                    
                    <!-- English translation (shown after CHECK) -->
                    <div id="english-translation" class="my-6 py-4 border-t border-b border-gray-200 text-center hidden">
                        <h3 class="text-lg text-gray-600 mb-1">English translation:</h3>
                        <h2 id="english-word" class="text-4xl font-bold text-green-600"></h2>
                        <button id="hear-again-vocab" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Hear Again
                        </button>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex justify-center mt-6">
                        <button id="check-btn" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            CHECK
                        </button>
                        <button id="next-btn" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors hidden">
                            NEXT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getPhrasesHTML() {
    return `
        <!-- Phrases Navigation -->
        <div class="bg-blue-500 shadow-lg">
            <div class="container mx-auto px-4 py-2">
                <div id="category-nav" class="flex overflow-x-auto pb-2 hide-scrollbar">
                    <!-- Category buttons will be dynamically inserted here -->
                </div>
            </div>
        </div>
        
        <!-- Phrases Content -->
        <div class="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
            <div class="w-full max-w-2xl">
                <!-- Current Category Info -->
                <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 id="category-title" class="text-2xl font-bold text-gray-800"></h2>
                    <p id="category-progress" class="text-gray-600 mt-2"></p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div id="category-progress-bar" class="bg-blue-600 h-2 rounded-full" style="width: 0%"></div>
                    </div>
                </div>
                
                <!-- Phrase Card -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <!-- Polish phrase always shown -->
                    <div class="mb-6 text-center">
                        <h3 class="text-lg text-gray-600 mb-1">Polish phrase:</h3>
                        <h2 id="polish-phrase" class="text-2xl font-bold"></h2>
                    </div>
                    
                    <!-- Challenge text -->
                    <div id="phrase-challenge-text" class="my-6 py-4 border-t border-b border-gray-200 text-center">
                        <p class="text-xl">Say this phrase in English!</p>
                    </div>
                    
                    <!-- English translation (shown after CHECK) -->
                    <div id="phrase-english-translation" class="my-6 py-4 border-t border-b border-gray-200 text-center hidden">
                        <h3 class="text-lg text-gray-600 mb-1">English translation:</h3>
                        <h2 id="english-phrase" class="text-2xl font-bold text-blue-600"></h2>
                        <button id="hear-again-phrase" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Hear Again
                        </button>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="flex justify-center mt-6">
                        <button id="check-phrase-btn" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            CHECK
                        </button>
                        <button id="next-phrase-btn" class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors hidden">
                            NEXT
                        </button>
                    </div>
                </div>
                
                <!-- Context Description for Phrases -->
                <div class="mt-6 bg-white rounded-lg shadow-md p-6">
                    <h3 class="font-bold text-lg mb-2">When to use these phrases:</h3>
                    <p id="context-description" class="text-gray-700"></p>
                </div>
            </div>
        </div>
    `;
}

function setupVocabularyEventListeners() {
    // Vocabulary buttons
    document.getElementById('check-btn').addEventListener('click', handleVocabCheck);
    document.getElementById('next-btn').addEventListener('click', handleVocabNext);
    document.getElementById('hear-again-vocab').addEventListener('click', () => speakEnglish('vocabulary'));
}

function setupPhrasesEventListeners() {
    // Phrases buttons
    document.getElementById('check-phrase-btn').addEventListener('click', handlePhraseCheck);
    document.getElementById('next-phrase-btn').addEventListener('click', handlePhraseNext);
    document.getElementById('hear-again-phrase').addEventListener('click', () => speakEnglish('phrases'));
}

function createLessonNavigation() {
    const nav = document.getElementById('lesson-nav');
    nav.innerHTML = '';
    
    lessons.forEach((lesson, index) => {
        const button = document.createElement('button');
        button.className = `px-3 py-2 mx-1 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
            currentLessonIndex === index
                ? 'bg-white text-green-600'
                : 'bg-green-700 text-white hover:bg-green-800'
        }`;
        button.textContent = `${lesson.id}. ${lesson.title}`;
        button.addEventListener('click', () => selectLesson(index));
        nav.appendChild(button);
    });
}

function createCategoryNavigation() {
    const nav = document.getElementById('category-nav');
    nav.innerHTML = '';
    
    phraseCategories.forEach((category, index) => {
        const button = document.createElement('button');
        button.className = `px-3 py-2 mx-1 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
            currentCategoryIndex === index
                ? 'bg-white text-blue-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
        }`;
        button.textContent = `${category.id}. ${category.title}`;
        button.addEventListener('click', () => selectCategory(index));
        nav.appendChild(button);
    });
}

function switchTab(tab) {
    activeTab = tab;
    showEnglish = false;
    
    // Update tab buttons
    const vocabTab = document.getElementById('vocab-tab');
    const phrasesTab = document.getElementById('phrases-tab');
    
    if (tab === 'vocabulary') {
        vocabTab.className = 'px-6 py-4 font-medium bg-green-600 text-white';
        phrasesTab.className = 'px-6 py-4 font-medium text-gray-300 hover:bg-gray-700 hover:text-white';
    } else {
        vocabTab.className = 'px-6 py-4 font-medium text-gray-300 hover:bg-gray-700 hover:text-white';
        phrasesTab.className = 'px-6 py-4 font-medium bg-blue-600 text-white';
    }
    
    // Re-render the current tab content
    renderCurrentTab();
}

function selectLesson(index) {
    currentLessonIndex = index;
    currentWordIndex = 0;
    showEnglish = false;
    createLessonNavigation();
    updateVocabularyContent();
}

function selectCategory(index) {
    currentCategoryIndex = index;
    currentPhraseIndex = 0;
    showEnglish = false;
    createCategoryNavigation();
    updatePhrasesContent();
}

function updateVocabularyContent() {
    const currentLesson = lessons[currentLessonIndex];
    const currentWord = currentLesson.words[currentWordIndex];
    
    // Update lesson info
    document.getElementById('lesson-title').textContent = `Lesson ${currentLesson.id}: ${currentLesson.title}`;
    document.getElementById('lesson-progress').textContent = `Progress: ${currentWordIndex + 1} of ${currentLesson.words.length} words`;
    
    // Update progress bar
    const progressPercent = ((currentWordIndex + 1) / currentLesson.words.length) * 100;
    document.getElementById('lesson-progress-bar').style.width = `${progressPercent}%`;
    
    // Update word content
    document.getElementById('polish-word').textContent = currentWord.polish;
    document.getElementById('english-word').textContent = currentWord.english;
    
    // Show/hide elements based on state
    const challengeText = document.getElementById('challenge-text');
    const englishTranslation = document.getElementById('english-translation');
    const checkBtn = document.getElementById('check-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (showEnglish) {
        challengeText.classList.add('hidden');
        englishTranslation.classList.remove('hidden');
        checkBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    } else {
        challengeText.classList.remove('hidden');
        englishTranslation.classList.add('hidden');
        checkBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    }
}

function updatePhrasesContent() {
    const currentCategory = phraseCategories[currentCategoryIndex];
    const currentPhrase = currentCategory.phrases[currentPhraseIndex];
    
    // Update category info
    document.getElementById('category-title').textContent = currentCategory.title;
    document.getElementById('category-progress').textContent = `Phrase ${currentPhraseIndex + 1} of ${currentCategory.phrases.length}`;
    
    // Update progress bar
    const progressPercent = ((currentPhraseIndex + 1) / currentCategory.phrases.length) * 100;
    document.getElementById('category-progress-bar').style.width = `${progressPercent}%`;
    
    // Update phrase content
    document.getElementById('polish-phrase').textContent = currentPhrase.polish;
    document.getElementById('english-phrase').textContent = currentPhrase.english;
    
    // Update context description
    document.getElementById('context-description').textContent = contextDescriptions[currentCategoryIndex];
    
    // Show/hide elements based on state
    const challengeText = document.getElementById('phrase-challenge-text');
    const englishTranslation = document.getElementById('phrase-english-translation');
    const checkBtn = document.getElementById('check-phrase-btn');
    const nextBtn = document.getElementById('next-phrase-btn');
    
    if (showEnglish) {
        challengeText.classList.add('hidden');
        englishTranslation.classList.remove('hidden');
        checkBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    } else {
        challengeText.classList.remove('hidden');
        englishTranslation.classList.add('hidden');
        checkBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    }
}

function speakEnglish(type) {
    if (!speechAvailable) return;
    
    const text = type === 'vocabulary' 
        ? lessons[currentLessonIndex].words[currentWordIndex].english
        : phraseCategories[currentCategoryIndex].phrases[currentPhraseIndex].english;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

function handleVocabCheck() {
    showEnglish = true;
    updateVocabularyContent();
    speakEnglish('vocabulary');
}

function handleVocabNext() {
    const currentLesson = lessons[currentLessonIndex];
    if (currentWordIndex < currentLesson.words.length - 1) {
        currentWordIndex++;
    } else {
        currentWordIndex = 0;
    }
    showEnglish = false;
    updateVocabularyContent();
}

function handlePhraseCheck() {
    showEnglish = true;
    updatePhrasesContent();
    speakEnglish('phrases');
}

function handlePhraseNext() {
    const currentCategory = phraseCategories[currentCategoryIndex];
    if (currentPhraseIndex < currentCategory.phrases.length - 1) {
        currentPhraseIndex++;
    } else {
        currentPhraseIndex = 0;
    }
    showEnglish = false;
    updatePhrasesContent();
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', init);
