let _backHome = document.getElementById("BtnBackHome");
let _slctDay = document.getElementById("SlctDay");
let _slcMonth = document.getElementById("SlctMonth");
let _slcYear = document.getElementById("SlctYear");
let _inpName = document.getElementById("userName");
let _inpLstFNm = document.getElementById("userFirstLastName");
let _inpLstSNm = document.getElementById("userSecondLastName");
let _sendForm = document.getElementById("BtnSubmitFormRegister");
let _formUser = document.getElementById("FormRegisterUser");
let _tbodyUser = document.getElementById("TbodyUsers");
let _sortTable = document.getElementById("SlctSortings");

const _userRegister = [];

const addValueOptions = () => {
    //Days
    let _optionsDay = "";
    for(let i = 1; i <= 31; i++){
        _optionsDay += `<option value=${i}>${i}</option>`
        _slctDay.innerHTML = _optionsDay;
    }
    // Months
    const _monthsArray = [
        {month: "January", value: 01},
        {month: "February", value: 02},
        {month: "March", value: 03},
        {month: "April", value: 04},
        {month: "May", value: 05},
        {month: "June", value: 06},
        {month: "July", value: 07},
        {month: "August", value: 08},
        {month: "September", value: 09},
        {month: "October", value: 10},
        {month: "November", value: 11},
        {month: "December", value: 12}
    ];
    function _months  (_monthsArray) {
        let _optionsMonths = "";
        for(let months of _monthsArray){
            _optionsMonths += `<option value=${months.value}>${months.month}</option>`;
        }
        _slcMonth.innerHTML = _optionsMonths;
    }
    _months(_monthsArray);
    // Year
    let _optionsYear = "";
    for(let i = 1980; i <= 2000; i ++){
        _optionsYear += `<option value=${i}>${i}</option>`
        _slcYear.innerHTML = _optionsYear;
    }
}

const submitForm = () => {
    _sendForm.addEventListener("click" , function(e){
        e.preventDefault();
        let _nameData = _inpName.value;
        let _nameLstFData = _inpLstFNm.value;
        let _nameLstSData = _inpLstSNm.value;
        let _dayData = _slctDay.value;
        let _monthData = _slcMonth.value;
        let _yearData = _slcYear.value;
        let _nameUser = _nameData;
        let _lastNameUser = _nameLstFData+" "+_nameLstSData;
        let _birthdayUser = _dayData+"/"+_monthData+"/"+_yearData;
        let _id = Math.floor(Math.random() * 1001);
        const _dataUser = {
            _dataName: "",
            _dataLastName: "",
            _dataBirhtDay: "",
            _dataId: "",
        }
        if(_nameData == "" || _nameLstFData == "" || _nameLstSData == "" || _dayData == "" || _monthData == "" || _yearData == "")
        {
            alert("campo vacio");
        }
        else
        {
            _dataUser._dataName = _nameUser.toUpperCase();
            _dataUser._dataLastName = _lastNameUser.toUpperCase();
            _dataUser._dataBirhtDay = _birthdayUser;
            _dataUser._dataId = _id;
            _userRegister.push(_dataUser);
            console.table(
                _userRegister
            )
            _formUser.reset();
            alert("registrado!");
        }
        TableUser(_userRegister);
        const _userSortData = _userRegister.sort((_data1, _data2) => {
            return(_data1._dataName < _data2._dataName) ? -1 : 1
        });
    })
}

const SortingTable = () => {
    _sortTable.addEventListener("change" , function _sortDataTable(){
        let _valueSort = _sortTable.value;
        if( _valueSort == 1 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                return(_data1._dataName < _data2._dataName) ? -1 : 1
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 2 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                return(_data1._dataLastName < _data2._dataLastName) ? -1 : 1
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 3 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                if(_data1._dataBirhtDay < _data2._dataBirhtDay){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUser(_userRegister);
        }
        if( _valueSort == 4 ){
            const _userSortData = _userRegister.sort((_data1, _data2) => {
                if(_data1._dataId < _data2._dataId){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            TableUser(_userRegister);
        }
        console.table(
            _userRegister
        )
    })
}

const TableUser = (_userRegister) => {
    let _bodyTable = "";
    for(let users of _userRegister) {
        _bodyTable += `
        <tr class="TrbodyUser">
            <td class="TdbodyUser">${users._dataName+" "+users._dataLastName}</td>
            <td class="TdbodyUser">${users._dataBirhtDay}</td>
            <td class="TdbodyUser">${users._dataId}</td>
        </tr>`;
    }
    _tbodyUser.innerHTML = _bodyTable;
}

const BackHome = () => {
    _backHome.addEventListener("click" , function(){
        window.open("index.html" , "_self");
    })
}

window.onload = () => {
    addValueOptions();
    submitForm();
    SortingTable();
    BackHome();
    TableUser(_userRegister);
}