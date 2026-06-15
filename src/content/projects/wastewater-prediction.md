---
title: Predicting Waste-water Effluents in Streams
category: Other
type: previous
tags: [R, Random Forest, Gradient Boosting, XGBoost, EDA]
order: 8
image: "/assets/wastewater_prediction.png"
description: "Employed Random Forest and XGBoost regression models in R to predict wastewater flow and effluents with high accuracy."
---

- Cleaned raw data, standardized units, and interpolated missing observations using the `mice` library in R.
- Performed Exploratory Data Analysis (EDA) to observe correlations and seasonality in the data.
- Fabricated new features and created lagged variables based on seasonality.
- Employed Random Forest and Gradient Boosting (XGBoost) models to predict flow and effluents with an $R^2 > 0.70$.

<div class="mt-6 flex justify-center">
  <img class="rounded-xl border border-white/10 shadow-lg max-w-md w-full" src="/assets/wastewater_prediction.png" alt="Predicting Waste-water Effluents in Streams">
</div>
