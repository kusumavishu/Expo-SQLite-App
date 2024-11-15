const dummyNewsData = [
  {
    category: "Crime",
    Newheadlines: "Local Man Arrested for Theft",
    newscontent:
      "A local man was apprehended late last night for stealing a car outside a convenience store.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Crime+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    category: "Politics",
    Newheadlines: "Senator Proposes New Education Bill",
    newscontent:
      "The senator introduced a bill aimed at reforming the education system to benefit underprivileged communities.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Politics+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    category: "World News",
    Newheadlines: "Peace Talks Begin in Middle East",
    newscontent:
      "Representatives from various countries gather to discuss potential solutions to ongoing conflicts.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=World+News+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    category: "Business & Finance",
    Newheadlines: "Stock Market Reaches All-Time High",
    newscontent:
      "The stock market hit record highs today as investors remain optimistic about the economy.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Business+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    category: "Technology",
    Newheadlines: "New Smartphone Model Released",
    newscontent:
      "The latest smartphone model features cutting-edge technology and improved battery life.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Tech+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    category: "Science",
    Newheadlines: "Breakthrough in Renewable Energy",
    newscontent:
      "Scientists announce a new method of harnessing solar energy more efficiently.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Science+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    category: "Health",
    Newheadlines: "New Study Reveals Health Benefits of Coffee",
    newscontent:
      "Research shows that moderate coffee consumption may lower the risk of certain diseases.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Health+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    category: "Entertainment",
    Newheadlines: "Award Show Sees Record Nominations",
    newscontent:
      "This year's award show features a diverse range of nominees across all categories.",
    newspic:
      "https://dummyimage.com/600x400/000/fff&text=Entertainment+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    category: "Sports",
    Newheadlines: "Local Team Wins Championship",
    newscontent:
      "In a thrilling game, the local team clinched the championship title after a nail-biting finish.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Sports+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    category: "Lifestyle",
    Newheadlines: "Top 10 Travel Destinations for 2023",
    newscontent:
      "Discover the must-visit places that should be on every traveler's list this year.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Lifestyle+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
  {
    category: "Education",
    Newheadlines: "New Curriculum Introduced in Schools",
    newscontent:
      "The education board has approved a new curriculum aimed at improving student engagement.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Education+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  },
  {
    category: "Weather",
    Newheadlines: "Severe Storms Expected This Weekend",
    newscontent:
      "Meteorologists warn of potential severe storms affecting the area this weekend.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Weather+Image+1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    category: "Crime",
    Newheadlines: "Police Investigate Local Burglary",
    newscontent:
      "Authorities are looking for suspects involved in a recent burglary at a local jewelry store.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Crime+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
  },
  {
    category: "Politics",
    Newheadlines: "New Poll Shows Rising Approval Ratings",
    newscontent:
      "A recent poll indicates an increase in approval ratings for the current administration.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Politics+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
  },
  {
    category: "World News",
    Newheadlines: "Global Leaders Unite for Climate Change",
    newscontent:
      "World leaders convene to discuss urgent action on climate change.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=World+News+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
  },
  {
    category: "Business & Finance",
    Newheadlines: "Tech Companies See Increased Revenue",
    newscontent:
      "Major tech companies report significant revenue growth in the last quarter.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Business+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
  },
  {
    category: "Technology",
    Newheadlines: "Breakthrough in AI Technology",
    newscontent:
      "Researchers unveil a new AI technology that could revolutionize various industries.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Tech+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
  },
  {
    category: "Science",
    Newheadlines: "Scientists Discover New Planet",
    newscontent:
      "A new planet has been discovered in a nearby solar system, raising questions about extraterrestrial life.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Science+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
  },
  {
    category: "Health",
    Newheadlines: "New Vaccine Shows Promise Against Virus",
    newscontent:
      "A newly developed vaccine has shown promising results in early clinical trials.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Health+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3",
  },
  {
    category: "Entertainment",
    Newheadlines: "Box Office Hits Break Records",
    newscontent:
      "Several films this summer have broken box office records, drawing in massive audiences.",
    newspic:
      "https://dummyimage.com/600x400/000/fff&text=Entertainment+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3",
  },
  {
    category: "Sports",
    Newheadlines: "Marathon Raises Funds for Charity",
    newscontent:
      "Participants in the annual marathon raised thousands for local charities.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Sports+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3",
  },
  {
    category: "Lifestyle",
    Newheadlines: "New Yoga Studio Opens Downtown",
    newscontent:
      "A new yoga studio offering a variety of classes has opened its doors in the heart of downtown.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Lifestyle+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3",
  },
  {
    category: "Education",
    Newheadlines: "Scholarship Program Announced",
    newscontent:
      "A new scholarship program aims to help students from low-income families access higher education.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Education+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3",
  },
  {
    category: "Weather",
    Newheadlines: "Heatwave Expected Next Week",
    newscontent:
      "Residents are advised to prepare for a heatwave that is expected to hit next week.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Weather+Image+2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3",
  },
  {
    category: "Crime",
    Newheadlines: "Gang Arrested After Series of Robberies",
    newscontent:
      "Authorities have arrested a gang believed to be behind a series of robberies across the city.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Crime+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3",
  },
  {
    category: "Politics",
    Newheadlines: "Debate Over New Healthcare Policy",
    newscontent:
      "Lawmakers are divided over a new healthcare policy that could impact millions.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Politics+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3",
  },
  {
    category: "World News",
    Newheadlines: "Natural Disaster Strikes Coastal Region",
    newscontent:
      "A powerful hurricane has made landfall, causing widespread damage in the coastal region.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=World+News+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3",
  },
  {
    category: "Business & Finance",
    Newheadlines: "New Startups Emergence in Tech Sector",
    newscontent:
      "Several startups are emerging in the tech sector, promising innovation and growth.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Business+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3",
  },
  {
    category: "Technology",
    Newheadlines: "Innovative Gadget Unveiled at Tech Expo",
    newscontent:
      "A groundbreaking gadget was unveiled at this year's tech expo, garnering much attention.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Tech+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3",
  },
  {
    category: "Science",
    Newheadlines: "New Discovery in Genetic Research",
    newscontent:
      "Scientists have made a significant breakthrough in genetic research that could lead to medical advances.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Science+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3",
  },
  {
    category: "Health",
    Newheadlines: "Fitness Trends to Watch This Year",
    newscontent:
      "Experts predict which fitness trends will dominate the health and wellness industry this year.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Health+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3",
  },
  {
    category: "Entertainment",
    Newheadlines: "New Album Releases to Look Forward To",
    newscontent:
      "Music fans are excited about upcoming album releases this month.",
    newspic:
      "https://dummyimage.com/600x400/000/fff&text=Entertainment+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3",
  },
  {
    category: "Sports",
    Newheadlines: "Olympics Schedule Announced",
    newscontent:
      "The official schedule for the upcoming Olympics has been released, creating excitement among fans.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Sports+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3",
  },
  {
    category: "Lifestyle",
    Newheadlines: "How to Live a Sustainable Lifestyle",
    newscontent:
      "Tips and tricks for adopting a sustainable lifestyle that benefits the environment.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Lifestyle+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-34.mp3",
  },
  {
    category: "Education",
    Newheadlines: "Online Learning: Pros and Cons",
    newscontent:
      "A look at the advantages and disadvantages of online learning in today's educational landscape.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Education+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3",
  },
  {
    category: "Weather",
    Newheadlines: "Cold Front Approaching the Region",
    newscontent:
      "Meteorologists warn of a cold front moving into the area, bringing lower temperatures.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Weather+Image+3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3",
  },
  {
    category: "Crime",
    Newheadlines: "Police Chief Addresses Community Concerns",
    newscontent:
      "The police chief held a press conference to address rising concerns about crime rates in the area.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Crime+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-37.mp3",
  },
  {
    category: "Politics",
    Newheadlines: "Election Candidates Prepare for Debates",
    newscontent:
      "Candidates are gearing up for the upcoming debates as election season heats up.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Politics+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-38.mp3",
  },
  {
    category: "World News",
    Newheadlines: "Humanitarian Aid Reaches Crisis Zone",
    newscontent:
      "Humanitarian aid has begun to arrive in a crisis zone affected by conflict and disaster.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=World+News+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-39.mp3",
  },
  {
    category: "Business & Finance",
    Newheadlines: "Market Analysts Predict Growth",
    newscontent:
      "Market analysts predict growth in various sectors as the economy shows signs of recovery.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Business+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-40.mp3",
  },
  {
    category: "Technology",
    Newheadlines: "Cybersecurity Measures Strengthened",
    newscontent:
      "Companies are increasing cybersecurity measures in response to rising threats.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Tech+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-41.mp3",
  },
  {
    category: "Science",
    Newheadlines: "Advances in Climate Science Research",
    newscontent:
      "Researchers are making advances in climate science that could impact global policies.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Science+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-42.mp3",
  },
  {
    category: "Health",
    Newheadlines: "Mental Health Awareness Month Approaches",
    newscontent:
      "Mental health awareness month is approaching, with events planned to promote mental wellness.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Health+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-43.mp3",
  },
  {
    category: "Entertainment",
    Newheadlines: "Film Festival Kicks Off This Weekend",
    newscontent:
      "The annual film festival will kick off this weekend, showcasing independent films.",
    newspic:
      "https://dummyimage.com/600x400/000/fff&text=Entertainment+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-44.mp3",
  },
  {
    category: "Sports",
    Newheadlines: "Local Team Wins Championship",
    newscontent:
      "The local sports team has won the championship, bringing pride to the community.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Sports+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-45.mp3",
  },
  {
    category: "Lifestyle",
    Newheadlines: "Healthy Cooking Tips for Families",
    newscontent:
      "Discover tips for healthy cooking that the whole family can enjoy.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Lifestyle+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-46.mp3",
  },
  {
    category: "Education",
    Newheadlines: "New Teaching Methods Gaining Popularity",
    newscontent:
      "Innovative teaching methods are gaining traction in classrooms across the country.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Education+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-47.mp3",
  },
  {
    category: "Weather",
    Newheadlines: "Storm Watch Issued for the Area",
    newscontent:
      "A storm watch has been issued as meteorologists monitor developing weather patterns.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Weather+Image+4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-48.mp3",
  },
  {
    category: "Crime",
    Newheadlines: "Community Meeting Addresses Safety",
    newscontent:
      "A community meeting was held to address safety concerns in the neighborhood.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Crime+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-49.mp3",
  },
  {
    category: "Politics",
    Newheadlines: "Policy Changes Proposed by Leaders",
    newscontent:
      "Leaders are proposing changes to existing policies that could affect various sectors.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Politics+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-50.mp3",
  },
  {
    category: "World News",
    Newheadlines: "Peace Talks Underway in Conflict Zone",
    newscontent:
      "Peace talks are taking place in a conflict zone, raising hopes for resolution.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=World+News+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-51.mp3",
  },
  {
    category: "Business & Finance",
    Newheadlines: "Economic Forecast Shows Improvement",
    newscontent:
      "The economic forecast shows improvement, indicating a potential recovery.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Business+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-52.mp3",
  },
  {
    category: "Technology",
    Newheadlines: "Latest Smartphone Features Revealed",
    newscontent:
      "The latest smartphone features were revealed at a tech conference, exciting consumers.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Tech+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-53.mp3",
  },
  {
    category: "Science",
    Newheadlines: "New Insights into Renewable Energy",
    newscontent:
      "Scientists have gained new insights into renewable energy technologies that could transform the industry.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Science+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-54.mp3",
  },
  {
    category: "Health",
    Newheadlines: "Health App Gains Popularity",
    newscontent:
      "A new health app has gained popularity, helping users track their wellness.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Health+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-55.mp3",
  },
  {
    category: "Entertainment",
    Newheadlines: "New TV Show Captures Audiences",
    newscontent:
      "A new TV show is capturing audiences with its compelling storyline.",
    newspic:
      "https://dummyimage.com/600x400/000/fff&text=Entertainment+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-56.mp3",
  },
  {
    category: "Sports",
    Newheadlines: "National Championship Game Preview",
    newscontent:
      "A preview of the upcoming national championship game is creating excitement among fans.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Sports+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-57.mp3",
  },
  {
    category: "Lifestyle",
    Newheadlines: "Guide to Minimalist Living",
    newscontent:
      "Explore the benefits of minimalist living and how to start your journey.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Lifestyle+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-58.mp3",
  },
  {
    category: "Education",
    Newheadlines: "The Future of Online Education",
    newscontent:
      "A discussion on the future of online education and its implications.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Education+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-59.mp3",
  },
  {
    category: "Weather",
    Newheadlines: "Flood Warnings Issued in Region",
    newscontent:
      "Flood warnings have been issued as heavy rains are expected in the region.",
    newspic: "https://dummyimage.com/600x400/000/fff&text=Weather+Image+5",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-60.mp3",
  },
];

export default dummyNewsData;
