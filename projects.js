/* ==========================================================================
   KIERA'S PROJECTS  (the Projects section of the website)
   --------------------------------------------------------------------------
   How to edit, no coding needed:

   - Each project is one block that starts with  {  and ends with  },
   - ADD a project: copy a whole block, paste it where you want it, and
     change the words inside the quote marks.
   - REMOVE a project: delete its whole block, from  {  down to  },
   - REORDER: move a block up or down. The site shows them in this order.
   - STATS: the big numbers at the top of each project. Each one is a
     number ("n") and a short label ("label"). Two or three works best.
   - PHOTOS: put new pictures in the folder  assets/projects/  and type the
     file name in the "images" list. Order them sketch first, then CAD, then
     the real build. Any field you do not need can be left as  ""  or  [].
   - Keep the quote marks around every piece of text.
   ========================================================================== */

window.FLIGHT_LOG = [
  {
    title: "Compressor Replacement",
    origin: "Clauger Canada co-op",
    date: "Summer 2026",
    crew: "",
    tools: ["AutoCAD", "P&ID", "Load calculation", "Equipment selection", "Report writing", "Vendor coordination"],
    stats: [
      { n: "100 TR", label: "ammonia system surveyed and redrawn" },
      { n: "3", label: "compressors sized and compared" },
      { n: "12.2%", label: "smaller compressor base proposed" }
    ],
    result: "Proposed a 12.2% smaller compressor base, reviewed by a senior engineer.",
    summary: "A 100-ton ammonia refrigeration system needed new compressors. I surveyed the site, drew the new layout, and sized the system by hand.",
    did: [
      "Measured and photographed the existing mechanical room at the Thornhill facility to record as-built conditions.",
      "Drew the mechanical layout and P&ID for the 100 TR ammonia system in AutoCAD.",
      "Calculated the refrigeration load by hand, then compared three compressors that met it.",
      "Coordinated pipe delivery and crane logistics with vendors and the construction crew."
    ],
    tested: "",
    changed: "The approved compressor base followed a generic, conservative spec that oversized it for this equipment. I wrote a variance report proposing a 12.2% smaller footprint to save cost and floor space.",
    images: [
      { src: "assets/projects/compressor-layout-demolition.jpg", caption: "Room layout, demolition", w: 1144, h: 462 },
      { src: "assets/projects/compressor-layout-construction.jpg", caption: "Room layout, construction", w: 917, h: 481 },
      { src: "assets/projects/compressor-pid-demolition.jpg", caption: "P&ID, demolition", w: 1156, h: 581 },
      { src: "assets/projects/compressor-pid-construction.jpg", caption: "P&ID, construction", w: 892, h: 617 }
    ]
  },
  {
    title: "Autonomous Domino Placing Robot",
    origin: "University of Waterloo",
    date: "Winter 2026",
    crew: "4 people, 200 hours",
    tools: ["SolidWorks", "OnShape", "C++", "3D printing", "Laser cutting", "Sensor integration"],
    stats: [
      { n: "19 to 20", label: "of 20 dominoes placed per run" },
      { n: "$24.05", label: "build cost on a $40 budget" },
      { n: "8 of 8", label: "engineering specs met" }
    ],
    result: "19 to 20 out of 20 dominoes placed, built for $24.05 on a $40 budget.",
    summary: "A VEX IQ robot that places 1 to 20 dominoes on its own, in five patterns.",
    did: [
      "Compared three designs with a decision matrix and chose a vertical-stack magazine with a rack-and-pinion release.",
      "Designed and built the chassis, magazine, ramp, and release from VEX IQ parts plus custom 3D-printed and laser-cut pieces.",
      "Wrote modular C++ firmware for four sensor types and five placement patterns, with a menu-driven interface.",
      "Led testing across the mechanical, electrical, and software parts, and tracked the 200-hour plan on a Gantt chart."
    ],
    tested: "Met all 8 engineering specs: 19 to 20 out of 20 placements, 2 cm max path deviation, under 5 seconds per domino, and a 92% user rating from 20 testers.",
    changed: "",
    images: [
      { src: "assets/projects/robot-sketch.jpg", caption: "Initial prototype sketch", w: 1068, h: 764 },
      { src: "assets/projects/robot-cad.jpg", caption: "Final prototype in CAD", w: 649, h: 775 },
      { src: "assets/projects/robot-final.jpg", caption: "Final robot", w: 252, h: 272 }
    ]
  },
  {
    title: "Fish Frenzy",
    origin: "University of Waterloo, for Spin Master",
    date: "Fall 2025",
    crew: "5 people, 2 weeks",
    tools: ["Rapid prototyping", "AutoCAD", "Laser cutting", "Design iteration", "Project management"],
    stats: [
      { n: "5+ min", label: "leak-free water circulation" },
      { n: "2 weeks", label: "from concept to client report" },
      { n: "5", label: "people on the team" }
    ],
    result: "Water loop ran leak-free for 5+ minutes. Feasibility report delivered to Spin Master on time.",
    summary: "A water-based fishing toy concept for kids: a pump loop and a bucket-chain elevator lift toy fish into a spinning fountain.",
    did: [
      "Benchmarked the concept against similar toys and turned the gameplay into a function table with measurable targets.",
      "Built a submersible-pump water loop and a bucket-chain fish elevator with laser-cut acrylic gears and cardboard buckets.",
      "Planned the prototyping on a Gantt chart for a 5-person team with a two-week deadline."
    ],
    tested: "",
    changed: "The chain kept derailing and the buckets kept falling off. I swapped the bicycle chain for a lower-friction curb chain, resized the gears, and rebuilt the gear guards. The lift still came up short on motor torque, so the report says so, with fixes: a bigger motor, waterproofing, and a new bucket mount.",
    images: [
      { src: "assets/projects/fish-sketch.jpg", caption: "Final design sketch", w: 801, h: 721 },
      { src: "assets/projects/fish-mechanism.jpg", caption: "The mechanism", w: 638, h: 711 },
      { src: "assets/projects/fish-final.jpg", caption: "Final result", w: 633, h: 717 }
    ]
  },
  {
    title: "Handmade Dynamometer",
    origin: "University of Waterloo",
    date: "Fall 2025",
    crew: "",
    tools: ["Experimental design", "Calibration", "Data analysis", "Rapid prototyping"],
    stats: [
      { n: "7.3%", label: "error on stall torque" },
      { n: "~230", label: "RPM measured, inside the 200 to 250 spec" },
      { n: "3", label: "elastic bands tested to get repeatable data" }
    ],
    result: "Measured stall torque within 7.3% of the motor's published spec.",
    summary: "A rope-brake dynamometer I built to measure the torque and speed of a small DC motor.",
    did: [
      "Chose a rope-brake design because it separates the load, motor, and elastic forces.",
      "Calibrated an elastic band against known masses to get a force vs. stretch curve and its equation.",
      "Ran load trials from free spin up to near stall, timing the rotation speed from video at each step."
    ],
    tested: "Stall torque 0.0723 N·m against 0.078 N·m published. Minimum speed about 230 RPM against a 200 to 250 RPM spec.",
    changed: "I tested three elastic bands. One was too stiff to show differences between trials. One was so stretchy it bounced. The third gave repeatable readings.",
    images: [
      { src: "assets/projects/dyno-build.jpg", caption: "Final design", w: 457, h: 604 },
      { src: "assets/projects/dyno-calibration.jpg", caption: "Calibration curve", w: 843, h: 505 },
      { src: "assets/projects/dyno-torque-speed.jpg", caption: "Torque vs. speed", w: 867, h: 514 }
    ]
  }
];
