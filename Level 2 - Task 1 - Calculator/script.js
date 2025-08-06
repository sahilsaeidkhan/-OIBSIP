   const display = document.querySelector("input[name='display']");
        let hasCalculated = false;

        function addToDisplay(value) {
            if (hasCalculated && !isNaN(value)) {
                display.value = value;
                hasCalculated = false;
            } else {
                display.value += value;
                hasCalculated = false;
            }
        }

        function clearDisplay() {
            display.value = '';
            hasCalculated = false;
            display.classList.remove('error');
                       const calculator = document.getElementById('calculator');
            const textSection = document.getElementById('textSection');
           
            calculator.style.transform = 'translateX(0)';
            textSection.classList.remove('show');
        }

        function deleteLast() {
            display.value = display.value.toString().slice(0, -1);
            hasCalculated = false;
            display.classList.remove('error');
        }

        function calculate() {
            try {
                if (display.value === '') return;
               
                let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
                const result = Function('"use strict"; return (' + expression + ')')();
               
                if (isNaN(result) || !isFinite(result)) {
                    display.value = 'Error';
                    display.classList.add('error');
                } else {
                    display.value = result;
                    display.classList.remove('error');
                    hasCalculated = true;
                }
                               moveCalculatorAndShowText();
               
            } catch (error) {
                display.value = 'Error';
                display.classList.add('error');
                hasCalculated = true;
                               moveCalculatorAndShowText();
            }
        }

        function moveCalculatorAndShowText() {
            const calculator = document.getElementById('calculator');
            const textSection = document.getElementById('textSection');
            const container = document.querySelector('.container');
            const containerWidth = container.offsetWidth;
            const calculatorWidth = calculator.offsetWidth;
           
            const moveDistance = (containerWidth - calculatorWidth) / 2 - 50;
           
            calculator.style.transform = `translateX(${moveDistance}px)`;
           
            setTimeout(() => {
                textSection.classList.add('show');
            }, 200);
        }

        document.addEventListener('keydown', function(event) {
            const key = event.key;
           
            if (key >= '0' && key <= '9') {
                addToDisplay(key);
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                addToDisplay(key);
            } else if (key === '.') {
                addToDisplay('.');
            } else if (key === 'Enter' || key === '=') {
                event.preventDefault();
                calculate();
            } else if (key === 'Escape') {
                clearDisplay();
            } else if (key === 'Backspace') {
                deleteLast();
            }
        });

        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
        });