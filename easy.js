function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        result === 'a';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    return a;
 }
 
 function checkAnswer1(answer1) {
    const result1 = document.getElementById('result1');
    if (answer1 === 'c') {
        result1.textContent = "Random Access Memory";
        result1.style.color = 'green';
        result1 === 'c';
    } else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
    }
    return b;
 }
 function checkAnswer2(answer2) {
    const result2 = document.getElementById('result2');
    if (answer2 === 'b') {
        result2.textContent = "www.donsakwit.ac.th";
        result2.style.color = 'green';
        result2 === 'b';
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }
    return c;
 }

 function doCheck()
{
    var score=0;
    if(result = 'a') { score=score+1; }
    if(result1 = 'c') { score=score+1; }
    if(result2 = 'b') { score=score+1; }

    alert("score="+score);
}