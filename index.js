const ageInput = document.getElementById('age');
const ageError = document.getElementById('ageError');

function ValidateAge(){
  const value = parseInt(ageInput.value,10);
  if(isNaN(value)){
    ageError.textContent = 'Please enter your age';
    ageError.style.color = 'red';
    return false;
  }
  if(value<0){
    ageError.textContent = 'Age shouldn\'t be negative';
    ageError.style.color = 'red';
    return false;
  }
  if(value==0){
    ageError.textContent = 'Age shouldn\'t be zero';
    ageError.style.color = 'red';
    return false;
  }
  if(value<16){
    ageError.textContent = 'Age shouldn\'t be less than 16';
    ageError.style.color = 'red';
    return false;
  }
  if(value>100){
    ageError.textContent = 'Age shouldn\'t be greater than 100';
    ageError.style.color = 'red';
    return false;
  }
  if(value>15 && value<=100){
    ageError.textContent = ':) Perfect age';
    ageError.style.color = 'green';
    return true;
  }

}

ageInput.addEventListener('input',ValidateAge);
ageInput.addEventListener('blur',ValidateAge);

const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

function validateName(nameInput,nameError){
  const value = nameInput.value;
  if(value===''){
    nameError.textContent = 'Please enter your name:('
    nameError.style.color = 'red';
    return false;
  }
  const hasNumbers = /[0-9]/.test(value);
  if(hasNumbers){
    nameError.textContent = 'Name can\'t have a digit in it';
    nameError.style.color = 'red';
    return false;
  }
  if(value.length<2){
    nameError.textContent = 'Name should be atleast 2 characters';
    nameError.style.color = 'red';
    return false;
  }

  nameError.textContent = 'Cool name :)';
  nameError.style.color = 'green';
  return true;
}

nameInput.addEventListener('input',()=> validateName(nameInput,nameError));
nameInput.addEventListener('blur',()=> validateName(nameInput,nameError));

const fatherNameInput = document.getElementById('fatherNameInput');
const fatherNameError = document.getElementById('fatherNameError');

fatherNameInput.addEventListener('input',()=> validateName(fatherNameInput,fatherNameError));
fatherNameInput.addEventListener('blur',()=> validateName(fatherNameInput,fatherNameError));

const motherNameInput = document.getElementById('motherNameInput');
const motherNameError = document.getElementById('motherNameError');

motherNameInput.addEventListener('input',()=> validateName(motherNameInput,motherNameError));
motherNameInput.addEventListener('blur',()=> validateName(motherNameInput,motherNameError));

const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

function validateEmail(){
  const value = emailInput.value.trim();
  if(value===''){
    emailError.textContent = 'Email is required:(';
    emailError.style.color = 'red';
    return false;
  }
  if(checkWhetherMailOrNOt(value)){
    emailError.style.color = 'green';
    emailError.textContent = 'Valid email :)';
    return false;
  }
  else{
    emailError.style.color = 'red';
    emailError.textContent = 'Not a valid email:(';
    return false;
  }
}

function checkWhetherMailOrNOt(value){
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}

emailInput.addEventListener('input',validateEmail);
emailInput.addEventListener('blur',validateEmail);

const numberInput = document.getElementById('numberInput');
const numberError = document.getElementById('numberError');

function validateNumber(){
  const value = numberInput.value;
  if(value===''){
    numberError.textContent = 'Please enter a valid number:(';
    numberError.style.color = 'red';
    return false;
  }
  if(value.length<10 || value.length>10){
    numberError.style.color = 'red';
    numberError.textContent = 'Number should be 10 digits';
    return false;
  }
  numberError.textContent = 'Number is valid :)';
  numberError.style.color = 'green';
  return true;
}

numberInput.addEventListener('input',validateNumber);
numberInput.addEventListener('blur',validateNumber);

const aadharInput = document.getElementById('aadharInput');
const aadharError = document.getElementById('aadharError');

function validateAadhar(){
  const value = aadharInput.value;
  if(value===''){
    aadharError.textContent = 'Please enter a valid Aadhar Number';
    aadharError.style.color = 'red';
    return false;
  }
  if(value.length<12 || value.length>12){
    aadharError.textContent = 'Not a valid Aadhar Number:(';
    aadharError.style.color = 'red';
    return false;
  }
  aadharError.textContent = 'Valid Aadhar Number :)';
  aadharError.style.color = 'green';
  return true;
}

aadharInput.addEventListener('input',validateAadhar);
aadharInput.addEventListener('blur',validateAadhar);

const DOBInput = document.getElementById('DOBInput');
const DOBError = document.getElementById('DOBError');

function validateDOB(){
  const value = DOBInput.value;
  if(value==='') {
    DOBError.textContent = 'Please enter your DOB';
    DOBError.style.color = 'red';
    return false;
  }
  DOBError.textContent = 'You born on a great year :)';
  DOBError.style.color = 'green';
  return true;
}

DOBInput.addEventListener('input',validateDOB);
DOBInput.addEventListener('blur',validateDOB);
