import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, MapPin, BookOpen, PenTool, CheckCircle } from "lucide-react"
import { QuizComponent } from "@/components/quiz-component"

export default function IntroductionToMapsLesson() {
  const quiz = {
    title: "Introduction to Maps Quiz",
    questions: [
      {
        question: "Which type of map would be most useful for planning a hiking route in the Lake District?",
        options: ["Political map", "Topographic map", "Road map", "Thematic map showing population density"],
        correctAnswer: 1,
        explanation:
          "Topographic maps show physical features like hills, valleys, and lakes, making them ideal for planning hiking routes.",
      },
      {
        question: "What is the main purpose of a choropleth map?",
        options: [
          "To show boundaries between countries",
          "To show the location of specific points of interest",
          "To show variations in data across different areas using colors or patterns",
          "To show the exact shape of landforms",
        ],
        correctAnswer: 2,
        explanation:
          "Choropleth maps use different colors or patterns to show how a variable (like population density or income levels) varies across different areas.",
      },
      {
        question: "On an Ordnance Survey map of the UK, what do blue symbols typically represent?",
        options: ["Roads and paths", "Buildings and structures", "Water features", "Contour lines"],
        correctAnswer: 2,
        explanation: "On OS maps, blue symbols typically represent water features such as rivers, lakes, and ponds.",
      },
      {
        question: "Which of the following is NOT one of the three main elements that most maps include?",
        options: ["Scale", "Weather forecast", "Legend/Key", "Title"],
        correctAnswer: 1,
        explanation:
          "The three main elements most maps include are title, scale, and legend/key. Weather forecasts are not standard map elements.",
      },
      {
        question: "What is the purpose of a map projection?",
        options: [
          "To make the map more colorful and attractive",
          "To convert the three-dimensional Earth onto a two-dimensional surface",
          "To show the location of projectors in a classroom",
          "To predict future changes in geography",
        ],
        correctAnswer: 1,
        explanation:
          "A map projection is a method used to represent the three-dimensional surface of the Earth on a two-dimensional map.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 mr-3" />
            <div>
              <p className="text-blue-100">Unit 1: Maps and Mapping</p>
              <h1 className="text-3xl font-bold">Lesson 1: Introduction to Maps</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-2 sm:px-0">
          <div className="flex mb-6">
            <Link href="/units/maps-and-mapping">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Unit
              </Button>
            </Link>
          </div>

          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learning Objectives
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Define what maps are and why they are important</li>
                  <li>• Identify different types of maps and their purposes</li>
                  <li>• Understand the basic elements of a map</li>
                  <li>• Recognize common map symbols and conventions</li>
                  <li>• Appreciate how maps are used in everyday life</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-700 flex items-center gap-2">
                  <PenTool className="h-5 w-5" />
                  Key Skills
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Map reading and interpretation</li>
                  <li>• Visual literacy</li>
                  <li>• Spatial awareness</li>
                  <li>• Critical thinking</li>
                  <li>• Communication</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Success Criteria
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Explain what maps are and why they are useful</li>
                  <li>• Identify at least five different types of maps</li>
                  <li>• Describe the key elements found on most maps</li>
                  <li>• Interpret common map symbols</li>
                  <li>• Give examples of how maps are used in daily life</li>
                </ul>
              </div>
            </div>

            <Tabs defaultValue="content">
              <TabsList className="mb-4">
                <TabsTrigger value="content">Lesson Content</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="assessment">Assessment</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">What is a Map?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-4">
                        A map is a symbolic representation of selected characteristics of a place, usually drawn on a
                        flat surface. Maps present information about the world in a simple, visual way. They teach about
                        the world by showing sizes and shapes of countries, locations of features, and distances between
                        places.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Maps have been used for thousands of years, from ancient clay tablets to modern digital
                        applications. They help us navigate, understand spatial patterns, and make decisions about our
                        environment.
                      </p>
                      <p className="text-gray-600">
                        Unlike photographs, maps can represent things that may not be visible, such as political
                        boundaries, temperature variations, or population density. They are selective in what they show
                        and often use symbols and generalizations to make complex information easier to understand.
                      </p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: Different types of maps throughout history</p>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2">Did You Know?</h3>
                      <p className="text-sm text-gray-600">
                        The oldest known map is a wall painting of the ancient Turkish city of Çatalhöyük, which dates
                        back to around 6,200 BCE. The oldest surviving world map is the Babylonian Map of the World,
                        dating from about 600 BCE.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Types of Maps</h2>
                  <p className="text-gray-600 mb-4">
                    Maps come in many different forms, each designed for specific purposes. Here are some of the most
                    common types:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Political Maps</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: Political map of the UK</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Political maps show territorial boundaries between countries, states, counties, and other
                        administrative divisions. They typically use different colors to distinguish between territories
                        and include cities, towns, and capitals.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Physical Maps</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: Physical map of the UK</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Physical maps show natural features of the Earth such as mountains, rivers, lakes, oceans, and
                        landforms. They often use color to indicate elevation, with greens for lower elevations and
                        browns or reds for higher elevations.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Topographic Maps</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: Topographic map of the Lake District</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Topographic maps show detailed information about terrain and landscape features using contour
                        lines to represent elevation. They are commonly used for hiking, camping, and other outdoor
                        activities.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Thematic Maps</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: Population density map of the UK</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Thematic maps focus on specific themes or subjects, such as climate, population density,
                        economic activities, or health statistics. They use colors, symbols, or patterns to represent
                        data related to the theme.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Road Maps</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: Road map of the UK</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Road maps show transportation networks, including highways, major and minor roads, railways, and
                        sometimes airports and seaports. They are designed for navigation and route planning.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Ordnance Survey Maps</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: OS map example</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Ordnance Survey maps are the official, definitive mapping of Great Britain. They come in various
                        scales and provide detailed information about both natural and man-made features, using
                        standardized symbols and colors.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Elements of a Map</h2>
                  <p className="text-gray-600 mb-4">
                    Most maps contain several standard elements that help users interpret the information presented:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Title</h3>
                      <p className="text-sm text-gray-600">
                        The title tells you what the map is about and what area it covers. It should be clear and
                        concise, giving you an immediate understanding of the map's purpose.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Legend/Key</h3>
                      <p className="text-sm text-gray-600">
                        The legend explains what the symbols, colors, and patterns on the map represent. It's like a
                        dictionary that helps you read and understand the map's language.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Scale</h3>
                      <p className="text-sm text-gray-600">
                        The scale shows the relationship between distances on the map and actual distances on the
                        Earth's surface. It can be shown as a ratio (1:50,000), a statement (1 cm = 0.5 km), or a
                        graphic bar.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Compass/North Arrow</h3>
                      <p className="text-sm text-gray-600">
                        The compass or north arrow indicates the orientation of the map, showing which direction is
                        north. This helps users determine other directions (south, east, west) and navigate using the
                        map.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Grid System</h3>
                      <p className="text-sm text-gray-600">
                        Many maps include a grid system of horizontal and vertical lines that create a network of
                        squares. These help users locate specific points on the map using coordinates.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Date</h3>
                      <p className="text-sm text-gray-600">
                        Maps often include the date they were created or last updated. This is important because
                        geographic features, boundaries, and other elements can change over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Map Symbols and Conventions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-4">
                        Maps use symbols to represent features that would be too large or detailed to show at the map's
                        scale. These symbols are explained in the map's legend or key.
                      </p>
                      <p className="text-gray-600 mb-4">
                        On Ordnance Survey maps, which are commonly used in the UK, symbols follow standard conventions:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Blue symbols represent water features (rivers, lakes, ponds)</li>
                        <li>Green areas show vegetation (forests, parks, golf courses)</li>
                        <li>Brown lines indicate contours (lines of equal elevation)</li>
                        <li>Black symbols show man-made features (buildings, boundaries)</li>
                        <li>Red symbols highlight important roads and features</li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: Common OS map symbols</p>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2">OS Map Symbols</h3>
                      <p className="text-sm text-gray-600">
                        Ordnance Survey maps use hundreds of different symbols to represent everything from churches and
                        schools to campsites and viewpoints. Learning these symbols is an essential part of map reading
                        in the UK.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Maps in Everyday Life</h2>
                  <p className="text-gray-600 mb-4">
                    Maps play an important role in our daily lives, often in ways we might not immediately recognize:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Navigation</h3>
                      <p className="text-sm text-gray-600">
                        From paper road maps to GPS and smartphone apps like Google Maps, we use maps to find our way
                        from one place to another, whether walking, cycling, driving, or using public transport.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Planning and Decision Making</h3>
                      <p className="text-sm text-gray-600">
                        Urban planners, businesses, and governments use maps to make decisions about where to build
                        roads, schools, hospitals, and other infrastructure. They help identify suitable locations based
                        on factors like population density and accessibility.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Understanding Our World</h3>
                      <p className="text-sm text-gray-600">
                        Maps help us understand spatial patterns and relationships, such as climate zones, population
                        distribution, or the spread of diseases. They allow us to visualize data in a way that makes
                        patterns and trends more apparent.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold text-blue-700 mb-4">Case Study: Mapping the London Underground</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-4">
                        The London Underground map is one of the most famous and influential maps in the world. Designed
                        by Harry Beck in 1931, it revolutionized the way transport maps are designed.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Before Beck's design, the Underground map tried to accurately represent the geographic locations
                        of stations and lines. This resulted in a cluttered and confusing map, as central stations were
                        crowded together while suburban stations were spread far apart.
                      </p>
                      <p className="text-gray-600">
                        Beck's innovation was to sacrifice geographic accuracy for clarity and simplicity. He
                        straightened the lines, evenly spaced the stations, and used only horizontal, vertical, and
                        45-degree diagonal lines. The result was a clear, easy-to-read diagram that has influenced
                        transit maps worldwide.
                      </p>
                    </div>
                    <div>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Image: London Underground Map</p>
                        </div>
                      </div>
                      <h3 className="font-bold mb-2">Key Lessons</h3>
                      <ul className="list-disc pl-6 text-gray-600 space-y-1">
                        <li>Maps don't always need to be geographically accurate to be useful</li>
                        <li>The purpose of a map should determine its design</li>
                        <li>Simplicity and clarity are often more important than detail</li>
                        <li>Good design can make complex information accessible to everyone</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Activity 1: Map Scavenger Hunt</h2>
                  <p className="text-gray-600 mb-4">
                    In this activity, you'll explore different types of maps and identify their key features.
                  </p>

                  <h3 className="font-bold mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Form groups of 2-3 students.</li>
                    <li>
                      Each group will receive a set of different maps (political, physical, topographic, thematic,
                      etc.).
                    </li>
                    <li>
                      Use the worksheet to identify and record the following for each map:
                      <ul className="list-disc pl-6 mt-1">
                        <li>Type of map</li>
                        <li>Purpose of the map</li>
                        <li>Key elements (title, scale, legend, etc.)</li>
                        <li>Three interesting features shown on the map</li>
                        <li>One way this map could be used in real life</li>
                      </ul>
                    </li>
                    <li>Share your findings with the class.</li>
                  </ol>

                  <Button variant="outline" className="text-blue-600">
                    Download Worksheet
                  </Button>
                </div>

                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Activity 2: Create Your Own Map</h2>
                  <p className="text-gray-600 mb-4">
                    In this activity, you'll apply what you've learned by creating your own map of a familiar area.
                  </p>

                  <h3 className="font-bold mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Choose an area to map (your classroom, school, local park, or neighborhood).</li>
                    <li>
                      Decide on the purpose of your map (e.g., to show facilities, to guide visitors, to highlight
                      interesting features).
                    </li>
                    <li>Sketch a rough draft of your map, including the main features you want to show.</li>
                    <li>
                      Create a final version of your map on A4 paper, including:
                      <ul className="list-disc pl-6 mt-1">
                        <li>A clear title</li>
                        <li>A scale</li>
                        <li>A north arrow</li>
                        <li>A legend explaining all symbols used</li>
                        <li>Appropriate colors and symbols</li>
                      </ul>
                    </li>
                    <li>Present your map to the class, explaining your choices and how your map could be used.</li>
                  </ol>

                  <Button variant="outline" className="text-blue-600">
                    Download Template
                  </Button>
                </div>

                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Activity 3: Map Symbol Bingo</h2>
                  <p className="text-gray-600 mb-4">
                    This fun game will help you learn and recognize common map symbols used on Ordnance Survey maps.
                  </p>

                  <h3 className="font-bold mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Each student receives a bingo card with different OS map symbols.</li>
                    <li>
                      The teacher will call out descriptions of map symbols (e.g., "church with a tower," "campsite,"
                      "public telephone").
                    </li>
                    <li>If you have the symbol on your card, mark it off.</li>
                    <li>The first student to complete a row, column, or diagonal and call "Bingo!" wins.</li>
                    <li>The winner must correctly identify each symbol they've marked to claim their prize.</li>
                  </ol>

                  <Button variant="outline" className="text-blue-600">
                    Download Bingo Cards
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Videos</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Introduction to Maps</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Video Placeholder</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        This video provides a comprehensive introduction to maps, their history, and their importance in
                        our understanding of the world.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2">Types of Maps Explained</h3>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500">Video Placeholder</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Learn about the different types of maps used in geography, from political and physical maps to
                        thematic and topographic maps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Readings and Handouts</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-bold">Introduction to Maps Handout</h3>
                        <p className="text-sm text-gray-600">A comprehensive guide to maps and their elements</p>
                      </div>
                      <Button variant="outline" className="text-blue-600">
                        Download PDF
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-bold">Ordnance Survey Symbol Guide</h3>
                        <p className="text-sm text-gray-600">A reference sheet for common OS map symbols</p>
                      </div>
                      <Button variant="outline" className="text-blue-600">
                        Download PDF
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-bold">Map Reading Skills</h3>
                        <p className="text-sm text-gray-600">Tips and techniques for effective map reading</p>
                      </div>
                      <Button variant="outline" className="text-blue-600">
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Interactive Resources</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-bold">Ordnance Survey MapZone</h3>
                        <p className="text-sm text-gray-600">Interactive games and activities to develop map skills</p>
                      </div>
                      <Button variant="outline" className="text-blue-600">
                        Visit Website
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-bold">National Geographic MapMaker Interactive</h3>
                        <p className="text-sm text-gray-600">Create and explore interactive maps of the world</p>
                      </div>
                      <Button variant="outline" className="text-blue-600">
                        Visit Website
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-bold">Google Earth</h3>
                        <p className="text-sm text-gray-600">
                          Explore the world through satellite imagery and 3D terrain
                        </p>
                      </div>
                      <Button variant="outline" className="text-blue-600">
                        Visit Website
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="assessment">
                <QuizComponent quiz={quiz} />
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex justify-between mt-8">
            <Link href="/units/maps-and-mapping">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Unit
              </Button>
            </Link>
            <Link href="/units/maps-and-mapping/lessons/grid-references">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                Next Lesson: Grid References
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 UK Geography Curriculum</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:underline">
                Terms of Use
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/accessibility" className="hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

