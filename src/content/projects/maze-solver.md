---
title: Solving Maze Puzzle Using Image Processing
category: Computer Vision
type: course
tags: [Computer Vision, Image Processing, OpenCV, Graph Algorithms]
order: 17
image: "/assets/maze.jpg"
description: "Implemented morphological techniques and graph search algorithms using OpenCV to automatically solve maze puzzles."
---

- Since childhood, I was interested in solving puzzles, especially the maze puzzles. It so struck me one day that I could solve this puzzle using skills I have.
- The idea was to split the image into portions that were disjoint (have no connection). I tried various morphological techniques using the OpenCV library and graph search algorithms to solve. A sample result is displayed here in which the maze is split into two portions (green and dark pink).
- *Note: It only works for a certain set of maze puzzles.*

<div class="mt-6 flex justify-center">
  <img class="rounded-xl border border-white/10 shadow-lg max-w-sm w-full" src="/assets/maze.jpg" alt="Maze Solving Process">
</div>
