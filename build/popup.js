function runSwitchjs() {
  chrome.tabs.executeScript({
    file: 'switch.js',
  })
}

document.getElementById('checkit').addEventListener('click', runSwitchjs)
