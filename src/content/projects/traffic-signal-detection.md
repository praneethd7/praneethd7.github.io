---
title: Traffic Signal Detection Using Image Processing
category: Computer Vision
type: course
tags: [Computer Vision, YOLO, CNN, Transfer Learning, Augmentation]
order: 16
image: "/assets/signal_0.png"
description: "Detected traffic signals under low-light/noise conditions using background subtraction, color thresholding, and fine-tuned YOLO CNN models."
---

- Detected traffic signal using background subtraction, color thresholding and shape filters.
- Used CNN based architecture YOLO for better detecting signals in Indian scenario.
- COCO dataset was used for pretrained weights for signals. The dataset was augmented using signals in Indian scenario and transfer learning was used to retrain the weights.

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
  <img class="rounded-xl border border-white/10 shadow-lg" src="/assets/signal_0.png" alt="Signal Detection Output 1">
  <img class="rounded-xl border border-white/10 shadow-lg" src="/assets/signal_1.png" alt="Signal Detection Output 2">
</div>
