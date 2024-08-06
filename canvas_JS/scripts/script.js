// A função ctx.arc é usada para desenhar um arco ou um círculo no canvas.

// x: A coordenada x do centro do círculo.
// y: A coordenada y do centro do círculo.
// radius: O raio do círculo.
// startAngle: O ângulo inicial, em radianos, em que o arco começa. 
// (0 é a posição de 3 horas no círculo do relógio).
// endAngle: O ângulo final, em radianos, em que o arco termina.
// anticlockwise: Um valor booleano que especifica se o arco deve ser 
// desenhado no sentido anti-horário (true) ou no sentido horário (false). 
// O valor padrão é false.

// https://www.w3schools.com/graphics/canvas_intro.asp
// https://www.w3schools.com/jsref/api_canvas.asp

const canvas = document.getElementById('meuCanvas');
    const ctx = canvas.getContext('2d');

    // Preencher o fundo do céu
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar o sol
    ctx.beginPath();
    ctx.arc(700, 100, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'yellow';
    ctx.fill();

    // Função para desenhar nuvens
    function drawCloud(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
      ctx.arc(x + 30, y, 30, 0, 2 * Math.PI, false);
      ctx.arc(x + 60, y, 20, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'white';
      ctx.fill();
    }

    // Desenhar algumas nuvens
    drawCloud(200, 100);
    drawCloud(400, 150);
    drawCloud(600, 100);

    const img = document.getElementById('passaro');
    ctx.drawImage(img, 100, 300, 200, 150); // Desenha a imagem nas coordenadas (100, 300) com largura 200px e altura 150px
  