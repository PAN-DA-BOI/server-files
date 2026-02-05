// Collapsible sections
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = "0";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//"#-#": { title: "", content: ""},
// Lesson content
const lessons = {
  "1-1": { title: "Introduction", content: "<h1>Intro</h1><p>the operations bible is a compilation of all the black and grey of the world that I know. From smoke gernades to how to setup a pulley to hoist someone, this handbook will go over how to conduct proper recon, make ordinance, explain KIT, and much more. </p>" },
  "1-2": { title: "Chapters", content: "<ul><li>chapter 1  -  Intro</li><li>chapter 2  -  COMMS</li><li>chapter 3  -  Operations</li><li>chapter 4  -  Ordinance</li><li>chapter 5  -  KIT</li><li>chapter 6  -  Small Arms Training</li><li>chapter 7  -  Unarmmed Combat</li><li>chapter 8  -  Skills and Knowledge</li><li>chapter 9  -  </li><li>chapter 10 -  </li></ul>"},
  "2-1": { title: "Intro To COMMS", content: "<h3>Intro</h3><p>How Communication is used and spread is extremely important. In a four or less walkie setup, we use the 'Four Way Radio' setup. If anyone splits off and we have no radios, we use the 'No Radio' setup.</p>" },
  "2-2": { title: "'Four Way Radio' setup", content: "<p>In a Four Way Radio setup, everyone pairs up with one of the four 'Radio Operators'. If you are not operating a radio, you are a 'follower'. Followers don't have to worry about too much except listening to their Radio Operator and making sure not to cause a scene. Radio Operators, however, have quite a few responsibilities. In a Four Radio setup, each Operator takes a designation based on their OPS responsibilities. The names we use are the NATO phonetic alphabet for the four cardinal directions. North - November, East - Echo, South - Sierra, West - Whiskey. Each of the four teams has very specific jobs. Please know them before joining a team. Team November's responsibilities consist of collecting things left behind, important documents, hard drives, and things that shouldn’t be left behind(operation manuals, identifying marks, or evidence). Team Echo's responsibilities consist of checking exits, ways in and out, keeping exits clear and ready to use, leaving traps, setting remote monitoring, and setting up network stations. Team Sierra's responsibilities consist of focusing on documenting the exploration, taking photographs, and noting important details. Team Whiskey's responsibilities consist of bringing in KIT and carrying out special operations that are destination-specific</p> <ul><li>Radio Operator responsibilities</li><li>Leading your team</li><li>Communicating effectively with OPS Manager </li><li>Getting accurate information into the terminal </li><li>Recording any events </li><li>Providing First Aid </li><li>Keeping your team on task and focusing on what needs to be done </li></ul><p>Radio Operators don't only need to know how to effectively use the radios but also lead their team. This is a position that requires knowledge and action. Operators will need to go through first aid training and COMMS training. </p>" },
  "2-3": { title: "'No Radio' setup ", content: "<h2>'No Radio' setup</h2><p>The No Radio Setup is used in small teams in places we know, or as a last resort. This means setting up points of interest with specific details and positions. Be sure to tell someone where you're going via “points”. Points should be the previously referred positions to go to. Before going in, while in, and after you can create points. Use the alphabet for best practice, when two separate teams make an overlapping point, discuss adding numbers after the letter. For example, team 1 makes points A, B and C. team 2 also makes points B and C, when they come back together, they should discuss which are points B1 and B2, and which are C1 and C2. </p>"},
  "2-4": { title: "COMMS Basics", content: "<ul><li>10 - 10 - Police are here</li><li>10 - 80 - Security present </li><li>40 - 20 - Squatter on site</li><li>50 - 10 - Structural hazard </li><li>60 - 80 - Medical emergency </li><li>70 - 20 - Lost or disoriented </li><li>80 - 80 - Low battery or equipment failure </li><li>90 - 80 - Found an alternate exit </li><li>10 - 30 - All clear, safe to proceed </li><li>20 - 70 - Return to the entrance immediately </li><li>30 - 10 - Silence, voices ahead </li><li>40 - 20 - Found an artifact or item of interest </li><li>50 - 80 - Everyone to predefined positions </li><li>COPY - acknowledgement </li><li>REPEAT - repeat the last given command</li></ul>"},
  "3-1": { title: "Intro To Operations", content: "<p>There are serveral specific operations plus any special operations that are trained before they happen. Basic operations consist of the following: Recon(Investigation/pen test), Bastion Setup, and Cache and Store. </p>"},
  "3-2": { title: "Recon Operation", content: "<p>The average Recon mission means a full squad (full Four Radio setup) to get info about the target destination and the surrounding area. Once a Destination Brief is sent out and plans to meet are done, the following tasks are assigned to each team. </p><ul><li>November - Looks for places and items of interest. Arranges who carries out what, and gets logistics going for exfill  </li><li>Echo - Keeps watch on exits, sets up remote monitoring(external), and sets up remote network  </li><li>Sierra - Takes photos, documents the layout, and tracks structural integrity  </li><li>Whiskey - brings in remote network equipment and sets up remote monitoring(internal)</li></ul>"},
  "3-3": { title: "Bastion Operation", content: "<p>Bastion Setup is for short or long-term occupancy of a building. The Top priorities are as follows: properly setting up monitoring equipment, creating 'set spaces', and setting up long-term amenities. </p><h2>Setting Up Monitoring Equipment </h2><p>Properly setting up monitoring equipment can be the difference between a perfect hideout and getting woken up at 3 am by the police. </p><ul><li>Setup cameras in a way to try to concur the Art gallery problem, (Wikipedia, the Art gallery problem) </li><li>Line of sight / line break sensors should be setup across “easy entry” points </li><li>motion sensors should be put in lowlight places where they are most effective </li><li>Sensors placed outside should use meshtastic, not Wi-Fi. And they should be the weatherproof variety  </li><li>Windows should be used as peepholes or periscope points.  </li></ul><h2>Set Spaces </h2><p>Set spaces are places set between more than two walls, so light can't penetrate out, and it's difficult to have a straight line through the space. </p><ul><li>The perfect set space would be a backroom inside of a larger office or storage space. No windows into, no easy way into without tripping a trigger </li><li>In order to create an ideal space, try boarding windows, closing doors and jamming them, or setting yourself up so you're away from entry points in general.</li> <li>Make an easy out, hard in path. This can use gravity or certain “single flow” shapes to make. </li></ul><h2>long-term amenities </h2><p>Long-term amenities include the things necessary for survival. Water, electricity, storage, sleeping space, and a monitor room</p><p>While restarting the water of an abandoned building can be dangerous and alert the owners that your there, it can be the easiest option, if you have to, try breaking a pipe away from you and your group, just a small drip, and collect the water that springs </p>"},
  "3-4": { title: "Cashe and Store Operation", content: "<p>This looks like a team bringing in an object/person/item and setting it up so that it will be safe long-term and can be recovered later.  depending on how long this needs to be there you should look into how to do some of the following to be prepared to cashe things </p><ul><li>Pour concrete </li><li>Properly dig in the cold </li><li>Hide in plain sight </li><li>Waterproofing a container </li></ul>"},
  "4-1": { title: "Intro To Ordinance", content: "<h3>Intro to Ordinance</h3><p>Ordinance is anything that could be used in gernade form. not just explosives, but concusives and even smoke bombs</p>"},
  "4-2": { title: "Smoke", content: "<h3>Smoke</h3> <p>Smoke is best used for cover and to disorient people. but it can work against you just as well. learn to navigate your space without relying on sight. it will help</p><br><p>we typically us the SP90 smoke as it gives the best coverage, even outdoors</p>"},
  "4-3": { title: "Fire", content: "<h3>Fire</h3><p>fire can be made in many differant ways, in this we're going to talk about how to make a fire that wont go out. molitove cocktails, and </p>"},
  "4-4": { title: "Explosives", content: ""},
  //"#-#": { title: "", content: ""},
};

function loadProgress() {
  const progress = JSON.parse(localStorage.getItem("lessonProgress")) || {};
  Object.keys(progress).forEach(lesson => {
    if (progress[lesson]) {
      const element = document.querySelector(`.lesson[data-lesson="${lesson}"]`);
      if (element) {
        element.classList.add("unlocked");
      }
    }
  });
}


// Lesson click handler
document.querySelectorAll(".lesson").forEach(lesson => {
  lesson.addEventListener("click", function() {
    const lessonId = this.getAttribute("data-lesson");
    const progress = JSON.parse(localStorage.getItem("lessonProgress")) || {};
    // Unlock lessons sequentially
    const prevLesson = getPreviousLesson(lessonId);
    if (!prevLesson || progress[prevLesson]) {
      document.getElementById("lesson-content").innerHTML = lessons[lessonId].content;
      progress[lessonId] = true;
      localStorage.setItem("lessonProgress", JSON.stringify(progress));
      this.classList.add("unlocked");
    } else {
      alert("Please complete the previous lesson first!");
    }
  });
});

// Helper: Get previous lesson
function getPreviousLesson(lessonId) {
  const [section, lesson] = lessonId.split("-");
  const prevLesson = `${section}-${parseInt(lesson) - 1}`;
  return lessons[prevLesson] ? prevLesson : null;
}
// TTS variables
let utterance = null;
let isPlaying = false;
let currentSpeed = 1;

// Initialize TTS controls
function initTTS() {
  const playPauseBtn = document.getElementById("tts-play-pause");
  const speedBtn = document.getElementById("tts-speed");
  const progressBar = document.getElementById("tts-progress");

  // Show TTS controls when lesson content is loaded
  document.querySelectorAll(".lesson").forEach(lesson => {
    lesson.addEventListener("click", function() {
      document.getElementById("tts-controls").style.display = "block";
    });
  });

  // Play/Pause button
  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      playPauseBtn.textContent = "Play";
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        const content = document.getElementById("lesson-content").textContent;
        utterance = new SpeechSynthesisUtterance(content);
        utterance.rate = currentSpeed;
        utterance.onboundary = (event) => {
          const percent = (event.charIndex / content.length) * 100;
          progressBar.style.width = `${percent}%`;
        };
        utterance.onend = () => {
          playPauseBtn.textContent = "Play";
          isPlaying = false;
          progressBar.style.width = "100%";
        };
        window.speechSynthesis.speak(utterance);
      }
      playPauseBtn.textContent = "Pause";
    }
    isPlaying = !isPlaying;
  });

  // Speed control
  document.querySelectorAll("#tts-speed + .dropdown-menu a").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      currentSpeed = parseFloat(e.target.getAttribute("data-speed"));
      speedBtn.textContent = `${currentSpeed}x`;
      if (utterance) {
        utterance.rate = currentSpeed;
      }
    });
  });
}

// Call initTTS when the page loads
document.addEventListener("DOMContentLoaded", initTTS);
