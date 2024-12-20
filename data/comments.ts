import uuid from "react-native-uuid";
const comments = [
  {
    id: uuid.v4().toString(),
    username: "MarvelFan99",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    text: "Infinity War had me speechless. That ending was something else! 😱",
    timestamp: "2024-12-10T10:30:00Z",
    isLiked: false,
    likes: 5,
    replies: [
      {
        id: uuid.v4().toString(),
        username: "ThorOfThunder",
        avatarUrl: "https://i.pravatar.cc/150?img=5",
        text: "Thor's Stormbreaker moment in Infinity War was 🔥🔥🔥.",
        timestamp: "2024-12-10T11:30:00Z",
        isLiked: false,
        likes: 1,
        replies: [],
      }, {
        id: uuid.v4().toString(),
        username: "StrangeMoves",
        avatarUrl: "https://i.pravatar.cc/150?img=11",
        text: "Doctor Strange seeing 14 million futures was insane. 🌀",
        timestamp: "2024-12-10T13:00:00Z",
        isLiked: false,
        likes: 0,
        replies: [],
      }
    ],
  },
  {
    id: uuid.v4().toString(),
    username: "IronManForever",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    text: "Tony Stark's arc in Endgame was perfect. I cried so much. 😢",
    timestamp: "2024-12-10T10:45:00Z",
    isLiked: false,
    likes: 15,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "SnapSurvivor",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    text: "Thanos was right... or was he? 🤔",
    timestamp: "2024-12-10T11:00:00Z",
    isLiked: false,
    likes: 9,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "CapFan",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    text: "I can do this all day. Captain America, you legend! ❤️",
    timestamp: "2024-12-10T11:15:00Z",
    isLiked: false,
    likes: 51,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "ThorOfThunder",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    text: "Thor's Stormbreaker moment in Infinity War was 🔥🔥🔥.",
    timestamp: "2024-12-10T11:30:00Z",
    isLiked: false,
    likes: 0,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "BlackWidowRocks",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
    text: "Natasha's sacrifice hit me harder than I expected. RIP. 🖤",
    timestamp: "2024-12-10T11:45:00Z",
    isLiked: false,
    likes: 10,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "StarLordOops",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    text: "Star-Lord really messed up in Infinity War. 😤",
    timestamp: "2024-12-10T12:00:00Z",
    isLiked: false,
    likes: 7,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "WakandaForever",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
    text: "Wakanda scenes were incredible. 'Yibambe!' 💪",
    timestamp: "2024-12-10T12:15:00Z",
    isLiked: false,
    likes: 1,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "TimeHeistLover",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
    text: "Time heist in Endgame was genius storytelling! 🔄",
    timestamp: "2024-12-10T12:30:00Z",
    isLiked: false,
    likes: 0,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "LokiLives",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
    text: "Where was Loki during all this? Oh wait… 🥲",
    timestamp: "2024-12-10T12:45:00Z",
    isLiked: false,
    likes: 0,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "StrangeMoves",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    text: "Doctor Strange seeing 14 million futures was insane. 🌀",
    timestamp: "2024-12-10T13:00:00Z",
    isLiked: false,
    likes: 0,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "PeterParkerRules",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    text: "Mr. Stark, I don't feel so good... Devastating. 😭",
    timestamp: "2024-12-10T13:15:00Z",
    isLiked: false,
    likes: 0,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "AvengersAssemble",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    text: "When Cap said Avengers Assemble, I lost it! 😍",
    timestamp: "2024-12-10T13:30:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "HulkSmash",
    avatarUrl: "https://i.pravatar.cc/150?img=14",
    text: "Professor Hulk was not what I expected, but it worked! 😂",
    timestamp: "2024-12-10T13:45:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "PepperPottsFan",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    text: "You can rest now. That line broke me. 💔",
    timestamp: "2024-12-10T14:00:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "RocketRaccoon",
    avatarUrl: "https://i.pravatar.cc/150?img=16",
    text: "Rocket was the MVP of Endgame. Change my mind. 🦝",
    timestamp: "2024-12-10T14:15:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "InfinityStones",
    avatarUrl: "https://i.pravatar.cc/150?img=17",
    text: "The lore of the Infinity Stones is so fascinating. 🪬",
    timestamp: "2024-12-10T14:30:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "NebulaFTW",
    avatarUrl: "https://i.pravatar.cc/150?img=18",
    text: "Nebula's growth as a character was so satisfying. 🌟",
    timestamp: "2024-12-10T14:45:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "GamoraLives",
    avatarUrl: "https://i.pravatar.cc/150?img=19",
    text: "Will we see more of Gamora in the future? Please say yes! 💚",
    timestamp: "2024-12-10T15:00:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "AntManFan",
    avatarUrl: "https://i.pravatar.cc/150?img=20",
    text: "Ant-Man saving the day with quantum tech? Iconic. 🐜",
    timestamp: "2024-12-10T15:15:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "ThanosFanboy",
    avatarUrl: "https://i.pravatar.cc/150?img=21",
    text: "I am inevitable. Thanos was such an epic villain. 😈",
    timestamp: "2024-12-10T15:30:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "ClintBartonRules",
    avatarUrl: "https://i.pravatar.cc/150?img=22",
    text: "Hawkeye's Ronin arc was dark but so compelling. 🎯",
    timestamp: "2024-12-10T15:45:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "ScarletWitch",
    avatarUrl: "https://i.pravatar.cc/150?img=23",
    text: "Scarlet Witch almost took down Thanos single-handedly! 🔥",
    timestamp: "2024-12-10T16:00:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "VisionReturns",
    avatarUrl: "https://i.pravatar.cc/150?img=24",
    text: "Will we see Vision again? I hope so! 🤖",
    timestamp: "2024-12-10T16:15:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "TeamIronMan",
    avatarUrl: "https://i.pravatar.cc/150?img=25",
    text: "Team Iron Man forever! Sorry, Cap. 😜",
    timestamp: "2024-12-10T16:30:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "CaptainMarvel",
    avatarUrl: "https://i.pravatar.cc/150?img=26",
    text: "Captain Marvel showing up in Endgame was awesome! 🌠",
    timestamp: "2024-12-10T16:45:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "EndgameFan",
    avatarUrl: "https://i.pravatar.cc/150?img=27",
    text: "Endgame wrapped up the saga beautifully. Best movie ever! 🎥",
    timestamp: "2024-12-10T17:00:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "BlackPantherRIP",
    avatarUrl: "https://i.pravatar.cc/150?img=28",
    text: "Chadwick Boseman as T'Challa was unforgettable. RIP. 🖤",
    timestamp: "2024-12-10T17:15:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "FalconFan",
    avatarUrl: "https://i.pravatar.cc/150?img=29",
    text: "Falcon as the new Cap? Amazing choice. 🦅",
    timestamp: "2024-12-10T17:30:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
  {
    id: uuid.v4().toString(),
    username: "EndgameForever",
    avatarUrl: "https://i.pravatar.cc/150?img=30",
    text: "I'll never forget the emotional rollercoaster of these movies. 🥹",
    timestamp: "2024-12-10T17:45:00Z",
    isLiked: false,
    likes: 5,
    replies: [],
  },
];

export default comments;
