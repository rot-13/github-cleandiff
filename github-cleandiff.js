$lines = $('.diff-line-code');

for (var i = 0; i < $lines.length; i++) {
  $line = $($lines[i]);
  lineContent = $line.text();
  firstChar = lineContent[0];
  $line.text(lineContent.slice(1));
  $('<span class="clean-diff-sheker">').attr('data-char', firstChar).prependTo($line);
}
