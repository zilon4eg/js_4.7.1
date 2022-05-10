function onClickValue(data) {
    let dropdownValue = data;
    let dropdown = dropdownValue.closest('.dropdown');
    let dropdwnList = dropdown.querySelector('.dropdown__list');
    if (dropdwnList.className.includes('dropdown__list_active')) {
        dropdwnList.className = 'dropdown__list';
    }
    else {
        dropdwnList.className = 'dropdown__list dropdown__list_active';
    }
}


function onClickItem(data) {
    let dropdownItem = data;
    let dropdown = dropdownItem.closest('.dropdown');
    let dropdownValue = dropdown.querySelector('.dropdown__value');
    dropdownValue.textContent = dropdownItem.textContent.trim();
    dropdown.querySelector('.dropdown__list').className = 'dropdown__list';
    // отключаем переход по ссылке
    event.preventDefault(); //отмечено как устаревшее
}


const dropdownValues = document.querySelectorAll('.dropdown__value');
dropdownValues.forEach(function(dropdownValue) {
    //вешаем событие
    dropdownValue.addEventListener('click', () => onClickValue(dropdownValue));
});


const dropdownItems = document.querySelectorAll('.dropdown__link');
dropdownItems.forEach(function(dropdownItem) {
    //вешаем событие
    dropdownItem.addEventListener('click', () => onClickItem(dropdownItem), false);
});