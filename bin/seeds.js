const mongoose = require('mongoose');
const Songslist = require('../models/Songslist.js');
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const songslist = [
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "The Chemicals Between Us",
    ARTIST: "Bush"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Steal My Sunshine",
    ARTIST: "Len"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "The Christmas Song (Chestnuts Roasting On An Open Fire)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "The Greatest Romance Ever Sold",
    ARTIST: "Prince"
  },
  {
    SONG_TITLE: "A Country Boy Can Survive (Y2K Version)",
    ARTIST: "Chad Brock With Hank Williams Jr. & George Jones"
  },
  {
    SONG_TITLE: "Steam",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "The Quittin' Kind",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "The Rockafeller Skank",
    ARTIST: "Fatboy Slim"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Sixpence None The Richer"
  },
  {
    SONG_TITLE: "This Gift",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Back That Thang Up",
    ARTIST: "Juvenile Featuring Mannie Fresh & Lil' Wayne"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "15 Minutes",
    ARTIST: "Marc Nelson"
  },
  {
    SONG_TITLE: "Satisfy You",
    ARTIST: "Puff Daddy Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Bug A Boo",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bling Bling",
    ARTIST: "B.G. Featuring Baby, Turk, Mannie Fresh, Juvenile & Lil' Wayne"
  },
  {
    SONG_TITLE: "All Things Considered",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "(You Drive Me) Crazy",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Auld Lang Syne",
    ARTIST: "Kenny G"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Deck The Halls",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Notorious B.I.G.",
    ARTIST: "The Notorious B.I.G. Featuring Puff Daddy & Lil' Kim"
  },
  {
    SONG_TITLE: "N 2 Gether Now",
    ARTIST: "Limp Bizkit Featuring Method Man"
  },
  {
    SONG_TITLE: "Live, Laugh, Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "4, 5, 6",
    ARTIST: "Sole Featuring JT Money & Kandi"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Where My Girls At?",
    ARTIST: "702"
  },
  {
    SONG_TITLE: "Will 2K",
    ARTIST: "Will Smith Featuring K-Ci"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Left & Right",
    ARTIST: "D'Angelo Featuring Method Man And Redman"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Unpretty",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Larger Than Life",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Gotta Man",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Heartbreaker",
    ARTIST: "Mariah Carey Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Music Of My Heart",
    ARTIST: "'N Sync & Gloria Estefan"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "L.A. Song",
    ARTIST: "Beth Hart"
  },
  {
    SONG_TITLE: "NAStradamus",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Tha Block Is Hot",
    ARTIST: "Lil' Wayne Featuring Juvenile & B.G."
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "Give You What You Want (Fa Sure)",
    ARTIST: "Chico DeBarge"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "Mambo No. 5 (A Little Bit Of...)",
    ARTIST: "Lou Bega"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Get Gone",
    ARTIST: "Ideal"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Don't Say You Love Me",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "She Thinks My Tractor's Sexy",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "We Can't Be Friends",
    ARTIST: "Deborah Cox With R.L."
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Home To You",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Bug A Boo",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Don't Say You Love Me",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "Bling Bling",
    ARTIST: "B.G. Featuring Baby, Turk, Mannie Fresh, Juvenile & Lil' Wayne"
  },
  {
    SONG_TITLE: "All Things Considered",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "(You Drive Me) Crazy",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "The Chemicals Between Us",
    ARTIST: "Bush"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "All I Want For Christmas Is You",
    ARTIST: "Mariah Carey"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "She Thinks My Tractor's Sexy",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "The Christmas Song (Chestnuts Roasting On An Open Fire)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "The Greatest Romance Ever Sold",
    ARTIST: "Prince"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "The Quittin' Kind",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "The Rockafeller Skank",
    ARTIST: "Fatboy Slim"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Sixpence None The Richer"
  },
  {
    SONG_TITLE: "This Gift",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Steal My Sunshine",
    ARTIST: "Len"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Back That Thang Up",
    ARTIST: "Juvenile Featuring Mannie Fresh & Lil' Wayne"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "15 Minutes",
    ARTIST: "Marc Nelson"
  },
  {
    SONG_TITLE: "Satisfy You",
    ARTIST: "Puff Daddy Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "A Country Boy Can Survive (Y2K Version)",
    ARTIST: "Chad Brock With Hank Williams Jr. & George Jones"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Notorious B.I.G.",
    ARTIST: "The Notorious B.I.G. Featuring Puff Daddy & Lil' Kim"
  },
  {
    SONG_TITLE: "Left & Right",
    ARTIST: "D'Angelo Featuring Method Man And Redman"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "4, 5, 6",
    ARTIST: "Sole Featuring JT Money & Kandi"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Where My Girls At?",
    ARTIST: "702"
  },
  {
    SONG_TITLE: "Will 2K",
    ARTIST: "Will Smith Featuring K-Ci"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "Auld Lang Syne",
    ARTIST: "Kenny G"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Deck The Halls",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "L.A. Song",
    ARTIST: "Beth Hart"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Unpretty",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Home To You",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Larger Than Life",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "N 2 Gether Now",
    ARTIST: "Limp Bizkit Featuring Method Man"
  },
  {
    SONG_TITLE: "Live, Laugh, Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Heartbreaker",
    ARTIST: "Mariah Carey Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Mambo No. 5 (A Little Bit Of...)",
    ARTIST: "Lou Bega"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Get Gone",
    ARTIST: "Ideal"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Tha Block Is Hot",
    ARTIST: "Lil' Wayne Featuring Juvenile & B.G."
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "We Can't Be Friends",
    ARTIST: "Deborah Cox With R.L."
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Give You What You Want (Fa Sure)",
    ARTIST: "Chico DeBarge"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "15 Minutes",
    ARTIST: "Marc Nelson"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Satisfy You",
    ARTIST: "Puff Daddy Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Bug A Boo",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bling Bling",
    ARTIST: "B.G. Featuring Baby, Turk, Mannie Fresh, Juvenile & Lil' Wayne"
  },
  {
    SONG_TITLE: "All Things Considered",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "(You Drive Me) Crazy",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "The Chemicals Between Us",
    ARTIST: "Bush"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "The Greatest Romance Ever Sold",
    ARTIST: "Prince"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "4, 5, 6",
    ARTIST: "Sole Featuring JT Money & Kandi"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "The Quittin' Kind",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "The Rockafeller Skank",
    ARTIST: "Fatboy Slim"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Sixpence None The Richer"
  },
  {
    SONG_TITLE: "This Gift",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Steal My Sunshine",
    ARTIST: "Len"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Back That Thang Up",
    ARTIST: "Juvenile Featuring Mannie Fresh & Lil' Wayne"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "Don't Say You Love Me",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "She Thinks My Tractor's Sexy",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Where My Girls At?",
    ARTIST: "702"
  },
  {
    SONG_TITLE: "Will 2K",
    ARTIST: "Will Smith Featuring K-Ci"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "A Country Boy Can Survive (Y2K Version)",
    ARTIST: "Chad Brock With Hank Williams Jr. & George Jones"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Live, Laugh, Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "N 2 Gether Now",
    ARTIST: "Limp Bizkit Featuring Method Man"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Unpretty",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Home To You",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Larger Than Life",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Notorious B.I.G.",
    ARTIST: "The Notorious B.I.G. Featuring Puff Daddy & Lil' Kim"
  },
  {
    SONG_TITLE: "Auld Lang Syne",
    ARTIST: "Kenny G"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "L.A. Song",
    ARTIST: "Beth Hart"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Heartbreaker",
    ARTIST: "Mariah Carey Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Mambo No. 5 (A Little Bit Of...)",
    ARTIST: "Lou Bega"
  },
  {
    SONG_TITLE: "Get Gone",
    ARTIST: "Ideal"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Tha Block Is Hot",
    ARTIST: "Lil' Wayne Featuring Juvenile & B.G."
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "We Can't Be Friends",
    ARTIST: "Deborah Cox With R.L."
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Give You What You Want (Fa Sure)",
    ARTIST: "Chico DeBarge"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "Music Of My Heart",
    ARTIST: "'N Sync & Gloria Estefan"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Breathe And Stop",
    ARTIST: "Q-Tip"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Satisfy You",
    ARTIST: "Puff Daddy Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "The Chemicals Between Us",
    ARTIST: "Bush"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Smoke Rings In The Dark",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Tha Block Is Hot",
    ARTIST: "Lil' Wayne Featuring Juvenile & B.G."
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Bug A Boo",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Things Considered",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "Bling Bling",
    ARTIST: "B.G. Featuring Baby, Turk, Mannie Fresh, Juvenile & Lil' Wayne"
  },
  {
    SONG_TITLE: "(You Drive Me) Crazy",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "4, 5, 6",
    ARTIST: "Sole Featuring JT Money & Kandi"
  },
  {
    SONG_TITLE: "The Quittin' Kind",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "The Rockafeller Skank",
    ARTIST: "Fatboy Slim"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Sixpence None The Richer"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Steal My Sunshine",
    ARTIST: "Len"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Back That Thang Up",
    ARTIST: "Juvenile Featuring Mannie Fresh & Lil' Wayne"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "She Thinks My Tractor's Sexy",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Don't Say You Love Me",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Where My Girls At?",
    ARTIST: "702"
  },
  {
    SONG_TITLE: "Will 2K",
    ARTIST: "Will Smith Featuring K-Ci"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Notorious B.I.G.",
    ARTIST: "The Notorious B.I.G. Featuring Puff Daddy & Lil' Kim"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Unpretty",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Home To You",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Live, Laugh, Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "N 2 Gether Now",
    ARTIST: "Limp Bizkit Featuring Method Man"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "L.A. Song",
    ARTIST: "Beth Hart"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Auld Lang Syne",
    ARTIST: "Kenny G"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "Larger Than Life",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Mambo No. 5 (A Little Bit Of...)",
    ARTIST: "Lou Bega"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "We Can't Be Friends",
    ARTIST: "Deborah Cox With R.L."
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "Music Of My Heart",
    ARTIST: "'N Sync & Gloria Estefan"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Don't Say You Love Me",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "She Thinks My Tractor's Sexy",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "The Chemicals Between Us",
    ARTIST: "Bush"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Satisfy You",
    ARTIST: "Puff Daddy Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Bug A Boo",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Things Considered",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "(You Drive Me) Crazy",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "The Quittin' Kind",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Steal My Sunshine",
    ARTIST: "Len"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Back That Thang Up",
    ARTIST: "Juvenile Featuring Mannie Fresh & Lil' Wayne"
  },
  {
    SONG_TITLE: "Someday",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "4, 5, 6",
    ARTIST: "Sole Featuring JT Money & Kandi"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Breathe And Stop",
    ARTIST: "Q-Tip"
  },
  {
    SONG_TITLE: "Smoke Rings In The Dark",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Tha Block Is Hot",
    ARTIST: "Lil' Wayne Featuring Juvenile & B.G."
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Where My Girls At?",
    ARTIST: "702"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Tricky, Tricky",
    ARTIST: "Lou Bega"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Unpretty",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Home To You",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Live, Laugh, Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "N 2 Gether Now",
    ARTIST: "Limp Bizkit Featuring Method Man"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "L.A. Song",
    ARTIST: "Beth Hart"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Candy",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "Still D.R.E.",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "The Chemicals Between Us",
    ARTIST: "Bush"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Satisfy You",
    ARTIST: "Puff Daddy Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Bug A Boo",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "Don't Say You Love Me",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "She Thinks My Tractor's Sexy",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "The Quittin' Kind",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "4, 5, 6",
    ARTIST: "Sole Featuring JT Money & Kandi"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Tha Block Is Hot",
    ARTIST: "Lil' Wayne Featuring Juvenile & B.G."
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Where My Girls At?",
    ARTIST: "702"
  },
  {
    SONG_TITLE: "Smoke Rings In The Dark",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Breathe And Stop",
    ARTIST: "Q-Tip"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Tricky, Tricky",
    ARTIST: "Lou Bega"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "U Understand",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Live, Laugh, Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "N 2 Gether Now",
    ARTIST: "Limp Bizkit Featuring Method Man"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "L.A. Song",
    ARTIST: "Beth Hart"
  },
  {
    SONG_TITLE: "Home To You",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "4, 5, 6",
    ARTIST: "Sole Featuring JT Money & Kandi"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Candy",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Dear Lie",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Best Friend",
    ARTIST: "Puff Daddy Featuring Mario Winans & Hezekiah Walker & The Love Fe"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Tha Block Is Hot",
    ARTIST: "Lil' Wayne Featuring Juvenile & B.G."
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "The Chemicals Between Us",
    ARTIST: "Bush"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Freakin' It",
    ARTIST: "Will Smith"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Where My Girls At?",
    ARTIST: "702"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Tricky, Tricky",
    ARTIST: "Lou Bega"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "U Understand",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Smoke Rings In The Dark",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Breathe And Stop",
    ARTIST: "Q-Tip"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "N 2 Gether Now",
    ARTIST: "Limp Bizkit Featuring Method Man"
  },
  {
    SONG_TITLE: "Live, Laugh, Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Home To You",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "L.A. Song",
    ARTIST: "Beth Hart"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Candy",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Stay The Night",
    ARTIST: "IMx"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Do What You Gotta Do",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Caught Out There",
    ARTIST: "Kelis"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Deep Inside",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Dear Lie",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Best Friend",
    ARTIST: "Puff Daddy Featuring Mario Winans & Hezekiah Walker & The Love Fe"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Freakin' It",
    ARTIST: "Will Smith"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "You Can Do It",
    ARTIST: "Ice Cube Featuring Mack 10 & Ms. Toi"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "U Understand",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Smoke Rings In The Dark",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Breathe And Stop",
    ARTIST: "Q-Tip"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Dancin'",
    ARTIST: "Guy"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Candy",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Sexual (Li Da Di)",
    ARTIST: "Amber"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Big Deal",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Baby Don't Cry (Keep Ya Head Up II)",
    ARTIST: "2Pac + Outlawz"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Black Balloon",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Do What You Gotta Do",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "When I Said I Do",
    ARTIST: "Clint Black"
  },
  {
    SONG_TITLE: "Dear Lie",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Best Friend",
    ARTIST: "Puff Daddy Featuring Mario Winans & Hezekiah Walker & The Love Fe"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Freakin' It",
    ARTIST: "Will Smith"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "U Understand",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "I Wanna Love You Forever",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "Waiting For Tonight",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Candy",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Daddy Won't Sell The Farm",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Still In My Heart",
    ARTIST: "Tracie Spencer"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Get Up",
    ARTIST: "Amel Larrieux"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Baby Don't Cry (Keep Ya Head Up II)",
    ARTIST: "2Pac + Outlawz"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Freakin' It",
    ARTIST: "Will Smith"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Do What You Gotta Do",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "U Know What's Up",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "U Understand",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Dear Lie",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Best Friend",
    ARTIST: "Puff Daddy Featuring Mario Winans & Hezekiah Walker & The Love Fe"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "Got Your Money",
    ARTIST: "Ol' Dirty Bastard Featuring Kelis"
  },
  {
    SONG_TITLE: "He Didn't Have To Be",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Learn To Fly",
    ARTIST: "Foo Fighters"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Pop A Top",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Candy",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Private Emotion",
    ARTIST: "Ricky Martin Featuring Meja"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Daddy Won't Sell The Farm",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Still In My Heart",
    ARTIST: "Tracie Spencer"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Get Up",
    ARTIST: "Amel Larrieux"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Do It Again (Put Ya Hands Up)",
    ARTIST: "Jay-Z Featuring Beanie Sigel & Amil"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Baby Don't Cry (Keep Ya Head Up II)",
    ARTIST: "2Pac + Outlawz"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "U Understand",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Girl On TV",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Do What You Gotta Do",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Dear Lie",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Best Friend",
    ARTIST: "Puff Daddy Featuring Mario Winans & Hezekiah Walker & The Love Fe"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "Guerrilla Radio",
    ARTIST: "Rage Against The Machine"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "My Love Is Your Love",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What Do You Say",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Put Your Hand In Mine",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "Shake Your Bon-Bon",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "24/7",
    ARTIST: "Kevon Edmonds"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Ryde Or Die, Chick",
    ARTIST: "The Lox Featuring Timbaland And EVE"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Private Emotion",
    ARTIST: "Ricky Martin Featuring Meja"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Daddy Won't Sell The Farm",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Get Up",
    ARTIST: "Amel Larrieux"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "None Of Ur Friends Business",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Still In My Heart",
    ARTIST: "Tracie Spencer"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Baby Don't Cry (Keep Ya Head Up II)",
    ARTIST: "2Pac + Outlawz"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Do What You Gotta Do",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Hanginaround",
    ARTIST: "Counting Crows"
  },
  {
    SONG_TITLE: "If You Love Me",
    ARTIST: "Mint Condition"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Dear Lie",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Rhythm Divine",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Can't Stay",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Angels",
    ARTIST: "Robbie Williams"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "The Great Beyond",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "The Best Man I Can Be",
    ARTIST: "Ginuwine, R.L., Tyrese, Case"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "If You Don't Wanna Love Me",
    ARTIST: "Tamar Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Ryde Or Die, Chick",
    ARTIST: "The Lox Featuring Timbaland And EVE"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "What's My Name",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Private Emotion",
    ARTIST: "Ricky Martin Featuring Meja"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Daddy Won't Sell The Farm",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Baby Don't Cry (Keep Ya Head Up II)",
    ARTIST: "2Pac + Outlawz"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Do What You Gotta Do",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Dear Lie",
    ARTIST: "TLC"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Re-arranged",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I'm Outta Love",
    ARTIST: "Anastacia"
  },
  {
    SONG_TITLE: "Real Live Woman",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Woman Needs",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Can't Stay",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "If You Don't Wanna Love Me",
    ARTIST: "Tamar Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Where You Are",
    ARTIST: "Jessica Simpson Featuring Nick Lachey"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Ryde Or Die, Chick",
    ARTIST: "The Lox Featuring Timbaland And EVE"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Private Emotion",
    ARTIST: "Ricky Martin Featuring Meja"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Daddy Won't Sell The Farm",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Got To Get It",
    ARTIST: "Sisqo Featuring Make It Hot"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Baby Don't Cry (Keep Ya Head Up II)",
    ARTIST: "2Pac + Outlawz"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Take A Picture",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Cowboy Take Me Away",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Real Live Woman",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Where You Are",
    ARTIST: "Jessica Simpson Featuring Nick Lachey"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Can't Stay",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "If You Don't Wanna Love Me",
    ARTIST: "Tamar Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Ryde Or Die, Chick",
    ARTIST: "The Lox Featuring Timbaland And EVE"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Private Emotion",
    ARTIST: "Ricky Martin Featuring Meja"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Meet Virginia",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Daddy Won't Sell The Farm",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Baby Don't Cry (Keep Ya Head Up II)",
    ARTIST: "2Pac + Outlawz"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "G'd Up",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "One Night Stand",
    ARTIST: "J-Shin Featuring LaTocha Scott"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Wanna Kiss You Goodnight",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Stay Or Let It Go",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "If You Don't Wanna Love Me",
    ARTIST: "Tamar Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "American Pie",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Where You Are",
    ARTIST: "Jessica Simpson Featuring Nick Lachey"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Real Live Woman",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Rain (In This Cloud)",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Can't Stay",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Ryde Or Die, Chick",
    ARTIST: "The Lox Featuring Timbaland And EVE"
  },
  {
    SONG_TITLE: "No Leaf Clover",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Hot Boyz",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring NAS, EVE & Q-Tip"
  },
  {
    SONG_TITLE: "My Best Friend",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Blue (Da Ba Dee)",
    ARTIST: "Eiffel 65"
  },
  {
    SONG_TITLE: "Thank God I Found You",
    ARTIST: "Mariah Carey Featuring Joe & 98 Degrees"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Then The Morning Comes",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Time Around",
    ARTIST: "Hanson"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "I Don't Wanna Kiss You Goodnight",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Because You Love Me",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "If You Don't Wanna Love Me",
    ARTIST: "Tamar Braxton"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Where You Are",
    ARTIST: "Jessica Simpson Featuring Nick Lachey"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Love Is Blind",
    ARTIST: "Eve Featuring Faith Evans"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Real Live Woman",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "He Can't Love U",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Ryde Or Die, Chick",
    ARTIST: "The Lox Featuring Timbaland And EVE"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "I'm Outta Love",
    ARTIST: "Anastacia"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Smile",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Time Around",
    ARTIST: "Hanson"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "I Don't Wanna Kiss You Goodnight",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Where You Are",
    ARTIST: "Jessica Simpson Featuring Nick Lachey"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "If You Don't Wanna Love Me",
    ARTIST: "Tamar Braxton"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Real Live Woman",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Learned From The Best",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Ryde Or Die, Chick",
    ARTIST: "The Lox Featuring Timbaland And EVE"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Time Around",
    ARTIST: "Hanson"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "All The Small Things",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Bring It All To Me",
    ARTIST: "Blaque"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Where You Are",
    ARTIST: "Jessica Simpson Featuring Nick Lachey"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "I Don't Wanna Kiss You Goodnight",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "U Don't Love Me",
    ARTIST: "Kumbia Kings Featuring A.B. Quintanilla"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Mr. Too Damn Good",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "It Was",
    ARTIST: "Chely Wright"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Real Live Woman",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "What A Girl Wants",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Left, Right, Left",
    ARTIST: "Drama"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Nothing As It Seems",
    ARTIST: "Pearl Jam"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Me Neither",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "Love Sets You Free",
    ARTIST: "Kelly Price & Friends"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Time Around",
    ARTIST: "Hanson"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I Don't Wanna Kiss You Goodnight",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Untitled (How Does It Feel)",
    ARTIST: "D'Angelo"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Need A Hot Girl",
    ARTIST: "Hot Boys"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Time Around",
    ARTIST: "Hanson"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "That's The Way It Is",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Nothing As It Seems",
    ARTIST: "Pearl Jam"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Me Neither",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Another Dumb Blonde",
    ARTIST: "Hoku"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "Love Sets You Free",
    ARTIST: "Kelly Price & Friends"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Belong To You",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "No Mercy",
    ARTIST: "Ty Herndon"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Time Around",
    ARTIST: "Hanson"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Nothing As It Seems",
    ARTIST: "Pearl Jam"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Me Neither",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Love Sets You Free",
    ARTIST: "Kelly Price & Friends"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "Falls Apart",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Get It On Tonite",
    ARTIST: "Montell Jordan"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "The Bad Touch",
    ARTIST: "Bloodhound Gang"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This Time Around",
    ARTIST: "Hanson"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Nothing As It Seems",
    ARTIST: "Pearl Jam"
  },
  {
    SONG_TITLE: "Me Neither",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Love Sets You Free",
    ARTIST: "Kelly Price & Friends"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Forgot About Dre",
    ARTIST: "Dr. Dre Featuring Eminem"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "I Knew I Loved You",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "No Me Dejes De Querer",
    ARTIST: "Gloria Estefan"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Best Day",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Show Me The Meaning Of Being Lonely",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Nothing As It Seems",
    ARTIST: "Pearl Jam"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "How Do You Like Me Now?!",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Don't Wanna",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Like It",
    ARTIST: "Sammie"
  },
  {
    SONG_TITLE: "From The Bottom Of My Broken Heart",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Lessons Learned",
    ARTIST: "Tracy Lawrence"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "I Need To Know",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Another Nine Minutes",
    ARTIST: "Yankee Grey"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Riddle",
    ARTIST: "En Vogue"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Whistle While You Twurk",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "Nothing As It Seems",
    ARTIST: "Pearl Jam"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Love's The Only House",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "Never Let You Go",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Give Me You",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "I'm Outta Love",
    ARTIST: "Anastacia"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "Crybaby",
    ARTIST: "Mariah Carey Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Back At One",
    ARTIST: "Mark Wills"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "That's What I'm Looking For",
    ARTIST: "Da Brat"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Take That",
    ARTIST: "Torrey Carter Featuring Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Riddle",
    ARTIST: "En Vogue"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Whoa!",
    ARTIST: "Black Rob"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Goodbye Earl",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Feelin' So Good",
    ARTIST: "Jennifer Lopez Featuring Big Pun & Fat Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Only God Knows Why",
    ARTIST: "Kid Rock"
  },
  {
    SONG_TITLE: "Been There",
    ARTIST: "Clint Black With Steve Wariner"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Bye Bye Bye",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Got Beef",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz Featuring Jayo Felony And Blaqthoven"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Crybaby",
    ARTIST: "Mariah Carey Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Take That",
    ARTIST: "Torrey Carter Featuring Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Riddle",
    ARTIST: "En Vogue"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "It Feels So Good",
    ARTIST: "Sonique"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Graduation (Friends Forever)",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Dancing Queen",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Otherside",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "Got Beef",
    ARTIST: "Snoop Dogg Presents Tha Eastsidaz Featuring Jayo Felony And Blaqthoven"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Owe Me",
    ARTIST: "NAS Featuring Ginuwine"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Crybaby",
    ARTIST: "Mariah Carey Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Take That",
    ARTIST: "Torrey Carter Featuring Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Riddle",
    ARTIST: "En Vogue"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "More",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "Got It All",
    ARTIST: "Eve & Jadakiss"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Party Up (Up In Here)",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Dancing Queen",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Crybaby",
    ARTIST: "Mariah Carey Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Take That",
    ARTIST: "Torrey Carter Featuring Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Monica",
    ARTIST: "Before Dark"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Carlene",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "She's More",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Buy Me A Rose",
    ARTIST: "Kenny Rogers With Alison Krauss & Billy Dean"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Got It All",
    ARTIST: "Eve & Jadakiss"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Dancing Queen",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Crybaby",
    ARTIST: "Mariah Carey Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Take That",
    ARTIST: "Torrey Carter Featuring Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What I Need To Do",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Shut Up",
    ARTIST: "Trick Daddy Featuring Duece Poppito, Trina, Co"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "Couldn't Last A Moment",
    ARTIST: "Collin Raye"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Say My Name",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Someday Out Of The Blue",
    ARTIST: "Elton John"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "3 Little Words",
    ARTIST: "Nu Flavor"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "Got It All",
    ARTIST: "Eve & Jadakiss"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "It's So Hard",
    ARTIST: "Big Punisher Featuring Donell Jones"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Dancing Queen",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Mirror Mirror",
    ARTIST: "M2M"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Take That",
    ARTIST: "Torrey Carter Featuring Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Crybaby",
    ARTIST: "Mariah Carey Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Best Of Me",
    ARTIST: "Mya Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "Shackles (Praise You)",
    ARTIST: "Mary Mary"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Cherchez LaGhost",
    ARTIST: "Ghostface Killah"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Thong Song",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Got It All",
    ARTIST: "Eve & Jadakiss"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Unconditional",
    ARTIST: "Clay Davidson"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Dancing Queen",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Maria Maria",
    ARTIST: "Santana Featuring The Product G&B"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Crybaby",
    ARTIST: "Mariah Carey Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Take That",
    ARTIST: "Torrey Carter Featuring Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "West Side Story",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Be With You",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Swear It Again",
    ARTIST: "Westlife"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Imagine That",
    ARTIST: "LL Cool J"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Some Things Never Change",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Ta Da",
    ARTIST: "Lil' Mo"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "Got It All",
    ARTIST: "Eve & Jadakiss"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Same Script, Different Cast",
    ARTIST: "Whitney Houston & Deborah Cox"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wobble Wobble",
    ARTIST: "504 Boyz"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "West Side Story",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Amazed",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Better Off Alone",
    ARTIST: "Alice Deejay"
  },
  {
    SONG_TITLE: "Crash And Burn",
    ARTIST: "Savage Garden"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Baby U Are",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Imagine That",
    ARTIST: "LL Cool J"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "Yes!",
    ARTIST: "Chad Brock"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Ta Da",
    ARTIST: "Lil' Mo"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Try",
    ARTIST: "Macy Gray"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "West Side Story",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "The Chain Of Love",
    ARTIST: "Clay Walker"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Baby U Are",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Cold Day In July",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "Ta Da",
    ARTIST: "Lil' Mo"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "West Side Story",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Think God Can Explain",
    ARTIST: "Splender"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "As We Lay",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Big Pimpin'",
    ARTIST: "Jay-Z Featuring UGK"
  },
  {
    SONG_TITLE: "Broadway",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Oops!...I Did It Again",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "The Hardest Part Of Breaking Up (Is Getting Back Your Stuff)",
    ARTIST: "2Gether"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Smooth",
    ARTIST: "Santana Featuring Rob Thomas"
  },
  {
    SONG_TITLE: "Kernkraft 400",
    ARTIST: "Zombie Nation"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Baby U Are",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Ta Da",
    ARTIST: "Lil' Mo"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Separated",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "The Hardest Part Of Breaking Up (Is Getting Back Your Stuff)",
    ARTIST: "2Gether"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Pull Over",
    ARTIST: "Trina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "The Real Slim Shady",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Kernkraft 400",
    ARTIST: "Zombie Nation"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Baby U Are",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Ta Da",
    ARTIST: "Lil' Mo"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Flowers On The Wall",
    ARTIST: "Eric Heatherly"
  },
  {
    SONG_TITLE: "I Turn To You",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Prayin' For Daylight",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "The Hardest Part Of Breaking Up (Is Getting Back Your Stuff)",
    ARTIST: "2Gether"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Can't Go For That",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Pull Over",
    ARTIST: "Trina"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "When You Need My Love",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Baby U Are",
    ARTIST: "Gerald Levert"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "No Matter What They Say",
    ARTIST: "Lil' Kim"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Ta Da",
    ARTIST: "Lil' Mo"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Dance Tonight",
    ARTIST: "Lucy Pearl"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Simple Kind Of Life",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Can't Go For That",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Pull Over",
    ARTIST: "Trina"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "I Disappear",
    ARTIST: "Metallica"
  },
  {
    SONG_TITLE: "I'll Be",
    ARTIST: "Reba McEntire"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Ta Da",
    ARTIST: "Lil' Mo"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Purest Of Pain (A Puro Dolor)",
    ARTIST: "Son By Four"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Sour Girl",
    ARTIST: "Stone Temple Pilots"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Sang To Me",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Can't Go For That",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "I Will Love Again",
    ARTIST: "Lara Fabian"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Pull Over",
    ARTIST: "Trina"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "The Next Episode",
    ARTIST: "Dr. Dre Featuring Snoop Dogg"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "There You Go",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Whatever",
    ARTIST: "Ideal Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Wanna Be With You",
    ARTIST: "Mandy Moore"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Can't Go For That",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You'll Always Be Loved By Me",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "Wifey",
    ARTIST: "Next"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Think I'm In Love With You",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Can't Go For That",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Let's Get Married",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "What'Chu Like",
    ARTIST: "Da Brat Featuring Tyrese"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "One Voice",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Callin' Me",
    ARTIST: "Lil' Zane Featuring 112"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Try Again",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Lucky",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "It's Gonna Be Me",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What About Now",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Could I Have This Kiss Forever",
    ARTIST: "Whitney Houston & Enrique Iglesias"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Sleepwalker",
    ARTIST: "The Wallflowers"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "The Way I Am",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Your Everything",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Toca's Miracle",
    ARTIST: "Fragma"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Everything You Want",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "I Wanna Know",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Pop Ya Collar",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "That's The Way",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Taking You Home",
    ARTIST: "Don Henley"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Desert Rose",
    ARTIST: "Sting Featuring Cheb Mami"
  },
  {
    SONG_TITLE: "Absolutely (Story Of A Girl)",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Breathe",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Sleepwalker",
    ARTIST: "The Wallflowers"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "It Must Be Love",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Do You",
    ARTIST: "Funkmaster Flex Featuring DMX"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Country Comes To Town",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Pop Ya Collar",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Damizza Presents Shade Sheist Featuring Nate Dogg & Kurupt"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Sleepwalker",
    ARTIST: "The Wallflowers"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "I Need You",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "What You Want",
    ARTIST: "DMX Featuring Sisqo"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Let's Make Love",
    ARTIST: "Faith Hill With Tim McGraw"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "Don't Call Me Baby",
    ARTIST: "Madison Avenue"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Souljas",
    ARTIST: "Master P"
  },
  {
    SONG_TITLE: "Deep Inside Of You",
    ARTIST: "Third Eye Blind"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Do You",
    ARTIST: "Funkmaster Flex Featuring DMX"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Damizza Presents Shade Sheist Featuring Nate Dogg & Kurupt"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Pop Ya Collar",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Hey Papi",
    ARTIST: "Jay-Z Featuring Memphis Bleek & Amil"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Sleepwalker",
    ARTIST: "The Wallflowers"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "It's Always Somethin'",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Change Your Mind",
    ARTIST: "Sister Hazel"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Doesn't Really Matter",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Back Here",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Wonderful",
    ARTIST: "Everclear"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Damizza Presents Shade Sheist Featuring Nate Dogg & Kurupt"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Do You",
    ARTIST: "Funkmaster Flex Featuring DMX"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Treat Her Like A Lady",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Pop Ya Collar",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Sleepwalker",
    ARTIST: "The Wallflowers"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "I Will...But",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "He Wasn't Man Enough",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Summer Rain",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "If I Am",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Californication",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Spanish Guitar",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There You Are",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Aaron's Party (Come Get It)",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Damizza Presents Shade Sheist Featuring Nate Dogg & Kurupt"
  },
  {
    SONG_TITLE: "Who Let The Dogs Out",
    ARTIST: "Baha Men"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Do You",
    ARTIST: "Funkmaster Flex Featuring DMX"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Pop Ya Collar",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Sleepwalker",
    ARTIST: "The Wallflowers"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Higher",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "That Other Woman",
    ARTIST: "Changing Faces"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Light",
    ARTIST: "Common"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "If I Am",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Where I Wanna Be",
    ARTIST: "Damizza Presents Shade Sheist Featuring Nate Dogg & Kurupt"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Spanish Guitar",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Do You",
    ARTIST: "Funkmaster Flex Featuring DMX"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Last Resort",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Just Be A Man About It",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Pop Ya Collar",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "A Little Gasoline",
    ARTIST: "Terri Clark"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "(Hot S**t) Country Grammar",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "That's The Kind Of Mood I'm In",
    ARTIST: "Patty Loveless"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bad Boyz",
    ARTIST: "Shyne Featuring Barrington Levy"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "If I Am",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Won't Be Lonely Now",
    ARTIST: "Billy Ray Cyrus"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "Spanish Guitar",
    ARTIST: "Toni Braxton"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Faded",
    ARTIST: "SoulDecision Featuring Thrust"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Incomplete",
    ARTIST: "Sisqo"
  },
  {
    SONG_TITLE: "Jumpin', Jumpin'",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Do You",
    ARTIST: "Funkmaster Flex Featuring DMX"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Pop Ya Collar",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "What Means The World To You",
    ARTIST: "Cam'ron"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Shake Ya Ass",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "All Good?",
    ARTIST: "De La Soul Featuring Chaka Khan"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Come On Over Baby (All I Want Is You)",
    ARTIST: "Christina Aguilera"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "A Little Gasoline",
    ARTIST: "Terri Clark"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "If I Am",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Straight Up",
    ARTIST: "Chante Moore"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "It's My Life",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "No More",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Do You",
    ARTIST: "Funkmaster Flex Featuring DMX"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Bag Lady",
    ARTIST: "Erykah Badu"
  },
  {
    SONG_TITLE: "The Christmas Shoes",
    ARTIST: "NewSong"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Thank You In Advance",
    ARTIST: "Boyz II Men"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Know",
    ARTIST: "Sunday"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "If I Am",
    ARTIST: "Nine Days"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "All Good?",
    ARTIST: "De La Soul Featuring Chaka Khan"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "A Little Gasoline",
    ARTIST: "Terri Clark"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "My Love Goes On And On",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Give Me Just One Night (Una Noche)",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Open My Heart",
    ARTIST: "Yolanda Adams"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "The Christmas Shoes",
    ARTIST: "NewSong"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Bouncing Off The Ceiling (Upside Down)",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Thank You In Advance",
    ARTIST: "Boyz II Men"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "I Know",
    ARTIST: "Sunday"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Where Are You Christmas?",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "All Good?",
    ARTIST: "De La Soul Featuring Chaka Khan"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "A Little Gasoline",
    ARTIST: "Terri Clark"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Kiss This",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Don't Think I'm Not",
    ARTIST: "Kandi"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Bounce With Me",
    ARTIST: "Lil Bow Wow Featuring Xscape"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Best Of Intentions",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Bouncing Off The Ceiling (Upside Down)",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "You're A God",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Thank You In Advance",
    ARTIST: "Boyz II Men"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "A Little Gasoline",
    ARTIST: "Terri Clark"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Go On",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "The Little Girl",
    ARTIST: "John Michael Montgomery"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Bent",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Original Prankster",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Bouncing Off The Ceiling (Upside Down)",
    ARTIST: "A*Teens"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Thank You In Advance",
    ARTIST: "Boyz II Men"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "A Little Gasoline",
    ARTIST: "Terri Clark"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "Feels Like Love",
    ARTIST: "Vince Gill"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Between Me And You",
    ARTIST: "Ja Rule Featuring Christina Milian"
  },
  {
    SONG_TITLE: "The Itch",
    ARTIST: "Vitamin C"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Pinch Me",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Georgia",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Girls Dem Sugar",
    ARTIST: "Beenie Man Featuring Mya"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "My Baby You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Liar",
    ARTIST: "Profyle"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Snoop Dogg",
    ARTIST: "Snoop Dogg"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "She Bangs",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Georgia",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You All Dat",
    ARTIST: "Baha Men With Imani Coppola"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Should've Told Me",
    ARTIST: "Kelly Price"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Gotta Tell You",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Meanwhile Back At The Ranch",
    ARTIST: "The Clark Family Experience"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oklahoma",
    ARTIST: "Billy Gilman"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "How Many Licks?",
    ARTIST: "Lil' Kim Featuring Sisqo"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "911",
    ARTIST: "Wyclef Jean Featuring Mary J. Blige"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "Debelah Morgan"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Stan",
    ARTIST: "Eminem Featuring Dido"
  },
  {
    SONG_TITLE: "Snoop Dogg",
    ARTIST: "Snoop Dogg"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "www.memory",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You All Dat",
    ARTIST: "Baha Men With Imani Coppola"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Georgia",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "Mamacita",
    ARTIST: "Public Announcement"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Just Another Day In Paradise",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Most Girls",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "The Call",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Get Crunked Up",
    ARTIST: "Iconz Featuring Tony Manshino"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "Georgia",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You All Dat",
    ARTIST: "Baha Men With Imani Coppola"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Without You",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Snoop Dogg",
    ARTIST: "Snoop Dogg"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "E.I.",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "The Call",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Shape Of My Heart",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Georgia",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Get Crunked Up",
    ARTIST: "Iconz Featuring Tony Manshino"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You All Dat",
    ARTIST: "Baha Men With Imani Coppola"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Still On Your Side",
    ARTIST: "BBMak"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "What's Your Fantasy",
    ARTIST: "Ludacris Featuring Shawnna"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Snoop Dogg",
    ARTIST: "Snoop Dogg"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Just Friends (Sunny)",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "I Wish",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "We Danced",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Rollin'",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "The Call",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Born To Fly",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Cross The Border",
    ARTIST: "Philly's Most Wanted"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "X",
    ARTIST: "Xzibit"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Get Crunked Up",
    ARTIST: "Iconz Featuring Tony Manshino"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Snoop Dogg",
    ARTIST: "Snoop Dogg"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "My Next Thirty Years",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Loser",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Lost It",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "So In Love With Two",
    ARTIST: "Mikaila"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "The Call",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Case Of The Ex (Whatcha Gonna Do)",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Project Chick",
    ARTIST: "Cash Money Millionaires"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Stronger",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Get Crunked Up",
    ARTIST: "Iconz Featuring Tony Manshino"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Cha-Cha Slide",
    ARTIST: "Mr. C The Slide Man"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Cross The Border",
    ARTIST: "Philly's Most Wanted"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Liquid Dreams",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Oh No",
    ARTIST: "Mos Def & Pharoahe Monch Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Is That Your Chick",
    ARTIST: "Memphis Bleek Featuring Jay-Z & Missy Elliott"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "The Call",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Lucky 4 You (Tonight I'm Just Me)",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Get Crunked Up",
    ARTIST: "Iconz Featuring Tony Manshino"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "A Good Day To Run",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Cross The Border",
    ARTIST: "Philly's Most Wanted"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My First Love",
    ARTIST: "Avant Featuring KeKe Wyatt"
  },
  {
    SONG_TITLE: "I Just Wanna Love U (Give It 2 Me)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "The Call",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "This Everyday Love",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "This I Promise You",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Beautiful Day",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Lucky 4 You (Tonight I'm Just Me)",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Wild Horses",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Cross The Border",
    ARTIST: "Philly's Most Wanted"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Hemorrhage (In My Hands)",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "By Your Side",
    ARTIST: "Sade"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "Ashes By Now",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Babylon",
    ARTIST: "David Gray"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Tell Her",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "With Arms Wide Open",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Lucky 4 You (Tonight I'm Just Me)",
    ARTIST: "SHeDAISY"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Cross The Border",
    ARTIST: "Philly's Most Wanted"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Independent Women Part I",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Crazy For This Girl",
    ARTIST: "Evan And Jaron"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Too Little Too Late",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "I Did It",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Emotional",
    ARTIST: "Carl Thomas"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "He Loves U Not",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Kryptonite",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Puppy Love",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Too Little Too Late",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "Ms. Jackson",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Bow Wow (That's My Name)",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "One Woman Man",
    ARTIST: "Dave Hollister"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Puppy Love",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Thank You For Loving Me",
    ARTIST: "Bon Jovi"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Too Little Too Late",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "It's Over Now",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "My Everything",
    ARTIST: "98 Degrees"
  },
  {
    SONG_TITLE: "No More (Baby I'ma Do Right)",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "It Wasn't Me",
    ARTIST: "Shaggy Featuring Ricardo \"RikRok\" Ducent"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Tell Me",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Rose Bouquet",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Danger (Been So Long)",
    ARTIST: "Mystikal Featuring Nivea"
  },
  {
    SONG_TITLE: "Could It Be",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "That's How I Beat Shaq",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Like, Wow!",
    ARTIST: "Leslie Carter"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Soul Sista",
    ARTIST: "Bilal"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Puppy Love",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Too Little Too Late",
    ARTIST: "Barenaked Ladies"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Love Don't Cost A Thing",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "But For The Grace Of God",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There Is No Arizona",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Pour Me",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Change The Game",
    ARTIST: "Jay-Z, Beanie Sigel And Memphis Bleek"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Rose Bouquet",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "That's How I Beat Shaq",
    ARTIST: "Aaron Carter"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Puppy Love",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "Everybody Doesn't",
    ARTIST: "Amanda"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Promise",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "You Make Me Sick",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Shouldn't Kiss Me Like This",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Rose Bouquet",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Puppy Love",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Lady (Hear Me Tonight)",
    ARTIST: "Modjo"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Don't Talk",
    ARTIST: "Jon B"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Request Line",
    ARTIST: "The Black Eyed Peas Featuring Macy Gray"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Chickenhead",
    ARTIST: "Project Pat"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Let's Get Dirty (I Can't Get In Da Club)",
    ARTIST: "Redman Featuring DJ Kool"
  },
  {
    SONG_TITLE: "Everybody Doesn't",
    ARTIST: "Amanda"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Free",
    ARTIST: "Mya"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Rose Bouquet",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Puppy Love",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Just Another Girl",
    ARTIST: "Monica"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "One More Time",
    ARTIST: "Daft Punk"
  },
  {
    SONG_TITLE: "She Misses Him",
    ARTIST: "Tim Rushlow"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "After Party",
    ARTIST: "Koffee Brown"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Imitation Of Life",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way You Love Me",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "Crazy",
    ARTIST: "K-Ci & JoJo"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Let's Get Dirty (I Can't Get In Da Club)",
    ARTIST: "Redman Featuring DJ Kool"
  },
  {
    SONG_TITLE: "Everybody Doesn't",
    ARTIST: "Amanda"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Guilty Until Proven Innocent",
    ARTIST: "Jay-Z Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Puppy Love",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "One Step Closer",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "Outside",
    ARTIST: "Aaron Lewis Of Staind With Fred Durst"
  },
  {
    SONG_TITLE: "One More Day",
    ARTIST: "Diamond Rio"
  },
  {
    SONG_TITLE: "Southern Hospitality",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Playas Gon' Play",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Stranger In My House",
    ARTIST: "Tamia"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Everybody Doesn't",
    ARTIST: "Amanda"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Imitation Of Life",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "If My Heart Had Wings",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Around The World (La La La La La)",
    ARTIST: "ATC"
  },
  {
    SONG_TITLE: "Breathless",
    ARTIST: "The Corrs"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "There It Is",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Butterfly",
    ARTIST: "Crazy Town"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Playas Gon' Play",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Everybody Doesn't",
    ARTIST: "Amanda"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Who I Am",
    ARTIST: "Jessica Andrews"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Imitation Of Life",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Jaded",
    ARTIST: "Aerosmith"
  },
  {
    SONG_TITLE: "Nobody Wants To Be Lonely",
    ARTIST: "Ricky Martin Duet With Christina Aguilera"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Best I Ever Had (Grey Sky Morning)",
    ARTIST: "Vertical Horizon"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "A Long Walk",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Loaded",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bizounce",
    ARTIST: "Olivia"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Imitation Of Life",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Who's That Girl?",
    ARTIST: "Eve"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Playas Gon' Play",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "Everybody Doesn't",
    ARTIST: "Amanda"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "Put It On Me",
    ARTIST: "Ja Rule Featuring Lil' Mo & Vita"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Again",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "Imitation Of Life",
    ARTIST: "R.E.M."
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Loaded",
    ARTIST: "Ricky Martin"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Playas Gon' Play",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Stutter",
    ARTIST: "Joe Featuring Mystikal"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Midwest Swing",
    ARTIST: "St. Lunatics"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Mrs. Steven Rudy",
    ARTIST: "Mark McGuinn"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Playas Gon' Play",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Over Yourself",
    ARTIST: "Eden's Crush"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Shaggy Featuring Rayvon"
  },
  {
    SONG_TITLE: "South Side",
    ARTIST: "Moby Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Midwest Swing",
    ARTIST: "St. Lunatics"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "Look At Us",
    ARTIST: "Sarina Paris"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love",
    ARTIST: "Musiq Soulchild"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Missing You",
    ARTIST: "Case"
  },
  {
    SONG_TITLE: "Playas Gon' Play",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Feels Like For A Girl",
    ARTIST: "Madonna"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "So Fresh, So Clean",
    ARTIST: "OutKast"
  },
  {
    SONG_TITLE: "Oochie Wally",
    ARTIST: "QB Finest Featuring Nas & Bravehearts"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Miss California",
    ARTIST: "Dante Thomas Featuring Pras"
  },
  {
    SONG_TITLE: "Just A Baby Boy",
    ARTIST: "Snoop Dogg Featuring Tyrese & Mr. Tan"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Midwest Swing",
    ARTIST: "St. Lunatics"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Dream On",
    ARTIST: "Depeche Mode"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "If I Fall You're Going Down With Me",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "It's A Great Day To Be Alive",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Never Had A Dream Come True",
    ARTIST: "S Club 7"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Playas Gon' Play",
    ARTIST: "3LW"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Ain't Nothing 'Bout You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Don't Happen Twice",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Take It To Da House",
    ARTIST: "Trick Daddy Featuring The SNS Express"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Midwest Swing",
    ARTIST: "St. Lunatics"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Miss California",
    ARTIST: "Dante Thomas Featuring Pras"
  },
  {
    SONG_TITLE: "Just A Baby Boy",
    ARTIST: "Snoop Dogg Featuring Tyrese & Mr. Tan"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Yellow",
    ARTIST: "Coldplay"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Why They Call It Falling",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Until The End Of Time",
    ARTIST: "2Pac"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Let's Get It",
    ARTIST: "Three The... G. Dep, P. Diddy & Black Rob"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Heard It All Before",
    ARTIST: "Sunshine Anderson"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Survivor",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Midwest Swing",
    ARTIST: "St. Lunatics"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Why They Call It Falling",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Miss California",
    ARTIST: "Dante Thomas Featuring Pras"
  },
  {
    SONG_TITLE: "Just A Baby Boy",
    ARTIST: "Snoop Dogg Featuring Tyrese & Mr. Tan"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Lay Low",
    ARTIST: "Snoop Dogg Featuring Master P, Nate Dogg, Butch Cassidy & Tha Eastsidaz"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Maybe I Deserve",
    ARTIST: "Tank"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "My Way",
    ARTIST: "Limp Bizkit"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Miss California",
    ARTIST: "Dante Thomas Featuring Pras"
  },
  {
    SONG_TITLE: "Just A Baby Boy",
    ARTIST: "Snoop Dogg Featuring Tyrese & Mr. Tan"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Why They Call It Falling",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Cry",
    ARTIST: "Ja Rule Featuring Lil' Mo"
  },
  {
    SONG_TITLE: "If You're Gone",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "I Hope You Dance",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "All For You",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Miss California",
    ARTIST: "Dante Thomas Featuring Pras"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Why They Call It Falling",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "If You Can Do Anything Else",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "I Like Them Girls",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Grown Men Don't Cry",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "I'm Like A Bird",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Play",
    ARTIST: "Jennifer Lopez"
  },
  {
    SONG_TITLE: "Right Where I Need To Be",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Ghetto Girls",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Don't Mess With The Radio",
    ARTIST: "Nivea"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There She Goes",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "When Somebody Loves You",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Why They Call It Falling",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Miss California",
    ARTIST: "Dante Thomas Featuring Pras"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "La Bomba",
    ARTIST: "Azul Azul"
  },
  {
    SONG_TITLE: "Fiesta",
    ARTIST: "R. Kelly Featuring Jay-Z"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "My Baby",
    ARTIST: "Lil' Romeo"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "Bia' Bia'",
    ARTIST: "Lil Jon & The East Side Boyz Featuring Ludacris, Too Short, Big Kap & Chyna Whyte"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "She Couldn't Change Me",
    ARTIST: "Montgomery Gentry"
  },
  {
    SONG_TITLE: "Superwoman Pt. II",
    ARTIST: "Lil' Mo Featuring Fabolous"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Don't Mess With The Radio",
    ARTIST: "Nivea"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Ghetto Girls",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Why They Call It Falling",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "Two People Fell In Love",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Lady Marmalade",
    ARTIST: "Christina Aguilera, Lil' Kim, Mya & P!nk"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Baby, Come Over (This Is Our Night)",
    ARTIST: "Samantha Mumba"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Angel",
    ARTIST: "Lionel Richie"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Bia' Bia'",
    ARTIST: "Lil Jon & The East Side Boyz Featuring Ludacris, Too Short, Big Kap & Chyna Whyte"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Why They Call It Falling",
    ARTIST: "Lee Ann Womack"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Don't Mess With The Radio",
    ARTIST: "Nivea"
  },
  {
    SONG_TITLE: "Ghetto Girls",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "I Could Not Ask For More",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Get Ur Freak On",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Ride Wit Me",
    ARTIST: "Nelly Featuring City Spud"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Pop",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Ghetto Girls",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Bia' Bia'",
    ARTIST: "Lil Jon & The East Side Boyz Featuring Ludacris, Too Short, Big Kap & Chyna Whyte"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Believe",
    ARTIST: "Faith Evans Featuring Carl Thomas"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "While You Loved Me",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "I'm Already There",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Mad Season",
    ARTIST: "matchbox twenty"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Wait A Minute",
    ARTIST: "Ray J Featuring Lil' Kim"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "The Rock Show",
    ARTIST: "Blink-182"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "This Is Me",
    ARTIST: "Dream"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "She's All I Got",
    ARTIST: "Jimmy Cozier"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Shine",
    ARTIST: "Lil' Wayne Featuring Baby, Mack 10 & Mickey"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Sandstorm",
    ARTIST: "Darude"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Downtime",
    ARTIST: "Jo Dee Messina"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Laredo",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Loverboy",
    ARTIST: "Mariah Carey Featuring Cameo"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "John Doe",
    ARTIST: "Public Announcement Featuring LeLe"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Purple Hills",
    ARTIST: "D12"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Shine",
    ARTIST: "Lil' Wayne Featuring Baby, Mack 10 & Mickey"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "My Projects",
    ARTIST: "Coo Coo Cal"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Irresistible",
    ARTIST: "Jessica Simpson"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "What It Is",
    ARTIST: "Violator Featuring Busta Rhymes"
  },
  {
    SONG_TITLE: "What Would You Do?",
    ARTIST: "City High"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Austin",
    ARTIST: "Blake Shelton"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "There You'll Be",
    ARTIST: "Faith Hill"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Dido"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "John Doe",
    ARTIST: "Public Announcement Featuring LeLe"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Shine",
    ARTIST: "Lil' Wayne Featuring Baby, Mack 10 & Mickey"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "More Than That",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "We Need A Resolution",
    ARTIST: "Aaliyah Featuring Timbaland"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Bootylicious",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Bad Boy For Life",
    ARTIST: "P. Diddy, Black Rob & Mark Curry"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Six-Pack Summer",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "John Doe",
    ARTIST: "Public Announcement Featuring LeLe"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Girl Next Door",
    ARTIST: "Musiq Soulchild Featuring Ayana"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Music",
    ARTIST: "Erick Sermon Featuring Marvin Gaye"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What I Really Meant To Say",
    ARTIST: "Cyndi Thomson"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "All Or Nothing",
    ARTIST: "O-Town"
  },
  {
    SONG_TITLE: "Ballin' Out Of Control",
    ARTIST: "Jermaine Dupri Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Start The Commotion",
    ARTIST: "The Wiseguys"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "The Space Between",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Because I Got High",
    ARTIST: "Afroman"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "When I Think About Angels",
    ARTIST: "Jamie O'Neal"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Here's To The Night",
    ARTIST: "Eve 6"
  },
  {
    SONG_TITLE: "I Wanna Be Bad",
    ARTIST: "Willa Ford"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Follow Me",
    ARTIST: "Uncle Kracker"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Peaches & Cream",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "When It's Over",
    ARTIST: "Sugar Ray"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Blacktop Ends",
    ARTIST: "Keith Urban"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Ballin' Out Of Control",
    ARTIST: "Jermaine Dupri Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I'm Just Talkin' About Tonight",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Clint Eastwood",
    ARTIST: "Gorillaz"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Area Codes",
    ARTIST: "Ludacris Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Someone To Call My Lover",
    ARTIST: "Janet"
  },
  {
    SONG_TITLE: "Schism",
    ARTIST: "Tool"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Ballin' Out Of Control",
    ARTIST: "Jermaine Dupri Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Flavor Of The Weak",
    ARTIST: "American Hi-Fi"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Ballin' Out Of Control",
    ARTIST: "Jermaine Dupri Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Just In Case",
    ARTIST: "Jaheim"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Drive",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "I'll Fly With You (L'amour Toujours)",
    ARTIST: "Gigi D'Agostino"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "Contagious",
    ARTIST: "The Isley Brothers Featuring Ronald Isley"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Way",
    ARTIST: "Jill Scott"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Set It Off",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "When God-Fearin' Women Get The Blues",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Castles In The Sky",
    ARTIST: "Ian Van Dahl Featuring Marsha"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Ballin' Out Of Control",
    ARTIST: "Jermaine Dupri Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Remind Me",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Only In America",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Can't Deny It",
    ARTIST: "Fabolous Featuring Nate Dogg"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "One Minute Man",
    ARTIST: "Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm A Thug",
    ARTIST: "Trick Daddy"
  },
  {
    SONG_TITLE: "I'm A Believer",
    ARTIST: "Smash Mouth"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Take You Out",
    ARTIST: "Luther Vandross"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Bad Day",
    ARTIST: "Fuel"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "What's Going On",
    ARTIST: "All Star Tribute"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Izzo (H.O.V.A.)",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "On A Night Like This",
    ARTIST: "Trick Pony"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Fill Me In",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "Let Me Blow Ya Mind",
    ARTIST: "Eve Featuring Gwen Stefani"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Angels In Waiting",
    ARTIST: "Tammy Cochran"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "Be Like That",
    ARTIST: "3 Doors Down"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Freedom",
    ARTIST: "Paul McCartney"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Party At",
    ARTIST: "Jagged Edge With Nelly"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "I Would've Loved You Anyway",
    ARTIST: "Trisha Yearwood"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Crawling",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Freedom",
    ARTIST: "Paul McCartney"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Diddy",
    ARTIST: "P. Diddy Featuring The Neptunes"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Every Other Time",
    ARTIST: "LFO"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Hit 'Em Up Style (Oops!)",
    ARTIST: "Blu Cantrell"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Fat Lip",
    ARTIST: "Sum 41"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Angry All The Time",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Never Too Far/Hero Medley",
    ARTIST: "Mariah Carey"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Raise Up",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "God Bless America",
    ARTIST: "Daniel Rodriguez"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Who We Be",
    ARTIST: "DMX"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Feelin' On Yo Booty",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "What If",
    ARTIST: "Babyface"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "AM To PM",
    ARTIST: "Christina Milian"
  },
  {
    SONG_TITLE: "Smooth Criminal",
    ARTIST: "Alien Ant Farm"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge & Fundisha"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Never Too Far/Hero Medley",
    ARTIST: "Mariah Carey"
  },
  {
    SONG_TITLE: "God Bless America",
    ARTIST: "Daniel Rodriguez"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where I Come From",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "The Star Spangled Banner",
    ARTIST: "Whitney Houston"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge & Fundisha"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Never Too Far/Hero Medley",
    ARTIST: "Mariah Carey"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Ugly",
    ARTIST: "Bubba Sparxxx"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Everywhere",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Do U Wanna Roll (Dolittle Theme)",
    ARTIST: "R.L., Snoop Dogg & Lil' Kim"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Runaway",
    ARTIST: "NB Ridaz Featuring Angelina"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Mobb Deep Featuring Vita & Noyd"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "You Rock My World",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge & Fundisha"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "God Bless The USA",
    ARTIST: "Lee Greenwood"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Lifetime",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm A Slave 4 U",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "Dance With Me",
    ARTIST: "112"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Runaway",
    ARTIST: "NB Ridaz Featuring Angelina"
  },
  {
    SONG_TITLE: "Burn",
    ARTIST: "Mobb Deep Featuring Vita & Noyd"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge & Fundisha"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "Love Of A Woman",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Love Of My Life",
    ARTIST: "Brian McKnight"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What Am I Gonna Do",
    ARTIST: "Tyrese"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "I'm A Survivor",
    ARTIST: "Reba"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "My Sweet Lord",
    ARTIST: "George Harrison"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "I Miss You",
    ARTIST: "DMX Featuring Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish You Were Here",
    ARTIST: "Incubus"
  },
  {
    SONG_TITLE: "With Me",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Turn Off The Light",
    ARTIST: "Nelly Furtado"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girls, Girls, Girls",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Runaway",
    ARTIST: "NB Ridaz Featuring Angelina"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Thank You",
    ARTIST: "Lil Bow Wow Featuring Jagged Edge & Fundisha"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "I'm Real",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Fallin'",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Stuck In A Moment You Can't Get Out Of",
    ARTIST: "U2"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Son Of A Gun",
    ARTIST: "Janet Featuring Missy Elliott, P. Diddy & Carly Simon"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Only Time",
    ARTIST: "Enya"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "I Miss You",
    ARTIST: "DMX Featuring Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Fade",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Runaway",
    ARTIST: "NB Ridaz Featuring Angelina"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Emotion",
    ARTIST: "Destiny's Child"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Differences",
    ARTIST: "Ginuwine"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "You Gets No Love",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "I Miss You",
    ARTIST: "DMX Featuring Faith Evans"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "From Her Mama (Mama Got A**)",
    ARTIST: "Juvenile"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Livin' It Up",
    ARTIST: "Ja Rule Featuring Case"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Hanging By A Moment",
    ARTIST: "Lifehouse"
  },
  {
    SONG_TITLE: "Fatty Girl",
    ARTIST: "Ludacris, LL Cool J & Keith Murray"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Dig In",
    ARTIST: "Lenny Kravitz"
  },
  {
    SONG_TITLE: "Control",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Rock The Boat",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "I Miss You",
    ARTIST: "DMX Featuring Faith Evans"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Goodbye",
    ARTIST: "Jagged Edge"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "I Wanna Talk About Me",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "I Do!!",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "It's Been Awhile",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "#1",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Insatiable",
    ARTIST: "Darren Hayes"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Miss You",
    ARTIST: "DMX Featuring Faith Evans"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where The Stars And Stripes And The Eagle Fly",
    ARTIST: "Aaron Tippin"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Drowning",
    ARTIST: "Backstreet Boys"
  },
  {
    SONG_TITLE: "I'm Tryin'",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Gone",
    ARTIST: "'N Sync"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Ooohhhwee",
    ARTIST: "Master P Featuring Weebie"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "A Woman's Worth",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Run",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Riding With Private Malone",
    ARTIST: "David Ball"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "Part II",
    ARTIST: "Method Man & Redman"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Knoc",
    ARTIST: "Knoc-Turn'Al With Dr. Dre & Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Insatiable",
    ARTIST: "Darren Hayes"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrapped Up In You",
    ARTIST: "Garth Brooks"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Miss You",
    ARTIST: "DMX Featuring Faith Evans"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "We Thuggin'",
    ARTIST: "Fat Joe Featuring R. Kelly"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Let's Stay Home Tonight",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Defy You",
    ARTIST: "The Offspring"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Alive",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "No Matta What (Party All Night)",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "Knoc",
    ARTIST: "Knoc-Turn'Al With Dr. Dre & Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Insatiable",
    ARTIST: "Darren Hayes"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Miss You",
    ARTIST: "DMX Featuring Faith Evans"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Just Let Me Be In Love",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Drops Of Jupiter (Tell Me)",
    ARTIST: "Train"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Break Ya Neck",
    ARTIST: "Busta Rhymes"
  },
  {
    SONG_TITLE: "Brotha",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Caramel",
    ARTIST: "City High Featuring Eve"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "No Matta What (Party All Night)",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "Knoc",
    ARTIST: "Knoc-Turn'Al With Dr. Dre & Missy \"Misdemeanor\" Elliott"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Insatiable",
    ARTIST: "Darren Hayes"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Jigga",
    ARTIST: "JAY-Z"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Butterflies",
    ARTIST: "Michael Jackson"
  },
  {
    SONG_TITLE: "Standing Still",
    ARTIST: "Jewel"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Roll Out (My Business)",
    ARTIST: "Ludacris"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Feel The Girl",
    ARTIST: "Ms. Jade"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Insatiable",
    ARTIST: "Darren Hayes"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "Wrapped Around",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "No Matta What (Party All Night)",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "In Another World",
    ARTIST: "Joe Diffie"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Round And Round",
    ARTIST: "Jonell & Method Man"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Song For The Lonely",
    ARTIST: "Cher"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Closet Freak",
    ARTIST: "Cee-Lo"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "No Matta What (Party All Night)",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Feel The Girl",
    ARTIST: "Ms. Jade"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Whenever, Wherever",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Where Were You (When The World Stopped Turning)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Insatiable",
    ARTIST: "Darren Hayes"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Get The Party Started",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Don't You Forget It",
    ARTIST: "Glenn Lewis"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Take Ya Home",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Song For The Lonely",
    ARTIST: "Cher"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "No Matta What (Party All Night)",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young'n (Holla Back)",
    ARTIST: "Fabolous"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Closet Freak",
    ARTIST: "Cee-Lo"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "Feel The Girl",
    ARTIST: "Ms. Jade"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Insatiable",
    ARTIST: "Darren Hayes"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "Good Morning Beautiful",
    ARTIST: "Steve Holy"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "7 Days",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Bring On The Rain",
    ARTIST: "Jo Dee Messina With Tim McGraw"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Tell Me What's It Gonna Be",
    ARTIST: "Brian McKnight Featuring Jermaine Dupri"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Take Ya Home",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Feel The Girl",
    ARTIST: "Ms. Jade"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Wrong Impression",
    ARTIST: "Natalie Imbruglia"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Song For The Lonely",
    ARTIST: "Cher"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "No Matta What (Party All Night)",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Got Ur Self A...",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Hey Baby",
    ARTIST: "No Doubt Featuring Bounty Killer"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Hush Lil' Lady",
    ARTIST: "Corey Featuring Lil' Romeo"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Bouncin' Back (Bumpin' Me Against The Wall)",
    ARTIST: "Mystikal"
  },
  {
    SONG_TITLE: "Take Away",
    ARTIST: "Missy \"Misdemeanor\" Elliott Featuring Ginuwine & Tweet"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Overprotected",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Take A Message",
    ARTIST: "Remy Shand"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "The World's Greatest",
    ARTIST: "R. Kelly"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Superman (It's Not Easy)",
    ARTIST: "Five For Fighting"
  },
  {
    SONG_TITLE: "Closet Freak",
    ARTIST: "Cee-Lo"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Be Here",
    ARTIST: "Raphael Saadiq Featuring D'Angelo"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Tell Me What's It Gonna Be",
    ARTIST: "Brian McKnight Featuring Jermaine Dupri"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Take Ya Home",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "No Matta What (Party All Night)",
    ARTIST: "Toya"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "U Got It Bad",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Song For The Lonely",
    ARTIST: "Cher"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "No More Drama",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Can't Fight The Moonlight",
    ARTIST: "LeAnn Rimes"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Long Goodbye",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "The Whole World",
    ARTIST: "OutKast Featuring Killer Mike"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I Told Y'all",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Overprotected",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Take A Message",
    ARTIST: "Remy Shand"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Be Here",
    ARTIST: "Raphael Saadiq Featuring D'Angelo"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Tell Me What's It Gonna Be",
    ARTIST: "Brian McKnight Featuring Jermaine Dupri"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hey Luv (Anything)",
    ARTIST: "Mobb Deep Featuring 112"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Take Ya Home",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Song For The Lonely",
    ARTIST: "Cher"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Lights, Camera, Action!",
    ARTIST: "Mr. Cheeks"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "Family Affair",
    ARTIST: "Mary J. Blige"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Any Other Night",
    ARTIST: "Sharissa"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "I Told Y'all",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Overprotected",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Take A Message",
    ARTIST: "Remy Shand"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Tell Me What's It Gonna Be",
    ARTIST: "Brian McKnight Featuring Jermaine Dupri"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Take Ya Home",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "My Sacrifice",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Song For The Lonely",
    ARTIST: "Cher"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Welcome To Atlanta",
    ARTIST: "Jermaine Dupri & Ludacris"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "So Complicated",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Take You Home With Me a.k.a. Body",
    ARTIST: "R. Kelly & Jay-Z"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Chop Suey",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Always On Time",
    ARTIST: "Ja Rule Featuring Ashanti"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Whoa Now",
    ARTIST: "B Rich"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "I Told Y'all",
    ARTIST: "Petey Pablo"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Take A Message",
    ARTIST: "Remy Shand"
  },
  {
    SONG_TITLE: "Overprotected",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Tell Me What's It Gonna Be",
    ARTIST: "Brian McKnight Featuring Jermaine Dupri"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "It's Goin' Down",
    ARTIST: "X-Ecutioners"
  },
  {
    SONG_TITLE: "Nothing In This World",
    ARTIST: "KeKe Wyatt Featuring Avant"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Take Ya Home",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "That's Just Jessie",
    ARTIST: "Kevin Denney"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Some Days You Gotta Dance",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Blessed",
    ARTIST: "Martina McBride"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "The Cowboy In Me",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Sugarhigh",
    ARTIST: "Jade Anderson"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Whoa Now",
    ARTIST: "B Rich"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Take A Message",
    ARTIST: "Remy Shand"
  },
  {
    SONG_TITLE: "Overprotected",
    ARTIST: "Britney Spears"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Take Ya Home",
    ARTIST: "Lil Bow Wow"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "What About Us?",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Rapture (Tastes So Sweet)",
    ARTIST: "iio"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Sugarhigh",
    ARTIST: "Jade Anderson"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Uh Huh",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Never",
    ARTIST: "Amanda Perez"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "How Come You Don't Call Me",
    ARTIST: "Alicia Keys"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Take A Message",
    ARTIST: "Remy Shand"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "I Need A Girl (Part Two)",
    ARTIST: "P. Diddy & Ginuwine Featuring Loon, Mario Winans & Tammy Ruggeri"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Can't Get You Out Of My Head",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Move B***h",
    ARTIST: "Ludacris Featuring Mystikal & Infamous 2.0"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Day + Night",
    ARTIST: "Isyss Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "Modern Day Bonnie And Clyde",
    ARTIST: "Travis Tritt"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I'm Movin' On",
    ARTIST: "Rascal Flatts"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "Video",
    ARTIST: "India.Arie"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "By The Way",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "I Miss My Friend",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "I Need A Girl (Part Two)",
    ARTIST: "P. Diddy & Ginuwine Featuring Loon, Mario Winans & Tammy Ruggeri"
  },
  {
    SONG_TITLE: "Move B***h",
    ARTIST: "Ludacris Featuring Mystikal & Infamous 2.0"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Where Are You Going",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Day + Night",
    ARTIST: "Isyss Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Youth Of The Nation",
    ARTIST: "P.O.D."
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Hands Clean",
    ARTIST: "Alanis Morissette"
  },
  {
    SONG_TITLE: "I Love You",
    ARTIST: "Faith Evans"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "Long Time Gone",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "Down 4 U",
    ARTIST: "Irv Gotti Presents The Inc. Featuring Ja Rule, Ashanti, Charli Baltimore & Vita"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Oops (Oh My)",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "If I Could Go!",
    ARTIST: "Angie Martinez Featuring Lil' Mo & Sacario"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "For All Time",
    ARTIST: "Soluna"
  },
  {
    SONG_TITLE: "I Miss My Friend",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "By The Way",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "I Need A Girl (Part Two)",
    ARTIST: "P. Diddy & Ginuwine Featuring Loon, Mario Winans & Tammy Ruggeri"
  },
  {
    SONG_TITLE: "Move B***h",
    ARTIST: "Ludacris Featuring Mystikal & Infamous 2.0"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Young",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Where Are You Going",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "Day + Night",
    ARTIST: "Isyss Featuring Jadakiss"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "Girlfriend",
    ARTIST: "'N Sync Featuring Nelly"
  },
  {
    SONG_TITLE: "I Breathe In, I Breathe Out",
    ARTIST: "Chris Cagle"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Black Suits Comin' (Nod Ya Head)",
    ARTIST: "Will Smith Featuring Tra-Knox"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "Roc The Mic",
    ARTIST: "Beanie Sigel & Freeway"
  },
  {
    SONG_TITLE: "Saturday (Oooh! Ooooh!)",
    ARTIST: "Ludacris Featuring Sleepy Brown"
  },
  {
    SONG_TITLE: "Love At First Sight",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "This Woman's Work",
    ARTIST: "Maxwell"
  },
  {
    SONG_TITLE: "Ain't It Funny",
    ARTIST: "Jennifer Lopez Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Down 4 U",
    ARTIST: "Irv Gotti Presents The Inc. Featuring Ja Rule, Ashanti, Charli Baltimore & Vita"
  },
  {
    SONG_TITLE: "Long Time Gone",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "If I Could Go!",
    ARTIST: "Angie Martinez Featuring Lil' Mo & Sacario"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "For All Time",
    ARTIST: "Soluna"
  },
  {
    SONG_TITLE: "I Miss My Friend",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Where Are You Going",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "By The Way",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "I Need A Girl (Part Two)",
    ARTIST: "P. Diddy & Ginuwine Featuring Loon, Mario Winans & Tammy Ruggeri"
  },
  {
    SONG_TITLE: "Move B***h",
    ARTIST: "Ludacris Featuring Mystikal & Infamous 2.0"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Tonight I Wanna Be Your Man",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Day + Night",
    ARTIST: "Isyss Featuring Jadakiss"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "My List",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "Just Like A Pill",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "Ten Rounds With Jose Cuervo",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "Running Away",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "Crawling In The Dark",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Anything",
    ARTIST: "Jaheim Featuring Next"
  },
  {
    SONG_TITLE: "That's When I Love You",
    ARTIST: "Phil Vassar"
  },
  {
    SONG_TITLE: "I've Got You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "I Need A Girl (Part Two)",
    ARTIST: "P. Diddy & Ginuwine Featuring Loon, Mario Winans & Tammy Ruggeri"
  },
  {
    SONG_TITLE: "Move B***h",
    ARTIST: "Ludacris Featuring Mystikal & Infamous 2.0"
  },
  {
    SONG_TITLE: "Love At First Sight",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Down 4 U",
    ARTIST: "Irv Gotti Presents The Inc. Featuring Ja Rule, Ashanti, Charli Baltimore & Vita"
  },
  {
    SONG_TITLE: "Long Time Gone",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "For All Time",
    ARTIST: "Soluna"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Where Are You Going",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Black Suits Comin' (Nod Ya Head)",
    ARTIST: "Will Smith Featuring Tra-Knox"
  },
  {
    SONG_TITLE: "If I Could Go!",
    ARTIST: "Angie Martinez Featuring Lil' Mo & Sacario"
  },
  {
    SONG_TITLE: "I Miss My Friend",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Tonight I Wanna Be Your Man",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Unbroken",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "By The Way",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Guess Who's Back",
    ARTIST: "Scarface Featuring Jay-Z & Beanie Sigel"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Escape",
    ARTIST: "Enrique Iglesias"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Way Of Life",
    ARTIST: "Lil Wayne"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "What If She's An Angel",
    ARTIST: "Tommy Shane Steiner"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "A Little Less Conversation",
    ARTIST: "Elvis Presley vs JXL"
  },
  {
    SONG_TITLE: "Dilemma",
    ARTIST: "Nelly Featuring Kelly Rowland"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Gangsta Lovin'",
    ARTIST: "Eve Featuring Alicia Keys"
  },
  {
    SONG_TITLE: "Papa Don't Preach",
    ARTIST: "Kelly Osbourne"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Pass The Courvoisier Part II",
    ARTIST: "Busta Rhymes Featuring P. Diddy & Pharrell"
  },
  {
    SONG_TITLE: "A New Day Has Come",
    ARTIST: "Celine Dion"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "In Da Wind",
    ARTIST: "Trick Daddy Featuring Cee-Lo & Big Boi"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Just Like A Pill",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "One Mic",
    ARTIST: "Nas"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Running Away",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Ten Rounds With Jose Cuervo",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "If I Could Go!",
    ARTIST: "Angie Martinez Featuring Lil' Mo & Sacario"
  },
  {
    SONG_TITLE: "I Miss My Friend",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "I've Got You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Love At First Sight",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Where Are You Going",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Black Suits Comin' (Nod Ya Head)",
    ARTIST: "Will Smith Featuring Tra-Knox"
  },
  {
    SONG_TITLE: "Down 4 U",
    ARTIST: "Irv Gotti Presents The Inc. Featuring Ja Rule, Ashanti, Charli Baltimore & Vita"
  },
  {
    SONG_TITLE: "Long Time Gone",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "For All Time",
    ARTIST: "Soluna"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "Tonight I Wanna Be Your Man",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Two Wrongs",
    ARTIST: "Wyclef Jean Featuring Claudette Ortiz"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Unbroken",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "I Need A Girl (Part Two)",
    ARTIST: "P. Diddy & Ginuwine Featuring Loon, Mario Winans & Tammy Ruggeri"
  },
  {
    SONG_TITLE: "Move B***h",
    ARTIST: "Ludacris Featuring Mystikal & Infamous 2.0"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "By The Way",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "I Don't Want You To Go",
    ARTIST: "Carolyn Dawn Johnson"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "For You",
    ARTIST: "Staind"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "More Than A Woman",
    ARTIST: "Aaliyah"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Way Of Life",
    ARTIST: "Lil Wayne"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "She Loves Me Not",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "I Keep Looking",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Good Times",
    ARTIST: "Styles"
  },
  {
    SONG_TITLE: "Help Me Understand",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "Awnaw",
    ARTIST: "Nappy Roots"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "Hate To Say I Told You So",
    ARTIST: "The Hives"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Tainted",
    ARTIST: "Slum Village Featuring Dwele"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Gangsta Lovin'",
    ARTIST: "Eve Featuring Alicia Keys"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "Po' Folks",
    ARTIST: "Nappy Roots Featuring Anthony Hamilton"
  },
  {
    SONG_TITLE: "Dilemma",
    ARTIST: "Nelly Featuring Kelly Rowland"
  },
  {
    SONG_TITLE: "A Little Less Conversation",
    ARTIST: "Elvis Presley vs JXL"
  },
  {
    SONG_TITLE: "Papa Don't Preach",
    ARTIST: "Kelly Osbourne"
  },
  {
    SONG_TITLE: "Down 4 U",
    ARTIST: "Irv Gotti Presents The Inc. Featuring Ja Rule, Ashanti, Charli Baltimore & Vita"
  },
  {
    SONG_TITLE: "Long Time Gone",
    ARTIST: "Dixie Chicks"
  },
  {
    SONG_TITLE: "For All Time",
    ARTIST: "Soluna"
  },
  {
    SONG_TITLE: "If I Could Go!",
    ARTIST: "Angie Martinez Featuring Lil' Mo & Sacario"
  },
  {
    SONG_TITLE: "In Da Wind",
    ARTIST: "Trick Daddy Featuring Cee-Lo & Big Boi"
  },
  {
    SONG_TITLE: "Just Like A Pill",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Where Are You Going",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  },
  {
    SONG_TITLE: "Without Me",
    ARTIST: "Eminem"
  },
  {
    SONG_TITLE: "Running Away",
    ARTIST: "Hoobastank"
  },
  {
    SONG_TITLE: "Ten Rounds With Jose Cuervo",
    ARTIST: "Tracy Byrd"
  },
  {
    SONG_TITLE: "I've Got You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Love At First Sight",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Move B***h",
    ARTIST: "Ludacris Featuring Mystikal & Infamous 2.0"
  },
  {
    SONG_TITLE: "Heaven",
    ARTIST: "DJ Sammy & Yanou Featuring Do"
  },
  {
    SONG_TITLE: "No Such Thing",
    ARTIST: "John Mayer"
  },
  {
    SONG_TITLE: "Happy",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Tonight I Wanna Be Your Man",
    ARTIST: "Andy Griggs"
  },
  {
    SONG_TITLE: "Too Bad",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Toxicity",
    ARTIST: "System Of A Down"
  },
  {
    SONG_TITLE: "Two Wrongs",
    ARTIST: "Wyclef Jean Featuring Claudette Ortiz"
  },
  {
    SONG_TITLE: "U Don't Have To Call",
    ARTIST: "Usher"
  },
  {
    SONG_TITLE: "Unbroken",
    ARTIST: "Tim McGraw"
  },
  {
    SONG_TITLE: "Underneath Your Clothes",
    ARTIST: "Shakira"
  },
  {
    SONG_TITLE: "Down A** Chick",
    ARTIST: "Ja Rule Featuring Charli \"Chuck\" Baltimore"
  },
  {
    SONG_TITLE: "Living And Living Well",
    ARTIST: "George Strait"
  },
  {
    SONG_TITLE: "I Don't Have To Be Me ('til Monday)",
    ARTIST: "Steve Azar"
  },
  {
    SONG_TITLE: "Feels Good (Don't Worry Bout A Thing)",
    ARTIST: "Naughty By Nature Featuring 3LW"
  },
  {
    SONG_TITLE: "halfcrazy",
    ARTIST: "Musiq"
  },
  {
    SONG_TITLE: "Here Is Gone",
    ARTIST: "Goo Goo Dolls"
  },
  {
    SONG_TITLE: "Makin' Good Love",
    ARTIST: "Avant"
  },
  {
    SONG_TITLE: "I Miss My Friend",
    ARTIST: "Darryl Worley"
  },
  {
    SONG_TITLE: "I Need A Girl (Part Two)",
    ARTIST: "P. Diddy & Ginuwine Featuring Loon, Mario Winans & Tammy Ruggeri"
  },
  {
    SONG_TITLE: "Just A Friend 2002",
    ARTIST: "Mario"
  },
  {
    SONG_TITLE: "Nothin'",
    ARTIST: "N.O.R.E."
  },
  {
    SONG_TITLE: "My Heart Is Lost To You",
    ARTIST: "Brooks & Dunn"
  },
  {
    SONG_TITLE: "Grindin'",
    ARTIST: "Clipse"
  },
  {
    SONG_TITLE: "My Neck, My Back",
    ARTIST: "Khia Featuring DSD"
  },
  {
    SONG_TITLE: "Drift & Die",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "Here To Stay",
    ARTIST: "Korn"
  },
  {
    SONG_TITLE: "Hero",
    ARTIST: "Chad Kroeger Featuring Josey Scott"
  },
  {
    SONG_TITLE: "Not A Day Goes By",
    ARTIST: "Lonestar"
  },
  {
    SONG_TITLE: "Hot In Herre",
    ARTIST: "Nelly"
  },
  {
    SONG_TITLE: "Full Moon",
    ARTIST: "Brandy"
  },
  {
    SONG_TITLE: "I Need A Girl (Part One)",
    ARTIST: "P. Diddy Featuring Usher & Loon"
  },
  {
    SONG_TITLE: "Drive (For Daddy Gene)",
    ARTIST: "Alan Jackson"
  },
  {
    SONG_TITLE: "I Should Be Sleeping",
    ARTIST: "Emerson Drive"
  },
  {
    SONG_TITLE: "Foolish",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "By The Way",
    ARTIST: "Red Hot Chili Peppers"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Walking Away",
    ARTIST: "Craig David"
  },
  {
    SONG_TITLE: "Wasting My Time",
    ARTIST: "Default"
  },
  {
    SONG_TITLE: "Way Of Life",
    ARTIST: "Lil Wayne"
  },
  {
    SONG_TITLE: "What If A Woman",
    ARTIST: "Joe"
  },
  {
    SONG_TITLE: "I'm Gonna Miss Her (The Fishin' Song)",
    ARTIST: "Brad Paisley"
  },
  {
    SONG_TITLE: "Gimme The Light",
    ARTIST: "Sean Paul"
  },
  {
    SONG_TITLE: "I'm Gonna Be Alright",
    ARTIST: "Jennifer Lopez Featuring Nas"
  },
  {
    SONG_TITLE: "Gots Ta Be",
    ARTIST: "B2K"
  },
  {
    SONG_TITLE: "Oh Boy",
    ARTIST: "Cam'Ron Featuring Juelz Santana"
  },
  {
    SONG_TITLE: "Hella Good",
    ARTIST: "No Doubt"
  },
  {
    SONG_TITLE: "In The End",
    ARTIST: "Linkin Park"
  },
  {
    SONG_TITLE: "How You Remind Me",
    ARTIST: "Nickelback"
  },
  {
    SONG_TITLE: "Give It To Her",
    ARTIST: "Tanto Metro & Devonte"
  },
  {
    SONG_TITLE: "Courtesy Of The Red, White And Blue (The Angry American)",
    ARTIST: "Toby Keith"
  },
  {
    SONG_TITLE: "One Last Breath",
    ARTIST: "Creed"
  },
  {
    SONG_TITLE: "Rainy Dayz",
    ARTIST: "Mary J. Blige Featuring Ja Rule"
  },
  {
    SONG_TITLE: "Days Go By",
    ARTIST: "Dirty Vegas"
  },
  {
    SONG_TITLE: "Baby",
    ARTIST: "Ashanti"
  },
  {
    SONG_TITLE: "Gotta Get Thru This",
    ARTIST: "Daniel Bedingfield"
  },
  {
    SONG_TITLE: "Complicated",
    ARTIST: "Avril Lavigne"
  },
  {
    SONG_TITLE: "Call Me",
    ARTIST: "Tweet"
  },
  {
    SONG_TITLE: "The Good Stuff",
    ARTIST: "Kenny Chesney"
  },
  {
    SONG_TITLE: "The Impossible",
    ARTIST: "Joe Nichols"
  },
  {
    SONG_TITLE: "The Middle",
    ARTIST: "Jimmy Eat World"
  },
  {
    SONG_TITLE: "Someone To Love You",
    ARTIST: "Ruff Endz"
  },
  {
    SONG_TITLE: "The One",
    ARTIST: "Gary Allan"
  },
  {
    SONG_TITLE: "Don't Let Me Get Me",
    ARTIST: "P!nk"
  },
  {
    SONG_TITLE: "A Thousand Miles",
    ARTIST: "Vanessa Carlton"
  },
  {
    SONG_TITLE: "All You Wanted",
    ARTIST: "Michelle Branch"
  },
  {
    SONG_TITLE: "Blurry",
    ARTIST: "Puddle Of Mudd"
  },
  {
    SONG_TITLE: "I Keep Looking",
    ARTIST: "Sara Evans"
  },
  {
    SONG_TITLE: "Good Times",
    ARTIST: "Styles"
  },
  {
    SONG_TITLE: "Help Me Understand",
    ARTIST: "Trace Adkins"
  },
  {
    SONG_TITLE: "Hate To Say I Told You So",
    ARTIST: "The Hives"
  },
  {
    SONG_TITLE: "Don't Say Goodbye",
    ARTIST: "Paulina Rubio"
  },
  {
    SONG_TITLE: "Say I Yi Yi",
    ARTIST: "Ying Yang Twins"
  },
  {
    SONG_TITLE: "Addictive",
    ARTIST: "Truth Hurts Featuring Rakim"
  },
  {
    SONG_TITLE: "Still Fly",
    ARTIST: "Big Tymers"
  },
  {
    SONG_TITLE: "Soak Up The Sun",
    ARTIST: "Sheryl Crow"
  },
  {
    SONG_TITLE: "She Loves Me Not",
    ARTIST: "Papa Roach"
  },
  {
    SONG_TITLE: "Tainted",
    ARTIST: "Slum Village Featuring Dwele"
  },
  {
    SONG_TITLE: "Po' Folks",
    ARTIST: "Nappy Roots Featuring Anthony Hamilton"
  },
  {
    SONG_TITLE: "I've Got You",
    ARTIST: "Marc Anthony"
  },
  {
    SONG_TITLE: "Love At First Sight",
    ARTIST: "Kylie Minogue"
  },
  {
    SONG_TITLE: "Gangsta Lovin'",
    ARTIST: "Eve Featuring Alicia Keys"
  },
  {
    SONG_TITLE: "You Know That I Love You",
    ARTIST: "Donell Jones"
  },
  {
    SONG_TITLE: "Quitame Ese Hombre",
    ARTIST: "Pilar Montenegro"
  },
  {
    SONG_TITLE: "What's Luv?",
    ARTIST: "Fat Joe Featuring Ashanti"
  },
  {
    SONG_TITLE: "When You Lie Next To Me",
    ARTIST: "Kellie Coffey"
  },
  {
    SONG_TITLE: "Where Are You Going",
    ARTIST: "Dave Matthews Band"
  },
  {
    SONG_TITLE: "Where Do We Go From Here",
    ARTIST: "Filter"
  },
  {
    SONG_TITLE: "Wherever You Will Go",
    ARTIST: "The Calling"
  },
  {
    SONG_TITLE: "Why Don't We Fall In Love",
    ARTIST: "Amerie"
  },
  {
    SONG_TITLE: "Wish I Didn't Miss You",
    ARTIST: "Angie Stone"
  }
]

Songslist.create(songslist)
  .then(songslistFromDB => {
    console.log(`Created ${songslistFromDB.length} songslist`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating songs from the DB: ${err}`));