var layer = "global";

function globalNamespacePollution() {
  layer = "function";

  if (layer === "function") {
    console.log("Function is working!");
  }
}

globalNamespacePollution();

// This will log "Global namespace is polluted!" because the global variable "layer" has been modified by the function, demonstrating global namespace pollution.
if (layer === "global") {
  console.log("Program is working!");
} else {
  console.log("Global namespace is polluted!"); 
}
