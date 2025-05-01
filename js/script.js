// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

function checkNumber() {
  let lengthA = parseInt(document.getElementById("length-a").value)
  let lengthB = parseInt(document.getElementById("length-b").value)
  let lengthC = parseInt(document.getElementById("length-c").value)
  let message = ""

  if (
    lengthA + lengthB <= lengthC ||
    lengthA + lengthC <= lengthB ||
    lengthB + lengthC <= lengthA
  ) {
    message = "It doesn't form a triangle"
  } else if (lengthA == lengthB && lengthA == lengthC) {
    message = "It's an Equilateral Triangle"
  } else if (lengthA == lengthB || lengthA == lengthC || lengthB == lengthC) {
    message = "It's an Isosceles Triangle"
  } else {
    message = "It's a Scalene Triangle"
  }

  document.getElementById("message").innerText = message
}
