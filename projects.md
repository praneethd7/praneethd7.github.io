---
layout: default
title: Projects
permalink: /projects
---
<style>
.act_image {
  max-width:350px;
  max-height:350px;
  border: 1px solid black;
  margin: 5px 10px 10px 5px;
}
.act_drive {
  max-width:450px;
  max-height:450px;
  border: 1px solid black;
  margin: 5px 10px 10px 5px;
}
</style>
---
# Current Projects

<!-- ### Reinforcement Learning for Envy-free and Pareto Efficient Traffic Signal
*Guide - Dr. Alireza Talebpour*
- Integrated Spatial-CNN with image annotation tool to generate lane line predictions for all frames in video
- Retrained the VGG + SCNN model on own dataset annotation using the tool built
- Identified lane attributes such as color and type automatically to reduce repetitive work -->

### **Semi-Automated Image Annotation Tool**
*Guide - Dr. Sivakumar Rathinam*
- Integrated Spatial-CNN with image annotation tool to generate lane line predictions for all frames in video
- Retrained the VGG + SCNN model on own dataset annotation using the tool built
- Identified lane attributes such as color and type automatically to reduce repetitive work

### **Vehicle Trajectory Data Collection Using Aerial Videography**
- Proposed a novel architecture to collect vehicle trajectory data for an extended period on freeways and arterials
- Preparing High Definition(HD) dataset for traffic data analysis and vehicle detection applications.
<center>
<img class="act_image" src="/assets/data_equip1.jpg" alt="Me">
<img class="act_image" src="/assets/dtraffic_1.jpg" alt="Me">
</center>
---
# Previous Projects

### **Examining cost aspects of shared autonomous vehicles as MaaS**
*Guide - Dr. Mark Burris*
- Ride-sharing services are becoming increasingly popular, are affecting people’s choice to use cars as a service rather  than owning personal vehicles. The study focus is to see if such a system is plausible considering cost aspects.
- Generated Origin-Destination matrix for Austin city using ArcGIS and integrated it with a grid-based network
- Developed an autonomous ride-sharing simulation with dynamic trip generation and allocation scheme algorithms
- Evaluated the pricing scheme for MaaS to compete with vehicle ownership and other ride-sharing services
- Accepted for presentation at Transportation Research Board (TRB) 2020 and in review for publication
<center>
<img class="act_image" src="/assets/automation_effect.png" alt="Me">
</center>

### **Response of Autonomous Vehicles to Emergency Vehicles (RAVEV)**
*Guide - Dr. Sivakumar Rathinam*
- Prepared image and sound datasets for emergency vehicles, and trained a NN classifier using Keras
- Integrated detection algorithms with path planning and controls using Robot Operating System (ROS)
- Conducted experiments on high-speed autonomous vehicle (up to 70 mph) to avoid obstacles, and respond to emergency vehicles (EV) in real-time
- Presented research poster at Spring TexITE meeting - 2019, San Antonio, Texas

<center>
<iframe src="https://drive.google.com/file/d/1Dq9AtOaN3xnNWAslJDCy0RwWLR2uuqXm/preview" class="act_drive" alt ="Emergency Vehicle Detection" allowfullscreen>
</iframe>
<iframe src="https://drive.google.com/file/d/1RqIuB4uZx4tks1MXla39uPG8NJK8AzDF/preview" class="act_drive" alt ="High Speed Lane Change" allowfullscreen>
</iframe>
</center>

### **Image Processing Techniques for Traffic Data Extraction from Aerial Imagery**
  *Guide – Dr. Lelitha Devi, Co-Guide – Dr. Bhargava Rama Chilukuri*
-	Presented research paper at UMI Symposium – 2017, Hyderabad, India
-	Compared image processing algorithms on a drone-based video in an Indian Scenario
-	Otsu thresholding, edge detection, and morphological operations were implemented for counting
-	Support vector machine was used for classification of vehicles into LMV, HMV, and TW
<center>
<img  class="act_image" src="/assets/aerial_0.png" alt="Me">
<br><br>
<img  class="act_image" src="/assets/aerial_1.png" alt="Me">
</center>

### **Automation of Glass Fragmentation Testing**
*Guide – Dr. Arul Jayachandran*
-	Automated the process of Glass Fragmentation Testing that involves tedious manual counting by using Image processing techniques
- Built a prototype with GUI using raspberry pi and pi camera modules
<center>
<img class="act_image" src="/assets/glass_0.png" alt="Me">
<img class="act_image" src="/assets/glass_1.png" alt="Me">
</center>

<!-- ## Udacity - Self Driving Car Nanodegree
### Lane Lines detection
 ##content here##
### Vehicle detection
 ##content here## -->

## Course & Other Projects
### **Traffic Signal Detection Using Image Processing**
- Detected traffic signal using background subtraction, color thresholding and shape filters
-	Used CNN based architecture YOLO for better detecting signals in Indian scenario
- COCO dataset was used for pretrained weights for signals. The dataset was augmented using signals in Indian scenario and transfer learning was used to retrain the weights
<center>
<img class="act_image" src="/assets/signal_0.png" alt="Me"> &nbsp;
<img class="act_image" src="/assets/signal_1.png" alt="Me">
</center>

### **Solving Maze Puzzle Using Image Processing**
- Since childhood, I was interested in solving puzzles, especially the maze puzzles. It so struck me one day that I could solve this puzzle using skills I have
- The idea was to split the image into portions that were disjoint(have no connection). I tried various morphological techniques using the OpenCV library and graph search algorithms to solve. A sample result is displayed here in which the maze is split into two portions(green and dark pink).
- P.S It only works for certain set of maze puzzles.

<center>
<img class="act_image" src="/assets/maze.jpg" alt="Me">
</center>
