
var assignment = {
    log: function(message, number) {
        let result = document.querySelector("#result").appendChild(document.createElement('div')),
            resultMessage,
            resultTitle;
        number = number || '';
        result.className = number % 2 ? '': 'even';
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        resultTitle = result.appendChild(document.createElement('b'));
        resultMessage = result.appendChild(document.createElement('span'));
        resultTitle.textContent = `Test ${number}: `;
        resultMessage.textContent = `${message}`;
    }
};

Object.prototype.valueOf = function() {
        return JSON.stringify(this);
    }
