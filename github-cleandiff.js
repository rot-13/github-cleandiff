var lines = document.querySelectorAll('.diff-line-code');

for (var i = 0; i < lines.length; i++) {
  var line = lines[i],
      commentButton = line.firstChild,
      lineContent = line.innerText,
      firstChar = lineContent[0],
      restContent = lineContent.slice(1);
  
  var first = document.createElement('span');
  first.classList.add('clean-diff-sheker');
  first.setAttribute('data-char', firstChar);

  var rest = document.createElement('span');
  rest.innerText = restContent;

  line.innerText = '';
  line.appendChild(commentButton);
  line.appendChild(first);
  line.appendChild(rest);
}
