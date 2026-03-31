const parseSystemLog = (log) => {
  const [level, ...messages] = log;
  return `[${level} ALERT]: ${messages.join(' | ')}`;
}

// Example:
const logEntry = ["CRITICAL", "Memory Leak", "CPU Overheating"];
console.log(parseSystemLog(logEntry)); 
// Output: [CRITICAL ALERT]: Memory Leak | CPU Overheating