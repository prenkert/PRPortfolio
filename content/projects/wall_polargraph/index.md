---
project_title: Robot that Draws Things on Walls
featured_project: true
completed: true
project_post_date: "2020"
project_category: Personal
path: /wall_polargraph/index
project_preview_thumbnail: ./wall_polar_hero.jpg
tools: ["MATLAB", "SolidWorks", "LulzBot Mini 2", "Arduino IDE", "Teensy 3.6"]
project_links: [
    {"url": "https://github.com/prenkert/WallPolargraph", "label": "GitHub"}
]
description: A "wall polargraph" or "V-plotter" that can draw on any vertical surface. 
---
![Alt text here](./wall_polar_2.jpg)
![Alt text here](./wall_polar_1.jpg)
![Alt text here](./wall_polar_3.jpg)

This wall plotter was my quaranteen project. At the time I was fascinated by cable-driven robots, since through clever design and controls they can be much less expensive and traverse a much larger area than other motion platforms. Most DIY v-plotters have motors at the upper corners of the drawing surface which control the pen carriage.

![Standard v-plotter design, image from](./v_plotter_ex.jpg)

I opted for a different approach with all of the electronics in one tight package like the commercially available [Scribit](https://scribit.design/) robot. This design makes the system more portable, easier to install, and minimizes wires. However, the additional weight requires more torque from the actuators. Also, because the two cables making the "V" do not perfectly converge at the pen location, the math to calculate the position becomes a bit more complicated.  Currently, the system operates in a 'quasi-static' state that prevents the robot from swinging from side to side.  I would love to spend some more time on the system dynamics and control at some point.

![Simulation of system dynamics](./animationGIF.gif)

The project is far from polished, but it was a great introduction to the theory and practice of cable-actuated robotics.