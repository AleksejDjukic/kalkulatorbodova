function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const schools = {
    'Gimnazija': [
        { id: 'gim_opsti', name: 'Opšti smjer', placeholders: ['српски језик', 'страни језик', 'математика', 'физика', 'хемија'] },
        { id: 'gim_drustveno', name: 'Društveno-jezički smjer', placeholders: ['српски језик ', 'страни језик', 'историја', 'информатикa', 'математика'] }
    ],
    'Elektrotehnička': [
        { id: 'ele_it', name: 'Tehničar Informacionih Tehnologija', placeholders: ['српски језик', 'математика', 'физика', 'информатика', 'страни језик'] },
        { id: 'ele_energetika', name: 'Tehničar Elektroenergetike', placeholders: ['српски језик', 'математика', 'физика', 'информатика', 'страни језик'] },
        { id: 'ele_auto', name: 'Autoelektričar', placeholders: ['српски језик', 'математика', 'физика', 'информатика', 'страни језик'] },
        { id: 'ele_elektricar', name: 'Električar-Elektroinstalater', placeholders: ['српски језик', 'математика', 'физика', 'информатика', ' страни језик'] }
    ],
    'Poljoprivredna': [
        { id: 'pol_agrotehnicar', name: 'Agrotehničar', placeholders: ['српски језик', 'биологија', 'хемија', 'информатика', 'страни језик'] },
        { id: 'pol_vet', name: 'Veterinarski tehničar', placeholders: ['српски језик', 'биологија', 'хемија', 'информатика', 'страни језик'] },
        { id: 'pol_prehrambeni', name: 'Prehrambeni tehničar', placeholders: ['српски језик', 'биологија', 'хемија', 'информатика', 'страни језик'] },
        { id: 'pol_pekar', name: 'Pekar', placeholders: ['српски језик', 'биологија', 'хемија', 'информатика', 'страни језик'] },
        { id: 'pol_agro', name: 'Agroproizvođač', placeholders: ['српски језик', 'биологија', 'хемија', 'информатика', 'страни језик'] }
    ],
    'Mašinska': [
        { id: 'mas_cnc', name: 'Tehničar CNC tehnologija', placeholders: ['српски језик', 'математика', 'информатика', 'страни језик', 'физика'] },
        { id: 'mas_bravar', name: 'Bravar-Zavarivač', placeholders: ['српски језик', 'математика', 'информатика', 'страни језик', 'физика'] },
        { id: 'mas_auto', name: 'Auto-mehaničar', placeholders: ['српски језик', 'математика', 'информатика', 'страни језик', 'физика'] },
        { id: 'mas_saobracaj', name: 'Tehničar drumskog saobraćaja', placeholders: ['српски језик', 'математика', 'информатика', 'географија', 'физика'] },
        { id: 'mas_drveta', name: 'Tehničar za obradu drveta CNC', placeholders: ['српски језик', 'математика', 'информатика', 'хемија', 'биологија']  }
    ],
    'Medicinska': [
        { id: 'med_tech', name: 'Medicinski tehničar', placeholders: ['српски језик', 'биологија', 'хемија', 'страни језик', 'физика'] },
        { id: 'med_zubni', name: 'Zubno-stomatološki tehničar', placeholders: ['српски језик', 'биологија', 'хемија', 'страни језик', 'физика'] },
        { id: 'med_frizer', name: 'Frizer', placeholders: ['српски језик', 'страни језик', 'физика', 'хемија', 'информатика'] }
    ],
    'Građevinska': [
        { id: 'grad_arh', name: 'Arhitektonski tehničar', placeholders: ['српски језик', 'математика', 'физика', 'информатика', 'страни језик'] }
    ],
    'Ekonomska': [
        { id: 'eko_poslovno_inf', name: 'Poslovno-informatički tehničar', placeholders: ['српски језик', 'страни језик', 'математика','историја', 'географија'] },
        { id: 'eko_poslovno_prav', name: 'Poslovno-pravni tehničar', placeholders: ['српски језик', 'страни језик', 'математика','историја', 'географија'] },
        { id: 'eko_ugostiteljski', name: 'Ugostiteljski tehničar', placeholders: ['српски језик', 'страни језик', 'географија','историја', 'информатика'] },
        { id: 'eko_kulinarski', name: 'Kulinarski tehničar', placeholders: ['српски језик', 'страни језик', 'географија','историја', 'информатика'] },
        { id: 'eko_konobar', name: 'Konobar', placeholders: ['српски језик', 'страни језик', 'географија','историја', 'информатика'] },
        { id: 'eko_kuvar', name: 'Kuvar', placeholders: ['српски језик', 'страни језик', 'географија','историја', 'информатика'] }
    ],
    'Muzička': [
        { id: 'muz_sar', name: 'Muzički saradnik-teoretičar', placeholders: ['српски језик', 'музичка култура', 'ликовна култура', 'информатика', 'страни језик'] },
        { id: 'muz_izv', name: 'Muzički izvođač', placeholders: ['српски језик', 'музичка култура', 'ликовна култура', 'информатика', 'страни језик'] }
    ],
};

function gimnazija() {
    fillDropdown('Gimnazija');
}

function elektrotehnicka() {
    fillDropdown('Elektrotehnička');
}

function poljoprivredna() {
    fillDropdown('Poljoprivredna');
}

function masinska() {
    fillDropdown('Mašinska');
}

function medicinska() {
    fillDropdown('Medicinska');
}

function gradjevinska() {
    fillDropdown('Građevinska');
}

function ekonomska() {
    fillDropdown('Ekonomska');
}
function muzicka() {
    fillDropdown('Muzička');
}
function addFocusBlurListeners(input, placeholder) {
    input.addEventListener('focus', function() {
        if (this.placeholder === placeholder) {
            this.placeholder = '';
        }
    });

    input.addEventListener('blur', function() {
        if (this.placeholder === '') {
            this.placeholder = placeholder;
        }
    });
}

// Add focus and blur listeners to inputs with IDs sesti, sedmi, osmi, and deveti
document.getElementById('sesti').addEventListener('focus', function() {
    this.placeholder = '';
});
document.getElementById('sesti').addEventListener('blur', function() {
    if (this.value === '') {
        this.placeholder = 'Srednji prosjek iz 6. razreda';
    }
});

document.getElementById('sedmi').addEventListener('focus', function() {
    this.placeholder = '';
});
document.getElementById('sedmi').addEventListener('blur', function() {
    if (this.value === '') {
        this.placeholder = 'Srednji prosjek iz 7. razreda';
    }
});

document.getElementById('osmi').addEventListener('focus', function() {
    this.placeholder = '';
});
document.getElementById('osmi').addEventListener('blur', function() {
    if (this.value === '') {
        this.placeholder = 'Srednji prosjek iz 8. razreda';
    }
});

document.getElementById('deveti').addEventListener('focus', function() {
    this.placeholder = '';
});
document.getElementById('deveti').addEventListener('blur', function() {
    if (this.value === '') {
        this.placeholder = 'Srednji prosjek iz 9. razreda';
    }
});


function fillDropdown(school) {
    const smjerDropdown = document.getElementById('smjer-dropdown');
    smjerDropdown.innerHTML = '';

    schools[school].forEach((field, index) => {
        const smjerLink = document.createElement('a');
        smjerLink.href = '#';
        smjerLink.id = `${school}-smjer${index + 1}`;
        smjerLink.innerHTML = field.name;
        smjerLink.onclick = () => {
            showFieldInputs(field.id, school, field.placeholders);
            document.getElementById('smjerbtn').innerHTML = field.name; // Update button text
            closeDropdowns(); // Close dropdown menus
        };
        // smjerLink.onclick = () => {
        //     showFieldInputs(field.id, school, field.placeholders);
        //     document.getElementById('smjerbtn').innerHTML = field.name; // Update button text
        //     closeDropdowns(); // Close dropdown menus
        // };
        smjerDropdown.appendChild(smjerLink);
    });

    document.querySelector('.dropbtn').innerHTML = school; // Update button text for school dropdown
}


// Close dropdown menus
function closeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}

// Show dropdown content when button is clicked
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            closeDropdowns();
            dropdownContent.style.display = 'block';
        }
    });
});

// Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        closeDropdowns();
    }
};



function showFieldInputs(fieldId, school, placeholders) {
    const inputsContainer = document.getElementById('inputs-container');
    const inputsContainer2 = document.getElementById('inputs-container-2');
    inputsContainer.innerHTML = ''; // Clear existing inputs
    inputsContainer2.innerHTML = ''; // Clear existing inputs in the second container

    placeholders.forEach((placeholder, index) => {
        // First container
        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = placeholder +  ' VIII разред ';
        input1.id = `input1-${index}`; // Assign a unique ID to the input element
        input1.required = true; 
        inputsContainer.appendChild(input1);
        addFocusBlurListeners(input1, placeholder); // Add focus and blur listeners
        inputsContainer.appendChild(input1);

        // Second container
        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.placeholder = placeholder + ' IX разред';
        input2.id = `input2-${index}`; // Assign a unique ID to the input element
        input2.required = true; 
        inputsContainer2.appendChild(input2);
        addFocusBlurListeners(input2, placeholder); // Add focus and blur listeners
        inputsContainer2.appendChild(input2);
    });
}
function addFocusBlurListeners(input, placeholder) {
    input.addEventListener('focus', function() {
        input.placeholder = ''; // Clear placeholder on focus
    });
    input.addEventListener('blur', function() {
        if (input.value === '') {
            input.placeholder = placeholder; // Restore placeholder on blur if input is empty
        }
    });
}


function performCalculations() {
    console.log("Calculating...");

    // Retrieve and validate input values for sixth to ninth grade
    const inputs = ['sesti', 'sedmi', 'osmi', 'deveti'];
    const gradeValues = [];

    for (let inputId of inputs) {
        const inputElement = document.getElementById(inputId);
        const inputValue = parseFloat(inputElement.value);
        if (!inputElement.value) {
            alert(`Polje ${inputElement.placeholder} moraj biti popunjeno!`);
            return;
        }
        if (inputValue > 5) {
            alert(`Vrijednost ${inputElement.placeholder} ne može biti veća od 5!`);
            return;
        }
        gradeValues.push(inputValue);
    }

    // Calculate sum of inputs with appropriate multipliers
    const sumOfInputs = (gradeValues[0] * 2) + (gradeValues[1] * 2) + (gradeValues[2] * 3) + (gradeValues[3] * 3);

    // Retrieve and validate inputs inside the first container
    const inputsContainer = document.getElementById('inputs-container');
    const inputValues1 = Array.from(inputsContainer.getElementsByTagName('input')).map((input, index) => {
        const inputValue = parseFloat(input.value);
        if (!input.value) {
            alert(`Polje ${input.placeholder} mora biti popunjeno!`);
            throw new Error(`Polje ${input.placeholder} mora biti popunjeno!`);
        }
        if (inputValue > 5) {
            alert(`Ne možete ${input.placeholder} unjeti veći broj od 5`);
            throw new Error(`Ne možete ${input.placeholder} unjeti veći broj od 5`);
        }
        return inputValue;
    });

    console.log("Input values container 1:", inputValues1);

    // Calculate the average of inputs inside the first container
    const sumOfInputs1 = inputValues1.reduce((sum, value) => sum + value, 0);
    const averageOfInputs1 = inputValues1.length ? (sumOfInputs1 / inputValues1.length) * 2 : 0;

    console.log("Average of inputs container 1:", averageOfInputs1);

    // Retrieve and validate inputs inside the second container
    const inputsContainer2 = document.getElementById('inputs-container-2');
    const inputValues2 = Array.from(inputsContainer2.getElementsByTagName('input')).map((input, index) => {
        const inputValue = parseFloat(input.value);
        if (!input.value) {
            alert(`Polje ${input.placeholder} mora biti popunjeno!`);
            throw new Error(`Polje ${input.placeholder} mora biti popunjeno!`);
        }
        if (inputValue > 5) {
            alert(`Ne možete ${input.placeholder} unjeti veći broj od 5`);
            throw new Error(`Ne možete ${input.placeholder} unjeti veći broj od 5`);
        }
        return inputValue;
    });

    console.log("Input values container 2:", inputValues2);

    // Calculate the average of inputs inside the second container
    const sumOfInputs2 = inputValues2.reduce((sum, value) => sum + value, 0);
    const averageOfInputs2 = inputValues2.length ? (sumOfInputs2 / inputValues2.length) * 2 : 0;

    console.log("Average of inputs container 2:", averageOfInputs2);

    // Sum up everything
    const totalSum = sumOfInputs + averageOfInputs1 + averageOfInputs2;

    console.log('Result:', totalSum);
    document.getElementById('rezultat-prikaz').placeholder = "Osvojeni broj bodova je: " + totalSum;
}

document.getElementById('calculate-button').addEventListener('click', performCalculations);




