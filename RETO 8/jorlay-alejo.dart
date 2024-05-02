

void main() {
  pseudoRandomNumbers();
}

pseudoRandomNumbers() {
  String randomNum = DateTime.now().millisecond.toString();
  if (int.parse(randomNum) % 100 == 0) {
    randomNum = randomNum.replaceFirst(RegExp(r'\d'), '1');
  } else if (randomNum[1] == '0') {
    randomNum = randomNum.substring(2);
  } else {
    randomNum = randomNum.substring(1);
  }
  print(randomNum);
}
