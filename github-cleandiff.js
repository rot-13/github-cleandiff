lines = document.querySelectorAll('.diff-line-code');

for (var i = 0; i < lines.length; i++) {
  line = lines[i];
  lineContent = line.innerText;
  firstChar = lineContent[0];
  restContent = lineContent.slice(1);
  
  first = document.createElement('span');
  first.classList.add('clean-diff-sheker');
  first.setAttribute('data-char', firstChar);

  rest = document.createElement('span');
  rest.innerText = restContent;

  line.innerText = '';
  line.appendChild(first);
  line.appendChild(rest);
}
