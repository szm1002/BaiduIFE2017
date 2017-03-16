let identity = document.getElementById('identity'),
    identitySel = document.querySelectorAll('input[name="identity"]'),
    school = document.getElementById('school'),
    company = document.getElementById('company'),
    city = document.getElementById('city'),
    cityOpts = document.querySelectorAll('option[name="city"]'),
    school_of_Beijing =  document.getElementById('school_of_Beijing');
    school_of_Shanghai =  document.getElementById('school_of_Shanghai');
    school_of_Hunan =  document.getElementById('school_of_Hunan');

/** 为单选框注册事件处理程序 **/
identity.addEventListener('change', () => {
    if (identitySel[0].checked) {
        school.style.display = 'block';
        company.style.display = 'none';
    } else {
        school.style.display = 'none';
        company.style.display = 'block';
    }
}, false);

/** 为选择城市的下拉菜单注册事件处理程序 **/
city.addEventListener('change', () => {
    if (cityOpts[0].selected) {
        school_of_Beijing.style.display = 'inline-block';
        school_of_Shanghai.style.display = 'none';
        school_of_Hunan.style.display = 'none';
    } else if (cityOpts[1].selected) {
        school_of_Beijing.style.display = 'none';
        school_of_Shanghai.style.display = 'inline-block';
        school_of_Hunan.style.display = 'none';
    } else {
        school_of_Beijing.style.display = 'none';
        school_of_Shanghai.style.display = 'none';
        school_of_Hunan.style.display = 'inline-block';
    }
}, false);
