// ============================================================
// data.js — TERRY MANN SITE CONTENT
//
// This is the only file you need to edit for content changes.
//
// HOW TO ADD AN ITEM:
//   Find the right array (ads, tv, orchestral, memes, etc.)
//   Copy the last item in the array, paste it below, update fields.
//   Order in the array = order on the page.
//
// HOW TO REORDER:
//   Cut and paste entire { } objects within an array.
//   The numbering on screen is auto-generated — no need to update it.
//
// HOW TO ADD A VIDEO:
//   youtubeId: the part after ?v= in the YouTube URL
//   e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ → "dQw4w9WgXcQ"
//
// HOW TO ADD A LINKED IMAGE (no video):
//   Use type: "link-image" with image and href fields.
//
// HOW TO ADD A STILL IMAGE (coming soon / no video):
//   Use type: "image" with an image field.
//
// HOW TO ADD A TEXT-ONLY ITEM (no visual):
//   Omit the type field entirely (or set type: "text").
// ============================================================

const SITE_DATA = {

  // ----------------------------------------------------------
  // BIO
  // ----------------------------------------------------------
  bio: {
    photo: "images/terry-2025.jpg",
    photoAlt: "Terry Mann – Composer",
    paragraphs: [
      `🎵 Terry Mann is a composer based in Melbourne, Australia, with a focus on music for advertising.`,
      `His compositions have featured in 50+ ads, 50+ TV eps, and his personal releases have been synced in global Netflix, HBO, BBC, ABC, and Showtime series'.`,
      `Terry is a member of the <a href="https://agsc.org.au/" target="_blank" rel="noopener">Australian Guild Of Screen Composers</a>, and the founder of <a href="https://www.melbournesocialchoir.com" target="_blank" rel="noopener">Melbourne Social Choir</a>. His work has been recognised by The APRA Screen Music Awards, The ARIA Music Awards and The Logies.`,
      `For all enquiries, get in touch at <a href="mailto:hi@terry-mann.com">hi@terry-mann.com</a>`
    ]
  },

  // ----------------------------------------------------------
  // REEL (main showreel video at top of page)
  // Replace youtubeId with your actual reel video ID
  // ----------------------------------------------------------
  reel: {
    youtubeId: "REEL_VIDEO_ID_HERE",
    label: "Terry Mann – Composer Reel"
  },

  // ----------------------------------------------------------
  // ADS
  // Each item: title, desc, credit, then one of:
  //   youtubeId (video embed)
  //   type:"link-image", image, href (clickable image → external link)
  //   type:"text" (no visual)
  // ----------------------------------------------------------
  ads: [
    {
      title: "Hershey's (USA)",
      desc: "Psychedelic electro-pop composition for Hershey's Classic Reimagined USA TVC commercial.",
      credit: "Agency: Sizzer (Amsterdam)",
      youtubeId: "YOUTUBE_ID_HERSHEYS"
    },
    {
      title: "Mazda",
      desc: "Funky jam for Mazda retail TV Commercials. Music customised for different vehicle types and audiences.",
      credit: "Agency: GDJ",
      youtubeId: "YOUTUBE_ID_MAZDA"
    },
    {
      title: "Tommy Hilfiger (Global)",
      desc: "Chill, summery hip-hop composition for Tommy Hilfiger Pre-Fall campaign, shot in Miami.",
      credit: "Music Supervision: Friday (UK)",
      youtubeId: "YOUTUBE_ID_TOMMY"
    },
    {
      title: "Four'N Twenty",
      desc: "A reboot of the famous 'Oh What A Lovely Pie' jingle, starring Browny, Ben Simmons and Tayla Harris.",
      credit: "Agency: BWM Dentsu",
      youtubeId: "YOUTUBE_ID_FOURNTWENTY"
    },
    {
      title: "Apple (Global)",
      desc: "'Founder & CEO – Golden' used in Apple's product launch event to introduce the Apple Watch Series 7.",
      credit: "Label: Field Supply",
      youtubeId: "YOUTUBE_ID_APPLE"
    },
    {
      title: "Vegemite",
      desc: "Reimagination of Vegemite's 1950s jingle 'Happy Little Vegemites' for a new generation.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_VEGEMITE"
    },
    {
      title: "Swisse",
      desc: "Driving, up-tempo composition for Swisse 'Go With Your Gut' brand campaign, featuring Chris Hemsworth.",
      credit: "Agency: Noisy Beast",
      youtubeId: "YOUTUBE_ID_SWISSE"
    },
    {
      title: "Ford",
      desc: "Cinematic rock composition for Ford F150 'Something Big Is Coming' campaign.",
      credit: "Agency: Clemenger BBDO",
      youtubeId: "YOUTUBE_ID_FORD"
    },
    {
      title: "Seafolly",
      desc: "Trap/pop song fusing attitude, fun, and freedom for Seafolly's 'Own Your Folly' campaign.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_SEAFOLLY"
    },
    {
      title: "Repco",
      desc: "Suite of pieces including rock 'n roll, choral drama and cinematic percussion for Repco 'Gets You Going' brand campaign.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_REPCO"
    },
    {
      title: "Rebel",
      desc: "Emotive electronic and vocal piece for Rebel's 'Sport Is Calling' campaign films, centred around the true stories of inspiring athletes Brendan Cullen and Sinead Diver.",
      credit: "Agency: The Monkeys",
      youtubeId: "YOUTUBE_ID_REBEL1"
    },
    {
      title: "Thrifty",
      desc: "70s inspired rock song with cinematic twists, leading to a new vocal sting for the brand.",
      credit: "Agency: Mustard, Betty Wants In",
      youtubeId: "YOUTUBE_ID_THRIFTY"
    },
    {
      title: "Sorbent",
      desc: "A reworking of Sorbent's classic brass band jingle for the 'Australia's Favourite Down Under' campaign.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_SORBENT"
    },
    {
      title: "Chiko",
      desc: "Retro style jingle for Chiko. Recipient of 4 AWARD Award Pencils including 'Best Use of Music'.",
      credit: "Agency: Cummins&Partners",
      youtubeId: "YOUTUBE_ID_CHIKO"
    },
    {
      title: "SsangYong",
      desc: "Orchestral/electronic piece for SsangYong brand campaign.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_SSANGYONG"
    },
    {
      title: "Vegemite – Tastes Like Australia",
      desc: "Music and lyrics for Vegemite's 'Tastes Like Australia' jingle and subsequent campaigns.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_VEGEMITE2"
    },
    {
      title: "Matildas / Sport Australia",
      desc: "Theme song and scoring suite for The Matilda's 'Dream Team' podcast – a mix of AI, children's storytelling and live updates from the Paris 2024 World Cup.",
      credit: "Agency: Ogilvy",
      youtubeId: "YOUTUBE_ID_MATILDAS"
    },
    {
      title: "Movember (Global)",
      desc: "Orchestral / modern urban composition for Movember 'More than a month' global campaign.",
      credit: "Agency: Sunday Gravy",
      youtubeId: "YOUTUBE_ID_MOVEMBER"
    },
    {
      title: "Bega Simply Nuts",
      desc: "A charity style power ballad, sung by real Aussie peanut farmers in honour of their home grown peanuts.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_BEGA"
    },
    {
      title: "Greatopia",
      desc: "A full scale national anthem for the fictitious land of Greatopia; aka The Great Ocean Road and surrounds.",
      credit: "Agency: Safari Global",
      youtubeId: "YOUTUBE_ID_GREATOPIA"
    },
    {
      title: "Vision Super",
      desc: "Quirky / magical orchestral composition for Vision Super brand campaign.",
      credit: "Agency: AJF Partnership",
      youtubeId: "YOUTUBE_ID_VISIONSUPER"
    },
    {
      title: "Porters Paints",
      desc: "Heartfelt, minimal piano composition with strings and brass for Porter's Paints 'Paint with Heart and Soul' brand campaign.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_PORTERS"
    },
    {
      title: "Mountain Goat",
      desc: "Aggressive rock track for Mountain Goat's 'You Can't Tame a Goat' campaign.",
      credit: "Agency: The Monkeys",
      youtubeId: "YOUTUBE_ID_MOUNTAINGOAT"
    },
    {
      title: "Our Watch",
      desc: "Original song for Our Watch's behavioral change campaign preventing violence against women.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_OURWATCH"
    },
    {
      title: "Amazon Prime",
      desc: "Quirky orchestral composition incorporating an existing brand melody for Amazon Prime 'One Day' campaign.",
      credit: "Music Supervision: Massive Music",
      youtubeId: "YOUTUBE_ID_AMAZON"
    },
    {
      title: "Blundstone",
      desc: "Earthy orchestral/percussive composition with a bit of emotional scale for Blundstone's 'Well Worn' brand campaign.",
      credit: "Agency: Thinkerbell / Hotel Bell",
      youtubeId: "YOUTUBE_ID_BLUNDSTONE"
    },
    {
      title: "Swisse – Creatures of Isolation",
      desc: "Playful jingle for Swisse 'Creatures of Isolation' campaign.",
      credit: "Agency: Noisy Beast",
      youtubeId: "YOUTUBE_ID_SWISSE2"
    },
    {
      title: "Mable",
      desc: "Uplifting pop/soul composition for Mable's 'My Kind of Independence' campaign.",
      credit: "Agency: Bastion, Big Sync Music",
      youtubeId: "YOUTUBE_ID_MABLE"
    },
    {
      title: "Mazda – Orchestral",
      desc: "Cinematic orchestral/percussive composition for Mazda stock clearance.",
      credit: "Agency: GDJ",
      youtubeId: "YOUTUBE_ID_MAZDA2"
    },
    {
      title: "Rebel – Exclusive Range",
      desc: "Glitchy, fat trap jams for Rebel Sport 'Exclusive Range' retail campaign.",
      credit: "Agency: The Monkeys",
      youtubeId: "YOUTUBE_ID_REBEL2"
    },
    {
      title: "Jayco",
      desc: "A mix of classic Aussie jingle and modern folk-pop songwriting for Jayco's national ad campaign.",
      credit: "Agency: Sunday Gravy",
      youtubeId: "YOUTUBE_ID_JAYCO"
    },
    {
      title: "CSR Sugar",
      desc: "Dixieland jazz composition for CSR's 'Be Someone's Favourite Chef' campaign.",
      credit: "Agency: Cummins&Partners",
      youtubeId: "YOUTUBE_ID_CSR"
    },
    {
      title: "Journey Beyond",
      desc: "Musical composition for Journey Beyond TVC, integrating the gentle rhythm and SFX of a train into the piece.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_JOURNEYBEYOND"
    },
    {
      title: "Guide Dogs",
      desc: "Immersive ambient composition for Guide Dogs 'More Than Just Guide Dogs' campaign.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_GUIDEDOGS"
    },
    {
      title: "The Funderdome",
      desc: "Funky-soul theme song for The Funderdome, a brand new nostalgia-drenched arcade, bar, mini-golf and events space.",
      credit: "Agency: The Thought Police",
      youtubeId: "YOUTUBE_ID_FUNDERDOME"
    },
    {
      title: "Carsales",
      desc: "Caribbean influenced dance/hip hop composition for Carsales x DJ Bravo campaign.",
      credit: "Agency: CHE Proximity, Sunday Gravy",
      youtubeId: "YOUTUBE_ID_CARSALES"
    },
    {
      title: "Royal Caribbean",
      desc: "Uplifting indie-rock song for Royal Caribbean 'Calling All Seekers' brand campaign.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_ROYALCARIBBEAN"
    },
    {
      title: "Vic Gov – Corona Virus",
      desc: "Announcement sting and voiceovers for TV, radio, public transport and supermarkets, informing Victorians about Corona Virus.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_VICGOV"
    },
    {
      title: "Nexxus Hair Care (US)",
      desc: "Modern high-fashion electronic track for Nexxus #TheFreshFlexx campaign.",
      credit: "Music Licensing: Made by Ikigai",
      youtubeId: "YOUTUBE_ID_NEXXUS"
    },
    {
      title: "H&H Group",
      desc: "Piano and orchestral composition for H&H Group 'For the love of humans' brand video.",
      credit: "Agency: Sunday Gravy",
      youtubeId: "YOUTUBE_ID_HH"
    },
    {
      title: "Mountain Goat – 13GOAT",
      desc: "Music, sound design, and VO recording of 13GOAT novelty call centre. 189 options / 56 storylines / 2 hours of audio.",
      credit: "Agency: The Monkeys",
      type: "link-image",
      image: "images/13goat.jpg",
      href: "https://mumbrella.com.au/mountain-goat-launches-new-goat-craft-beer-by-creating-call-centre-13goat-568594"
    },
    {
      title: "Visit Victoria",
      desc: "Up tempo bossa nova reimagination of existing Visit Victoria campaign melody (by Bullant) for King Valley TVC.",
      credit: "Agency: AJF Partnership",
      youtubeId: "YOUTUBE_ID_VISITVICTORIA"
    },
    {
      title: "VicHealth",
      desc: "Piano and strings composition for VicHealth #ChangeOurGame campaign video.",
      credit: "Agency: Cummins&Partners",
      youtubeId: "YOUTUBE_ID_VICHEALTH"
    },
    {
      title: "Music Victoria",
      desc: "Genre-spanning song for Music Victoria Membership Drive video/radio, featuring electro, soul, folk, country and metal.",
      credit: "Produced & Directed by Laura Imbruglia",
      youtubeId: "YOUTUBE_ID_MUSICVICTORIA"
    },
    {
      title: "Gas Tycoon",
      desc: "Mid-century style jingle for Gas Tycoon parody board game.",
      credit: "Agency: Art Disrupt",
      youtubeId: "YOUTUBE_ID_GASTYCOON"
    },
    {
      title: "Collarts",
      desc: "Dreamy hip-hop composition for Collarts 'It's Only A Dream Til It's Not' campaign.",
      credit: "Agency: Sunday Gravy",
      youtubeId: "YOUTUBE_ID_COLLARTS"
    },
    {
      title: "B&D Doors",
      desc: "Epic choir, orchestral and jungle drum composition for B&D Doors TVC.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_BDDOORS"
    },
    {
      title: "Aussie Broadband",
      desc: "Brand sting for Aussie Broadband 'Bloody Good Broadband'.",
      credit: "Agency: Thinkerbell",
      youtubeId: "YOUTUBE_ID_AUSSIEBROADBAND"
    },
    {
      title: "NAB",
      desc: "Musical direction for NAB 'Hidden Abilities' TV commercial.",
      credit: "Agency: Clemenger BBDO",
      youtubeId: "YOUTUBE_ID_NAB"
    },
    {
      title: "Funlab",
      desc: "Dorky 90s jingle for Funlabs AI Generated 'Office Party From Hell' ad.",
      credit: "Agency: DDB Melbourne",
      youtubeId: "YOUTUBE_ID_FUNLAB"
    },
    {
      title: "Eric Insurance",
      desc: "Smooth 80s track for Eric Insurance 'We're Fluent in Motorcycle' campaign.",
      credit: "Agency: Magnetiser",
      youtubeId: "YOUTUBE_ID_ERIC"
    },
    {
      title: "Battle Cats (Japan)",
      desc: "Instrumental desert rock and thumping stadium house music for 'Battle Cats' anniversary teaser trailer – a mobile game that has just reached 100 million downloads.",
      credit: "Music Supervision: made by ikigai",
      youtubeId: "YOUTUBE_ID_BATTLECATS"
    }
  ],

  // ----------------------------------------------------------
  // TV & FILM
  // ----------------------------------------------------------
  tv: [
    {
      title: "ABC: The Wonder Gang",
      desc: "Theme song, stings and 32 x episode scores over 2 seasons for ABCKids' The Wonder Gang.",
      credit: '<a href="https://iview.abc.net.au/show/wonder-gang" target="_blank" rel="noopener">iview.abc.net.au/show/wonder-gang</a>',
      youtubeId: "YOUTUBE_ID_WONDERGANG"
    },
    {
      title: "ABC: Reef School",
      desc: "22 x episode scores over 2 seasons for ABCKids' Reef School.",
      credit: '<a href="https://iview.abc.net.au/show/reef-school" target="_blank" rel="noopener">iview.abc.net.au/show/reef-school</a>',
      youtubeId: "YOUTUBE_ID_REEFSCHOOL"
    },
    {
      title: "ABC: Giggle & Hoot",
      desc: "3 x songs for the ABCKids TV show and ARIA nominated albums. APRA/AMCOS nomination for Best Original Song Composed For The Screen.",
      credit: '<a href="https://iview.abc.net.au/show/giggle-and-hoot" target="_blank" rel="noopener">iview.abc.net.au/show/giggle-and-hoot</a>',
      youtubeId: "YOUTUBE_ID_GIGGLEHOOT"
    },
    {
      title: "Netflix: Never Have I Ever",
      desc: "'Orlean – Faster' featured in series 2 of Netflix's coming of age dramedy, Never Have I Ever.",
      credit: "Record Label: Hotel Motel"
    },
    {
      title: "HBO: The Sex Lives of College Girls",
      desc: "'Orlean – Horizons' used in S01E01 of Mindy Kaling's coming of age comedy, The Sex Lives of College Girls.",
      credit: "Record Label: Hotel Motel"
    },
    {
      title: "HBO: Search Party",
      desc: "3 x Orlean songs used in series 4 and 5 of HBO Max's dark comedy thriller, Search Party.",
      credit: "Record Label: Hotel Motel"
    },
    {
      title: "Showtime: The L Word",
      desc: "'Founder & CEO – Do You Dare (feat. Belle Doron)' featured in S03E09 of Showtime's The L Word: Generation Q.",
      credit: "Record Label: Field Supply"
    },
    {
      title: "BBC: Waterloo Road",
      desc: "'Founder & CEO – Golden' featured in S13E05 of BBC's long running drama series Waterloo Road.",
      credit: "Record Label: Field Supply"
    },
    {
      title: "Bondi Rescue",
      desc: "'Coach Bombay – Beamer' featured in Channel 10/Nat Geo's Bondi Rescue."
    },
    {
      title: "The Project",
      desc: "Dozens of pieces used in segments from Channel 10's The Project over the past 8 years.",
      type: "link-image",
      image: "images/the-project.jpg",
      href: "https://10play.com.au/theproject"
    },
    {
      title: "ABC: New Years Eve Early Night Show",
      desc: "Various scoring for ABC's New Years Eve Early Night Show, including sketches, game shows and live crosses.",
      type: "link-image",
      image: "images/abc-nye.jpg",
      href: "https://iview.abc.net.au/show/nye2021-the-early-night-show"
    },
    {
      title: "Winners & Losers",
      desc: "'Coach Bombay – Cool Thing (feat. Elle Young)' featured in Channel 7's Winners & Losers."
    },
    {
      title: "ABC: Nay Nay",
      desc: "4 x songs for the ABC Kids series and album 'Hey Hey, Let's Play' by Nay Nay.",
      type: "link-image",
      image: "images/nay-nay.jpg",
      href: "https://www.youtube.com/@NayNay"
    },
    {
      title: "Amateur Hour",
      desc: "Skit and music, co-written with Laura Imbruglia for her web-series Amateur Hour, featuring Tim Rogers and Ella Hooper."
    },
    {
      title: "Hailing Cesar (documentary)",
      desc: "Composition for the feature length documentary about Mexican-American civil rights activist Cesar Chavez, as told by his grandson.",
      type: "link-image",
      image: "images/hailing-cesar.jpg",
      href: "https://www.hailingcesar.com"
    },
    {
      title: "Ghost Turd (short film)",
      desc: "Music for the trailer and end credits of short film 'Ghost Turd' by Magnetiser.",
      type: "link-image",
      image: "images/ghost-turd.jpg",
      href: "https://vimeo.com/274830633"
    }
  ],

  // ----------------------------------------------------------
  // ORCHESTRAL
  // Items with youtubeId get a video player.
  // Items with type:"image" get a still photo (coming soon).
  // credits field is optional extended credits block.
  // ----------------------------------------------------------
  orchestral: [
    {
      title: "The Levitation",
      desc: "Composed by Terry Mann, Performed by The Czech National Symphony Orchestra. Recorded at CNSO Studio, Czech Republic.",
      credits: "Executive Producer: Rita Tulha. Music Producer: Alex Palmer. Conductor: Vladimir Martinka. Sound Engineer: Cenda Kotzmann. Pro Tools Operator: Martin Maslowski. Violin overdubs: Damian Bolotin (Buenos Aires, Argentina). Videographers: Karel Rypl, Krystof Kousal. Video edit & Mix/Master: Terry Mann.",
      youtubeId: "YOUTUBE_ID_LEVITATION"
    },
    {
      title: "The Jaunt",
      desc: "Composed by Terry Mann, Performed by The Czech National Symphony Orchestra. Recorded at CNSO Studio, Czech Republic.",
      credits: "Executive Producer: Rita Tulha. Music Producer: Alex Palmer. Conductor: Jan Chalupecký. Sound Engineer: Cenda Kotzmann. Pro Tools Operator: Martin Maslowski. Violin overdubs: Damian Bolotin (Buenos Aires, Argentina). Videographers: fovi prod. Video edit & Mix/Master: Terry Mann.",
      youtubeId: "YOUTUBE_ID_JAUNT"
    },
    {
      title: "The Prance",
      comingSoon: true,
      desc: "Composed by Terry Mann, Performed by The Budapest Symphony Orchestra. Recorded at Tom Tom Studio D (Hubay Hall), Budapest, Hungary.",
      credits: "Executive Producer: Rita Tulha. Music Producer: Alex Palmer. Conductor: Daniel Erdélyi. Sound Engineer: Péter Barabás. Video edit & Mix/Master: Terry Mann.",
      type: "image",
      image: "images/orchestral/the-prance.jpg"
    },
    {
      title: "The Hunt",
      comingSoon: true,
      desc: "Composed by Terry Mann, Performed by The Budapest Symphony Orchestra. Recorded at Tom Tom Studio D (Hubay Hall), Budapest, Hungary.",
      credits: "Executive Producer: Rita Tulha. Music Producer: Afonso Teles. Conductor: Abél Tompa. Sound Engineers: Gergő Láposi and Péter Barabás. Video edit & Mix/Master: Terry Mann.",
      type: "image",
      image: "images/orchestral/the-hunt.jpg"
    },
    {
      title: "The Frolic",
      comingSoon: true,
      desc: "Composed by Terry Mann, Performed by The Budapest Symphony Orchestra. Recorded at Tom Tom Studio D (Hubay Hall), Budapest, Hungary.",
      credits: "Executive Producer: Rita Tulha. Music Producer: Afonso Teles. Conductor: Abél Tompa. Sound Engineers: Gergő Láposi and Péter Barabás. Video edit & Mix/Master: Terry Mann.",
      type: "image",
      image: "images/orchestral/the-frolic.jpg"
    },
    {
      title: "The Wander",
      comingSoon: true,
      desc: "Composed by Terry Mann, Performed by The Budapest Symphony Orchestra. Recorded at Tom Tom Studio D (Hubay Hall), Budapest, Hungary.",
      credits: "Executive Producer: Rita Tulha. Music Producer: Afonso Teles. Conductor: Abél Tompa. Sound Engineers: Gergő Láposi and Péter Barabás. Video edit & Mix/Master: Terry Mann.",
      type: "image",
      image: "images/orchestral/the-wander.jpg"
    }
  ],

  // ----------------------------------------------------------
  // RELEASES
  // embed field: paste the full iframe HTML from Bandcamp /
  // Spotify / SoundCloud as a string (use backtick template).
  // Leave embed as null if not yet added.
  // ----------------------------------------------------------
  releases: [
    {
      title: "Founder & CEO – XL EP",
      year: "2023",
      meta: "Released by Field Supply Records",
      guests: "Guest vocals by Belle Doron, Kate Martin, Karen T, Nika Rose.",
      embed: null
    },
    {
      title: "Orlean – Orlean",
      year: "2018 EP",
      meta: "Released by Hotel Motel Records",
      guests: "All vocals by Bella Li",
      embed: null
    },
    {
      title: "Coach Bombay – Orinoco",
      year: "2016 covers EP",
      meta: "Released by GAGA",
      guests: "Guest vocals by Hugh Gurney",
      embed: null
    },
    {
      title: "Coach Bombay – Sunshine",
      year: "2015 album",
      meta: "Released by GAGA",
      guests: "Guest vocals by Luci Hodgson, Elle Young",
      embed: null
    },
    {
      title: "Coach Bombay – Pops",
      year: "2012 album",
      meta: "Released by GAGA",
      guests: "Guest vocals by Elle Young",
      embed: null
    },
    {
      title: "Coach Bombay – One Thousand",
      year: "2010 EP",
      meta: "Released by GAGA",
      guests: "Guest vocals by Luci Hodgson",
      embed: null
    },
    {
      title: "Pretty Strangers – Holloway",
      year: "2011 EP",
      meta: "Band: Ed Sharp-Paul, Terry Mann, Don Cameron, Matthew O'Brien, Brendan Ansell",
      guests: "Recorded by Jimi Wyatt, Ginger Studios",
      embed: `<iframe style="border:0;width:100%;height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=BANDCAMP_ID_HOLLOWAY/size=large/bgcol=f5f0e8/linkcol=5c4a2a/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://prettystrangers1.bandcamp.com/album/holloway">Holloway by Pretty Strangers</a></iframe>`
    },
    {
      title: "Pretty Strangers – Pretty Strangers",
      year: "2010 EP",
      meta: "Band: Ed Sharp-Paul, Terry Mann, Don Cameron, Matthew O'Brien, Brendan Ansell",
      guests: "Recorded by Jimi Wyatt, Ginger Studios",
      embed: `<iframe style="border:0;width:100%;height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=BANDCAMP_ID_PS/size=large/bgcol=f5f0e8/linkcol=5c4a2a/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://prettystrangers1.bandcamp.com/album/pretty-strangers">Pretty Strangers by Pretty Strangers</a></iframe>`
    },
    {
      title: "Just Desserts – Just Desserts",
      year: "2009 album",
      meta: "All vocals by Tahireh Thampi",
      guests: "Additional drums by Daniel Mizzi. Violin by Brendan Ansell",
      embed: `<iframe style="border:0;width:100%;height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=BANDCAMP_ID_JD/size=large/bgcol=ede7d9/linkcol=5c4a2a/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://justdesserts.bandcamp.com/album/just-desserts">Just Desserts by Just Desserts</a></iframe>`
    }
  ],

  // ----------------------------------------------------------
  // LIBRARIES
  // embed: null until you're ready to add a player
  // ----------------------------------------------------------
  libraries: [
    {
      heading: "Ad Tracks",
      desc: "Does your ad need a track that works? My ever-expanding library is designed for just that. These can be licensed as is or rescored to picture.",
      embed: null
    },
    {
      heading: "Ad Scores",
      desc: "If your ad has a story to tell, my library of scores could be just the ticket. These can be licensed as is or rescored to picture.",
      embed: null
    },
    {
      heading: "Classical Reworks",
      desc: "Public domain pieces, rescored into ad-ready soundtracks, with a unique alternate version of each. Extended and cut down versions can be created as required.",
      embed: null
    },
    {
      heading: "Instrumental Reworks",
      desc: "Instrumental remakes of famous songs. It's great practice and I learn a lot from the process. If you've licensed an existing song and need a cover, get in touch.",
      embed: null
    }
  ],

  // ----------------------------------------------------------
  // MEMES
  // ----------------------------------------------------------
  memes: [
    {
      title: "The National Anthem of Straya",
      desc: "Outkast's 'Hey Ya' reworked into the unofficial national anthem of 'Straya' (a.k.a Australia). 10 mil Facebook views, 7 mil YouTube views, unmeasurable TikTok usages. Press from every major Australian news organisation (ABC, 7, 9, 10, The Age, SMH, 3AW, blogs, etc).",
      youtubeId: "YOUTUBE_ID_STRAYA"
    },
    {
      title: "Totally Wild Rave Remix",
      desc: "Remember how hectic the 'Totally Wild' theme song was? This rave remix takes it to its logical conclusion. Footage from VHS Thunderdome '97, Sportpaleis Antwerp. 400k Facebook views, 120k YouTube views.",
      youtubeId: "YOUTUBE_ID_TOTALLYWILD"
    },
    {
      title: "Paul McCartney & Rick Rubin listen to Smash Mouth stems",
      desc: "Footage from Paul McCartney 3, 2, 1. Audio from Smash Mouth All Star stems. 600k YouTube views. Shared by HuffPost USA and Smash Mouth themselves. No word from Paul or Rick though.",
      youtubeId: "YOUTUBE_ID_PAULMCCARTNEY"
    },
    {
      title: "Arya – A Girl Has No Name",
      desc: "Parody mashup of America's soft-rock masterpiece 'A Horse With No Name' and Arya Stark's 'A Girl has No Name' story in Game of Thrones series 5–6. Never took off, but some people think it's the best thing I ever made.",
      youtubeId: "YOUTUBE_ID_ARYA"
    },
    {
      title: "Lorde – Royals (gluten free version)",
      desc: "A twist on Royals by Lorde, dedicated to anyone with fructose malabsorption, lactose intolerance or celiac disease. 245K YouTube views. Shared by HuffPost and a whole bunch of food blogs.",
      youtubeId: "YOUTUBE_ID_LORDEGLUTENFREE"
    },
    {
      title: "Who is after you, Mr. Assange? feat. Lady Gaga",
      desc: "Parody song and video. Footage from the 2016 documentary Risk by filmmaker Laura Poitras. Absolutely not viral. Very silly indeed.",
      youtubeId: "YOUTUBE_ID_ASSANGE"
    }
  ],

  // ----------------------------------------------------------
  // STUDIO
  // To add/edit a spec category: update heading and text.
  // To reorder: move the entire { } object.
  // ----------------------------------------------------------
  studio: {
    photo: "images/studio.jpg",
    photoAlt: "Terry Mann's home studio",
    specs: [
      {
        heading: "Interfaces",
        text: "Universal Audio Apollo x16, Universal Audio Apollo x6"
      },
      {
        heading: "Hardware",
        text: "Rupert Neve Designs 5059 Summing Mixer, Rupert Neve Designs Portico II Master Bus Processor, Dangerous Convert-AD+, Neve 1073DPX Stereo Preamp & EQ, Empirical Labs EL8-X Distressor Stereo Pair, Roland RE-201 Space Echo, Neumann KH-150 studio monitors, JLM Audio Headphone Amp, Monogram controllers."
      },
      {
        heading: "Microphones",
        text: "Manley Reference Gold Tube Microphone, Neumann TLM102 Large Diaphragm Condenser Microphone, Shure 55S Vintage Microphone (1958)."
      },
      {
        heading: "Synths & Organs",
        text: "Moog Prodigy (1979), Sequential Circuits Pro One (1982), Roland Juno 106 (1985), Roland VP-330 Vocoder Plus (1980), Roland SH-2000 (1974), Korg Polysix (1982), Yamaha DX7s (1988), Vox Corinthian Organ (1969), Farfisa Compact Duo Organ (1966), Roland TR-707 Drum Machine (1986), Roland TR-8S Drum Machine, Kawai VPC1 88-Key Virtual Piano MIDI Controller."
      },
      {
        heading: "Guitars & Basses",
        text: "Fender Jaguar, Gibson SG, Epiphone Casino Coupe, Founder Les Paul (1971), Harley Benton RB-612, Hofner Parlour Guitar (1964), Maton SRS70C, Sigma 000M-15E, Katoh KF Flamenco, Fender Jazz Bass, Hofner Contemporary Cavern Violin Bass."
      },
      {
        heading: "Plugins",
        text: "Fabfilter complete, large Universal Audio collection, Soundtoys complete, Black Rooster complete, Baby Audio complete, Melodyne, Antares Autotune, and others from Softtube, Brainworx and Klanghelm."
      },
      {
        heading: "Virtual Instruments",
        text: "Spitfire Symphony Orchestra complete (+ dozens of other Spitfire libraries), Arturia complete, Output complete, Native Instruments Komplete, Teletone Audio complete, Superior Drummer 3, Mojo Horns 2, Samples From Mars complete, Goran Grooves complete, and others from Circle Drums, Sonuscore, Pianobook, Soundiron, Soundspot and 8DIO."
      },
      {
        heading: "Paid Subscriptions",
        text: "Splice, Soundly, Musiversal, Kits.AI, Suno, lalals, lalal.ai."
      }
    ]
  },

  // ----------------------------------------------------------
  // TESTIMONIALS
  // photo: path to image in /images/testimonials/
  // ----------------------------------------------------------
  testimonials: [
    {
      quote: "Terry somehow looked beyond my jumble of references, directly into my brain and then musically articulated exactly what I was hoping for. He's so bloody good that I didn't even get Chat GPT to write this testimonial. Took our brief and dialled it up to 11.",
      name: "Max Greenstein",
      title: "Commercial Director",
      photo: "images/testimonials/max.jpg"
    },
    {
      quote: "I've always referred to Terry Mann affectionately as 'one-take Terry'. Everything I've ever briefed him on, he's absolutely nailed in one go. He's a rockstar of a fellow (without the ego), and easily my favourite composer to work with. Hire him. Your ears won't regret it.",
      name: "Adam Slater",
      title: "Creative Director, Droga5",
      photo: "images/testimonials/adam.jpg"
    },
    {
      quote: "Simply put, there's no safer hands when it comes to brief interpretation, collaboration & execution. Terry is a true creative partner who has (quite literally) elevated every brief we've ever had the pleasure of working on together. Could not recommend enough.",
      name: "Jess Evernden",
      title: "Senior Producer, Freelance",
      photo: "images/testimonials/jess.png"
    },
    {
      quote: "Terry's an absolute talent. An amazing composer, musician & songwriter, all synced up by a hugely talented creative brain that manages to interpret even the most abstract brief into banging melodic perfection. Cannot recommend Terry enough.",
      name: "Giles Watson",
      title: "Deputy Executive Creative Director, DDB",
      photo: "images/testimonials/giles.png"
    },
    {
      quote: "It goes without saying that the Mann is a musical master. I knew where I wanted the idea to go, and within 24 hours, Terry turned my scratchings on a page into a lyrical symphony.",
      name: "Sara Oteri",
      title: "Executive Creative Director, 303 Mullen Lowe",
      photo: "images/testimonials/sara.jpg"
    },
    {
      quote: "On Reef School, Terry's lighthearted, energetic sensibility and comic musical beats really support and enhance the underwater world that the quirky little characters live in. It really added another dimension!",
      name: "Karin Kitzhardinge",
      title: "Series Producer, ABC",
      photo: "images/testimonials/karin.jpg"
    },
    {
      quote: "It's one thing to be able to compose music. It's another to be able to do it from an often rambling brief from advertising creatives... to an often short deadline. Terry has this rare skill. That's why he's my go-to.",
      name: "Ben Couzens",
      title: "Co-founder & Executive Creative Tinker, Thinkerbell",
      photo: "images/testimonials/cuz.png"
    },
    {
      quote: "Terry is a solid pair of hands who I wouldn't think twice about bringing onto a project. He nails briefs, communicates clearly and most importantly has a unique creative edge to his compositions. Get him involved, you won't regret it!",
      name: "Steph Grace-Summers",
      title: "Founder, Friday Music Supervision (EU)",
      photo: "images/testimonials/steph.jpg"
    },
    {
      quote: "There's no other way to put it, Terry really is a creative genius! He's an absolute pleasure to work with, not only due to his multi-talented musical background, but his input helps improve the final creative. Everyone needs a Terry on their team!",
      name: "Nigel Camilleri",
      title: "Founder / Director, Safari Global",
      photo: "images/testimonials/nigel.jpg"
    },
    {
      quote: "Terry's intuition is second to none in regard to music composition and he is always my 'go to guy'. He remains calm under pressure and is efficient working to deadlines.",
      name: "Naomi Nienaber",
      title: "Senior Producer, Freelance",
      photo: "images/testimonials/naomi.jpg"
    },
    {
      quote: "Terry is a great composer to work with. He always delivers well produced and creative ideas for our projects and he happily works across many different genres and styles.",
      name: "Robin Datta",
      title: "Founder, Mushka Music Supervision (UK)",
      photo: "images/testimonials/robin.jpg"
    },
    {
      quote: "I've always known Terry to be extremely creative. Now as a composer, it's a joy to work with someone who expresses his creativity in a way that's forever going to be completely out of my reach. Communicative, witty, quick to a result – there's none better.",
      name: "Hilary Badger",
      title: "Executive Creative Director, Ogilvy",
      photo: "images/testimonials/hilary.jpg"
    },
    {
      quote: "Terry is a very talented composer who is lovely to work with and always reliable. He translates briefs to music in a great way and takes on feedback really well on top of that. Someone that's always sitting at the top of my list.",
      name: "Ryan Dickinson",
      title: "Founder, Made By Ikigai (Singapore)",
      photo: "images/testimonials/ryan.jpg"
    },
    {
      quote: "They call him 'The Hitmann'. Or at least, I do. A musical genius with a very particular set of skills. I cannot recommend him highly enough – an eighth octave high C comes close. If you want your brief brilliantly executed, you must hire The Hitmann.",
      name: "Chris Ellis",
      title: "Executive Creative Director, Fenton Stephens",
      photo: "images/testimonials/chris.png"
    },
    {
      quote: "Terry brought the perfect blend of warmth and charm to our campaign with a score that truly elevated the story. His professionalism and creativity made the collaboration seamless and enjoyable from start to finish.",
      name: "Izzy Robertson",
      title: "Producer, Droga5",
      photo: "images/testimonials/izzy.png"
    }
  ],

  // ----------------------------------------------------------
  // CONTACT
  // ----------------------------------------------------------
  contact: {
    email: "hi@terry-mann.com",
    image: "images/contact.gif",
    social: [
      { label: "LinkedIn",  href: "https://linkedin.com/in/terrypmann" },
      { label: "Instagram", href: "https://instagram.com/terrypmann" }
    ]
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    acknowledgement1: "I acknowledge the Traditional Owners of the land where I work and live. I pay my respects to Elders past, present and emerging.",
    acknowledgement2: "I celebrate the stories, culture and traditions of Aboriginal and Torres Strait Islander Elders of all communities who also work and live on this land.",
    charitiesNote: "A portion of the profits from my business are donated to the following charities each month:",
    charities: [
      { src: "images/charities/asrc.png",    alt: "ASRC - Asylum Seeker Resource Centre" },
      { src: "images/charities/acf.png",     alt: "Australian Conservation Foundation" },
      { src: "images/charities/redcross.png", alt: "Australian Red Cross" },
      { src: "images/charities/lifeline.png", alt: "Lifeline" },
      { src: "images/charities/naaja.png",   alt: "NAAJA" },
      { src: "images/charities/oxfam.png",   alt: "Oxfam" }
    ]
  }

};
